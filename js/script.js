// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Complete Translation Object
const translations = {
  ar: {
    // Navigation
    navLogo: "إبداع.تيك",
    navServices: "خدماتنا",
    navWork: "أعمالنا",
    navPricing: "الأسعار",
    navContact: "اتصل بنا",
    langBtn: "English",

    // Hero
    heroBadge: "مستقبل الويب هنا",
    heroT1: "نصمم تجارب",
    heroT2: "تخطف الأنظار",
    heroDesc:
      "حوّل فكرتك إلى واقع رقمي باستخدام أحدث تقنيات Tailwind CSS و لغة العصر.",
    btnStart: "ابدأ مشروعك",
    btnGallery: "شاهد المعرض",

    // Stats
    statMain: "مشروع تم تسليمه بنجاح",
    statTech: "تقنياتنا",
    statExp: "سنوات خبرة",
    statSafety: "أمان وثبات",

    // Services
    servicesTitle: "خدماتنا المتميزة",
    servicesDesc: "نقدم حلولاً رقمية متكاملة تلبي جميع احتياجات عملك",
    service1Title: "تصميم واجهات المستخدم",
    service1Desc:
      "تصميمات عصرية وجذابة تعكس هوية علامتك التجارية وتوفر تجربة مستخدم استثنائية.",
    service2Title: "تطوير المواقع",
    service2Desc:
      "بناء مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات والأطر البرمجية.",
    service3Title: "المتاجر الإلكترونية",
    service3Desc:
      "إنشاء متاجر إلكترونية متكاملة مع بوابات دفع آمنة ولوحات تحكم سهلة.",
    service4Title: "تطبيقات الموبايل",
    service4Desc:
      "تطوير تطبيقات iOS و Android بتقنية React Native للوصول لأكبر شريحة.",
    service5Title: "تحسين الأداء",
    service5Desc: "تحسين سرعة موقعك وأدائه لتحقيق أفضل نتائج في محركات البحث.",
    service6Title: "الاستضافة السحابية",
    service6Desc:
      "حلول استضافة آمنة وموثوقة مع نسخ احتياطي يومي وشهادات SSL مجانية.",

    // Process
    processTitle: "كيف نعمل؟",
    processDesc: "خطوات بسيطة لتحويل فكرتك إلى واقع رقمي ناجح",
    step1Title: "الاستشارة",
    step1Desc: "نفهم احتياجاتك وأهدافك بشكل دقيق",
    step2Title: "التخطيط",
    step2Desc: "نضع خطة عمل واضحة ومحددة",
    step3Title: "التنفيذ",
    step3Desc: "نبني مشروعك بأعلى معايير الجودة",
    step4Title: "الإطلاق",
    step4Desc: "نطلق مشروعك مع دعم مستمر",

    // Portfolio
    portTitle: "أحدث أعمالنا",
    port1Title: "متجر إلكتروني مودرن",
    port1Tech: "Next.js & Tailwind",
    port2Title: "منصة تعليمية",
    port2Tech: "React & Firebase",
    port3Title: "تطبيق لوحة تحكم",
    port3Tech: "Dashboard UI",

    // Pricing
    priceTitle: "خطط الأسعار",
    priceMonth: "شهرياً",
    priceYear: "سنوياً",
    planBName: "الأساسية",
    planPName: "الإبداعية",
    planBBtn: "ابدأ الآن",
    planPBtn: "اشترك الآن",
    popularBadge: "الأكثر شعبية",
    planBList:
      "<li>✅ دعم فني 12 ساعة</li><li>✅ 5 صفحات مخصصة</li><li>✅ استضافة مجانية</li>",
    planPList:
      "<li>✅ دعم فني 24/7</li><li>✅ صفحات غير محدودة</li><li>✅ لوحة تحكم إدارية</li>",

    // FAQ
    faqTitle: "الأسئلة الشائعة",
    q1: "كم يستغرق بناء الموقع؟",
    a1: "يستغرق العمل عادة من 7 إلى 14 يوم عمل حسب حجم المشروع والمتطلبات التقنية.",
    q2: "هل الموقع يدعم الهواتف الذكية؟",
    a2: "بكل تأكيد، جميع مواقعنا مصممة بتقنية الـ Responsive التي تضمن ظهور الموقع بشكل مثالي على كافة الشاشات.",
    q3: "هل توفرون خدمة الدعم الفني؟",
    a3: "نعم، نوفر دعماً فنياً مستمراً وضماناً على الأخطاء البرمجية لمدة 6 أشهر بعد إطلاق المشروع.",

    // Contact
    contactH: "تواصل معنا",
    contactP: "دعنا نبدأ برحلة نجاح جديدة اليوم.",
    fName: "الاسم الكامل",
    fEmail: "البريد الإلكتروني",
    fMsg: "كيف يمكننا خدمتك؟",
    fBtn: "إرسال الطلب",
    formSuccess: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",

    // Testimonials
    testiTitle: "ماذا يقول شركاؤنا؟",
    testi1Text:
      '"فريق عمل مبدع، حولوا خيالي إلى موقع حقيقي وبسرعة خيالية! الاهتمام بالتفاصيل مذهل."',
    testi1Name: "سالم الحربي",
    testi1Job: "مؤسس متجر طيبة",
    testi2Text:
      '"التعامل مع إبداع.تيك كان أفضل قرار تقني اتخذناه. السرعة والأداء للموقع الجديد لا يعلى عليهما."',
    testi2Name: "ليلى محمود",
    testi2Job: "مديرة تقنية",
    testi3Text:
      '"تصميم عصري جداً ومتوافق مع الموبايل بشكل ممتاز. تجربة مستخدم رائعة."',
    testi3Name: "خالد منصور",
    testi3Job: "رائد أعمال",

    // Footer
    footerLogo: "إبداع.تيك",
    footer: "Made with ❤️ by izzeddin © 2026",

    dir: "rtl",
  },
  en: {
    // Navigation
    navLogo: "Ebda3.Tech",
    navServices: "Services",
    navWork: "Portfolio",
    navPricing: "Pricing",
    navContact: "Contact",
    langBtn: "العربية",

    // Hero
    heroBadge: "FUTURE OF WEB IS HERE",
    heroT1: "We Design Experiences",
    heroT2: "That Capture Eyes",
    heroDesc:
      "Transform your idea into digital reality using the latest Tailwind CSS technologies.",
    btnStart: "Start Project",
    btnGallery: "View Gallery",

    // Stats
    statMain: "Projects delivered successfully",
    statTech: "Our Tech Stack",
    statExp: "Years Experience",
    statSafety: "Safe & Stable",

    // Services
    servicesTitle: "Our Premium Services",
    servicesDesc:
      "We provide integrated digital solutions for all your business needs",
    service1Title: "UI/UX Design",
    service1Desc:
      "Modern and attractive designs that reflect your brand identity and provide an exceptional user experience.",
    service2Title: "Web Development",
    service2Desc:
      "Building responsive and fast websites using the latest technologies and frameworks.",
    service3Title: "E-commerce Stores",
    service3Desc:
      "Creating complete e-commerce stores with secure payment gateways and easy dashboards.",
    service4Title: "Mobile Apps",
    service4Desc:
      "Developing iOS and Android apps with React Native technology to reach the largest audience.",
    service5Title: "Performance Optimization",
    service5Desc:
      "Improving your site's speed and performance for the best search engine results.",
    service6Title: "Cloud Hosting",
    service6Desc:
      "Secure and reliable hosting solutions with daily backups and free SSL certificates.",

    // Process
    processTitle: "How We Work?",
    processDesc:
      "Simple steps to turn your idea into a successful digital reality",
    step1Title: "Consultation",
    step1Desc: "We understand your needs and goals precisely",
    step2Title: "Planning",
    step2Desc: "We create a clear and specific action plan",
    step3Title: "Execution",
    step3Desc: "We build your project with highest quality standards",
    step4Title: "Launch",
    step4Desc: "We launch your project with ongoing support",

    // Portfolio
    portTitle: "Our Latest Work",
    port1Title: "Modern E-commerce Store",
    port1Tech: "Next.js & Tailwind",
    port2Title: "Educational Platform",
    port2Tech: "React & Firebase",
    port3Title: "Dashboard Application",
    port3Tech: "Dashboard UI",

    // Pricing
    priceTitle: "Pricing Plans",
    priceMonth: "Monthly",
    priceYear: "Yearly",
    planBName: "Basic Plan",
    planPName: "Creative Plan",
    planBBtn: "Get Started",
    planPBtn: "Subscribe Now",
    popularBadge: "Most Popular",
    planBList:
      "<li>✅ 12h Technical Support</li><li>✅ 5 Custom Pages</li><li>✅ Free Hosting</li>",
    planPList:
      "<li>✅ 24/7 Premium Support</li><li>✅ Unlimited Pages</li><li>✅ Admin Dashboard</li>",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    q1: "How long does it take to build a website?",
    a1: "Work usually takes 7 to 14 business days depending on project size and technical requirements.",
    q2: "Is the website mobile-friendly?",
    a2: "Absolutely! All our websites are designed with Responsive technology ensuring perfect display on all screens.",
    q3: "Do you provide technical support?",
    a3: "Yes, we provide continuous technical support and a 6-month warranty on programming errors after project launch.",

    // Contact
    contactH: "Contact Us",
    contactP: "Let's start a new success journey today.",
    fName: "Full Name",
    fEmail: "Email Address",
    fMsg: "How can we help you?",
    fBtn: "Send Request",
    formSuccess: "Your message was sent successfully! We'll contact you soon.",

    // Testimonials
    testiTitle: "What Our Partners Say?",
    testi1Text:
      '"Creative team! They turned my imagination into a real website with incredible speed! The attention to detail is amazing."',
    testi1Name: "Salem Al-Harbi",
    testi1Job: "Founder of Taiba Store",
    testi2Text:
      '"Working with Ebda3.Tech was the best technical decision we made. The speed and performance of the new site is unmatched."',
    testi2Name: "Layla Mahmoud",
    testi2Job: "Technical Director",
    testi3Text:
      '"Very modern design and excellent mobile compatibility. Great user experience."',
    testi3Name: "Khaled Mansour",
    testi3Job: "Entrepreneur",

    // Footer
    footerLogo: "Ebda3.Tech",
    footer: "Made with ❤️ by izzeddin © 2026",

    dir: "ltr",
  },
};

let currentLang = "ar";
let isYearly = false;

// Toggle Language Function
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  const data = translations[currentLang];

  // Text content updates
  const textElements = {
    "nav-logo": data.navLogo,
    "nav-services": data.navServices,
    "nav-work": data.navWork,
    "nav-pricing": data.navPricing,
    "nav-contact": data.navContact,
    "nav-services-mobile": data.navServices,
    "nav-work-mobile": data.navWork,
    "nav-pricing-mobile": data.navPricing,
    "nav-contact-mobile": data.navContact,
    "lang-btn": data.langBtn,
    "hero-badge": data.heroBadge,
    "hero-t1": data.heroT1,
    "hero-t2": data.heroT2,
    "hero-desc": data.heroDesc,
    "btn-start": data.btnStart,
    "btn-gallery": data.btnGallery,
    "stat-main": data.statMain,
    "stat-tech": data.statTech,
    "stat-exp": data.statExp,
    "stat-safety": data.statSafety,
    "services-title": data.servicesTitle,
    "services-desc": data.servicesDesc,
    "service-1-title": data.service1Title,
    "service-1-desc": data.service1Desc,
    "service-2-title": data.service2Title,
    "service-2-desc": data.service2Desc,
    "service-3-title": data.service3Title,
    "service-3-desc": data.service3Desc,
    "service-4-title": data.service4Title,
    "service-4-desc": data.service4Desc,
    "service-5-title": data.service5Title,
    "service-5-desc": data.service5Desc,
    "service-6-title": data.service6Title,
    "service-6-desc": data.service6Desc,
    "process-title": data.processTitle,
    "process-desc": data.processDesc,
    "step-1-title": data.step1Title,
    "step-1-desc": data.step1Desc,
    "step-2-title": data.step2Title,
    "step-2-desc": data.step2Desc,
    "step-3-title": data.step3Title,
    "step-3-desc": data.step3Desc,
    "step-4-title": data.step4Title,
    "step-4-desc": data.step4Desc,
    "port-title": data.portTitle,
    "port-1-title": data.port1Title,
    "port-1-tech": data.port1Tech,
    "port-2-title": data.port2Title,
    "port-2-tech": data.port2Tech,
    "port-3-title": data.port3Title,
    "port-3-tech": data.port3Tech,
    "price-title": data.priceTitle,
    "price-month": data.priceMonth,
    "price-year": data.priceYear,
    "plan-b-name": data.planBName,
    "plan-p-name": data.planPName,
    "plan-b-btn": data.planBBtn,
    "plan-p-btn": data.planPBtn,
    "popular-badge": data.popularBadge,
    "faq-title": data.faqTitle,
    q1: data.q1,
    a1: data.a1,
    q2: data.q2,
    a2: data.a2,
    q3: data.q3,
    a3: data.a3,
    "contact-h": data.contactH,
    "contact-p": data.contactP,
    "f-btn": data.fBtn,
    "testi-title": data.testiTitle,
    "testi-1-text": data.testi1Text,
    "testi-1-name": data.testi1Name,
    "testi-1-job": data.testi1Job,
    "testi-2-text": data.testi2Text,
    "testi-2-name": data.testi2Name,
    "testi-2-job": data.testi2Job,
    "testi-3-text": data.testi3Text,
    "testi-3-name": data.testi3Name,
    "testi-3-job": data.testi3Job,
    "footer-logo": data.footerLogo,
    "footer-text": data.footer,
  };

  // Update text content
  for (let id in textElements) {
    const el = document.getElementById(id);
    if (el) el.innerText = textElements[id];
  }

  // Update HTML content (lists)
  const htmlElements = {
    "plan-b-list": data.planBList,
    "plan-p-list": data.planPList,
  };

  for (let id in htmlElements) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = htmlElements[id];
  }

  // Update placeholders
  document.getElementById("f-name").placeholder = data.fName;
  document.getElementById("f-email").placeholder = data.fEmail;
  document.getElementById("f-msg").placeholder = data.fMsg;

  // Update direction and font
  document.documentElement.dir = data.dir;
  document.documentElement.lang = currentLang;
  document.body.classList.toggle("en-mode", currentLang === "en");
}

// Toggle Dark Mode
function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  const icon = document.getElementById("theme-icon");
  icon.innerText = html.classList.contains("dark") ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("darkMode", html.classList.contains("dark"));
}

// Check saved dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.documentElement.classList.add("dark");
  document.getElementById("theme-icon").innerText = "☀️";
}

// Toggle Pricing
function togglePricing() {
  isYearly = !isYearly;
  const dot = document.getElementById("toggle-dot");
  const basic = document.getElementById("price-basic");
  const pro = document.getElementById("price-pro");
  const monthLabel = document.getElementById("price-month");
  const yearLabel = document.getElementById("price-year");

  // Adjust toggle animation for RTL/LTR
  const isRTL = document.documentElement.dir === "rtl";
  if (isYearly) {
    dot.style.transform = isRTL ? "translateX(-32px)" : "translateX(32px)";
    monthLabel.classList.add("text-gray-400");
    monthLabel.classList.remove("text-gray-900", "dark:text-white");
    yearLabel.classList.remove("text-gray-400");
    yearLabel.classList.add("text-gray-900", "dark:text-white");
  } else {
    dot.style.transform = "translateX(0)";
    monthLabel.classList.remove("text-gray-400");
    monthLabel.classList.add("text-gray-900", "dark:text-white");
    yearLabel.classList.add("text-gray-400");
    yearLabel.classList.remove("text-gray-900", "dark:text-white");
  }

  // Update prices (yearly = monthly * 10 for discount)
  basic.innerText = isYearly ? "399" : "49";
  pro.innerText = isYearly ? "899" : "99";
}

// Toggle FAQ Accordion
function toggleFaq(index) {
  const ans = document.getElementById(`ans-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const isHidden = ans.classList.contains("hidden");

  // Close all first
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`ans-${i}`).classList.add("hidden");
    document.getElementById(`icon-${i}`).style.transform = "rotate(0deg)";
  }

  // Open clicked if was hidden
  if (isHidden) {
    ans.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("mobile-menu-icon");
  menu.classList.toggle("hidden");
  icon.innerText = menu.classList.contains("hidden") ? "☰" : "✕";
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/Hide Back to Top Button
window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top");
  if (window.scrollY > 500) {
    btn.classList.remove("opacity-0", "invisible");
    btn.classList.add("opacity-100", "visible");
  } else {
    btn.classList.add("opacity-0", "invisible");
    btn.classList.remove("opacity-100", "visible");
  }
});

// Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("form-message");
    const data = translations[currentLang];

    msg.innerText = data.formSuccess;
    msg.classList.remove("hidden", "text-red-500");
    msg.classList.add("text-green-500");

    // Reset form
    this.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      msg.classList.add("hidden");
    }, 5000);
  });
