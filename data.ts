
import { Article, Author, Category } from './types';

export const AUTHORS: Record<string, Author> = {
  'kallol': {
    id: 'kallol',
    name: 'Kallol Chakrabarti',
    role: 'Helix Originator & Independent Researcher',
    avatarUrl: 'https://ui-avatars.com/api/?name=KC&background=1a202c&color=fff',
    bio: 'Independent Researcher, Founder of Docu Helix. Recognized for over 150 original concepts including the Helix Doctrine and DPTAS. Ranked among the top independent researchers globally.'
  }
};

const getImg = (cat: Category, id: string) => {
  // Use deterministic hashing for random-looking but consistent images
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imgId = (hash % 10) + 1;
  
  const map: Record<Category, string[]> = {
    [Category.GOVERNANCE]: [
      'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541872703-74c5963631df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.TECHNOLOGY]: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.PHILOSOPHY]: [
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.SPIRITUALITY]: [
      'https://images.unsplash.com/photo-1518182170546-0766de6f6a56?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.HISTORY]: [
      'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524602237559-c83e07285085?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.SCIENCE]: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.ARTS]: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.BUSINESS]: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80'
    ],
    [Category.EDUCATION]: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    ]
  };
  
  const images = map[cat] || map[Category.ARTS];
  return images[hash % images.length];
};

const rawArticles = [
  {
    title: "Vedic Analytical Framework for Governance, Policing, and Education (VAFGPE)",
    summary: "A globally unprecedented policy architecture designed to address systemic challenges in public administration through the integration of ancient Indian wisdom with modern governance systems.",
    category: Category.GOVERNANCE,
    featured: true
  },
  {
    title: "Cultural Bias in Plagiarism Detection",
    summary: "Investigating how culturally embedded expressions are systematically misclassified by automated plagiarism detection systems, introducing the Cultural Embedding Quotient (CEQ).",
    category: Category.TECHNOLOGY
  },
  {
    title: "World-First AI System for Political Promise Tracking: DPTAS",
    summary: "The first comprehensive AI-powered system that shifts political accountability from periodic, election-based scrutiny to continuous, real-time tracking using blockchain and satellite data.",
    category: Category.TECHNOLOGY,
    featured: true
  },
  {
    title: "Unveiling the Power of Rhetoric: Analyzing Legal Language",
    summary: "Examining the landmark case Vishaka v. State of Rajasthan to highlight how rhetorical strategies in judgments shape legal discourse and societal norms.",
    category: Category.GOVERNANCE
  },
  {
    title: "SEPRS: Smart Encroachment Prevention and Rehabilitation System",
    summary: "A unified technological framework using biometric identity, AI mapping, and blockchain to prevent illegal land encroachment and ensure electoral integrity.",
    category: Category.GOVERNANCE
  },
  {
    title: "From Elite Capture to Citizen Empowerment",
    summary: "Analyzing India's post-2014 governance transformation through 'Aspirational Governance' and the 'People's Padma' initiative.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Dharmic Equity and Autonomy Act (DEAA)",
    summary: "A comprehensive legislative framework addressing systemic disparities affecting general category Hindu citizens through economic empowerment and institutional representation.",
    category: Category.GOVERNANCE
  },
  {
    title: "Transforming Law and Order: Criminal Justice Revolution in UP",
    summary: "A comprehensive analysis of Uttar Pradesh's criminal justice reforms (2017-2025), evaluating the effectiveness of the 'Dual Shield Model' in crime reduction.",
    category: Category.GOVERNANCE
  },
  {
    title: "Spiritual Rhetoric and Its Response to Modern Challenges",
    summary: "Analyzing spiritual rhetoric from the Bhagavad Gita, Aristotle, and Sivananda to address contemporary moral dilemmas and misinformation.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Integrating Swami Vivekananda's Teachings in Secondary Education",
    summary: "A strategy for addressing polarization among youth by integrating Vivekananda's philosophy of rational inquiry and spirituality into curricula.",
    category: Category.EDUCATION
  },
  {
    title: "The Bharat Reboot Fund",
    summary: "A progressive equity transfer model for middle-aged economic reintegration, addressing the 'sandwich generation' crisis in emerging economies.",
    category: Category.BUSINESS
  },
  {
    title: "Moral Underpinnings in Judicial Language",
    summary: "Examining the role of religious and philosophical texts like the Bhagavad Gita and Bible in Supreme Court judgments on capital punishment.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Role of Rhetorical Devices in Constructive Journalism",
    summary: "Exploring how rhetorical devices can mitigate extreme narratives and counter misinformation, promoting ethical journalism.",
    category: Category.ARTS
  },
  {
    title: "Invisible India: Mapping Economic Marginalization",
    summary: "A comprehensive study of welfare access and poverty distribution across social categories, focusing on the General category population.",
    category: Category.GOVERNANCE
  },
  {
    title: "Harnessing Rhetoric for Moral Enlightenment",
    summary: "Introducing the 'Rhetorical Teacher' concept to convey moral stories from sacred texts in global education.",
    category: Category.EDUCATION
  },
  {
    title: "The Role of Extreme Rhetoric in World War II",
    summary: "Investigating how extreme rhetoric shaped public opinion during WWII and drawing parallels to modern institutional manipulation.",
    category: Category.HISTORY
  },
  {
    title: "The Rhetoric of Bollywood",
    summary: "Analyzing themes of identity, unity, and social justice in Bollywood films and their impact on collective consciousness.",
    category: Category.ARTS
  },
  {
    title: "Blockchain-Driven Predictive Pandemic Management System",
    summary: "A multi-technology framework integrating blockchain, AI, nanotechnology, and quantum computing to prevent future pandemics.",
    category: Category.TECHNOLOGY
  },
  {
    title: "From Idols to Infinity: Indestructibility in the Gita",
    summary: "Reframing the Gita's teachings to position divinity as spiritual wealth (Bhagwan) transcending material representation.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Leadership Lessons Across History",
    summary: "A global strategy blueprint synthesizing lessons from historical and contemporary leaders for a 'Global Leadership Academy'.",
    category: Category.BUSINESS
  },
  {
    title: "Profit vs. Promise: Navigating Ethics in Pharma",
    summary: "Interrogating ethical conflicts in the pharmaceutical industry and proposing reforms for transparency and accountability.",
    category: Category.BUSINESS
  },
  {
    title: "Silenced Voices: Social Media Restrictions",
    summary: "Examining the impact of opaque social media restrictions on individual expression and professional livelihoods.",
    category: Category.TECHNOLOGY
  },
  {
    title: "The Enduring Legacy of Sanatana Dharma",
    summary: "Exploring the universal principles of human conduct and resilience in the Bhagavad Gita and Ramayana.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Reviving Spiritual Awareness Through the Rig Veda",
    summary: "Addressing the rise of atheism by juxtaposing contemporary debates with Vedic perspectives on meaning and ethics.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Applying Rhetorical Frameworks to the Bhagavad Gita",
    summary: "Positioning the Gita as a manual for ethical persuasion and transformational leadership using Aristotelian rhetoric.",
    category: Category.PHILOSOPHY
  },
  {
    title: "Helix Originator: A Self-Sustaining Ecosystem",
    summary: "Empowering independent researchers through Decentralized Science (DeSci) and blockchain-enabled provenance.",
    category: Category.SCIENCE,
    featured: true
  },
  {
    title: "YouTube University: Rise of the Helix Originator",
    summary: "Reimagining YouTube as a credible, decentralized model of video-based learning with AI curation and blockchain credentialing.",
    category: Category.EDUCATION
  },
  {
    title: "HELIX: Revolutionizing Public Safety",
    summary: "A visionary security framework leveraging neural monitoring and AI to preemptively neutralize threats.",
    category: Category.TECHNOLOGY
  },
  {
    title: "The Helix Doctrine: A Manifesto for Independent Innovators",
    summary: "A framework reconceptualizing power and innovation as dynamic, spiraling forces modeled on DNA's double helix.",
    category: Category.PHILOSOPHY
  },
  {
    title: "Reverse Proxy Warfare",
    summary: "A strategic framework redirecting the destabilizing potential of proxy groups back toward their state sponsors.",
    category: Category.GOVERNANCE
  },
  {
    title: "From Control to Immunity: The Dual Shield Model",
    summary: "Integrating institutional deterrence and economic resilience in vulnerability-prone regions of India.",
    category: Category.GOVERNANCE
  },
  {
    title: "Kallol Helix – The Cultural ReSkin Engine",
    summary: "A people-powered cultural innovation movement transforming heritage into contemporary products through participatory models.",
    category: Category.ARTS
  },
  {
    title: "Financial Proxy Warfare",
    summary: "Analyzing how financial instruments like microfinance are used as geopolitical tools for influence and dependency.",
    category: Category.BUSINESS
  },
  {
    title: "Śāstra and Śakti: Operation Sindoor",
    summary: "Analyzing Operation Sindoor as a manifestation of ancient Indian strategic thought integrating sacred knowledge and power.",
    category: Category.HISTORY
  },
  {
    title: "The Shadow Doctrine: Guns, Dams, and Diplomacy",
    summary: "Positing India's development of a 'Shadow Doctrine' involving deniable kinetic retaliation and hydro-strategic coercion.",
    category: Category.GOVERNANCE
  },
  {
    title: "Assam's Transformational Governance",
    summary: "A policy framework for sustainable reform in Assam, proposing the Assam Secure and Smart Governance Mission.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Codex of Orchestrated Turbulence",
    summary: "A geopolitical framework analyzing asymmetrical destabilization strategies and 'Rhizomatic Insurgencies'.",
    category: Category.GOVERNANCE
  },
  {
    title: "UP Samvidhan Sabhas",
    summary: "Advancing constitutional literacy and civic innovation through decentralized hubs in Uttar Pradesh.",
    category: Category.GOVERNANCE
  },
  {
    title: "Revolutionizing Law Enforcement: AI-Driven FIR System",
    summary: "A multilingual AI-driven FIR lodging system for global efficiency, transparency, and justice accessibility.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Remote Monitoring of Swachh Bharat Mission",
    summary: "Using satellite imagery and CNNs for independent, real-time monitoring of sanitation infrastructure progress.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Combating Misinformation through AI",
    summary: "A global strategy integrating AI, government oversight, and citizen participation to curb fake news.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Bridging Educational Divides in Assam",
    summary: "A framework for quality education in remote and tribal areas of Assam aligning with SDG targets.",
    category: Category.EDUCATION
  },
  {
    title: "Empowering the Unskilled: Ministry of Motor Mechanics",
    summary: "Proposing a dedicated ministry to formalize the motor mechanics trade and address youth unemployment.",
    category: Category.GOVERNANCE
  },
  {
    title: "LandLens: Transparent Land Encroachment Platform",
    summary: "A web-based visualization platform using geospatial technology to bring transparency to public land encroachment cases.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Integrated Sensor-Based Blockchain for Railway Safety",
    summary: "A real-time railway safety monitoring system combining IoT, blockchain, and AI for continuous track condition analysis.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Micro-Scale Disruption: Future Niches",
    summary: "Identifying emerging high-demand niches and business models requiring under $10,000 in startup capital.",
    category: Category.BUSINESS
  },
  {
    title: "The Employment Oracle",
    summary: "Predicting 50 future employment niches and archiving them in a verifiable time capsule for future verification.",
    category: Category.BUSINESS
  },
  {
    title: "Fortifying Sovereignty: Foreign Funding Regulation",
    summary: "Analyzing the turnaround in FCRA regulation and its impact on national security under Amit Shah.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Convergence Doctrine",
    summary: "A paradigm shift in India's security and governance framework integrating national security with development strategies.",
    category: Category.GOVERNANCE
  },
  {
    title: "Rhetorical Devices in People Management",
    summary: "Examining the strategic use of rhetorical devices in employee induction to enhance engagement and reduce attrition.",
    category: Category.BUSINESS
  },
  {
    title: "A Geo-Behavioral Audit of the Digital Divide",
    summary: "A framework integrating geospatial infrastructure mapping with behavioral profiling to address digital exclusion.",
    category: Category.TECHNOLOGY
  },
  {
    title: "The Rhetoric of Reform: Mann Ki Baat",
    summary: "A framing analysis of PM Modi's 'Mann Ki Baat' as a strategic platform for rhetorical governance.",
    category: Category.GOVERNANCE
  },
  {
    title: "Empowering Young Minds Through Hymns",
    summary: "A curriculum proposal using rhetorical analysis of hymns to cultivate emotional intelligence and empathy.",
    category: Category.EDUCATION
  },
  {
    title: "Rhetorical Devices in Hindi Literature",
    summary: "Exploring how rhetorical devices in Hindi literature can enhance critical thinking in students.",
    category: Category.ARTS
  },
  {
    title: "Algorithm Rhetoric Expert",
    summary: "Proposing a new professional role to shape algorithmic behavior and promote ethical online content.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Sacred Wisdom Reimagined",
    summary: "Uncovering universal teachings in sacred texts that empower faith and identity while dispelling myths.",
    category: Category.SPIRITUALITY
  },
  {
    title: "The Socioeconomic Shield Program (SSP)",
    summary: "A preventive strategy to mitigate exploitation-driven religious conversions by fortifying social protection.",
    category: Category.GOVERNANCE
  },
  {
    title: "Integrating Rhetoric with Meditation and Yoga",
    summary: "A holistic approach to youth development integrating rhetorical strategies with mindfulness practices.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Technology-Enabled Equitable Housing (TE-EHAS)",
    summary: "A next-generation governance framework for PMAY using AI and blockchain for fair housing allocation.",
    category: Category.GOVERNANCE
  },
  {
    title: "Sanatana Samyata: The Complete Dharma Defense Manual",
    summary: "A comprehensive ready reckoner addressing widespread myths about Hinduism with evidence from scriptures.",
    category: Category.SPIRITUALITY,
    featured: true
  },
  {
    title: "Reimagining Rhetoric: AI and Ethics",
    summary: "Integrating AI and ethical philosophy into rhetorical education to prepare students for a digital workforce.",
    category: Category.EDUCATION
  },
  {
    title: "Project Udaan: Exam Integrity Framework",
    summary: "A global framework using AI and blockchain to secure examination processes and prevent fraud.",
    category: Category.EDUCATION
  },
  {
    title: "Precision Employment",
    summary: "A segmented intervention framework for poverty alleviation through tailored job creation and entrepreneurship.",
    category: Category.BUSINESS
  },
  {
    title: "Influence of Atharva Veda on Ayurveda",
    summary: "Exploring the Atharva Veda as a foundational source of holistic medical knowledge and social philosophy.",
    category: Category.SCIENCE
  },
  {
    title: "Sanatana Dharma Swasthya and Samriddhi Board",
    summary: "A proposal for a statutory body to promote health and economic prosperity among Hindu communities.",
    category: Category.GOVERNANCE
  },
  {
    title: "Secret Algorithm Codes for Social Impact",
    summary: "Introducing 'Algorithmic Empowerment' to drive social change in agriculture, education, and healthcare.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Hydro-Politics and Equity: Jal Jeevan Mission",
    summary: "An equity assessment of India's Jal Jeevan Mission revealing uneven access across social lines.",
    category: Category.GOVERNANCE
  },
  {
    title: "Revolutionizing Banking Services",
    summary: "A customer-centric banking model for India inspired by global innovations to improve service delivery.",
    category: Category.BUSINESS
  },
  {
    title: "Comprehensive Policy Framework for Assam",
    summary: "A strategic blueprint for sustainable development and regional integration in Assam.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Karma Index (KI)",
    summary: "A quantitative framework for integrating principles from ancient wisdom traditions into policy analysis.",
    category: Category.GOVERNANCE
  },
  {
    title: "Safeguarding Democratic Truth",
    summary: "A comprehensive ready reckoner for Election Commissions to systematically counter electoral misinformation.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Dialogue of Wisdom and Regret",
    summary: "A reimagined dialogue between Lord Ram and Ravan exploring leadership, morality, and dharma.",
    category: Category.ARTS
  },
  {
    title: "The Power of Rhetoric in Conflict Resolution",
    summary: "Examining the role of rhetorical devices in conflict resolution through the lens of the Bhagavad Gita.",
    category: Category.PHILOSOPHY
  },
  {
    title: "Rhetoric in Professional Communication",
    summary: "A case study on how rhetorical devices and tone in professional correspondence affect workplace dynamics.",
    category: Category.BUSINESS
  },
  {
    title: "The Tale of Two Kings",
    summary: "An original parable using rhetorical devices to teach young readers about leadership and the power of words.",
    category: Category.ARTS
  },
  {
    title: "Demographic Transition and Resource Planning Index (DTRPI)",
    summary: "A composite framework integrating demographic metrics and resource sustainability for evidence-based planning.",
    category: Category.GOVERNANCE
  },
  {
    title: "India's AI Governance Imperative",
    summary: "Crafting a National Framework for Responsible AI in Public Services to ensure inclusive development.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Gurukul and Indian Philosophy for Europe?",
    summary: "Proposing a framework inspired by Gurukul and Gita for revitalizing educational structures in Europe.",
    category: Category.EDUCATION
  },
  {
    title: "The Yogi Model of Transformative Leadership",
    summary: "A strategic communication framework analyzing Yogi Adityanath's leadership through constitutional lenses.",
    category: Category.GOVERNANCE
  },
  {
    title: "AyuAI: AI-Powered Telemedicine",
    summary: "A first-of-its-kind AI telemedicine platform for India's middle class bridging the healthcare gap.",
    category: Category.TECHNOLOGY
  },
  {
    title: "GWISP: Global War Impact Simulation Platform",
    summary: "An AI-driven simulation tool to predict economic and employment repercussions of multi-domain conflicts.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Arctic Cooperation Consortium (ACC)",
    summary: "A neutrality-driven economic and logistical framework for the Arctic led by non-Arctic nations.",
    category: Category.GOVERNANCE
  },
  {
    title: "Digital Seed Networks (DSN)",
    summary: "A decentralized model for bridging the urban-rural digital divide through community-led hubs.",
    category: Category.TECHNOLOGY
  },
  {
    title: "MindSync Hubs",
    summary: "Decentralized mental wellness ecosystems for tier-2/3 cities powered by community and AI.",
    category: Category.TECHNOLOGY
  },
  {
    title: "African Bio-Synthetic Alliance (ABSA)",
    summary: "Engineering sustainable bio-solutions for Africa using synthetic biology for land restoration.",
    category: Category.SCIENCE
  },
  {
    title: "LEADAI: AI-Powered Leadership Blueprint",
    summary: "An AI mentorship platform transforming strategic governance into personalized leadership blueprints.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Nadi Utsav: The Living Rivers Renaissance",
    summary: "A nationwide celebration to rejuvenate India’s rivers through spiritual reverence and ecological restoration.",
    category: Category.SCIENCE
  },
  {
    title: "Heritage Tech & Identity Engineering",
    summary: "A new field combining DNA analysis, AI, and blockchain to preserve and connect cultural identities.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Roots Reconnect",
    summary: "A secure, anonymous DNA-based ancestry discovery platform prioritizing privacy in sensitive regions.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Stoic AI",
    summary: "Integrating Stoic ethics into cybersecurity for rational, virtue-based threat assessment.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Buddhist AI",
    summary: "A mindful cybersecurity framework emphasizing continuous awareness and ethical responsibility.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Taoist AI",
    summary: "Adaptive and effortless cyber defense based on Taoist principles of flow and non-forceful action.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Sound Healing Compositions",
    summary: "Original sound healing compositions engineered for pain relief using binaural beats and frequencies.",
    category: Category.SCIENCE
  },
  {
    title: "Global Epic Translation Initiative (GETI)",
    summary: "A cross-cultural IP framework for translating texts like the Ramayana to promote universal harmony.",
    category: Category.ARTS
  },
  {
    title: "Employment in Water Purification",
    summary: "Mapping 15 specialized job roles emerging from new water purification technologies.",
    category: Category.BUSINESS
  },
  {
    title: "Empowering Small-Scale Industries (Laghu Udyog)",
    summary: "Identifying future niches and low-investment models to strengthen India's small-scale industrial sector.",
    category: Category.BUSINESS
  },
  {
    title: "The Helix Kallol Doctrine",
    summary: "A theoretical framework reconceptualizing power and innovation in digital ecosystems via a spiral model.",
    category: Category.PHILOSOPHY
  },
  {
    title: "Debunking Civilizational Myths",
    summary: "A ready reckoner addressing 90 myths across India's constitutional, dharmic, and historical narratives.",
    category: Category.HISTORY
  },
  {
    title: "Helix Originator: Decolonizing Knowledge",
    summary: "Dismantling academic gatekeeping through a decentralized, video-based learning ecosystem.",
    category: Category.EDUCATION
  },
  {
    title: "Systematic Analysis of Misconceptions",
    summary: "A four-tier evidence framework to verify and correct myths in Indian historical and constitutional narratives.",
    category: Category.HISTORY
  },
  {
    title: "Legal Literacy Framework for College Students",
    summary: "A comprehensive study and ready reckoner for India's new criminal laws (2024) designed for students.",
    category: Category.GOVERNANCE
  },
  {
    title: "Safeguarding India's Democracy",
    summary: "Tracing the evolution of India's electoral integrity from paper ballots to AI and blockchain pilots.",
    category: Category.GOVERNANCE
  },
  {
    title: "Revitalizing Sanskrit",
    summary: "A national integration strategy to revitalize Sanskrit as a catalyst for cultural and scientific advancement.",
    category: Category.ARTS
  },
  {
    title: "Samsara and the Cycles of AI",
    summary: "Using the concept of Samsara to understand the iterative, cyclic nature of machine learning model evolution.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Legends of the Bharatverse",
    summary: "Reimagining India's historical heroes as relatable figures in fictional adventures for children.",
    category: Category.ARTS
  },
  {
    title: "Sanatana Dharma and Mahakumbh",
    summary: "A blueprint for global stability and prosperity modeled on the management of the Mahakumbh Mela.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Holistic Digital Wellness Ecosystem",
    summary: "An AI-driven platform integrating wearable data and analytics for personalized health and productivity.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Optimizing Religious Donations for Welfare",
    summary: "A framework for channeling temple donations into structured welfare systems for vulnerable communities.",
    category: Category.GOVERNANCE
  },
  {
    title: "Smart Circular Economy Platform",
    summary: "A comprehensive approach to rural sustainability integrating waste management, energy, and economic development.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Revolutionizing Religious Tourism",
    summary: "Investigating the role of leadership in redefining religious tourism as a driver of economic growth.",
    category: Category.BUSINESS
  },
  {
    title: "The Paradox of Control: Taoist AI",
    summary: "Balancing AI autonomy with human responsibility using Taoist teachings on control and flow.",
    category: Category.TECHNOLOGY
  },
  {
    title: "AI and Buddhist Philosophy",
    summary: "Applying principles of impermanence and non-self to the lifecycle and governance of AI systems.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Stoicism and the Autonomous Machine",
    summary: "Using Stoic virtues as a foundation for AI governance and ethical decision-making.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Myths and Realities of Manusmriti",
    summary: "A comparative study of the Manusmriti with other ancient legal texts to distinguish myth from reality.",
    category: Category.HISTORY
  },
  {
    title: "Invisible Shield: Smart Border Security",
    summary: "A technology-driven border security framework emphasizing sustainability and humanitarian considerations.",
    category: Category.TECHNOLOGY
  },
  {
    title: "The Lotus and the Star",
    summary: "Interactive animated tales weaving wisdom from Taoism, Buddhism, and the Gita for children.",
    category: Category.ARTS
  },
  {
    title: "Resilience Through Storytelling",
    summary: "Comparing timeless wisdom from the Gita with modern activism narratives to foster resilience.",
    category: Category.ARTS
  },
  {
    title: "The Ethics of Immigration",
    summary: "A global philosophical perspective on immigration balancing human rights with state responsibility.",
    category: Category.PHILOSOPHY
  },
  {
    title: "Cultural Identity and Education",
    summary: "Rethinking education to cultivate cultural identity and global interconnectedness using Vivekananda's teachings.",
    category: Category.EDUCATION
  },
  {
    title: "Breaking Free: Why I Ditched LinkedIn",
    summary: "Examining the constraints of professional networking platforms on creative freedom and authentic expression.",
    category: Category.BUSINESS
  },
  {
    title: "Cracking the Code: Social Media Algorithms",
    summary: "Introducing the 'Algorithm Rhetoric Expert' role to optimize persuasive power in digital narratives.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Nurturing Faith: Religious Symbolism",
    summary: "Clarifying misconceptions about Hindu worship practices to foster respect and protect sacred spaces.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Sustainable AI for Climate Change",
    summary: "A blueprint for designing AI systems that prioritize energy efficiency and environmental stewardship.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Navigating Demographic Shifts",
    summary: "Investigating the impact of illegal immigration on global societies and proposing balanced governance strategies.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Magic of Arjun's Quest",
    summary: "A narrative translating Bhagavad Gita teachings into a mystical adventure for children.",
    category: Category.ARTS
  },
  {
    title: "Beyond Belief: Mantras and Mind",
    summary: "Investigating the transformative power of mantras and slokas on mind and body through an interdisciplinary lens.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Empathetic Rhetoric in Crisis Communication",
    summary: "Strategies for public health announcements that prioritize empathy to enhance trust and compliance.",
    category: Category.BUSINESS
  },
  {
    title: "Evolution of Political Rhetoric",
    summary: "Analyzing how digital media transforms political rhetoric and its implications for civic engagement.",
    category: Category.GOVERNANCE
  },
  {
    title: "Sacred Symbols and Modern Narratives",
    summary: "Applying rhetorical analysis to understand the use and impact of religious symbols in pop culture.",
    category: Category.ARTS
  },
  {
    title: "Integrative Ethical Frameworks",
    summary: "Bridging Eastern philosophy and modern pedagogy to create ethical frameworks for global education.",
    category: Category.EDUCATION
  },
  {
    title: "Spiritual Resilience and the Gita",
    summary: "Applying Bhagavad Gita teachings to address contemporary psychological challenges like anxiety.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Indigenous Knowledge in Conflict Resolution",
    summary: "Case studies from Balochistan on using indigenous knowledge systems for sustainable conflict resolution.",
    category: Category.GOVERNANCE
  },
  {
    title: "Dharma Beyond Borders",
    summary: "Toward a global framework for ethical leadership rooted in Dharma and cross-cultural principles.",
    category: Category.BUSINESS
  },
  {
    title: "Philosophical Foundations of Cultural Diplomacy",
    summary: "Transforming international relations through the lens of Vivekananda and Krishna.",
    category: Category.GOVERNANCE
  },
  {
    title: "Mantras as Cognitive Instruments",
    summary: "A scientific examination of spiritual practices and their implications for mental health.",
    category: Category.SCIENCE
  },
  {
    title: "Alternative Learning Pathways",
    summary: "A case study on YouTube-based education and transparent research methodology (Docu Helix).",
    category: Category.EDUCATION
  },
  {
    title: "Spiritual Rhetoric to Counter Radicalism",
    summary: "Analyzing sacred texts to promote constructive dialogue and counter radical narratives.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Regulatory Watchdog for Employee Rights",
    summary: "Proposing a dedicated body to hold corporations accountable for labor exploitation in India.",
    category: Category.GOVERNANCE
  },
  {
    title: "Illuminating Young Minds",
    summary: "Nurturing ethics and wisdom in children through Upanishadic teachings and the Gita.",
    category: Category.EDUCATION
  },
  {
    title: "Beyond Religion: The Concept of Dharma",
    summary: "Exploring Dharma as a framework for ethics and spirituality beyond conventional religious categories.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Transformative Power of Mantras",
    summary: "Integrating evidence-based healing with spiritual awakening through mantra practice.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Fostering Resilience through the Gita",
    summary: "Using the Gita as an antidote to tragedies in the context of contemporary ideological movements.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Tulsi Gabbard: Advocate for Peace",
    summary: "Leveraging Vivekananda's philosophy and the Gita for global unity through political leadership.",
    category: Category.GOVERNANCE
  },
  {
    title: "Leadership Reimagined",
    summary: "Comparative analysis of resilience in the teachings of Donald Trump, the Gita, and Christian scripture.",
    category: Category.BUSINESS
  },
  {
    title: "Peace and Stability in North-East India",
    summary: "An integrative approach anchored in cultural understanding for peace in North-East India.",
    category: Category.GOVERNANCE
  },
  {
    title: "Profound Teachings of Lord Krishna",
    summary: "Exploring the spiritual wisdom of Lord Krishna beyond mythology as a guide for ethical living.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Empowering Balochistan",
    summary: "A strategic approach to peace and advancement through cultural and educational reform.",
    category: Category.GOVERNANCE
  },
  {
    title: "Unlocking English Mastery",
    summary: "A linguistic physics framework for conscious competence in second language acquisition.",
    category: Category.EDUCATION
  },
  {
    title: "Roots & Wings: Ready Reckoner",
    summary: "Integrating ancient Indian wisdom with modern values for holistic child development.",
    category: Category.EDUCATION
  },
  {
    title: "Quantum Ethical Uncertainty",
    summary: "A framework for Dharma-Driven AI using quantum concepts to navigate ethical ambiguity.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Sanatana Darshana: Ready Reckoner",
    summary: "An evidence-based guide to Hindu Dharma for atheists, agnostics, and ex-Muslims.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Bharat Vikas Mandal",
    summary: "Integrating Vedic economic principles with digital financial inclusion for underserved populations.",
    category: Category.BUSINESS
  },
  {
    title: "Strategic Tolerance: Modi's Governance",
    summary: "Understanding Narendra Modi's dual approach to criticism and confrontation as a governance model.",
    category: Category.GOVERNANCE
  },
  {
    title: "AI-Powered Multilingual FIR System",
    summary: "Revolutionizing law enforcement accessibility with an AI-driven multilingual FIR lodging system.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Algorithmic Governance",
    summary: "How digital keywords shape policy communication and public trust in India and beyond.",
    category: Category.GOVERNANCE
  },
  {
    title: "Dharma Nudges",
    summary: "A culturally grounded behavioral intervention framework for misinformation prevention in India.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Rhetorical Devices in Digital Courts",
    summary: "Examining how rhetorical devices operate within virtual court systems to promote fairness.",
    category: Category.GOVERNANCE
  },
  {
    title: "The Language of Mediation",
    summary: "Analyzing rhetorical techniques in conflict resolution practices to enhance mediation outcomes.",
    category: Category.GOVERNANCE
  },
  {
    title: "Algorithmic Rhetoric in Generative AI",
    summary: "Understanding persuasion in machine learning outputs and its impact on public perception.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Rhetoric in Online Activism",
    summary: "Analyzing rhetorical strategies that empower social movements in the digital landscape.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Transcultural Rhetoric",
    summary: "Examining how rhetorical devices function across languages to bridge communication divides.",
    category: Category.ARTS
  },
  {
    title: "Narrative Rhetoric in VR",
    summary: "Crafting persuasive experiences in immersive media through virtual reality storytelling.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Beyond Secularism",
    summary: "Exploring the role of spiritual philosophy in enriching public policy and governance.",
    category: Category.GOVERNANCE
  },
  {
    title: "Roots & Wings: Ready Reckoner for Young Minds",
    summary: "Integrating ancient Indian wisdom with modern values for holistic child development.",
    category: Category.EDUCATION
  },
  {
    title: "Legal Literacy Framework for Indian College Students",
    summary: "A comprehensive study of India's new criminal laws (2024) designed for college students.",
    category: Category.GOVERNANCE
  },
  {
    title: "Safeguarding India's Democracy",
    summary: "Tracing the evolution of India's electoral integrity from paper ballots to AI and blockchain pilots.",
    category: Category.GOVERNANCE
  },
  {
    title: "Quantum Ethical Uncertainty and Dharma-Driven AI",
    summary: "A Vedic approach to quantum-enhanced policy governance for AI systems.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Sanatana Darshana: A Ready Reckoner",
    summary: "An evidence-based guide to Hindu Dharma for atheists, agnostics, and ex-Muslims.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Bharat Vikas Mandal",
    summary: "Integrating Vedic economic principles with digital financial inclusion for underserved populations.",
    category: Category.BUSINESS
  },
  {
    title: "Strategic Tolerance: Modi's Governance",
    summary: "Understanding Narendra Modi's dual approach to criticism and confrontation.",
    category: Category.GOVERNANCE
  },
  {
    title: "AI-Powered Multilingual FIR System",
    summary: "Revolutionizing law enforcement accessibility with an AI-driven multilingual FIR system.",
    category: Category.TECHNOLOGY
  },
  {
    title: "Algorithmic Governance",
    summary: "How digital keywords shape policy communication and public trust in India and beyond.",
    category: Category.GOVERNANCE
  },
  {
    title: "Dharma Nudges",
    summary: "A culturally grounded behavioral intervention framework for misinformation prevention in India.",
    category: Category.TECHNOLOGY
  },
  {
    title: "The Magic of Arjun's Quest",
    summary: "A narrative translating Bhagavad Gita teachings into a mystical adventure for children.",
    category: Category.ARTS
  },
  {
    title: "Beyond Belief: Mantras and Mind",
    summary: "Investigating the transformative power of mantras and slokas on mind and body.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Empathetic Rhetoric in Crisis Communication",
    summary: "Strategies for public health announcements that prioritize empathy to enhance trust.",
    category: Category.BUSINESS
  },
  {
    title: "Evolution of Political Rhetoric",
    summary: "Analyzing how digital media transforms political rhetoric and its implications for civic engagement.",
    category: Category.GOVERNANCE
  },
  {
    title: "Sacred Symbols and Modern Narratives",
    summary: "Applying rhetorical analysis to understand the use and impact of religious symbols in pop culture.",
    category: Category.ARTS
  },
  {
    title: "Integrative Ethical Frameworks",
    summary: "Bridging Eastern philosophy and modern pedagogy to create ethical frameworks for global education.",
    category: Category.EDUCATION
  },
  {
    title: "Spiritual Resilience and the Gita",
    summary: "Applying Bhagavad Gita teachings to address contemporary psychological challenges like anxiety.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Indigenous Knowledge in Conflict Resolution",
    summary: "Case studies from Balochistan on using indigenous knowledge systems for sustainable conflict resolution.",
    category: Category.GOVERNANCE
  },
  {
    title: "Dharma Beyond Borders",
    summary: "Toward a global framework for ethical leadership rooted in Dharma and cross-cultural principles.",
    category: Category.BUSINESS
  },
  {
    title: "Philosophical Foundations of Cultural Diplomacy",
    summary: "Transforming international relations through the lens of Vivekananda and Krishna.",
    category: Category.GOVERNANCE
  },
  {
    title: "Mantras as Cognitive Instruments",
    summary: "A scientific examination of spiritual practices and their implications for mental health.",
    category: Category.SCIENCE
  },
  {
    title: "Alternative Learning Pathways",
    summary: "A case study on YouTube-based education and transparent research methodology.",
    category: Category.EDUCATION
  },
  {
    title: "Spiritual Rhetoric to Counter Radicalism",
    summary: "Analyzing sacred texts to promote constructive dialogue and counter radical narratives.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Regulatory Watchdog for Employee Rights",
    summary: "Proposing a dedicated body to hold corporations accountable for labor exploitation in India.",
    category: Category.GOVERNANCE
  },
  {
    title: "Illuminating Young Minds",
    summary: "Nurturing ethics and wisdom in children through Upanishadic teachings and the Gita.",
    category: Category.EDUCATION
  },
  {
    title: "Beyond Religion: The Concept of Dharma",
    summary: "Exploring Dharma as a framework for ethics and spirituality beyond conventional religious categories.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Transformative Power of Mantras",
    summary: "Integrating evidence-based healing with spiritual awakening through mantra practice.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Fostering Resilience through the Gita",
    summary: "Using the Gita as an antidote to tragedies in the context of contemporary ideological movements.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Tulsi Gabbard: Advocate for Peace",
    summary: "Leveraging Vivekananda's philosophy and the Gita for global unity through political leadership.",
    category: Category.GOVERNANCE
  },
  {
    title: "Leadership Reimagined",
    summary: "Comparative analysis of resilience in the teachings of Donald Trump, the Gita, and Christian scripture.",
    category: Category.BUSINESS
  },
  {
    title: "Peace and Stability in North-East India",
    summary: "An integrative approach anchored in cultural understanding for peace in North-East India.",
    category: Category.GOVERNANCE
  },
  {
    title: "Profound Teachings of Lord Krishna",
    summary: "Exploring the spiritual wisdom of Lord Krishna beyond mythology as a guide for ethical living.",
    category: Category.SPIRITUALITY
  },
  {
    title: "Empowering Balochistan",
    summary: "A strategic approach to peace and advancement through cultural and educational reform.",
    category: Category.GOVERNANCE
  },
  {
    title: "Unlocking English Mastery",
    summary: "A linguistic physics framework for conscious competence in second language acquisition.",
    category: Category.EDUCATION
  }
];

export const SAMPLE_ARTICLES: Article[] = rawArticles.map((a, i) => ({
  id: `article-${i + 1}`,
  title: a.title,
  summary: a.summary,
  content: `<p class="lead text-xl font-serif mb-8">${a.summary}</p><p><em>(Full article content is available in the complete library volume. This digital preview showcases the abstract and key concepts.)</em></p>`,
  category: a.category,
  tags: [a.category.split('&')[0].trim(), 'Innovation', 'Kallol Chakrabarti'],
  authorId: 'kallol',
  publishDate: '2024-2025',
  readTimeMinutes: Math.floor(Math.random() * 15) + 5,
  imageUrl: getImg(a.category, `img-${i}`),
  views: Math.floor(Math.random() * 5000) + 500,
  featured: a.featured || false
}));

export const CATEGORY_ICONS: Record<Category, string> = {
  [Category.GOVERNANCE]: 'gavel',
  [Category.TECHNOLOGY]: 'memory',
  [Category.HISTORY]: 'history_edu',
  [Category.SCIENCE]: 'biotech',
  [Category.ARTS]: 'palette',
  [Category.PHILOSOPHY]: 'psychology',
  [Category.BUSINESS]: 'trending_up',
  [Category.SPIRITUALITY]: 'self_improvement',
  [Category.EDUCATION]: 'school'
};
