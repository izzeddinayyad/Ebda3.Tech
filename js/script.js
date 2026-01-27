// 1. تهيئة الأنميشين
AOS.init({ duration: 1000, once: true });

// 2. كائن الترجمة الشامل
const translations = {
    ar: {
        navLogo: "إبداع.تيك", navWork: "أعمالنا", navPricing: "الأسعار", navContact: "اتصل بنا", langBtn: "English",
        heroBadge: "مستقبل الويب هنا", heroT1: "نصمم تجارب", heroT2: "تخطف الأنظار",
        heroDesc: "حوّل فكرتك إلى واقع رقمي باستخدام أحدث تقنيات Tailwind CSS و لغة العصر.",
        btnStart: "ابدأ مشروعك", btnGallery: "شاهد المعرض",
        portTitle: "أحدث أعمالنا",
        priceTitle: "خطط الأسعار", priceMonth: "شهرياً", priceYear: "سنوياً",
        planBName: "الأساسية", planPName: "الإبداعية", planBBtn: "ابدأ الآن", planPBtn: "اشترك الآن",
        planBList: "<li>✅ دعم فني 12 ساعة</li><li>✅ 5 صفحات مخصصة</li>",
        planPList: "<li>✅ دعم فني 24/7</li><li>✅ صفحات غير محدودة</li>",
        testiTitle: "ماذا يقول شركاؤنا؟",
        testi1Text: "فريق عمل مبدع، حولوا خيالي إلى موقع حقيقي وبسرعة خيالية!",
        testi1Name: "سالم الحربي", testi1Job: "مؤسس متجر طيبة",
        // FAQ Arabic
        faqTitle: "الأسئلة الشائعة",
        q1: "كم يستغرق بناء الموقع؟", a1: "يستغرق العمل عادة من 7 إلى 14 يوم عمل حسب حجم المشروع والمتطلبات التقنية.",
        q2: "هل الموقع يدعم الهواتف الذكية؟", a2: "بكل تأكيد، جميع مواقعنا مصممة بتقنية الـ Responsive التي تضمن ظهور الموقع بشكل مثالي.",
        q3: "هل توفرون خدمة الدعم الفني؟", a3: "نعم، نوفر دعماً فنياً مستمراً وضماناً على الأخطاء البرمجية لمدة 6 أشهر.",
        contactH: "تواصل معنا", contactP: "دعنا نبدأ برحلة نجاح جديدة اليوم.",
        fName: "الاسم الكامل", fEmail: "البريد الإلكتروني", fMsg: "كيف يمكننا خدمتك؟", fBtn: "إرسال الطلب",
        footer: "بني بشغف © 2026", dir: "rtl"
    },
    en: {
        navLogo: "Ebda3.Tech", navWork: "Portfolio", navPricing: "Pricing", navContact: "Contact", langBtn: "العربية",
        heroBadge: "FUTURE OF WEB IS HERE", heroT1: "We Design Experiences", heroT2: "That Capture Eyes",
        heroDesc: "Transform your idea into digital reality using the latest Tailwind CSS technologies.",
        btnStart: "Start Project", btnGallery: "View Gallery",
        portTitle: "Our Latest Projects",
        priceTitle: "Pricing Plans", priceMonth: "Monthly", priceYear: "Yearly",
        planBName: "Basic Plan", planPName: "Creative Plan", planBBtn: "Get Started", planPBtn: "Subscribe Now",
        planBList: "<li>✅ 12h Support</li><li>✅ 5 Custom Pages</li>",
        planPList: "<li>✅ 24/7 Support</li><li>✅ Unlimited Pages</li>",
        testiTitle: "Testimonials",
        testi1Text: "Creative team! They turned my vision into reality with incredible speed!",
        testi1Name: "Salem Al-Harbi", testi1Job: "Founder of Taiba",
        // FAQ English
        faqTitle: "Frequently Asked Questions",
        q1: "How long does it take?", a1: "Work usually takes 7 to 14 business days depending on the project size.",
        q2: "Is it mobile friendly?", a2: "Absolutely, all our sites are responsive and look perfect on all screens.",
        q3: "Do you provide support?", a3: "Yes, we provide ongoing technical support and a 6-month warranty.",
        contactH: "Contact Us", contactP: "Let's start a new journey today.",
        fName: "Full Name", fEmail: "Email", fMsg: "How can we help?", fBtn: "Send Request",
        footer: "Built with passion © 2026", dir: "ltr"
    }
};

let currentLang = 'ar';
let isYearly = false;

// 3. وظيفة التبديل
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const data = translations[currentLang];

    const elements = {
        'nav-logo': data.navLogo, 'nav-work': data.navWork, 'nav-pricing': data.navPricing,
        'nav-contact': data.navContact, 'lang-btn': data.langBtn, 'hero-badge': data.heroBadge,
        'hero-t1': data.heroT1, 'hero-t2': data.heroT2, 'hero-desc': data.heroDesc,
        'btn-start': data.btnStart, 'btn-gallery': data.btnGallery, 'port-title': data.portTitle,
        'price-title': data.priceTitle, 'price-month': data.priceMonth, 'price-year': data.priceYear,
        'plan-b-name': data.planBName, 'plan-p-name': data.planPName, 'plan-b-btn': data.planBBtn,
        'plan-p-btn': data.planPBtn, 'testi-title': data.testiTitle, 'testi-1-text': data.testi1Text,
        'faq-title': data.faqTitle, 'q1': data.q1, 'a1': data.a1, 'q2': data.q2, 'a2': data.a2,
        'q3': data.q3, 'a3': data.a3, 'contact-h': data.contactH, 'contact-p': data.contactP,
        'footer-text': data.footer
    };

    for (let id in elements) {
        const el = document.getElementById(id);
        if (el) el.innerText = elements[id];
    }

    document.documentElement.dir = data.dir;
    document.body.classList.toggle('en-mode', currentLang === 'en');
    updateAlignment();
}

// 4. وظيفة الأكورديون (FAQ Toggle)
function toggleFaq(index) {
    const ans = document.getElementById(`ans-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const isHidden = ans.classList.contains('hidden');
    
    // إغلاق الكل أولاً (اختياري)
    for(let i=1; i<=3; i++) {
        document.getElementById(`ans-${i}`).classList.add('hidden');
        document.getElementById(`icon-${i}`).style.transform = "rotate(0deg)";
    }

    if (isHidden) {
        ans.classList.remove('hidden');
        icon.style.transform = "rotate(180deg)";
    }
}

// 5. الوظائف الإضافية (Dark Mode & Pricing)
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    document.getElementById('theme-icon').innerText = html.classList.contains('dark') ? '☀️' : '🌙';
}

function updateAlignment() {
    const align = currentLang === 'ar' ? 'right' : 'left';
    document.querySelectorAll('.text-right, .text-left, button').forEach(el => {
        if(!el.classList.contains('text-center')) el.style.textAlign = align;
    });
}