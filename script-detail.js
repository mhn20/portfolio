// script-detail.js
const translations = {
    id: {
        detail_back: "Kembali",
        footer_rights: "© 2026 Mahmudin. All rights reserved.",
        // Database Page
        db_title: "Database Management & Design",
        db_subtitle: "Mengelola data sebagai aset paling berharga dengan integritas dan kecepatan tinggi.",
        db_info_title: "Strategi Pengelolaan Data",
        db_info_desc: "Saya percaya bahwa database yang dirancang dengan baik adalah jantung dari setiap sistem yang sukses. Pengalaman saya mencakup desain skema relasional yang kompleks, migrasi data skala besar tanpa downtime, serta penulisan prosedur tersimpan (Stored Procedures) dan pemicu (Triggers) untuk otomasi logika bisnis di level database.",
        db_card1_title: "Query Optimization",
        db_card1_desc: "Menganalisis execution plan, mengimplementasikan indexing yang tepat, dan menulis ulang query yang tidak efisien untuk meningkatkan performa sistem secara keseluruhan.",
        db_card2_title: "Schema Design",
        db_card2_desc: "Merancang normalisasi data untuk menjaga integritas, namun tetap mempertimbangkan denormalisasi strategis untuk kebutuhan reporting dan Big Data.",
        db_card3_title: "Backup & Recovery",
        db_card3_desc: "Menyusun strategi pencadangan data berkala dan prosedur pemulihan bencana (Disaster Recovery) untuk memastikan ketersediaan data 24/7.",
        db_workflow_title: "Alur Kerja Database",
        db_step1_title: "Analisis Kebutuhan Data",
        db_step1_desc: "Memahami entitas dan relasi bisnis untuk menciptakan ERD (Entity Relationship Diagram) yang akurat.",
        db_step2_title: "Implementasi & Tuning",
        db_step2_desc: "Membangun struktur fisik database dan melakukan stress-test pada beban kerja tinggi.",
        db_step3_title: "Monitoring & Audit",
        db_step3_desc: "Memantau kesehatan database secara real-time dan melakukan audit keamanan berkala.",
        // API Page
        api_title: "Back-End & API Development",
        api_subtitle: "Merancang fondasi digital yang kuat, aman, dan berperforma tinggi.",
        api_info_title: "Ringkasan Keahlian",
        api_info_desc: "Saya memiliki spesialisasi dalam membangun arsitektur server-side yang menangani logika bisnis kompleks dan integrasi data skala besar. Fokus utama saya adalah menciptakan API yang tidak hanya fungsional, tetapi juga terdokumentasi dengan baik, aman dengan standar industri, dan mudah untuk dikembangkan di masa depan.",
        api_card1_title: "Optimasi Kinerja",
        api_card1_desc: "Implementasi caching, optimasi query database, dan manajemen resource server untuk memastikan waktu respon API tetap di bawah 200ms bahkan dalam beban tinggi.",
        api_card2_title: "Keamanan API",
        api_card2_desc: "Menerapkan standar keamanan seperti OAuth2, JWT (JSON Web Tokens), dan integrasi dengan Keycloak untuk autentikasi dan otorisasi yang aman.",
        api_card3_title: "Integrasi Pihak Ketiga",
        api_card3_desc: "Pengalaman luas dalam mengintegrasikan berbagai API pihak ketiga, termasuk sistem pembayaran, layanan logistik, dan standar penerbangan internasional (IATA NDC).",
        api_workflow_title: "Metode Kerja",
        api_step1_title: "Perancangan Arsitektur",
        api_step1_desc: "Mendefinisikan skema data and alur logika bisnis sebelum penulisan kode dimulai.",
        api_step2_title: "Pengembangan & Testing",
        api_step2_desc: "Coding dengan prinsip Clean Code dan melakukan Unit Testing secara berkala.",
        api_step3_title: "Deployment & Monitoring",
        api_step3_desc: "Otomasi deployment menggunakan Docker dan memantau kesehatan server secara real-time.",
        // DevOps Page
        devops_title: "DevOps & Security Ops",
        devops_subtitle: "Menjamin stabilitas aplikasi melalui infrastruktur otomatis dan keamanan berlapis.",
        devops_info_title: "Visi Infrastruktur",
        devops_info_desc: "Dalam dunia pengembangan modern, kecepatan distribusi aplikasi harus diimbangi dengan keamanan yang ketat. Saya fokus pada kontainerisasi aplikasi menggunakan Docker untuk memastikan konsistensi lingkungan, serta mengelola sistem identitas terpusat (IAM) untuk mengamankan akses data sensitif di seluruh platform.",
        devops_card1_title: "Kontainerisasi",
        devops_card1_desc: "Mengemas aplikasi dan dependensinya ke dalam container Docker agar dapat berjalan dengan identik di lingkungan pengembangan maupun produksi.",
        devops_card2_title: "Identity Management",
        devops_card2_desc: "Implementasi Keycloak sebagai solusi Single Sign-On (SSO) untuk manajemen pengguna, autentikasi multifaktor (MFA), dan otorisasi berbasis peran (RBAC).",
        devops_card3_title: "Server Hardening",
        devops_card3_desc: "Konfigurasi keamanan server Linux, firewall, dan enkripsi SSL/TLS untuk melindungi sistem dari serangan eksternal dan kebocoran data.",
        devops_workflow_title: "Metodologi DevOps",
        devops_step1_title: "Automated Environment",
        devops_step1_desc: "Mengatur script setup otomatis agar server siap digunakan dalam hitungan menit secara konsisten.",
        devops_step2_title: "Secure Auth Setup",
        devops_step2_desc: "Mengintegrasikan aplikasi dengan protokol keamanan standar seperti OpenID Connect dan SAML.",
        devops_step3_title: "Continuous Monitoring",
        devops_step3_desc: "Menerapkan sistem logging dan alert untuk mendeteksi anomali keamanan atau kegagalan sistem secara dini.",
        // Frontend Page
        frontend_title: "Frontend Development",
        frontend_subtitle: "Membangun antarmuka pengguna yang responsif, interaktif, dan berorientasi pada pengalaman pengguna.",
        frontend_info_title: "Filosofi Antarmuka",
        frontend_info_desc: "Saya berfokus pada pembuatan antarmuka yang bersih dan intuitif. Menggunakan standar web modern (HTML5, CSS3, dan ES6+), saya memastikan aplikasi dapat diakses dengan baik di berbagai perangkat, mulai dari ponsel cerdas hingga desktop layar lebar.",
        frontend_card1_title: "Responsive Design",
        frontend_card1_desc: "Menggunakan CSS Grid, Flexbox, dan media queries untuk memastikan tata letak yang adaptif dan optimal di semua ukuran layar.",
        frontend_card2_title: "Interaktivitas Modern",
        frontend_card2_desc: "Mengimplementasikan logika sisi klien yang kompleks dengan JavaScript murni atau framework untuk meningkatkan keterlibatan pengguna.",
        frontend_card3_title: "Aksesibilitas & SEO",
        frontend_card3_desc: "Menulis kode semantik yang ramah terhadap mesin pencari dan perangkat pembaca layar (screen readers).",
        frontend_workflow_title: "Metodologi Frontend",
        frontend_step1_title: "Wireframing & Prototyping",
        frontend_step1_desc: "Merancang tata letak dan alur navigasi sebelum mulai menulis kode CSS.",
        frontend_step2_title: "Iterasi Komponen",
        frontend_step2_desc: "Membangun elemen UI secara modular agar mudah dikelola dan digunakan kembali.",
        frontend_step3_title: "Optimasi Aset",
        frontend_step3_desc: "Mengompresi gambar dan meminimalkan ukuran file kode untuk waktu muat yang instan.",
        // Project Airline Page
        p_airline_title: "Integrasi API Maskapai (NDC)",
        p_airline_subtitle: "Implementasi standar IATA NDC untuk modernisasi distribusi layanan penerbangan.",
        p_airline_info_title: "Detail Proyek",
        p_airline_info_desc: "Proyek ini melibatkan pengembangan middleware menggunakan Flask untuk menghubungkan sistem internal dengan API NDC dari berbagai maskapai internasional. Fokus utamanya adalah memfasilitasi pemesanan layanan tambahan (ancillaries) seperti pemilihan kursi, bagasi tambahan, dan asuransi melalui protokol XML/JSON yang aman.",
        p_airline_card1_title: "Arsitektur Middleware",
        p_airline_card1_desc: "Membangun lapisan abstraksi yang menstandarisasi berbagai format data maskapai menjadi satu skema internal yang konsisten.",
        p_airline_card2_title: "Keamanan Token",
        p_airline_card2_desc: "Mengelola autentikasi berbasis Bearer Token dan enkripsi data sensitif penumpang selama transmisi API.",
        p_airline_card3_title: "Sinkronisasi Data",
        p_airline_card3_desc: "Memastikan ketersediaan data secara real-time antara sistem maskapai dan database internal Oracle.",
        p_airline_gallery_title: "Galeri Antarmuka Proyek",
        p_airline_workflow_title: "Proses Implementasi",
        p_airline_step1_title: "Analisis IATA NDC",
        p_airline_step1_desc: "Mempelajari spesifikasi schema XML/JSON yang disediakan oleh provider maskapai.",
        p_airline_step2_title: "Pengembangan Endpoint",
        p_airline_step2_desc: "Membangun REST API menggunakan Flask untuk menangani request dari sistem front-end.",
        p_airline_step3_title: "Uji Coba & Integrasi",
        p_airline_step3_desc: "Melakukan integrasi testing end-to-end dan validasi data transaksi.",
        // Project Puskeu Page
        p_puskeu_title: "Super Apps Puskeu Polri",
        p_puskeu_subtitle: "Ekosistem manajemen finansial terpadu untuk instansi kepolisian.",
        p_puskeu_info_title: "Detail Proyek",
        p_puskeu_info_desc: "Proyek ini mendigitalisasi proses bisnis di Pusat Keuangan (Puskeu) Polri melalui pengembangan 6 modul utama. Arsitektur sistem dirancang menggunakan kombinasi Laravel dan Django, dengan Oracle Database sebagai penyimpanan data terpusat yang menangani ribuan transaksi personel setiap harinya.",
        p_puskeu_card1_title: "Ekosistem Multi-Modul",
        p_puskeu_card1_desc: "Integrasi modul pengupahan, anggaran, hingga pelaporan pajak dalam satu dashboard terpusat.",
        p_puskeu_card2_title: "Otomasi DBMS",
        p_puskeu_card2_desc: "Implementasi logic kalkulasi kompleks di level Oracle untuk mempercepat rekapitulasi data personel secara otomatis.",
        p_puskeu_card3_title: "Keamanan SSO",
        p_puskeu_card3_desc: "Sentralisasi akun menggunakan Keycloak untuk memastikan akses yang aman dan efisien bagi seluruh personel.",
        p_puskeu_gallery_title: "Galeri Antarmuka Proyek",
        p_puskeu_workflow_title: "Tahapan Pengembangan",
        p_puskeu_step1_title: "Analisis Regulasi",
        p_puskeu_step1_desc: "Mempelajari aturan finansial instansi untuk memastikan akurasi perhitungan pada setiap modul.",
        p_puskeu_step2_title: "Arsitektur Database",
        p_puskeu_step2_desc: "Perancangan skema Oracle yang skalabel untuk menangani data historis finansial yang sangat besar.",
        p_puskeu_step3_title: "Audit Keamanan",
        p_puskeu_step3_desc: "Pengujian penetrasi dan pengaktifan Multi-Factor Authentication (MFA) via Keycloak.",
        p_puskeu_modules_title: "Modul Utama Sistem",
        p_puskeu_mod1_title: "Manajemen Pengupahan",
        p_puskeu_mod1_desc: "Otomasi kalkulasi gaji dan tunjangan personel berdasarkan pangkat dan jabatan.",
        p_puskeu_mod2_title: "Perencanaan Anggaran",
        p_puskeu_mod2_desc: "Penyusunan dan monitoring penyerapan anggaran secara real-time.",
        p_puskeu_mod3_title: "Pelaporan Pajak",
        p_puskeu_mod3_desc: "Integrasi data untuk pelaporan SPT Tahunan dan PPh Pasal 21 secara elektronik.",
        p_puskeu_mod4_title: "Pengelolaan Aset",
        p_puskeu_mod4_desc: "Inventarisasi dan pelacakan barang milik negara di lingkungan finansial.",
        p_puskeu_mod5_title: "Perjalanan Dinas",
        p_puskeu_mod5_desc: "Sistem pengajuan dan verifikasi pertanggungjawaban dana perjalanan dinas.",
        p_puskeu_mod6_title: "Dashboard Eksekutif",
        p_puskeu_mod6_desc: "Visualisasi data finansial strategis untuk mendukung pengambilan keputusan.",
        // Project Music Page
        p_music_title: "Portal Royalti Musik",
        p_music_subtitle: "Manajemen transparansi pendapatan karya musik berbasis RBAC.",
        p_music_info_title: "Ringkasan Proyek",
        p_music_info_desc: "Portal ini dirancang untuk memudahkan manajemen distribusi royalti bagi pencipta lagu dan produser. Fitur utama mencakup sistem Role-Based Access Control (RBAC) yang ketat dan otomasi pengolahan data mentah dari berbagai platform streaming menggunakan Python untuk memastikan keakuratan laporan keuangan.",
        p_music_card1_title: "Keamanan RBAC",
        p_music_card1_desc: "Memastikan akses data finansial hanya dapat dikelola oleh personil yang memiliki otorisasi sesuai peran mereka.",
        p_music_card2_title: "Otomasi Data CSV",
        p_music_card2_desc: "Skrip Python otomatis yang mengekstrak dan membersihkan data pendapatan bulanan dari berbagai sumber platform.",
        p_music_card3_title: "Transparansi Dana",
        p_music_card3_desc: "Sistem pelacakan real-time untuk penarikan dana (withdrawals) dan rekapitulasi pendapatan bulanan.",
        p_music_gallery_title: "Galeri Antarmuka Proyek",
        p_music_workflow_title: "Langkah Kerja",
        p_music_step1_title: "Analisis Struktur Data",
        p_music_step1_desc: "Menyelaraskan format laporan dari berbagai platform musik ke dalam skema MariaDB.",
        p_music_step2_title: "Pengembangan Skrip",
        p_music_step2_desc: "Pembuatan skrip otomasi menggunakan Python untuk mempercepat proses rekapitulasi data.",
        p_music_step3_title: "Portal Integration",
        p_music_step3_desc: "Integrasi back-end dengan dashboard antarmuka pengguna untuk visualisasi data.",
        // Project Yotowawa Page
        p_yotowawa_title: "Platform Edukasi Yotowawa",
        p_yotowawa_subtitle: "Digitalisasi bahasa daerah dan platform pembelajaran interaktif.",
        p_yotowawa_info_title: "Tujuan Proyek",
        p_yotowawa_info_desc: "Yotowawa adalah platform linguistik terpadu untuk digitalisasi dan translasi bahasa daerah Meher dan Woirata. Proyek ini mencakup pengembangan sistem Text-to-Speech (TTS) real-time dan modul pembelajaran interaktif untuk melestarikan kekayaan budaya lokal melalui teknologi web modern.",
        p_yotowawa_card1_title: "Digitalisasi Bahasa",
        p_yotowawa_card1_desc: "Penyimpanan kamus dan struktur tata bahasa daerah dalam database MySQL yang terstruktur.",
        p_yotowawa_card2_title: "Real-time TTS",
        p_yotowawa_card2_desc: "Implementasi teknologi Text-to-Speech untuk membantu pengguna mendengarkan pengucapan kata dalam bahasa daerah secara akurat.",
        p_yotowawa_card3_title: "Modul Interaktif",
        p_yotowawa_card3_desc: "Fitur kuis dan materi pembelajaran yang dirancang untuk menarik minat generasi muda dalam mempelajari bahasa daerah.",
        p_yotowawa_gallery_title: "Galeri Antarmuka Proyek",
        p_yotowawa_workflow_title: "Alur Pengembangan",
        p_yotowawa_step1_title: "Pengumpulan Data",
        p_yotowawa_step1_desc: "Bekerja sama dengan ahli bahasa untuk mengumpulkan database kata dan fonetik.",
        p_yotowawa_step2_title: "Penyusunan Sistem",
        p_yotowawa_step2_desc: "Membangun core platform menggunakan CodeIgniter dengan optimasi query yang cepat.",
        p_yotowawa_step3_title: "Uji Pengguna",
        p_yotowawa_step3_desc: "Melakukan pengujian langsung dengan komunitas lokal untuk validasi translasi dan audio."
    },
    en: {
        detail_back: "Back",
        footer_rights: "© 2026 Mahmudin. All rights reserved.",
        // Database Page
        db_title: "Database Management & Design",
        db_subtitle: "Managing data as the most valuable asset with integrity and high speed.",
        db_info_title: "Data Management Strategy",
        db_info_desc: "I believe that a well-designed database is the heart of every successful system. My experience includes complex relational schema design, large-scale data migration without downtime, and writing Stored Procedures and Triggers for business logic automation at the database level.",
        db_card1_title: "Query Optimization",
        db_card1_desc: "Analyzing execution plans, implementing proper indexing, and rewriting inefficient queries to improve overall system performance.",
        db_card2_title: "Schema Design",
        db_card2_desc: "Designing data normalization to maintain integrity, while still considering strategic denormalization for reporting and Big Data needs.",
        db_card3_title: "Backup & Recovery",
        db_card3_desc: "Developing periodic data backup strategies and Disaster Recovery procedures to ensure 24/7 data availability.",
        db_workflow_title: "Database Workflow",
        db_step1_title: "Data Requirements Analysis",
        db_step1_desc: "Understanding business entities and relationships to create accurate ERDs (Entity Relationship Diagrams).",
        db_step2_title: "Implementation & Tuning",
        db_step2_desc: "Building the physical database structure and performing stress-tests under high workloads.",
        db_step3_title: "Monitoring & Audit",
        db_step3_desc: "Real-time monitoring of database health and conducting periodic security audits.",
        // API Page
        api_title: "Back-End & API Development",
        api_subtitle: "Designing strong, secure, and high-performance digital foundations.",
        api_info_title: "Skills Summary",
        api_info_desc: "I specialize in building server-side architectures that handle complex business logic and large-scale data integration. My main focus is creating APIs that are not only functional but also well-documented, secure with industry standards, and easy to develop in the future.",
        api_card1_title: "Performance Optimization",
        api_card1_desc: "Implementing caching, database query optimization, and server resource management to ensure API response times stay below 200ms even under high load.",
        api_card2_title: "API Security",
        api_card2_desc: "Applying security standards such as OAuth2, JWT (JSON Web Tokens), and integration with Keycloak for secure authentication and authorization.",
        api_card3_title: "Third-Party Integration",
        api_card3_desc: "Extensive experience in integrating various third-party APIs, including payment systems, logistics services, and international aviation standards (IATA NDC).",
        api_workflow_title: "Work Method",
        api_step1_title: "Architecture Design",
        api_step1_desc: "Defining data schemas and business logic flows before code writing begins.",
        api_step2_title: "Development & Testing",
        api_step2_desc: "Coding with Clean Code principles and performing regular Unit Testing.",
        api_step3_title: "Deployment & Monitoring",
        api_step3_desc: "Automating deployment using Docker and monitoring server health in real-time.",
        // DevOps Page
        devops_title: "DevOps & Security Ops",
        devops_subtitle: "Ensuring application stability through automated infrastructure and layered security.",
        devops_info_title: "Infrastructure Vision",
        devops_info_desc: "In the modern development world, application distribution speed must be balanced with tight security. I focus on application containerization using Docker to ensure environment consistency, and managing centralized identity systems (IAM) to secure sensitive data access across the platform.",
        devops_card1_title: "Containerization",
        devops_card1_desc: "Packaging applications and their dependencies into Docker containers to run identically in development and production environments.",
        devops_card2_title: "Identity Management",
        devops_card2_desc: "Implementing Keycloak as a Single Sign-On (SSO) solution for user management, multi-factor authentication (MFA), and role-based access control (RBAC).",
        devops_card3_title: "Server Hardening",
        devops_card3_desc: "Configuring Linux server security, firewalls, and SSL/TLS encryption to protect systems from external attacks and data leaks.",
        devops_workflow_title: "DevOps Methodology",
        devops_step1_title: "Automated Environment",
        devops_step1_desc: "Setting up automated setup scripts so the server is ready to use in minutes consistently.",
        devops_step2_title: "Secure Auth Setup",
        devops_step2_desc: "Integrating applications with standard security protocols like OpenID Connect and SAML.",
        devops_step3_title: "Continuous Monitoring",
        devops_step3_desc: "Applying logging and alert systems to early detect security anomalies or system failures.",
        // Frontend Page
        frontend_title: "Frontend Development",
        frontend_subtitle: "Building responsive, interactive, and user-experience oriented interfaces.",
        frontend_info_title: "Interface Philosophy",
        frontend_info_desc: "I focus on creating clean and intuitive interfaces. Using modern web standards (HTML5, CSS3, and ES6+), I ensure applications are well-accessible across various devices, from smartphones to large desktop screens.",
        frontend_card1_title: "Responsive Design",
        frontend_card1_desc: "Utilizing CSS Grid, Flexbox, and media queries to ensure adaptive and optimal layouts across all screen sizes.",
        frontend_card2_title: "Modern Interactivity",
        frontend_card2_desc: "Implementing complex client-side logic with vanilla JavaScript or frameworks to enhance user engagement.",
        frontend_card3_title: "Accessibility & SEO",
        frontend_card3_desc: "Writing semantic code that is friendly to search engines and screen readers.",
        frontend_workflow_title: "Frontend Methodology",
        frontend_step1_title: "Wireframing & Prototyping",
        frontend_step1_desc: "Designing layouts and navigation flows before starting to write CSS code.",
        frontend_step2_title: "Component Iteration",
        frontend_step2_desc: "Building UI elements modularly for easy management and reusability.",
        frontend_step3_title: "Asset Optimization",
        frontend_step3_desc: "Compressing images and minimizing code file sizes for instant loading times.",
        // Project Airline Page
        p_airline_title: "Airline API Integration (NDC)",
        p_airline_subtitle: "Implementing IATA NDC standards to modernize flight service distribution.",
        p_airline_info_title: "Project Details",
        p_airline_info_desc: "This project involved developing middleware using Flask to connect internal systems with NDC APIs from various international airlines. The primary focus was facilitating ancillary bookings such as seat selection, extra baggage, and insurance via secure XML/JSON protocols.",
        p_airline_card1_title: "Middleware Architecture",
        p_airline_card1_desc: "Building an abstraction layer that standardizes various airline data formats into a single consistent internal schema.",
        p_airline_card2_title: "Token Security",
        p_airline_card2_desc: "Managing Bearer Token-based authentication and encrypting sensitive passenger data during API transmission.",
        p_airline_card3_title: "Data Synchronization",
        p_airline_card3_desc: "Ensuring real-time data availability between airline systems and internal Oracle databases.",
        p_airline_gallery_title: "Project Interface Gallery",
        p_airline_workflow_title: "Implementation Process",
        p_airline_step1_title: "IATA NDC Analysis",
        p_airline_step1_desc: "Studying XML/JSON schema specifications provided by airline providers.",
        p_airline_step2_title: "Endpoint Development",
        p_airline_step2_desc: "Building REST APIs using Flask to handle requests from front-end systems.",
        p_airline_step3_title: "Testing & Integration",
        p_airline_step3_desc: "Conducting end-to-end integration testing and transaction data validation.",
        // Project Puskeu Page
        p_puskeu_title: "Super Apps Puskeu Polri",
        p_puskeu_subtitle: "Integrated financial management ecosystem for the police finance center.",
        p_puskeu_info_title: "Project Details",
        p_puskeu_info_desc: "This project digitizes business processes at the Polri Finance Center (Puskeu) through the development of 6 main modules. The architecture combines Laravel and Django, with Oracle Database as the centralized storage handling thousands of daily personnel transactions.",
        p_puskeu_card1_title: "Multi-Module Ecosystem",
        p_puskeu_card1_desc: "Integration of payroll, budgeting, and tax reporting modules into a single centralized dashboard.",
        p_puskeu_card2_title: "DBMS Automation",
        p_puskeu_card2_desc: "Implementation of complex calculation logic at the Oracle level to automate and speed up personnel data recap.",
        p_puskeu_card3_title: "SSO Security",
        p_puskeu_card3_desc: "Centralizing accounts using Keycloak to ensure secure and efficient access for all personnel.",
        p_puskeu_gallery_title: "Project Interface Gallery",
        p_puskeu_workflow_title: "Development Phases",
        p_puskeu_step1_title: "Regulation Analysis",
        p_puskeu_step1_desc: "Studying agency financial regulations to ensure calculation accuracy in every module.",
        p_puskeu_step2_title: "Database Architecture",
        p_puskeu_step2_desc: "Designing scalable Oracle schemas to handle massive historical financial data.",
        p_puskeu_step3_title: "Security Audit",
        p_puskeu_step3_desc: "Penetration testing and enabling Multi-Factor Authentication (MFA) via Keycloak.",
        p_puskeu_modules_title: "System Main Modules",
        p_puskeu_mod1_title: "Payroll Management",
        p_puskeu_mod1_desc: "Automation of salary and allowance calculations based on rank and position.",
        p_puskeu_mod2_title: "Budget Planning",
        p_puskeu_mod2_desc: "Preparation and real-time monitoring of budget absorption.",
        p_puskeu_mod3_title: "Tax Reporting",
        p_puskeu_mod3_desc: "Data integration for electronic annual tax return and Article 21 income tax reporting.",
        p_puskeu_mod4_title: "Asset Management",
        p_puskeu_mod4_desc: "Inventory and tracking of state-owned assets within the financial environment.",
        p_puskeu_mod5_title: "Official Travel",
        p_puskeu_mod5_desc: "System for submission and verification of official travel fund accountability.",
        p_puskeu_mod6_title: "Executive Dashboard",
        p_puskeu_mod6_desc: "Visualization of strategic financial data to support decision making.",
        // Project Music Page
        p_music_title: "Music Royalty Portal",
        p_music_subtitle: "Transparency management for music work revenue based on RBAC.",
        p_music_info_title: "Project Summary",
        p_music_info_desc: "This portal is designed to facilitate royalty distribution management for songwriters and producers. Key features include a strict Role-Based Access Control (RBAC) system and automated processing of raw data from various streaming platforms using Python to ensure financial report accuracy.",
        p_music_card1_title: "RBAC Security",
        p_music_card1_desc: "Ensuring financial data access can only be managed by authorized personnel according to their roles.",
        p_music_card2_title: "CSV Data Automation",
        p_music_card2_desc: "Automated Python scripts that extract and clean monthly revenue data from multiple platform sources.",
        p_music_card3_title: "Fund Transparency",
        p_music_card3_desc: "Real-time tracking system for withdrawals and monthly revenue recapitulation.",
        p_music_gallery_title: "Project Interface Gallery",
        p_music_workflow_title: "Work Steps",
        p_music_step1_title: "Data Structure Analysis",
        p_music_step1_desc: "Aligning report formats from various music platforms into a MariaDB schema.",
        p_music_step2_title: "Script Development",
        p_music_step2_desc: "Creating automation scripts using Python to speed up the data recapitulation process.",
        p_music_step3_title: "Portal Integration",
        p_music_step3_desc: "Back-end integration with the user interface dashboard for data visualization.",
        // Project Yotowawa Page
        p_yotowawa_title: "Yotowawa Education Platform",
        p_yotowawa_subtitle: "Local language digitization and interactive learning platform.",
        p_yotowawa_info_title: "Project Objectives",
        p_yotowawa_info_desc: "Yotowawa is an integrated linguistic platform for the digitization and translation of Meher and Woirata local languages. The project includes real-time Text-to-Speech (TTS) systems and interactive learning modules to preserve local cultural heritage through modern web technology.",
        p_yotowawa_card1_title: "Language Digitization",
        p_yotowawa_card1_desc: "Storing dictionaries and local grammar structures in a structured MySQL database.",
        p_yotowawa_card2_title: "Real-time TTS",
        p_yotowawa_card2_desc: "Implementation of Text-to-Speech technology to help users accurately hear word pronunciations in local languages.",
        p_yotowawa_card3_title: "Interactive Modules",
        p_yotowawa_card3_desc: "Quiz features and learning materials designed to attract young people to learn local languages.",
        p_yotowawa_gallery_title: "Project Interface Gallery",
        p_yotowawa_workflow_title: "Development Flow",
        p_yotowawa_step1_title: "Data Collection",
        p_yotowawa_step1_desc: "Collaborating with linguists to collect word and phonetic databases.",
        p_yotowawa_step2_title: "System Construction",
        p_yotowawa_step2_desc: "Building the core platform using CodeIgniter with fast query optimization.",
        p_yotowawa_step3_title: "User Testing",
        p_yotowawa_step3_desc: "Conducting live testing with local communities to validate translations and audio."
    }
};

function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update Active Button UI
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Language Initializer
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);

    // Animasi masuk untuk elemen-elemen detail
    const elements = document.querySelectorAll('.detail-card, .info-section, .step, .module-item, .gallery-grid img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Modal Galeri Sederhana Terpusat
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

        if (closeBtn) {
            closeBtn.onclick = () => modal.style.display = "none";
        }
        modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
    }

    // Magnifying Glass Logic for Gallery Images
    const magnifyingGlass = document.getElementById('magnifyingGlass');
    // Aktifkan kaca pembesar hanya pada layar yang lebih besar (misalnya, desktop)
    // dan jika elemen kaca pembesar ada di halaman HTML saat ini.
    if (magnifyingGlass && window.innerWidth >= 768) {
        document.querySelectorAll('.gallery-grid img').forEach(img => {
            // Simpan gaya kursor asli
            const originalCursor = img.style.cursor;

            img.addEventListener('mouseover', (e) => {
                magnifyingGlass.style.display = 'block';
                // Ubah kursor untuk menunjukkan area yang bisa diperbesar
                img.style.cursor = 'none'; 

                // Coba dapatkan gambar resolusi lebih tinggi untuk kualitas zoom yang lebih baik
                // Ini spesifik untuk URL Unsplash dengan parameter 'w' dan 'q'
                const fullSrc = img.src.replace(/w=\d+&q=\d+/, 'w=1200&q=80'); 
                magnifyingGlass.style.backgroundImage = `url('${fullSrc}')`;
                
                // Tentukan faktor zoom
                const zoomFactor = 2; // Sesuaikan tingkat zoom di sini (misalnya, 2 untuk 200%)
                // Atur ukuran latar belakang kaca pembesar menjadi ukuran gambar asli * faktor zoom
                magnifyingGlass.style.backgroundSize = `${img.width * zoomFactor}px ${img.height * zoomFactor}px`;
            });

            img.addEventListener('mousemove', (e) => {
                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left; // Posisi x relatif terhadap elemen gambar
                const y = e.clientY - rect.top;  // Posisi y relatif terhadap elemen gambar

                magnifyingGlass.style.left = `${e.clientX}px`;
                magnifyingGlass.style.top = `${e.clientY}px`;

                const zoomFactor = 2; // Harus cocok dengan faktor yang digunakan di mouseover
                const bgPosX = (x * zoomFactor) - (magnifyingGlass.offsetWidth / 2);
                const bgPosY = (y * zoomFactor) - (magnifyingGlass.offsetHeight / 2);
                magnifyingGlass.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;
            });

            img.addEventListener('mouseout', () => {
                magnifyingGlass.style.display = 'none';
                img.style.cursor = originalCursor; // Kembalikan kursor asli
            });
        });
    }
});