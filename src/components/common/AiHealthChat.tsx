import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ThemeToggle } from './ThemeToggle';
import {
  MessageSquare,
  Send,
  X,
  Bot,
  User,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  ShieldCheck,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  text: string;
  timestamp: number;
}

interface AiHealthChatProps {
  onClose?: () => void;
}

const SYSTEM_HINTS = [
  'I have mild fever and body pain, what should I do?',
  'How often should a pregnant woman attend antenatal clinic?',
  'What are warning signs during pregnancy that require emergency care?',
  'Is it safe to breastfeed if I have a cold?',
  'My child has a persistent cough, when should I see a doctor?',
];

const QUICK_ACTIONS = [
  { label: 'Fever / Pain', text: 'I have fever and pain. What should I do and when should I visit the hospital?' },
  { label: 'Pregnancy', text: 'What should I expect at an antenatal visit and what warning signs should I watch for?' },
  { label: 'Child Health', text: 'My child is coughing and running a temperature. When do I need medical attention?' },
  { label: 'Maternity', text: 'Am I in labour, and what should I do before going to the hospital?' },
];

const AI_RESPONSE_CACHE: Record<string, string> = {
  welcome: `Hello, I'm DIMMA Health Assistant. I can help answer general health, maternity, antenatal, newborn, and wellness questions using the information available on this hospital portal.

Please remember:
- I am a general health assistant, not your doctor.
- For urgent symptoms, pregnancy emergencies, or active labour, call the emergency line or visit the hospital immediately.
- For personal diagnosis or treatment, consult your clinician.

How can I help you today?`,
};

function sanitizeText(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br />');
}

function buildAiReply(userMessage: string, allMessages: ChatMessage[]): string {
  const normalized = userMessage.trim().toLowerCase();

  if (!userMessage.trim()) {
    return AI_RESPONSE_CACHE.welcome;
  }

  if (normalized.includes('hello') || normalized.includes('hi ') || normalized === 'hi' || normalized.includes('good morning') || normalized.includes('good evening')) {
    return `Hello again. I'm here to help with general health, maternity, and wellness questions.

If you are unsure where to start, tell me your main symptom or concern, and I'll guide you to the right kind of care.` + '<br /><br />' + 'Need quick help? Try a suggestion above.';
  }

  if (normalized.includes('emergency') || normalized.includes('emergencies') || normalized.includes('urgent') || normalized.includes('danger') || normalized.includes('can\'t breathe') || normalized.includes('difficulty breathing') || normalized.includes('breathing difficulty') || normalized.includes('unconscious') || normalized.includes('fainting') || normalized.includes('loss of consciousness')) {
    return `<strong>If you believe this may be a medical emergency, do not wait for an online reply.</strong>

Call the DIMMA emergency line or proceed to the hospital immediately:
<ul>
  <li>Emergency line: <strong>08064689371</strong></li>
  <li>Location: 11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu</li>
  <li>Emergency and maternity care are available 24/7</li>
</ul>

For severe bleeding, collapse, breathing difficulty, severe chest pain, seizure, severe abdominal pain, or sudden weakness on one side of the body, seek emergency care now.` + '<br /><br />' + 'I am a general health assistant, not a replacement for emergency medical services.';
  }

  if (
    normalized.includes('pregnant') || normalized.includes('pregnancy') || normalized.includes('antenatal') ||
    normalized.includes('antenatal') || normalized.includes('labour') || normalized.includes('labor') ||
    normalized.includes('baby') || normalized.includes('newborn') || normalized.includes('nursing') || normalized.includes('breastfeed')
  ) {
    return `I'm glad you asked. Here are some general points that may help:

<ul>
  <li><strong>Antenatal care:</strong> Regular antenatal visits help monitor mother and baby. DIMMA Hospital provides Antenatal Care (ANC), Maternity Services, Labour and Safe Delivery support, and Postnatal Care.</li>
  <li><strong>Warning signs in pregnancy:</strong> Any vaginal bleeding, fluid leakage, severe persistent headache, vision changes, severe abdominal pain, high fever, or a noticeable decrease in baby's movement in later pregnancy should be assessed by a clinician promptly.</li>
  <li><strong>Labour concerns:</strong> If you suspect you are in labour, or if you have frequent strong contractions, water breaking, or bleeding, contact the maternity desk or visit the hospital as advised by your clinician.</li>
  <li><strong>Breastfeeding and newborn care:</strong> Clean, dry cord care, feeding on demand, safe back-sleeping for infants, and routine immunisation reviews are important in the early weeks.</li>
</ul>

For advice specific to your pregnancy or baby, book an appointment or speak to the maternity team at DIMMA Hospital & Maternity.` + '<br /><br />' + 'If symptoms feel severe or you are worried, it is safer to call the hospital on 08064689371.';
  }

  if (normalized.includes('fever') || normalized.includes('body pain') || normalized.includes('body ache') || normalized.includes('headache') || normalized.includes('malaria') || normalized.includes('typhoid') || normalized.includes('sore throat') || normalized.includes('cough') || normalized.includes('cold') || normalized.includes('flu') || normalized.includes('running nose') || normalized.includes('nasal congestion') || normalized.includes('catarrh')) {
    return `General guidance for common febrile and respiratory complaints:

<ul>
  <li>Rest, stay hydrated, and monitor your temperature and symptoms.</li>
  <li>If you have fever with chills, persistent high temperature, severe headache, neck stiffness, confusion, chest pain, or breathing difficulty, seek medical attention promptly.</li>
  <li>If your cough is severe, lasts more than a few days, or is accompanied by difficulty breathing, chest pain, or coughing up blood, it is important to be examined.</li>
  <li>DIMMA Hospital provides General Medical Care and pediatric consultations. For children with fever or cough, it is advisable to have them seen, especially if they are drinking poorly, unusually sleepy, or having trouble breathing.</li>
</ul>

This is general guidance only. A clinician can provide a proper diagnosis and treatment plan after examination.` + '<br /><br />' + 'If you are unsure, it is reasonable to book a consultation or call the hospital on 08064689371.';
  }

  if (normalized.includes('blood pressure') || normalized.includes('hypertension') || normalized.includes('sugar') || normalized.includes('diabetes') || normalized.includes('diabetic') || normalized.includes('bp ')) {
    return `For long-term conditions such as hypertension or diabetes:

<ul>
  <li>Take prescribed medications as directed. Do not stop or change medication without medical advice.</li>
  <li>Keep up with routine monitoring, follow-up reviews, and lifestyle measures recommended by your clinician.</li>
  <li>Seek prompt care if you notice severe headache, vision changes, chest pain, breathlessness, sudden swelling, very high readings, or other symptoms that concern you.</li>
</ul>

For ongoing management, book an appointment for General Medical Care or a follow-up review with DIMMA Hospital.` + '<br /><br />' + 'If you are unsure whether your readings or symptoms are safe, contact the hospital for guidance.';
  }

  if (normalized.includes('appointment') || normalized.includes('book') || normalized.includes('book an appointment') || normalized.includes('register') || normalized.includes('register for') || normalized.includes('enrol') || normalized.includes('enroll')) {
    return `To book an appointment or register for a service at DIMMA Hospital & Maternity:

<ul>
  <li>Use the <strong>Book Appointment</strong> page on this website to send an appointment request.</li>
  <li>You can also call the hospital on <strong>08064689371</strong>.</li>
  <li>For antenatal registration, visit the outpatient reception during clinic hours or request an initial maternity consultation online.</li>
</ul>

Appointment requests are subject to confirmation by the hospital front desk. For urgent or emergency concerns, do not rely on an online reply; contact the hospital directly.` + '<br /><br />' + 'If this is a maternity or medical emergency, call 08064689371 immediately.';
  }

  if (normalized.includes('location') || normalized.includes('where') || normalized.includes('address') || normalized.includes('find') || normalized.includes('directions') || normalized.includes('located')) {
    return `DIMMA Hospital & Maternity is located at:

<strong>11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu, Nigeria</strong>

You can call ahead on <strong>08064689371</strong> for directions if needed. The hospital provides maternal, child, general medical, laboratory, and pharmacy services in Trans-Ekulu, Enugu.` + '<br /><br />' + 'If you need care urgently, go to the hospital or call the emergency line.';
  }

  if (normalized.includes('hours') || normalized.includes('open') || normalized.includes('timing') || normalized.includes('time') || normalized.includes('working')) {
    return `For visiting and clinic times, the hospital notes:

<ul>
  <li><strong>Emergency & Maternity Care:</strong> Available 24/7</li>
  <li><strong>General outpatient details:</strong> To be confirmed by hospital management</li>
</ul>

If you are unsure when to come, call 08064689371 before visiting, especially for maternity or urgent concerns.` + '<br /><br />' + 'For non-urgent questions, you can also use the FAQ page or book an appointment online.';
  }

  if (normalized.includes('hmo') || normalized.includes('insurance') || normalized.includes('payment') || normalized.includes('pos ') || normalized.includes('transfer') || normalized.includes('cash')) {
    return `Regarding payment and coverage:

<ul>
  <li>Accepted payment options may include direct bank transfer and POS terminal.</li>
  <li>For HMO coverage and corporate arrangements, it is best to confirm the current provider partnerships with the hospital administration desk.</li>
</ul>

If you want the most accurate and up-to-date information, contact the hospital on 08064689371 or visit the reception.` + '<br /><br />' + 'Please confirm any specific coverage with the hospital directly.';
  }

  if (normalized.includes('pharmacy') || normalized.includes('medicine') || normalized.includes('medication') || normalized.includes('drug') || normalized.includes('paracetamol') || normalized.includes('antibiotic')) {
    return `Regarding medication and pharmacy queries:

<ul>
  <li>DIMMA Hospital has a pharmacy dispensary with quality-assured medications, maternal supplements, and pediatric formulations, backed by pharmacist counseling.</li>
  <li>Do not self-medicate with antibiotics or prescription drugs without clinical advice.</li>
  <li>If you have a new or worsening symptom, especially fever, pain, or infection, it is safer to be examined first so the right treatment is chosen.</li>
</ul>

For medication advice related to your condition, book a consultation or speak with the pharmacy and clinical team at the hospital.` + '<br /><br />' + 'If you are not sure what you need, call 08064689371 for guidance.';
  }

  if (normalized.includes('lab') || normalized.includes('laboratory') || normalized.includes('test') || normalized.includes('scan') || normalized.includes('ultrasound') || normalized.includes('result') || normalized.includes('blood group') || normalized.includes('blood typing') || normalized.includes('genotype')) {
    return `DIMMA Hospital offers laboratory and diagnostic services, including:

<ul>
  <li>Rapid clinical testing and investigations</li>
  <li>Hematology, urinalysis, blood chemistry, and maternal panels</li>
  <li>Pregnancy tests, blood grouping, and screening tests</li>
  <li>Coordination of obstetric and pelvic scan scheduling</li>
</ul>

For the appropriate tests and scan timing, your clinician can advise you during consultation. If you need a test urgently or are following up on a result, book an appointment or contact the hospital.` + '<br /><br />' + 'If you have severe symptoms, do not wait for a routine appointment.';
  }

  if (normalized.includes('pain') || normalized.includes('ulcer') || normalized.includes('wound') || normalized.includes('sore') || normalized.includes('injury') || normalized.includes('cut') || normalized.includes('burn') || normalized.includes('injection') || normalized.includes('procedure')) {
    return `For pain, wounds, minor injuries, or minor procedures:

<ul>
  <li>Small cuts, minor wounds, and minor surgical needs may be handled by the hospital's minor procedures and wound care services under sterile conditions.</li>
  <li>If a wound is deep, bleeding heavily, infected, or not improving, it should be examined promptly.</li>
  <li>For burns, significant injuries, or severe pain, seek medical care without delay.</li>
</ul>

If you are uncertain, visit DIMMA Hospital for assessment.` + '<br /><br />' + 'For emergencies, call 08064689371.';
  }

  if (normalized.includes('diet') || normalized.includes('food') || normalized.includes('nutrition') || normalized.includes('meal') || normalized.includes('eat') || normalized.includes('drink') || normalized.includes('water') || normalized.includes('dehydration') || normalized.includes('vomiting') || normalized.includes('diarrhea') || normalized.includes('stool')) {
    return `Diet and hydration tips in general:

<ul>
  <li>For pregnancy and general wellness, a balanced diet with enough protein, leafy vegetables, fruits, and clean water is important.</li>
  <li>If you are vomiting, have diarrhea, or are unable to keep fluids down, watch for signs of dehydration such as tiredness, dry mouth, or reduced urination, and seek care if symptoms are severe or persistent.</li>
  <li>For personalized dietary advice, especially in pregnancy or with a medical condition, consult your clinician.</li>
</ul>

For maternal nutrition guidance and child wellness, DIMMA Hospital also offers health consultation and family healthcare services.` + '<br /><br />' + 'If symptoms are severe, do not wait.';
  }

  if (normalized.includes('mental') || normalized.includes('stress') || normalized.includes('anxiety') || normalized.includes('depressed') || normalized.includes('depression') || normalized.includes('mood') || normalized.includes('sleep') || normalized.includes('insomnia') || normalized.includes('emotional')) {
    return `Emotional wellbeing matters. Here are some general points:

<ul>
  <li>Feeling stressed, anxious, low, or unable to sleep can affect health and daily life.</li>
  <li>If these feelings are persistent, severe, or affecting your ability to care for yourself or your family, it is important to speak with a clinician.</li>
  <li>Postnatal emotional wellbeing is also part of maternity care, and support is available if you are struggling after delivery.</li>
</ul>

If you feel unsafe, or if you are having thoughts of harming yourself or someone else, seek urgent help from a trusted person and go to the nearest emergency care or call for assistance.` + '<br /><br />' + 'This is general support information, not a diagnosis.';
  }

  if (normalized.includes('who are you') || normalized.includes('what are you') || normalized.includes('your name') || normalized.includes('assistant') || normalized.includes('ai') || normalized.includes('chatbot') || normalized.includes('bot')) {
    return `I am the DIMMA Health Assistant, a general health and maternity information assistant for this hospital website.

I can help with:
<ul>
  <li>General health questions and symptom guidance</li>
  <li>Maternity, antenatal, newborn, and child health topics</li>
  <li>Hospital services, appointments, location, and payment questions</li>
  <li>When to seek urgent care based on general warning signs</li>
</ul>

I am not a substitute for your doctor. For personal diagnosis, treatment, or emergencies, speak with a clinician or call the hospital on 08064689371.` + '<br /><br />' + 'You can also use the quick prompts above to get started.';
  }

  if (normalized.includes('thank') || normalized.includes('thanks') || normalized.includes('appreciate') || normalized.includes('goodbye') || normalized.includes('bye')) {
    return `You're welcome. I'm glad I could help.

If you need anything else, feel free to ask. For personal medical care, book an appointment or contact DIMMA Hospital & Maternity on 08064689371.

Take care, and seek prompt help if your symptoms worsen or feel urgent.` + '<br /><br />' + 'Reminder: I am a general health assistant, not a doctor.';
  }

  const recentAiMessages = allMessages.filter((m) => m.role === 'ai').slice(-3);
  const previousKeywords: string[] = [];
  for (const msg of recentAiMessages) {
    const lower = msg.text.toLowerCase();
    if (lower.includes('pregnancy') || lower.includes('antenatal') || lower.includes('labour') || lower.includes('labour') || lower.includes('baby') || lower.includes('newborn')) {
      previousKeywords.push('pregnancy');
    } else if (lower.includes('fever') || lower.includes('pain') || lower.includes('headache') || lower.includes('malaria') || lower.includes('infection')) {
      previousKeywords.push('fever');
    } else if (lower.includes('hypertension') || lower.includes('diabetes') || lower.includes('blood pressure') || lower.includes('chronic')) {
      previousKeywords.push('chronic');
    } else if (lower.includes('child') || lower.includes('pediatric') || lower.includes('cough') || lower.includes('childhood')) {
      previousKeywords.push('child');
    }
  }

  if (previousKeywords.includes('pregnancy')) {
    return `It sounds like you may be talking about pregnancy or maternity care. I can give you general information about antenatal visits, common pregnancy symptoms, and when to seek care.

If you want, tell me more about your specific concern, and I'll try to point you in the right direction. For pregnancy emergencies or worrying symptoms, contact the maternity team at DIMMA Hospital or call 08064689371.` + '<br /><br />' + 'I am a general health assistant, not your obstetrician.';
  }

  if (previousKeywords.includes('fever') || previousKeywords.includes('chronic') || previousKeywords.includes('child')) {
    return `Thanks for the follow-up. Since you seem to be asking about ongoing symptoms, it is a good idea to have a clinician review them, especially if they are persistent, worsening, or affecting your daily activities.

For general medical care, maternal care, or child health concerns, DIMMA Hospital can help with consultation, testing, and follow-up. If the situation feels urgent, do not wait for a reply and seek immediate care.` + '<br /><br />' + 'I can also help with hospital services, appointments, and location if that would be useful.';
  }

  return `Thank you for your message. I can help with general health information, maternity and child health guidance, hospital services, appointments, and when to seek urgent care.

To give you the most useful answer, could you tell me a little more about:
<ul>
  <li>Your main symptom or concern</li>
  <li>Who it is affecting: you, your child, or a pregnancy</li>
  <li>How long it has been happening, if relevant</li>
</ul>

If you are dealing with a possible emergency, call the DIMMA emergency line on 08064689371 and seek care immediately.

I am a general health assistant, not a doctor.` + '<br /><br />' + 'Need a starting point? Use one of the quick prompts above.';
}

export const AiHealthChat: React.FC<AiHealthChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [disclaimerVisible, setDisclaimerVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (open && !messages.length) {
      setMessages([
        {
          id: 'ai-welcome',
          role: 'ai',
          text: AI_RESPONSE_CACHE.welcome,
          timestamp: Date.now(),
        },
      ]);
    }
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [open, messages.length]);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        text: trimmed,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setLoading(true);

      setTimeout(() => {
        const replyText = buildAiReply(trimmed, [...messages, userMsg]);
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            role: 'ai',
            text: replyText,
            timestamp: Date.now(),
          },
        ]);
        setLoading(false);
      }, 400);
    },
    [messages]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const quickAction = (text: string) => {
    setInput(text);
    sendMessage(text);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open]);

  return (
    <>
      {/* Persistent launcher (fixed bottom-right). Hides when chat is open. */}
      {!open && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
          <div className="flex flex-col items-end gap-2 pointer-events-auto">
            {/* Theme toggle pinned next to the AI launcher */}
            <ThemeToggle />
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-label="Open DIMMA health assistant chat"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white shadow-lg hover:shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs font-bold whitespace-nowrap">Ask DIMMA Health AI</span>
            </button>
          </div>
        </div>
      )}

      {/* Chat Card */}
      <div
        id="ai-health-chat"
        className={`fixed bottom-0 right-0 z-50 w-full sm:w-[420px] sm:max-w-[calc(100vw - 2rem)] h-[90dvh] sm:h-[min(75vh,680px)] flex flex-col shadow-2xl border border-slate-200 bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden transition-transform duration-200 sm:transition-none ${
          open ? 'translate-y-0' : 'translate-y-full'
        } ai-chat-card`}
        role="dialog"
        aria-modal="true"
        aria-label="DIMMA Health Assistant Chat"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">DIMMA Health Assistant</p>
              <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Generally available
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setDisclaimerVisible(true)}
              aria-label="Read health disclaimer and safety notice"
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              title="Health disclaimer"
            >
              <AlertTriangle className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close health assistant chat"
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer banner */}
        {disclaimerVisible && (
          <div className="shrink-0">
            <div className="mx-3 mb-2 flex items-start gap-2.5 overflow-x-auto">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-700 leading-relaxed space-y-1 text-[11px]">
                <p className="font-semibold">Not a substitute for medical care:</p>
                <p>
                  This assistant provides general health information based on common educational guidance and the hospital pages on this site. It is not a diagnosis or treatment plan.
                </p>
                <p>
                  If you have a medical emergency, active labour, severe bleeding, difficulty breathing, chest pain, severe headache, confusion, or any worrying symptom, call <strong>08064689371</strong> or go to the hospital immediately.
                </p>
                <p className="pt-1">
                  For personal medical advice, book a consultation with a clinician at DIMMA Hospital & Maternity.
                </p>
              </div>
            </div>
            <div className="mx-3 mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setDisclaimerVisible(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-2"
              >
                Hide notice
              </button>
            </div>
            <div className="mx-3 border-b border-slate-100" />
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-slate-50/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] text-sm leading-relaxed break-words ${
                  message.role === 'user'
                    ? 'order-1 flex justify-start'
                    : 'order-1'
                }`}
              >
                <div
                  className={`inline-block rounded-2xl px-3 py-2.5 text-sm shadow-sm ${
                    message.role === 'user'
                      ? 'bg-[#2563eb] text-white rounded-br-md'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-md'
                  }`}
                >
                  {message.role === 'ai' ? (
                    <div
                      className="prose prose-sm prose-slate max-w-none"
                      dangerouslySetInnerHTML={{ __html: sanitizeText(message.text) }}
                    />
                  ) : (
                    sanitizeText(message.text)
                  )}
                </div>
                <div
                  className={`mt-1 flex items-center gap-1.5 text-[10px] text-slate-400 ${
                    message.role === 'user' ? 'justify-end pl-2' : 'pr-2'
                  }`}
                >
                  {message.role === 'user' ? (
                    <>
                      <User className="w-3 h-3 shrink-0" />
                      <span>Just now</span>
                    </>
                  ) : (
                    <>
                      <span>Just now</span>
                      <Bot className="w-3 h-3 shrink-0" />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-3 py-2.5 shadow-sm max-w-[88%]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick suggestions */}
        <div className="shrink-0 border-t border-slate-200 bg-white px-3 py-2">
          <div className="flex flex-wrap gap-1.5">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={() => quickAction(action.text)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 text-[11px] font-medium hover:bg-slate-100 hover:border-slate-300 transition-colors focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <Lightbulb className="w-3 h-3 text-slate-400" />
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="shrink-0 border-t border-slate-200 p-3 bg-white">
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a health or maternity question..."
              rows={1}
              className="flex-1 min-h-[42px] max-h-[120px] resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="shrink-0 rounded-xl bg-brand-700 hover:bg-brand-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1.5 text-[10px] text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-slate-400" />
            General health assistant only. Not a substitute for professional medical care.
          </p>
        </div>
      </div>

      {/* Mobile safe area padding fix */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 h-4 bg-transparent pointer-events-none" />

      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
