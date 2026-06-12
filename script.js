const phrasesMap = {
    id: ["Fullstack Developer.", "Integrator API."],
    en: ["Fullstack Developer.", "API Integrator."]
};
let phrases = phrasesMap.id;
let currentPhraseIndex = 0; let currentCharIndex = 0; let isDeleting = false; let typeSpeed = 100;

const translations = {
    id: {
        nav_home: "Beranda", nav_about: "Tentang", nav_skills: "Keahlian", nav_projects: "Proyek", nav_contact: "Kontak",
        hero_greeting: "Halo!, Saya", 
        hero_summary: "Lebih dari 5 tahun pengalaman membangun solusi full-stack, mulai dari antarmuka pengguna yang interaktif hingga solusi backend skala besar dan database kompleks. Berfokus pada kinerja, keamanan, dan skalabilitas.",
        btn_projects: "Lihat Proyek", btn_whatsapp: "Hubungi via WA", scroll_down: "Gulir ke bawah",
        about_title: "Tentang Saya", about_desc: "<p>Saya adalah seorang <strong>Software Developer</strong> yang telah mendedikasikan lebih dari 5 tahun untuk menciptakan solusi perangkat lunak yang andal untuk sektor pemerintahan maupun swasta.</p><p>Saya berspesialisasi di sisi <em>back-end</em>, mulai dari merancang skema database (Oracle/PostgreSQL) untuk memproses <em>big data</em>, membangun integrasi API berstandar internasional (seperti IATA NDC), hingga mengamankan ekosistem aplikasi melalui <em>Single Sign-On</em> (Keycloak).</p><p>Saya selalu antusias memecahkan masalah sistem yang rumit dan memastikan bahwa kode yang saya tulis dapat dieksekusi dengan efisien dan didistribusikan secara aman menggunakan lingkungan <em>Docker</em> dan <em>Linux</em>.</p>",
        stat_exp: "Tahun Pengalaman", stat_projects: "Proyek Skala Enterprise", stat_quality: "Komitmen Kualitas",
        skills_title: "Keahlian Teknis",
        skill_frontend_title: "Frontend Development", skill_frontend_desc: "Membangun antarmuka web yang responsif dan interaktif menggunakan HTML, CSS, dan JavaScript.",
        skill_backend_title: "Back-End & API", skill_backend_desc: "Pengembangan solusi RESTful API yang aman dan terukur.",
        skill_db_title: "Database Management", skill_db_desc: "Desain relasi, optimasi query, Stored Procedures & Triggers.",
        skill_devops_title: "DevOps & Keamanan", skill_devops_desc: "Distribusi aplikasi terisolasi dan manajemen otentikasi tersentralisasi.",
        projects_title: "Rekam Jejak Proyek", p1_title: "Integrasi API Maskapai (NDC)", p1_desc: "Mengintegrasikan standar IATA New Distribution Capability (NDC) API untuk memodifikasi layanan tambahan penerbangan. Diimplementasikan menggunakan Flask dan Bearer Token yang aman.",
        p2_title: "Super Apps Puskeu Polri", p2_desc: "Membangun 6 modul ekosistem manajemen finansial instansi pemerintahan. Merancang arsitektur DBMS untuk otomasi kalkulasi data personel secara efisien dan mengamankan aplikasi via SSO Keycloak.",
        p3_title: "Portal Royalti Musik", p3_desc: "Membangun portal manajemen royalti dengan sistem Role-Based Access Control (RBAC). Membuat skrip otomasi ekstraksi data CSV untuk rekapitulasi pendapatan dan penarikan dana bulanan.",
        p4_title: "Platform Edukasi Yotowawa", p4_desc: "Membangun platform linguistik terpadu untuk digitalisasi dan translasi bahasa daerah (Meher, Woirata) yang dilengkapi dengan sistem Text-to-Speech real-time dan modul interaktif.",
        view_detail: "Selengkapnya", gallery_title: "Galeri Antarmuka & Ekplorasi UI Lainnya",
        contact_title: "Mari Berkolaborasi", contact_desc: "Saya selalu terbuka untuk mendiskusikan peluang baru, tantangan pengembangan backend, atau potensi kolaborasi dalam pengembangan perangkat lunak.",
        btn_email: "Kirim Email", btn_wa_large: "Chat WhatsApp", footer_text: "© 2026 Mahmudin. Dibangun dengan fokus pada efisiensi & desain minimalis.",
        form_name: "Nama", form_email: "Email", form_subject: "Subjek", form_message: "Pesan", btn_send: "Kirim Pesan"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "Hello!, I am", 
        hero_summary: "Over 5 years of experience building full-stack solutions, from interactive user interfaces to large-scale backend solutions and complex databases. Focused on performance, security, and scalability.",
        btn_projects: "View Projects", btn_whatsapp: "Contact via WA", scroll_down: "Scroll down",
        about_title: "About Me", about_desc: "<p>I am a <strong>Software Developer</strong> who has dedicated over 5 years to creating reliable software solutions for both government and private sectors.</p><p>I specialize in the <em>back-end</em>, from designing relational database schemas (Oracle/PostgreSQL) for <em>big data</em> processing, building international standard API integrations (such as IATA NDC), to securing application ecosystems through <em>Single Sign-On</em> (Keycloak).</p><p>I am always enthusiastic about solving complex system problems and ensuring that the code I write is executed efficiently and distributed securely using <em>Docker</em> and <em>Linux</em> environments.</p>",
        stat_exp: "Years Experience", stat_projects: "Enterprise Projects", stat_quality: "Quality Commitment",
        skills_title: "Technical Skills",
        skill_frontend_title: "Frontend Development", skill_frontend_desc: "Building responsive and interactive web interfaces using HTML, CSS, and JavaScript.",
        skill_backend_title: "Back-End & API", skill_backend_desc: "Development of secure and scalable RESTful API solutions.",
        skill_db_title: "Database Management", skill_db_desc: "Relational design, query optimization, Stored Procedures & Triggers.",
        skill_devops_title: "DevOps & Security", skill_devops_desc: "Isolated application distribution and centralized authentication management.",
        projects_title: "Project Track Record", p1_title: "Airline API Integration (NDC)", p1_desc: "Integrating IATA New Distribution Capability (NDC) API standards to modify additional flight services. Implemented using Flask and secure Bearer Tokens.",
        p2_title: "Super Apps Puskeu Polri", p2_desc: "Building a 6-module financial management ecosystem for government agencies. Designing DBMS architecture for efficient personnel data calculation and securing applications via SSO Keycloak.",
        p3_title: "Music Royalty Portal", p3_desc: "Building a royalty management portal with Role-Based Access Control (RBAC). Creating automated CSV extraction scripts for monthly revenue recap and withdrawals.",
        p4_title: "Yotowawa Education Platform", p4_desc: "Building an integrated linguistic platform for digitization and translation of local languages (Meher, Woirata) equipped with real-time Text-to-Speech and interactive modules.",
        view_detail: "Read More", gallery_title: "Interface Gallery & Other UI Explorations",
        contact_title: "Let's Collaborate", contact_desc: "I am always open to discussing new opportunities, backend development challenges, or potential collaborations in software development.",
        btn_email: "Send Email", btn_wa_large: "Chat WhatsApp", footer_text: "© 2026 Mahmudin. Built with a focus on efficiency & minimalist design.",
        form_name: "Name", form_email: "Email", form_subject: "Subject", form_message: "Message", btn_send: "Send Message"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update Active Button UI
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update Typewriter Phrases
    phrases = phrasesMap[lang];
    currentPhraseIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
}

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--; typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++; typeSpeed = 100;
    }
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true; typeSpeed = 2000;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false; currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; typeSpeed = 500;
    }
    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => { 
    const savedLang = localStorage.getItem('preferredLanguage') || 'id';
    changeLanguage(savedLang);
    if(document.getElementById('typewriter')){ setTimeout(typeWriter, 1000); } 

    // Logika Hamburger Menu Mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            
            // Ganti ikon bars ke times (X) saat menu terbuka
            icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
        });

        // Tutup menu otomatis saat salah satu link navigasi diklik
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    const btnWA = document.getElementById('btnWA');
    const btnEmail = document.getElementById('btnEmail');

    if (contactForm && btnWA && btnEmail) {
        const handleSend = (type) => {
            // Validasi formulir sebelum mengirim
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const waNumber = "6285798835322";
            const emailTarget = "mahmudin222@gmail.com";
            
            if (type === 'wa') {
                const waMessage = `*Pesan Baru dari Portfolio*\n\n*Nama:* ${name}\n*Email:* ${email}\n*Subjek:* ${subject}\n\n*Pesan:*\n${message}`;
                const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
                window.open(waUrl, '_blank');
            } else {
                const emailBody = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTarget}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
                window.open(gmailUrl, '_blank');
            }
        };

        btnWA.addEventListener('click', () => handleSend('wa'));
        btnEmail.addEventListener('click', () => handleSend('email'));

        // Mencegah submit default jika user menekan tombol Enter di keyboard
        contactForm.addEventListener('submit', (e) => e.preventDefault());
    }

    // Modal Galeri
    const modal = document.getElementById("galleryModal");
    if (modal) {
        const modalImg = document.getElementById("modalImg");
        const closeBtn = document.querySelector(".modal-gallery-close");

        document.querySelectorAll('.gallery-grid img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = "flex";
                modalImg.src = img.src;
            });
        });

        if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
        modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
    }
});

const revealElements = document.querySelectorAll('.scroll-reveal');
const revealCallback = (entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); };
const revealObserver = new IntersectionObserver(revealCallback, { root: null, rootMargin: '0px', threshold: 0.15 });
revealElements.forEach(el => { revealObserver.observe(el); });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); const targetId = this.getAttribute('href'); const targetElement = document.querySelector(targetId);
        if (targetElement) { window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' }); }
    });
});

// Mouse Parallax Effect untuk Hero Section
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return; // Nonaktifkan di mobile untuk performa
    
    const hero = document.getElementById('beranda');
    if (!hero) return;

    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 40;
    const moveY = (clientY - centerY) / 40;
    
    const content = document.querySelector('.hero-content');
    const graphic = document.querySelector('.hero-graphic');
    const bgParallax = document.querySelector('.hero-bg-parallax');
    
    if (content) content.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (graphic) graphic.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
    if (bgParallax) bgParallax.style.transform = `translate(${-moveX * 0.8}px, ${-moveY * 0.8}px)`;
});
