// ==============================================================================
// DIMMA HOSPITAL & MATERNITY - SECURE SERVERLESS AI CARE PROXY (api/chat.js)
// 
// Protects the Google Gemini API key on the backend (100% hidden from users).
// Deployed automatically on Vercel or Netlify Serverless Functions.
// ==============================================================================

const SYSTEM_INSTRUCTION = `
You are Sister Ada, the warm, caring, and respectful virtual care coordinator and nurse guide at DIMMA Hospital & Maternity in Enugu, Nigeria.

HOSPITAL IDENTITY & VERIFIED DETAILS:
- Hospital Name: DIMMA HOSPITAL & MATERNITY
- Motto: "GOD'S CHANNEL IN SAVING LIVES"
- CAC Registration: RC: 9203731
- Physical Address: 11 Wokemba Street, Federal Housing Estate, Trans-Ekulu, Enugu, Nigeria.
- 24/7 Emergency & Front Desk Phone: 08064689371
- Official Email: dimmahospital@gmail.com
- Visiting Hours: Morning 11:00 AM – 1:00 PM | Evening 4:00 PM – 6:00 PM (Emergency & Maternity: Open 24/7)
- Payment Methods: Debit Cards (POS), Direct Bank Transfer, Cash.

ESSENTIAL RULES & CLINICAL SAFETY:
1. PERSONA & WARMTH: Always chat warmly, politely, and empathetically like a real human nurse/friend talking to a patient. If the user introduces themselves (e.g. "My name is Peter"), always acknowledge and greet them by name warmly (e.g., "Hello Peter! It's so lovely to meet you! 😊").
2. MEDICAL SAFETY & NO DIAGNOSIS: Never give a definitive medical diagnosis or prescribe prescription drugs. You may offer safe, comforting first-aid tips (such as drinking water, resting in a cool room, or gentle hydration), but always kindly advise the user: "Please consult a doctor at DIMMA Hospital for a proper clinical checkup."
3. EMERGENCY RED FLAGS: If the user mentions bright red vaginal bleeding, fluid leakage, fainting, convulsion, severe chest pain, inability to breathe, or absence of fetal kicks, respond with calm urgency: tell them to come immediately to 11 Wokemba Street, Trans-Ekulu, Enugu, and call our 24/7 Emergency Desk right away at 08064689371.
4. MATERNITY & ANTENATAL CARE: Celebrate pregnancies warmly! Explain that DIMMA provides early ANC registration, ultrasound scans, routine blood tests (PCV, Genotype, Rhesus), 24/7 birthing suites, and postpartum care.
5. NO HALLUCINATIONS: Never invent doctor names or specific surgical prices. Refer specific pricing to our front desk at 08064689371.
6. OUT OF SCOPE: If asked questions outside of health, pregnancy, wellness, or hospital services, politely and gently steer the conversation back to their health and how DIMMA can assist them.
7. TONE: Concise, encouraging, respectful, and easy to read on mobile devices.
`;

export default async function handler(req, res) {
  // CORS & Method Check
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { message, userName, history } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'A valid message string is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        fallback: true,
        message: 'GEMINI_API_KEY environment variable is not configured on the server. Falling back to built-in care engine.'
      });
    }

    // Format chat history for Gemini API
    const contents = [];

    // Append recent message history (up to last 6 turns)
    if (Array.isArray(history) && history.length > 0) {
      history.slice(-6).forEach(msg => {
        if (msg.sender === 'user') {
          contents.push({ role: 'user', parts: [{ text: msg.text }] });
        } else if (msg.sender === 'bot') {
          contents.push({ role: 'model', parts: [{ text: msg.text }] });
        }
      });
    }

    // Append current user message
    const userPrompt = userName ? `[User Name: ${userName}]: ${message}` : message;
    contents.push({ role: 'user', parts: [{ text: userPrompt }] });

    // Call Google Gemini API (gemini-1.5-flash)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
          topP: 0.95
        }
      })
    });

    if (!geminiResponse.ok) {
      const errText = await geminiResponse.text();
      console.error('Gemini API Error:', geminiResponse.status, errText);
      return res.status(200).json({
        fallback: true,
        error: `Gemini API returned status ${geminiResponse.status}`
      });
    }

    const data = await geminiResponse.json();
    const candidate = data.candidates && data.candidates[0];
    const botReply = candidate?.content?.parts?.[0]?.text;

    if (!botReply) {
      return res.status(200).json({
        fallback: true,
        message: 'No response text received from Gemini.'
      });
    }

    // Check if reply involves emergency red flags to attach emergency action
    const lowerReply = botReply.toLowerCase();
    const lowerMsg = message.toLowerCase();
    const isEmergency = lowerMsg.includes('bleeding') || lowerMsg.includes('convulsion') || lowerMsg.includes('water break') || lowerMsg.includes('fainted') || lowerMsg.includes('emergency');

    let action = null;
    if (isEmergency) {
      action = { label: '📞 Call Emergency Line: 08064689371', href: 'tel:+2348064689371' };
    } else if (lowerReply.includes('appointment') || lowerMsg.includes('book') || lowerMsg.includes('see doctor')) {
      action = { label: '📅 Book an Appointment', target: 'appointment' };
    } else if (lowerMsg.includes('maternity') || lowerMsg.includes('antenatal')) {
      action = { label: '🤰 Maternity & Antenatal Info', target: 'maternity' };
    }

    return res.status(200).json({
      success: true,
      text: botReply,
      type: isEmergency ? 'emergency' : 'friendly',
      action: action
    });

  } catch (error) {
    console.error('Secure Chat Handler Error:', error);
    return res.status(200).json({
      fallback: true,
      error: error.message || 'Internal server error'
    });
  }
}
