// ===================================
// Language Switcher
// ===================================
const translations = {
    de: {
        'nav-about': 'Über uns',
        'nav-services': 'Dienstleistungen',
        'nav-references': 'Referenzen',
        'nav-contact': 'Kontakt aufnehmen',
        'nav-contact-short': 'Kontakt',
        'hero-badge': 'Hamburg · IT-Consulting',
        'hero-line1': 'IT-Projekte sicher',
        'hero-line2': 'ans Ziel bringen.',
        'hero-subline': 'Zertifiziertes IT-Projektmanagement & Qualitätssicherung aus Hamburg — pragmatisch, direkt und mit über 15 Jahren Erfahrung.',
        'hero-cta1': 'Kostenloses Erstgespräch',
        'hero-cta2': 'Dienstleistungen ansehen',
        'card-years': 'Jahre Erfahrung',
        'card-certified': 'Zertifiziert',
        'card-direct': 'Direktengagement',
        'card-response': 'Reaktionszeit',
        'about-label': 'Über RAIT Solution',
        'about-title': 'Qualität trifft Struktur.',
        'about-lead': 'Das RAIT Solution Team vereint über 15 Jahre Projekterfahrung in anspruchsvollen IT-Vorhaben aus Versicherung, öffentlicher Verwaltung und Logistik.',
        'about-body': 'Kein Overhead, keine Umwege — nur fokussierte Arbeit mit dem Blick auf Ihr Ziel. Zertifiziert, erfahren und stets direkt ansprechbar. Wir liefern Lösungen, die wirklich funktionieren.',
        'about-v1': 'Erfahrenes Team — kein Junior-Staffing',
        'about-v2': 'Minimaler Overhead & schlanke Prozesse',
        'about-v3': '30 Minuten Erstberatung — kostenlos & unverbindlich',
        'about-v4': 'Transparentes Angebot mit klar definiertem Scope',
        'about-btn': 'Kennenlernen',
        'about-quote': '\"Wir übernehmen die Struktur — Sie konzentrieren sich auf Ihr Business.\"',
        'about-quote-attr': '— Das Team von RAIT Solution',
        'services-label': 'Dienstleistungen',
        'services-title': 'Was wir für Sie leisten',
        'services-subtitle': 'Vier zertifizierte Kompetenzfelder — ein Ziel: Ihr Projekt erfolgreich abschließen.',
        'svc1-cert': 'ISTQB zertifiziert',
        'svc1-title': 'Software-Qualitätssicherung',
        'svc1-desc': 'Systematisches Testen mit klarer Fehlerdokumentation und nachweisbaren Ergebnissen. Von der Teststrategie bis zum Abnahmetest — strukturiert und transparent.',
        'svc1-li1': 'Testplanung & Teststrategie',
        'svc1-li2': 'Funktionale & nicht-funktionale Tests',
        'svc1-li3': 'Abnahmetests & Dokumentation',
        'svc2-cert': 'IREB zertifiziert',
        'svc2-title': 'Anforderungsmanagement',
        'svc2-desc': 'Aus Geschäftsbedürfnissen werden präzise, umsetzbare Spezifikationen. Wir übersetzen zwischen Fachbereich und IT — klar, vollständig, konsistent.',
        'svc2-li1': 'Requirements Engineering & Analyse',
        'svc2-li2': 'Lastenheft & Pflichtenheft',
        'svc2-li3': 'Stakeholder-Management',
        'svc3-cert': 'PMI zertifiziert',
        'svc3-title': 'IT-Projektmanagement',
        'svc3-desc': 'Komplexe IT-Projekte mit Agilität und Struktur sicher zum Abschluss führen. Risiken früh erkennen, Ressourcen optimal einsetzen, Stakeholder informiert halten.',
        'svc3-li1': 'Projektplanung & Steuerung',
        'svc3-li2': 'Risiko- & Änderungsmanagement',
        'svc3-li3': 'Budget- & Ressourcenkontrolle',
        'svc4-cert': 'Scrum.org zertifiziert',
        'svc4-title': 'Scrum Leadership',
        'svc4-desc': 'Teams durch zertifizierte agile Praktiken begleiten und befähigen. Als Scrum Master schaffen wir die Grundlage für kontinuierliche Verbesserung.',
        'svc4-li1': 'Scrum Master & Agile Coach',
        'svc4-li2': 'Sprint Planning & Retrospektiven',
        'svc4-li3': 'Agile Transformation',
        'process-label': 'Vorgehen',
        'process-title': 'Wie wir arbeiten',
        'process-subtitle': 'Von der ersten Kontaktaufnahme bis zum erfolgreichen Abschluss — ein klarer, transparenter Prozess.',
        'step1-title': 'Kennenlernen',
        'step1-desc': '30 Minuten kostenloses Erstgespräch. Wir hören zu, verstehen Ihren Bedarf und beantworten alle Fragen — unverbindlich.',
        'step2-title': 'Analyse',
        'step2-desc': 'Wir prüfen Ihr Projekt, identifizieren Risiken und erstellen ein maßgeschneidertes Angebot mit klar definiertem Scope.',
        'step3-title': 'Umsetzung',
        'step3-desc': 'Strukturierte Projektarbeit mit klarer Kommunikation. Sie sind stets informiert — ohne Überraschungen, ohne Overhead.',
        'step4-title': 'Ergebnis',
        'step4-desc': 'Nachweisbares Ergebnis, pünktlich und im Budget. Mit vollständiger Dokumentation und sauberer Übergabe.',
        'ref-label': 'Referenzen',
        'ref-title': 'Kundenstimmen',
        'ref-subtitle': 'Projekte aus Versicherung, Verwaltung und Logistik — erfolgreich abgeschlossen.',
        'ref1-text': '\"Herr Amini hat unser Testmanagement von Grund auf neu strukturiert. Klarer Prozess, nachvollziehbare Dokumentation — genau das, was wir brauchten.\"',
        'ref1-name': 'Führungskraft IT',
        'ref1-company': 'Versicherungsunternehmen, Hamburg',
        'ref2-text': '\"Die Anforderungsaufnahme war präzise und vollständig. Endlich ein Business Analyst, der wirklich zuhört und versteht.\"',
        'ref2-name': 'Projektleiterin',
        'ref2-company': 'Bundesbehörde, Berlin',
        'ref3-text': '\"Das Projekt lief erstmals im Zeitplan und im Budget. Herr Amini hat Klarheit in komplexe Strukturen gebracht.\"',
        'ref3-name': 'CTO',
        'ref3-company': 'Logistikunternehmen, Hamburg',
        'ref4-text': '\"Als Scrum Master hat er unser Team wirklich zusammengebracht. Professionell, empathisch und stets lösungsorientiert.\"',
        'ref4-name': 'Abteilungsleiter Digitalisierung',
        'ref4-company': 'Landesbehörde, Norddeutschland',
        'contact-label': 'Kontakt',
        'contact-title1': 'Kontakt',
        'contact-lead': 'Das erste Gespräch ist kostenlos und unverbindlich — 30 Minuten, in denen wir gemeinsam herausfinden, wie wir Ihr Projekt unterstützen können.',
        'contact-phone': 'Telefon',
        'contact-address': 'Adresse',
        'contact-response': 'Antwort innerhalb von 24 Stunden garantiert',
        'form-name-label': 'Name',
        'form-name-ph': 'Ihr vollständiger Name',
        'form-email-label': 'E-Mail-Adresse',
        'form-email-ph': 'ihre@email.de',
        'form-subject-label': 'Ich interessiere mich für',
        'form-opt0': 'Bitte wählen...',
        'form-opt1': 'Software-Qualitätssicherung (ISTQB)',
        'form-opt2': 'Anforderungsmanagement (IREB)',
        'form-opt3': 'IT-Projektmanagement (PMI)',
        'form-opt4': 'Scrum Leadership',
        'form-opt5': 'Sonstiges / Erstberatung',
        'form-msg-label': 'Ihre Nachricht',
        'form-msg-ph': 'Beschreiben Sie kurz Ihr Anliegen oder Ihr Projekt...',
        'form-submit': 'Nachricht senden',
        'form-sending': 'Wird gesendet…',
        'form-error': 'Fehler — bitte erneut versuchen',
        'form-note': '30 Minuten Erstgespräch — kostenlos & unverbindlich',
        'form-success-title': 'Vielen Dank!',
        'form-success-msg': 'Ihre Nachricht wurde gesendet — wir melden uns innerhalb von 24 Stunden.',
        'footer-tagline': 'IT-Projektmanagement & Qualitätssicherung aus Hamburg',
        'footer-nav-heading': 'Navigation',
        'footer-services-heading': 'Leistungen',
        'footer-contact-heading': 'Kontakt',
        'footer-svc1': 'Software-QS (ISTQB)',
        'footer-svc2': 'Anforderungsmanagement (IREB)',
        'footer-svc3': 'Projektmanagement (PMI)',
        'footer-svc4': 'Scrum Leadership',
        'footer-copyright': '© 2025 RAIT Solution · Ramin Amini · Alle Rechte vorbehalten',
        'footer-impressum': 'Impressum',
        'footer-datenschutz': 'Datenschutz',
    },
    en: {
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-references': 'References',
        'nav-contact': 'Get in touch',
        'nav-contact-short': 'Contact',
        'hero-badge': 'Hamburg · IT Consulting',
        'hero-line1': 'Delivering IT projects',
        'hero-line2': 'on time and on target.',
        'hero-subline': 'Certified IT project management & quality assurance from Hamburg — pragmatic, direct, with over 15 years of experience.',
        'hero-cta1': 'Free Initial Consultation',
        'hero-cta2': 'View Services',
        'card-years': 'Years Experience',
        'card-certified': 'Certified',
        'card-direct': 'Direct Engagement',
        'card-response': 'Response Time',
        'about-label': 'About RAIT Solution',
        'about-title': 'Quality meets structure.',
        'about-lead': 'The RAIT Solution team brings over 15 years of project experience in demanding IT initiatives across insurance, public administration and logistics.',
        'about-body': 'No dead weight, no detours — just focused work with your goal in sight. Certified, experienced and always directly accessible. We deliver solutions that truly work.',
        'about-v1': 'Experienced team — no junior staffing',
        'about-v2': 'Minimal overhead & lean processes',
        'about-v3': '30-minute initial consultation — free & non-binding',
        'about-v4': 'Transparent proposal with clearly defined scope',
        'about-btn': 'Get in touch',
        'about-quote': '\"We handle the structure — you focus on your business.\"',
        'about-quote-attr': '— The RAIT Solution Team',
        'services-label': 'Services',
        'services-title': 'What we deliver for you',
        'services-subtitle': 'Four certified competency areas — one goal: completing your project successfully.',
        'svc1-cert': 'ISTQB certified',
        'svc1-title': 'Software Quality Assurance',
        'svc1-desc': 'Systematic testing with clear defect documentation and demonstrable results. From test strategy to acceptance testing — structured and transparent.',
        'svc1-li1': 'Test planning & test strategy',
        'svc1-li2': 'Functional & non-functional testing',
        'svc1-li3': 'Acceptance testing & documentation',
        'svc2-cert': 'IREB certified',
        'svc2-title': 'Requirements Management',
        'svc2-desc': 'Business needs become precise, actionable specifications. We bridge the gap between business and IT — clear, complete, consistent.',
        'svc2-li1': 'Requirements engineering & analysis',
        'svc2-li2': 'Requirements & specification documents',
        'svc2-li3': 'Stakeholder management',
        'svc3-cert': 'PMI certified',
        'svc3-title': 'IT Project Management',
        'svc3-desc': 'Guiding complex IT projects to successful completion with agility and structure. Identify risks early, deploy resources optimally, keep stakeholders informed.',
        'svc3-li1': 'Project planning & control',
        'svc3-li2': 'Risk & change management',
        'svc3-li3': 'Budget & resource control',
        'svc4-cert': 'Scrum.org certified',
        'svc4-title': 'Scrum Leadership',
        'svc4-desc': 'Guiding and enabling teams through certified agile practices. As Scrum Masters we lay the groundwork for continuous improvement.',
        'svc4-li1': 'Scrum Master & Agile Coach',
        'svc4-li2': 'Sprint planning & retrospectives',
        'svc4-li3': 'Agile transformation',
        'process-label': 'Our Approach',
        'process-title': 'How we work',
        'process-subtitle': 'From first contact to successful completion — a clear, transparent process.',
        'step1-title': 'Discovery',
        'step1-desc': '30-minute free introductory call. We listen, understand your needs and answer all questions — no commitment required.',
        'step2-title': 'Analysis',
        'step2-desc': 'We review your project, identify risks and create a tailored proposal with a clearly defined scope.',
        'step3-title': 'Execution',
        'step3-desc': 'Structured project work with clear communication. You are always informed — no surprises, no unnecessary overhead.',
        'step4-title': 'Result',
        'step4-desc': 'Demonstrable results, on time and on budget. With complete documentation and a clean handover.',
        'ref-label': 'References',
        'ref-title': 'Client Testimonials',
        'ref-subtitle': 'Projects in insurance, public administration and logistics — successfully completed.',
        'ref1-text': '\"Mr. Amini completely restructured our test management. Clear process, traceable documentation — exactly what we needed.\"',
        'ref1-name': 'IT Executive',
        'ref1-company': 'Insurance Company, Hamburg',
        'ref2-text': '\"The requirements gathering was precise and thorough. Finally a business analyst who truly listens and understands.\"',
        'ref2-name': 'Project Manager',
        'ref2-company': 'Federal Agency, Berlin',
        'ref3-text': '\"The project ran on schedule and within budget for the first time. Mr. Amini brought clarity to complex structures.\"',
        'ref3-name': 'CTO',
        'ref3-company': 'Logistics Company, Hamburg',
        'ref4-text': '\"As Scrum Master he truly brought our team together. Professional, empathetic and always solution-oriented.\"',
        'ref4-name': 'Head of Digitalization',
        'ref4-company': 'State Agency, Northern Germany',
        'contact-label': 'Contact',
        'contact-title1': 'Contact',
        'contact-lead': 'The first conversation is free and non-binding — 30 minutes to find out together how we can support your project.',
        'contact-phone': 'Phone',
        'contact-address': 'Address',
        'contact-response': 'Response within 24 hours guaranteed',
        'form-name-label': 'Name',
        'form-name-ph': 'Your full name',
        'form-email-label': 'Email Address',
        'form-email-ph': 'your@email.com',
        'form-subject-label': 'I am interested in',
        'form-opt0': 'Please select...',
        'form-opt1': 'Software Quality Assurance (ISTQB)',
        'form-opt2': 'Requirements Management (IREB)',
        'form-opt3': 'IT Project Management (PMI)',
        'form-opt4': 'Scrum Leadership',
        'form-opt5': 'Other / Initial Consultation',
        'form-msg-label': 'Your message',
        'form-msg-ph': 'Briefly describe your request or project...',
        'form-submit': 'Send message',
        'form-sending': 'Sending…',
        'form-error': 'Error — please try again',
        'form-note': '30-minute initial consultation — free & non-binding',
        'form-success-title': 'Thank you!',
        'form-success-msg': 'Your message has been sent — we will get back to you within 24 hours.',
        'footer-tagline': 'IT Project Management & Quality Assurance from Hamburg',
        'footer-nav-heading': 'Navigation',
        'footer-services-heading': 'Services',
        'footer-contact-heading': 'Contact',
        'footer-svc1': 'Software QA (ISTQB)',
        'footer-svc2': 'Requirements Mgmt (IREB)',
        'footer-svc3': 'Project Management (PMI)',
        'footer-svc4': 'Scrum Leadership',
        'footer-copyright': '© 2025 RAIT Solution · Ramin Amini · All rights reserved',
        'footer-impressum': 'Legal Notice',
        'footer-datenschutz': 'Privacy Policy',
    }
};

let currentLang = localStorage.getItem('lang') || 'de';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const text = translations[lang][key];
        if (text !== undefined) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const text = translations[lang][key];
        if (text !== undefined) el.placeholder = text;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(currentLang);

// Scroll progress bar
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    scrollProgress.style.width = pct + '%';
}, { passive: true });

// Navigation: scrolled state + hide on scroll down (mobile)
const nav = document.getElementById('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    nav.classList.toggle('scrolled', currentY > 40);

    if (currentY > 80) {
        nav.classList.toggle('nav--hidden', currentY > lastScrollY);
    } else {
        nav.classList.remove('nav--hidden');
    }

    lastScrollY = currentY;
}, { passive: true });

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
});

document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('is-open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)) {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
    }
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
    });
});

// Active nav link on scroll
const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinkEls.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { passive: true });

// Scroll-triggered fade-in animations
const animateEls = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-animate]'));
        const index    = siblings.indexOf(entry.target);

        setTimeout(() => {
            entry.target.classList.add('is-visible');
        }, index * 120);

        observer.unobserve(entry.target);
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

animateEls.forEach(el => observer.observe(el));

// Animated number counters in hero cards
function animateCounter(el) {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1500;
    const start    = performance.now();

    function step(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
    });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

// Contact form AJAX with success message
const contactForm   = document.getElementById('contactForm');
const formSuccess   = document.getElementById('formSuccess');
const formSubmitBtn = document.getElementById('formSubmit');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formSubmitBtn.textContent = translations[currentLang]['form-sending'];
        formSubmitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                contactForm.reset();
                formSubmitBtn.style.display = 'none';
                formSuccess.classList.add('is-visible');
            } else {
                formSubmitBtn.textContent = translations[currentLang]['form-error'];
                formSubmitBtn.disabled = false;
            }
        } catch {
            formSubmitBtn.textContent = translations[currentLang]['form-error'];
            formSubmitBtn.disabled = false;
        }
    });
}

// Smooth-scroll for all anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
