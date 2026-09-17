import { ServiceItem, DoctorPlaceholder, FaqItem, HealthArticle } from '../types';

export const siteConfig = {
  name: "DIMMA HOSPITAL & MATERNITY",
  shortName: "DIMMA Hospital",
  tagline: "GOD'S CHANNEL IN SAVING LIVES",
  cac: "RC: 9203731",
  phone: "08064689371",
  phoneFormatted: "+234 806 468 9371",
  phoneTel: "tel:+2348064689371",
  email: "dimmahospital@gmail.com",
  emailMailto: "mailto:dimmahospital@gmail.com",
  address: {
    street: "11 Wokemba Street",
    estate: "Federal Housing, Trans-Ekulu",
    city: "Enugu",
    state: "Enugu State",
    country: "Nigeria",
    full: "11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu, Nigeria"
  },
  openingHours: {
    general: "Opening Hours – To be confirmed by hospital management",
    emergency: "Emergency & Maternity Care Available 24/7",
    outpatient: "Outpatient Clinic – Scheduled days and walk-in consultation"
  },
  meta: {
    heroTitle: "Compassionate Care. Trusted Healthcare. Healthier Families.",
    heroSubtitle: "A dedicated healthcare facility in Trans-Ekulu, Enugu, providing comprehensive clinical care, safe maternity and antenatal services, child wellness, and emergency medical support for you and your loved ones.",
  }
};

export const hospitalServices: ServiceItem[] = [
  {
    id: "maternity-services",
    title: "Maternity Services",
    shortDesc: "Complete maternal care pathways from early conception through delivery and comprehensive postpartum care.",
    fullDesc: "Our maternity wing is dedicated to providing compassionate, reassuring, and clinically attentive maternal care. Every expectant mother receives personalized clinical monitoring, safe delivery support, and devoted attention from experienced maternity healthcare practitioners.",
    category: "maternity",
    icon: "Baby",
    highlights: ["Safe Labor & Delivery Support", "Comfortable Maternity Ward", "Newborn Resuscitation & Care"],
    features: [
      "24/7 maternal admission support",
      "Skilled midwife and obstetrician coverage",
      "Individualized birthing plans and pain management guidance",
      "Immediate skin-to-skin and breastfeeding initiation"
    ]
  },
  {
    id: "antenatal-care",
    title: "Antenatal Care (ANC)",
    shortDesc: "Routine prenatal checks, foetal development monitoring, and mother-wellness guidance.",
    fullDesc: "Regular antenatal consultations ensure maternal health and steady foetal growth. We provide routine vital checks, ultrasound scan scheduling, dietary counseling, maternal vaccinations, and early screening for pregnancy-related conditions.",
    category: "maternity",
    icon: "HeartPulse",
    highlights: ["Routine ANC Clinics", "Foetal Heartbeat & Growth Checks", "Nutritional & Wellness Counseling"],
    features: [
      "Structured trimester visit schedules",
      "Blood pressure and blood sugar monitoring",
      "Tetanus toxoid and malaria prophylaxis protocols",
      "Birth preparedness and complication readiness education"
    ]
  },
  {
    id: "postnatal-care",
    title: "Postnatal Care (PNC)",
    shortDesc: "Post-delivery recovery monitoring, pelvic health, infant check-ups, and maternal counseling.",
    fullDesc: "Maternal recovery is as crucial as delivery. Our postnatal care program supports mothers through postpartum physical healing, emotional health, infant vaccination schedules, and infant nutritional support.",
    category: "maternity",
    icon: "Sparkles",
    highlights: ["Post-Delivery Healing Checks", "Infant Growth Tracking", "Lactation Support"],
    features: [
      "Comprehensive 6-week postnatal checkups",
      "Wound care and perineal healing management",
      "Postpartum emotional wellbeing checks",
      "Exclusive breastfeeding and infant feeding support"
    ]
  },
  {
    id: "general-medical-care",
    title: "General Medical Care",
    shortDesc: "Comprehensive primary healthcare, clinical diagnosis, chronic condition management, and outpatient treatment.",
    fullDesc: "Our outpatient and inpatient primary care department handles everyday illnesses, infection management, fever investigations, hypertension management, and full health consultations for adults, seniors, and teenagers.",
    category: "general",
    icon: "Stethoscope",
    highlights: ["Primary Consultation", "Infectious Disease Care", "Hypertension & Diabetes Care"],
    features: [
      "Prompt physician consultations",
      "Individualized care plans and medication reviews",
      "Chronic disease monitoring and lifestyle advice",
      "Referral coordination where specialized tertiary care is needed"
    ]
  },
  {
    id: "child-family-healthcare",
    title: "Child & Family Healthcare",
    shortDesc: "Pediatric care, immunization guidance, developmental assessments, and holistic family health.",
    fullDesc: "Caring for your little ones with gentle hands. We provide routine child wellness checks, fever and pediatric illness management, growth tracking, and preventative immunization counseling for infants and young children.",
    category: "general",
    icon: "ShieldPlus",
    highlights: ["Pediatric Consultations", "Immunization Counseling", "Child Growth & Nutrition"],
    features: [
      "Child-friendly clinical atmosphere",
      "Management of childhood respiratory and gastrointestinal illnesses",
      "Routine developmental milestone tracking",
      "Preventive child wellness checkups"
    ]
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    shortDesc: "Immediate medical stabilization, acute trauma support, and rapid clinical triage.",
    fullDesc: "Equipped to handle urgent clinical presentations, sudden acute illnesses, severe fevers, obstetric emergencies, and trauma stabilization with immediate nursing and medical attention.",
    category: "emergency",
    icon: "Ambulance",
    highlights: ["Rapid Clinical Triage", "Emergency Stabilization", "Direct Line: 08064689371"],
    features: [
      "Immediate triage upon arrival",
      "Oxygen support and vital stabilization",
      "Emergency IV fluid and pharmacological therapy",
      "Seamless inpatient admission or emergency maternity transfer"
    ]
  },
  {
    id: "laboratory-services",
    title: "Laboratory Services",
    shortDesc: "Fast and reliable clinical testing, hematology, urinalysis, blood chemistry, and maternal panels.",
    fullDesc: "Our on-site diagnostic laboratory provides quick, accurate clinical investigations essential for reliable diagnosis, treatment monitoring, antenatal blood profiling, and infection screening.",
    category: "diagnostics",
    icon: "FlaskConical",
    highlights: ["Rapid Test Turnaround", "Antenatal Blood Panels", "Infection & Malaria Screening"],
    features: [
      "Full Blood Count (FBC) and Packed Cell Volume (PCV)",
      "Urinalysis and stool microscopy",
      "Genotype, blood grouping, and cross-matching",
      "Pregnancy tests, Hepatitis, and retroviral screening"
    ]
  },
  {
    id: "pharmacy-services",
    title: "Pharmacy Services",
    shortDesc: "Quality-assured medications, maternal supplements, pediatric formulations, and pharmacist counseling.",
    fullDesc: "Our hospital dispensary stocks genuine, properly stored pharmaceuticals, maternal supplements, prenatal vitamins, antibiotics, and pediatric medications, backed by clear dosage guidance.",
    category: "diagnostics",
    icon: "Pill",
    highlights: ["100% Genuine Medications", "Prenatal Vitamins & Iron", "Prescription Counseling"],
    features: [
      "Strict quality control and direct sourcing",
      "Counseling on medication adherence and food interactions",
      "Essential maternal and pediatric formulations readily available",
      "Safe prescription dispensation"
    ]
  },
  {
    id: "diagnostic-services",
    title: "Diagnostic Services",
    shortDesc: "Routine medical diagnostics, vital signs telemetry, and ultrasound scan coordination.",
    fullDesc: "Comprehensive clinical diagnostic investigations that give your physician precise insight into your physical health status, organ functions, and maternal progress.",
    category: "diagnostics",
    icon: "Activity",
    highlights: ["Vital Signs Profiling", "Blood Sugar & Lipid Checks", "Clinical Assessments"],
    features: [
      "Digital blood pressure and pulse oximetry checks",
      "Blood glucose monitoring and random/fasting profiling",
      "Obstetric and pelvic scan scheduling",
      "Pre-employment and general wellness physical checkups"
    ]
  },
  {
    id: "preventive-healthcare",
    title: "Preventive Healthcare & Checkups",
    shortDesc: "Routine wellness screenings, health education, blood pressure monitoring, and lifestyle guidance.",
    fullDesc: "Prevention remains the cornerstone of long-term vitality. We conduct routine wellness screenings, early detection checkups, and lifestyle health coaching tailored to every age group.",
    category: "general",
    icon: "HeartHandshake",
    highlights: ["Wellness Screening Packages", "Early Disease Detection", "Diet & Lifestyle Coaching"],
    features: [
      "Annual health audit consultations",
      "Cardiovascular risk factor screening",
      "Maternal nutrition and postpartum weight recovery guidance",
      "Community health education"
    ]
  },
  {
    id: "minor-procedures",
    title: "Minor Procedures & Wound Care",
    shortDesc: "Minor surgical interventions, sterile wound dressing, suturing, and incision & drainage.",
    fullDesc: "Conducted under sterile conditions using appropriate local anesthesia, including laceration repair, dressing of burns or chronic ulcers, minor excisions, and catheterization.",
    category: "general",
    icon: "Syringe",
    highlights: ["Sterile Minor Theater", "Laceration Suturing", "Post-Op Wound Care"],
    features: [
      "Hygienic and pain-managed minor procedures",
      "Aseptic dressing changes for surgical and trauma wounds",
      "Foreign body removal and minor incision drainage",
      "Rapid post-procedure observation and discharge"
    ]
  },
  {
    id: "health-consultation",
    title: "Health Consultation & Second Opinions",
    shortDesc: "Confidential, one-on-one medical consultations to discuss symptoms, reports, and treatment options.",
    fullDesc: "Have your health concerns addressed with empathy and thoroughness. Discuss previous test results, explore conservative treatment approaches, and gain clear clarity on your health choices.",
    category: "general",
    icon: "ClipboardCheck",
    highlights: ["Unhurried Consultations", "Clear Explanations", "Personalized Treatment Plans"],
    features: [
      "Private and confidential physician consultation rooms",
      "Detailed review of patient medical histories",
      "Clear, jargon-free explanations of diagnoses and care pathways",
      "Scheduled follow-up reviews"
    ]
  }
];

export const medicalTeamPlaceholders: DoctorPlaceholder[] = [
  {
    id: "doc-1",
    role: "Medical Director / Chief Consultant",
    department: "Clinical Leadership & Administration",
    description: "Leads the hospital's clinical direction, quality assurance protocols, and overall patient care standards. [Replace with Medical Director's verified name, qualifications, and profile].",
    availability: "Consultation by appointment & Clinical rounds",
    isPlaceholder: true
  },
  {
    id: "doc-2",
    role: "Consultant Obstetrician & Gynaecologist",
    department: "Obstetrics & Maternal-Foetal Medicine",
    description: "Specializes in high-risk and routine pregnancy monitoring, safe surgical and spontaneous deliveries, and women's reproductive health. [Replace with Consultant's verified profile].",
    availability: "Maternity Clinic Days & On-Call Emergency",
    isPlaceholder: true
  },
  {
    id: "doc-3",
    role: "Consultant / Resident Physician",
    department: "Internal Medicine & General Practice",
    description: "Provides comprehensive clinical consultations for adult medicine, hypertension, diabetes management, and acute illnesses. [Replace with Physician's verified profile].",
    availability: "Daily Outpatient Clinics",
    isPlaceholder: true
  },
  {
    id: "doc-4",
    role: "Paediatric Healthcare Specialist",
    department: "Child Health & Neonatology",
    description: "Oversees neonatal assessments, infant wellness checkups, childhood immunization programs, and pediatric consultations. [Replace with Specialist's verified profile].",
    availability: "Scheduled Pediatric Clinics & Emergency Coverage",
    isPlaceholder: true
  },
  {
    id: "doc-5",
    role: "Head of Nursing & Midwifery Services",
    department: "Nursing & Maternal Care Unit",
    description: "Directs the 24/7 nursing team, labour ward delivery support, antenatal education, and patient bedside care with compassionate attentiveness. [Replace with Matron's verified profile].",
    availability: "24/7 Nursing Supervision",
    isPlaceholder: true
  },
  {
    id: "doc-6",
    role: "Chief Pharmacist & Diagnostic Officer",
    department: "Pharmacy & Laboratory Diagnostics",
    description: "Oversees pharmaceutical dispensation, quality assurance of medical consumables, and timely diagnostic laboratory analyses. [Replace with Officer's verified profile].",
    availability: "Daily Hospital Hours",
    isPlaceholder: true
  }
];

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    question: "What services does DIMMA Hospital & Maternity provide?",
    answer: "DIMMA Hospital & Maternity provides comprehensive general medical care, specialized maternity and delivery services, routine antenatal and postnatal care, child and family healthcare, emergency triage, diagnostic laboratory investigations, pharmacy dispensary, and preventive wellness consultations in Enugu.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "Where is the hospital located in Enugu?",
    answer: "We are conveniently located at 11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu, Nigeria. The hospital is easily accessible within the Trans-Ekulu neighborhood and surrounding areas.",
    category: "general"
  },
  {
    id: "faq-3",
    question: "How can I book an appointment with a doctor?",
    answer: "You can easily request an appointment online through our website's 'Book Appointment' page, or directly call our telephone line at 08064689371. Our reception desk will confirm your appointment time and department.",
    category: "appointments"
  },
  {
    id: "faq-4",
    question: "Do I need an appointment, or can I walk in for consultation?",
    answer: "Both walk-ins and scheduled appointments are welcome. While scheduled appointments minimize wait times for routine consultations, acute medical conditions and maternity emergencies are attended to immediately upon arrival.",
    category: "appointments"
  },
  {
    id: "faq-5",
    question: "How do I register for Antenatal Care (ANC) at DIMMA?",
    answer: "Expectant mothers can register for Antenatal Care by visiting the hospital during clinic hours or requesting an initial maternity consultation online. During your first visit, a nurse will set up your maternal folder, record initial vitals, and outline your routine ANC appointment calendar.",
    category: "maternity"
  },
  {
    id: "faq-6",
    question: "What should I bring for my first antenatal visit?",
    answer: "Please bring a valid identification, any prior ultrasound scans or medical test results from this or previous pregnancies, a list of any current medications you are taking, and a notebook for personal questions you wish to ask your healthcare provider.",
    category: "maternity"
  },
  {
    id: "faq-7",
    question: "Is emergency maternity care available at night and on weekends?",
    answer: "Yes. Our maternity and emergency team is prepared to receive expectant mothers in labor or individuals requiring urgent medical stabilization at any time of day or night. You can contact our emergency desk at 08064689371 before arrival if possible.",
    category: "emergency"
  },
  {
    id: "faq-8",
    question: "What are the payment options and HMO accepted?",
    answer: "Payment options include direct bank transfer and point-of-sale (POS) terminal. For HMO (Health Maintenance Organization) coverage and corporate arrangements, please confirm specific provider partnerships with the hospital administration desk.",
    category: "general"
  }
];

export const healthArticlesList: HealthArticle[] = [
  {
    id: "art-1",
    slug: "preparing-for-your-first-antenatal-visit",
    title: "Preparing for Your First Antenatal Visit: A Practical Guide for Expectant Mothers",
    summary: "Discover what to expect during your initial prenatal appointment, what questions to ask, and how early antenatal care safeguards mother and baby.",
    category: "Maternity & Prenatal",
    readTime: "4 min read",
    date: "September 2026",
    author: "DIMMA Health Education Team",
    keyTakeaways: [
      "Early antenatal registration (ideally within the first trimester) provides vital baseline health indicators.",
      "Bring along details of prior medical histories, allergies, and previous pregnancies.",
      "Never hesitate to write down and discuss all personal concerns with your midwife or physician."
    ],
    content: [
      "Beginning the journey of motherhood is an extraordinary milestone. Your first antenatal visit, often called your booking appointment, sets the medical and emotional foundation for a healthy pregnancy.",
      "During this visit, your healthcare team takes comprehensive baseline vitals including blood pressure, weight, and blood group profiling. Routine screenings help identify conditions like anaemia, gestational blood sugar elevation, or infections early, allowing proactive management.",
      "It is also the ideal time to receive guidance on safe nutrition, folic acid and iron supplementation, and daily physical habits. Establishing a comfortable rapport with your maternity caregivers empowers you with confidence throughout the trimesters."
    ]
  },
  {
    id: "art-2",
    slug: "healthy-pregnancy-essential-guidance",
    title: "Healthy Pregnancy: Important Things Every Mother Should Know",
    summary: "Essential advice on maternal nutrition, hydration, safe exercise, and recognizing critical milestones during each trimester.",
    category: "Maternal Wellness",
    readTime: "5 min read",
    date: "September 2026",
    author: "DIMMA Health Education Team",
    keyTakeaways: [
      "Nutrient-dense foods, adequate protein, leafy greens, and sufficient clean water intake support foetal organ development.",
      "Avoid unprescribed medications, herbal concoctions, and tobacco exposure.",
      "Consistent rest and moderate daily physical movement promote optimal circulation and maternal stamina."
    ],
    content: [
      "Maintaining good maternal health throughout pregnancy is one of the greatest gifts you can offer your developing baby. Proper nutrition plays an essential role: your body requires additional iron for healthy red blood cells, calcium for foetal bone formation, and folate for neural tube development.",
      "Hydration is equally essential, helping to maintain amniotic fluid volume and reducing the likelihood of urinary tract discomforts. Expectant mothers should aim for consistent fluid intake throughout the day.",
      "Equally important is knowing your body's limits. Regular gentle movement such as walking promotes cardiovascular resilience, while adequate night-time rest and daytime pauses help mitigate physical fatigue."
    ]
  },
  {
    id: "art-3",
    slug: "newborn-care-basics-for-new-parents",
    title: "Newborn Care Basics for New Parents: The First 30 Days",
    summary: "Practical, reassuring tips for umbilical cord care, breastfeeding frequency, safe sleep positions, and recognizing normal newborn behaviors.",
    category: "Pediatric & Newborn",
    readTime: "4 min read",
    date: "September 2026",
    author: "DIMMA Health Education Team",
    keyTakeaways: [
      "Keep the umbilical stump clean and dry according to modern healthcare guidelines.",
      "Feed on demand; newborns typically nurse every 2 to 3 hours in the initial weeks.",
      "Always place babies on their back on a firm, clutter-free surface for sleep."
    ],
    content: [
      "Welcoming a newborn brings immense joy and numerous questions for new parents. Understanding normal infant patterns during the first month helps alleviate anxiety and ensures timely care.",
      "Umbilical cord hygiene is a priority: modern clinical standards emphasize keeping the stump clean and dry, avoiding traditional unsterile applications that could introduce infection.",
      "Feeding cues such as root movements, hand-to-mouth motions, and gentle fussing indicate hunger before crying starts. Frequent skin-to-skin contact also aids temperature regulation and strengthens emotional bonding between parents and child."
    ]
  },
  {
    id: "art-4",
    slug: "when-to-seek-immediate-medical-attention-pregnancy",
    title: "When Should You Seek Immediate Medical Attention During Pregnancy?",
    summary: "Recognizing red-flag pregnancy symptoms that require prompt hospital evaluation rather than waiting for your next routine clinic.",
    category: "Emergency & Safety",
    readTime: "4 min read",
    date: "September 2026",
    author: "DIMMA Health Education Team",
    keyTakeaways: [
      "Vaginal bleeding or sudden fluid leakage requires prompt hospital assessment.",
      "Severe persistent headache, vision changes, or sudden upper abdominal pain warrants immediate blood pressure evaluation.",
      "A noticeable reduction in baby's regular movement pattern in late pregnancy should never be ignored."
    ],
    content: [
      "While most pregnancies proceed smoothly, knowing when to seek prompt medical attention provides essential safety for both mother and child. Certain symptoms should never be put on hold until your next routine visit.",
      "Warning signs include any bright red vaginal bleeding, sudden gush or steady trickling of fluid before labor, intense or unrelenting headaches accompanied by blurred vision or dizziness, and sudden severe swelling in the hands and face.",
      "Furthermore, after the 24th to 28th week, monitoring your baby's daily movement pattern is recommended. If you detect a significant decrease or absence of movement, contact or visit the hospital emergency line (08064689371) immediately for a clinical assessment."
    ]
  }
];

