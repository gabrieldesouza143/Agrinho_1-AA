<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Climas do Brasil & O Agronegócio Sustentável</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome para Ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* ==========================================
           STYLE.CSS (Variáveis e Reset)
           ========================================== */
        :root {
            --primary: #2d6a4f;
            --primary-light: #40916c;
            --primary-dark: #1b4332;
            --accent: #d8f3dc;
            --accent-orange: #e9c46a;
            --bg-light: #f4f9f4;
            --text-dark: #212529;
            --text-light: #f8f9fa;
            --white: #ffffff;
            --shadow: 0 10px 30px rgba(0,0,0,0.1);
            --border-radius: 16px;
            --font-base: 'Inter', sans-serif;
            --font-title: 'Poppins', sans-serif;
            --base-font-size: 16px;
        }

        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: var(--font-base);
            font-size: var(--base-font-size);
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
            overflow-x: hidden;
            transition: background-color 0.3s, color 0.3s;
        }

        h1, h2, h3, h4 {
            font-family: var(--font-title);
            font-weight: 700;
            color: var(--primary-dark);
        }

        a {
            color: var(--primary);
            text-decoration: none;
            transition: all 0.3s ease;
        }

        img {
            max-width: 100%;
            display: block;
            border-radius: var(--border-radius);
        }

        /* Accessibility Toolbar */
        .accessibility-bar {
            background-color: var(--primary-dark);
            color: var(--text-light);
            padding: 8px 5%;
            display: flex;
            justify-content: flex-end;
            gap: 15px;
            font-size: 0.9rem;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .acc-btn {
            background: transparent;
            border: 1px solid var(--text-light);
            color: var(--text-light);
            padding: 4px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
        }

        .acc-btn:hover {
            background-color: var(--white);
            color: var(--primary-dark);
        }

        /* Header / Navbar */
        .navbar {
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: var(--shadow);
            padding: 20px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-container i {
            font-size: 2rem;
            color: var(--primary);
        }

        .logo-title {
            font-size: clamp(1.2rem, 2vw, 1.6rem);
            font-weight: 700;
            color: var(--primary-dark);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 25px;
        }

        .nav-link {
            font-weight: 500;
            color: var(--text-dark);
        }

        .nav-link:hover {
            color: var(--primary);
        }

        /* Hero Section */
        .hero {
            padding: clamp(60px, 8vw, 120px) 5%;
            background: linear-gradient(135deg, rgba(45,106,79,0.9) 0%, rgba(27,67,50,0.95) 100%), 
                        url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000') no-repeat center center/cover;
            color: var(--text-light);
            text-align: center;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
        }

        .hero-content {
            max-width: 900px;
            margin: 0 auto;
        }

        .hero-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            color: var(--white);
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: clamp(1.1rem, 2vw, 1.4rem);
            margin-bottom: 40px;
            color: var(--accent);
            font-weight: 400;
        }

        .btn-primary {
            display: inline-block;
            background-color: var(--accent-orange);
            color: var(--primary-dark);
            padding: 15px 35px;
            border-radius: var(--border-radius);
            font-weight: 700;
            font-size: 1.1rem;
            box-shadow: var(--shadow);
            border: none;
            cursor: pointer;
            transition: transform 0.2s, background-color 0.2s;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            background-color: #ffd166;
        }

        /* Main Container Layouts */
        .section-padding {
            padding: clamp(60px, 8vw, 100px) 5%;
        }

        .section-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 60px auto;
        }

        .section-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            margin-bottom: 15px;
            position: relative;
            padding-bottom: 15px;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--primary);
            border-radius: 2px;
        }

        /* Carousel Section (Regiões e Climas) */
        .carousel-container {
            position: relative;
            max-width: 1100px;
            margin: 0 auto;
            overflow: hidden;
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
            min-width: 100%;
            padding: 40px;
            display: block;
        }

        .slide-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            align-items: center;
        }

        .slide-info h3 {
            font-size: 1.8rem;
            color: var(--primary);
            margin-bottom: 15px;
        }

        .climate-badge {
            display: inline-block;
            background-color: var(--accent);
            color: var(--primary-dark);
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.85rem;
            margin-bottom: 15px;
        }

        .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: var(--primary);
            color: var(--white);
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: var(--shadow);
            transition: background-color 0.2s;
        }

        .carousel-btn:hover {
            background-color: var(--primary-dark);
        }

        .carousel-btn.prev { left: 15px; }
        .carousel-btn.next { right: 15px; }

        /* Accordion Section (FAQ & Cultivos Otimizados) */
        .accordion-section {
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            max-width: 900px;
            margin: 0 auto;
            padding: 30px;
        }

        .accordion-item {
            border-bottom: 1px solid #e0e0e0;
            padding: 15px 0;
        }

        .accordion-item:last-child {
            border-bottom: none;
        }

        .accordion-header {
            width: 100%;
            background: none;
            border: none;
            text-align: left;
            font-family: var(--font-title);
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-dark);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
        }

        .accordion-header i {
            transition: transform 0.3s ease;
            color: var(--primary);
        }

        .accordion-header.active i {
            transform: rotate(180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            color: #555;
            padding-right: 20px;
        }

        /* Footer */
        footer {
            background-color: var(--primary-dark);
            color: var(--text-light);
            padding: 40px 5% 20px 5%;
            text-align: center;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
        }

        .footer-logo {
            font-family: var(--font-title);
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--white);
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 25px;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: var(--accent);
        }

        .footer-links a:hover {
            color: var(--white);
        }

        /* ==========================================
           BLINDAGEM DO MODO DE CONTRASTE
           ========================================== */
        body.high-contrast, body.high-contrast *:not(i):not(.icon) {
            background-color: #000 !important;
            color: #fff !important;
            border: 1px solid #ff0 !important;
            background-image: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
        }
        body.high-contrast a, body.high-contrast button {
            color: #ff0 !important;
            text-decoration: underline !important;
            font-weight: bold !important;
        }
    </style>
</head>
<body>

    <!-- BARRA DE ACESSIBILIDADE -->
    <div class="accessibility-bar">
        <button class="acc-btn" id="btn-font-decrease" aria-label="Diminuir fonte">A-</button>
        <button class="acc-btn" id="btn-font-increase" aria-label="Aumentar fonte">A+</button>
        <button class="acc-btn" id="btn-contrast" aria-label="Alternar alto contraste"><i class="fa-solid fa-circle-half-stroke"></i> Alto Contraste</button>
    </div>

    <!-- NAVBAR -->
    <nav class="navbar">
        <div class="logo-container">
            <i class="fa-solid fa-seedling"></i>
            <span class="logo-title">AgroClima Brasil</span>
        </div>
        <ul class="nav-menu">
            <li><a href="#regioes" class="nav-link">Regiões</a></li>
            <li><a href="#tecnologia" class="nav-link">Estratégias</a></li>
            <li><a href="#suporte" class="nav-link">Suporte Técnico</a></li>
        </ul>
    </nav>

    <!-- HERO SECTION -->
    <header class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Dominando os Climas do Brasil para a Máxima Produtividade no Campo</h1>
            <p class="hero-subtitle">Capacitação técnica de alta fidelidade para fazendeiros, cooperativas e estudantes agrícolas. Transforme dados climáticos regionais em colheitas recordes e sustentáveis.</p>
            <button class="btn-primary" onclick="document.getElementById('regioes').scrollIntoView({behavior: 'smooth'});">Explorar Climas Regionais</button>
        </div>
    </header>

    <!-- SEÇÃO REGIOES (CARROSSEL DINÂMICO VIA JS) -->
    <section id="regioes" class="section-padding">
        <div class="section-header">
            <h2 class="section-title">Análise Climática por Região</h2>
            <p>Entenda o comportamento térmico e pluviométrico de cada território e aplique o manejo agrícola perfeito.</p>
        </div>

        <div class="carousel-container">
            <button class="carousel-btn prev" id="prevSlide" aria-label="Slide anterior"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="carousel-track" id="carouselTrack">
                <!-- Inserido dinamicamente via JavaScript -->
            </div>
            <button class="carousel-btn next" id="nextSlide" aria-label="Próximo slide"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>

    <!-- SEÇÃO ESTRATÉGIAS (ACORDEÃO DINÂMICO VIA JS) -->
    <section id="tecnologia" class="section-padding" style="background-color: rgba(45,106,79,0.05);">
        <div class="section-header">
            <h2 class="section-title">Manejo Sustentável & Cultivos Otimizados</h2>
            <p>Respostas rápidas e inteligência agronômica para os principais desafios de adaptação climática do agronegócio moderno.</p>
        </div>

        <div class="accordion-section" id="accordionContainer">
            <!-- Inserido dinamicamente via JavaScript -->
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="footer-logo">AgroClima Brasil</div>
        <div class="footer-links">
            <a href="#regioes">Análise Regional</a>
            <a href="#tecnologia">Tecnologia Agrícola</a>
            <a href="#">Políticas de Sustentabilidade</a>
        </div>
        <p>&copy; 2026 AgroClima Brasil. Inteligência climática a serviço do desenvolvimento agrícola nacional.</p>
    </footer>

    <!-- ==========================================
       SCRIPT.JS (Lógica de Estado e Componentes)
       ========================================== */ -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. ACESSIBILIDADE: Controle de Fonte e Contraste
            let currentFontSize = 16;
            const body = document.body;

            document.getElementById('btn-font-increase').addEventListener('click', () => {
                if (currentFontSize < 24) {
                    currentFontSize += 2;
                    body.style.fontSize = currentFontSize + 'px';
                }
            });

            document.getElementById('btn-font-decrease').addEventListener('click', () => {
                if (currentFontSize > 12) {
                    currentFontSize -= 2;
                    body.style.fontSize = currentFontSize + 'px';
                }
            });

            document.getElementById('btn-contrast').addEventListener('click', () => {
                body.classList.toggle('high-contrast');
            });

            // 2. COMPONENTE: Carrossel de Climas Regionais (Array de Objetos)
            const regioesData = [
                {
                    nome: "Região Centro-Oeste",
                    clima: "Tropical Semiúmido",
                    desc: "Estação seca bem definida no inverno e chuvas concentradas no verão. É o coração do bioma Cerrado e líder nacional na produção de grãos.",
                    agro: "Essencial planejar o plantio da soja na janela ideal de chuvas para viabilizar a safrinha de milho. Uso intensivo de plantio direto para reter umidade.",
                    img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=600"
                },
                {
                    nome: "Região Sul",
                    clima: "Subtropical",
                    desc: "Chuvas bem distribuídas ao longo do ano e estações bem marcadas, com invernos frios e ocorrência frequente de geadas em áreas elevadas.",
                    agro: "Zoneamento rigoroso para culturas de inverno como trigo e cevada. Planejamento contra geadas tardias que afetam o milho e a fruticultura de clima temperado.",
                    img: "https://images.unsplash.c/* CSS RESET & VARIAVEIS */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg-primary: #f4f7f4;
    --bg-secondary: #ffffff;
    --text-main: #1b2e1b;
    --text-muted: #4e634e;
    --primary: #1e5e3a;
    --primary-dark: #124026;
    --accent: #d4a373;
    --accent-light: #fefae0;
    --border-color: #cbd5e1;
    --border-radius: 16px;
    --box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

/* BLINDAGEM DO MODO DE CONTRASTE */
body.high-contrast, body.high-contrast *:not(i):not(.icon) {
    background-color: #000 !important;
    color: #fff !important;
    border: 1px solid #ff0 !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}
body.high-contrast a, body.high-contrast button {
    color: #ff0 !important;
    text-decoration: underline !important;
    font-weight: bold !important;
}

/* REGRAS DE LAYOUT FLUIDO */
.container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2.5rem);
}

.flex-row { display: flex; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.text-center { text-align: center; }

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
}

/* ACESSIBILIDADE BAR */
.accessibility-bar {
    background-color: var(--primary-dark);
    color: var(--bg-secondary);
    padding: 8px 0;
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
}
.bar-text { font-weight: 500; }
.accessibility-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}
.accessibility-controls button {
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition);
}
.accessibility-controls button:hover {
    background: rgba(255,255,255,0.25);
}

/* HEADER */
.main-header {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    padding: clamp(1rem, 2vh, 1.5rem) 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.03);
}
.logo {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 800;
    color: var(--primary);
}
.logo-accent { color: var(--accent); }
.main-nav {
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
}
.main-nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition);
}
.main-nav a:hover {
    color: var(--primary);
}

/* BOTOES */
.btn {
    display: inline-block;
    padding: clamp(0.7rem, 1.5vh, 1rem) clamp(1.2rem, 2vw, 2rem);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    text-align: center;
}
.btn-primary {
    background-color: var(--primary);
    color: white;
}
.btn-primary:hover {
    background-color: var(--primary-dark);
}
.btn-secondary {
    background-color: var(--accent-light);
    color: var(--primary-dark);
    border: 2px solid var(--primary);
}
.btn-secondary:hover {
    background-color: var(--primary);
    color: white;
}
.btn-block {
    width: 100%;
    display: block;
}

/* HERO SECTION */
.hero-section {
    padding: clamp(4rem, 10vh, 8rem) 0;
    background: linear-gradient(135deg, rgba(238,244,238,0.9) 0%, rgba(222,235,222,0.9) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M0,50 Q25,35 50,50 T100,50 L100,100 L0,100 Z" fill="%231e5e3a" fill-opacity="0.03"/></svg>');
    background-size: cover;
    background-position: center;
}
.hero-content {
    max-width: 750px;
}
.badge {
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--primary-dark);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(30,94,58,0.2);
}
.hero-section h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
}
.hero-section p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}
.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* STATS */
.stats-section {
    padding: 3rem 0;
    background-color: var(--bg-secondary);
    margin-top: -3rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 10;
}
.stat-card {
    text-align: center;
    padding: 1.5rem;
}
.stat-card h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--primary);
    margin-bottom: 0.5rem;
}
.stat-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
}

/* SECTIONS COMUNS */
.solutions-section, .regions-section, .testimonials-section, .faq-section {
    padding: clamp(4rem, 8vh, 6rem) 0;
}
.section-header {
    max-width: 650px;
    margin: 0 auto clamp(2.5rem, 5vh, 4rem) auto;
}
.section-header h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: var(--primary-dark);
    margin-bottom: 1rem;
}
.section-header p {
    color: var(--text-muted);
}

/* CARDS DE SOLUCOES */
.solution-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.02);
}
.solution-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(30,94,58,0.1);
}
.card-icon {
    width: 50px;
    height: 50px;
    background-color: var(--accent-light);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1.5rem;
}
.solution-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--primary-dark);
}
.solution-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* CARROSSEL DE REGIOES */
.carousel-container {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
}
.carousel-track {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.region-card {
    min-width: calc(33.333% - 1rem);
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    flex-shrink: 0;
}
.region-header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--bg-primary);
    padding-bottom: 1rem;
}
.region-tag {
    background-color: var(--primary);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}
.region-climate {
    font-weight: 700;
    color: var(--accent);
}
.region-card h3 {
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-size: 1.4rem;
}
.region-details p {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
}
.region-details strong {
    color: var(--primary);
}
.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
}
.carousel-btn {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    width: 50px;/* CSS RESET & VARIAVEIS */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg-primary: #f4f7f4;
    --bg-secondary: #ffffff;
    --text-main: #1b2e1b;
    --text-muted: #4e634e;
    --primary: #1e5e3a;
    --primary-dark: #124026;
    --accent: #d4a373;
    --accent-light: #fefae0;
    --border-color: #cbd5e1;
    --border-radius: 16px;
    --box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

/* BLINDAGEM DO MODO DE CONTRASTE */
body.high-contrast, body.high-contrast *:not(i):not(.icon) {
    background-color: #000 !important;
    color: #fff !important;
    border: 1px solid #ff0 !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}
body.high-contrast a, body.high-contrast button {
    color: #ff0 !important;
    text-decoration: underline !important;
    font-weight: bold !important;
}

/* REGRAS DE LAYOUT FLUIDO */
.container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2.5rem);
}

.flex-row { display: flex; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.text-center { text-align: center; }

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
}

/* ACESSIBILIDADE BAR */
.accessibility-bar {
    background-color: var(--primary-dark);
    color: var(--bg-secondary);
    padding: 8px 0;
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
}
.bar-text { font-weight: 500; }
.accessibility-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}
.accessibility-controls button {
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition);
}
.accessibility-controls button:hover {
    background: rgba(255,255,255,0.25);
}

/* HEADER */
.main-header {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    padding: clamp(1rem, 2vh, 1.5rem) 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.03);
}
.logo {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 800;
    color: var(--primary);
}
.logo-accent { color: var(--accent); }
.main-nav {
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
}
.main-nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition);
}
.main-nav a:hover {
    color: var(--primary);
}

/* BOTOES */
.btn {
    display: inline-block;
    padding: clamp(0.7rem, 1.5vh, 1rem) clamp(1.2rem, 2vw, 2rem);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    text-align: center;
}
.btn-primary {
    background-color: var(--primary);
    color: white;
}
.btn-primary:hover {
    background-color: var(--primary-dark);
}
.btn-secondary {
    background-color: var(--accent-light);
    color: var(--primary-dark);
    border: 2px solid var(--primary);
}
.btn-secondary:hover {
    background-color: var(--primary);
    color: white;
}
.btn-block {
    width: 100%;
    display: block;
}

/* HERO SECTION */
.hero-section {
    padding: clamp(4rem, 10vh, 8rem) 0;
    background: linear-gradient(135deg, rgba(238,244,238,0.9) 0%, rgba(222,235,222,0.9) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M0,50 Q25,35 50,50 T100,50 L100,100 L0,100 Z" fill="%231e5e3a" fill-opacity="0.03"/></svg>');
    background-size: cover;
    background-position: center;
}
.hero-content {
    max-width: 750px;
}
.badge {
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--primary-dark);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(30,94,58,0.2);
}
.hero-section h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
}
.hero-section p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}
.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* STATS */
.stats-section {
    padding: 3rem 0;
    background-color: var(--bg-secondary);
    margin-top: -3rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 10;
}
.stat-card {
    text-align: center;
    padding: 1.5rem;
}
.stat-card h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--primary);
    margin-bottom: 0.5rem;
}
.stat-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
}

/* SECTIONS COMUNS */
.solutions-section, .regions-section, .testimonials-section, .faq-section {
    padding: clamp(4rem, 8vh, 6rem) 0;
}
.section-header {
    max-width: 650px;
    margin: 0 auto clamp(2.5rem, 5vh, 4rem) auto;
}
.section-header h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: var(--primary-dark);
    margin-bottom: 1rem;
}
.section-header p {
    color: var(--text-muted);
}

/* CARDS DE SOLUCOES */
.solution-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.02);
}
.solution-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(30,94,58,0.1);
}
.card-icon {
    width: 50px;
    height: 50px;
    background-color: var(--accent-light);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1.5rem;
}
.solution-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--primary-dark);
}
.solution-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* CARROSSEL DE REGIOES */
.carousel-container {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
}
.carousel-track {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.region-card {
    min-width: calc(33.333% - 1rem);
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    flex-shrink: 0;
}
.region-header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--bg-primary);
    padding-bottom: 1rem;
}
.region-tag {
    background-color: var(--primary);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}
.region-climate {
    font-weight: 700;
    color: var(--accent);
}
.region-card h3 {
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-size: 1.4rem;
}
.region-details p {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
}
.region-details strong {
    color: var(--primary);
}
.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
}
.carousel-btn {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}
.carousel-btn:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* TESTIMONIALS */
.testimonial-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}
.testimonial-text {
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}
.testimonial-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.profile-avatar {
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-info h4 {
    color: var(--primary-dark);
    font-size: 1rem;
}
.profile-info p {
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
}

/* ACORDEAO FAQ */
.accordion-container {
    max-width: 800px;
    margin: 0 auto;
}
.accordion-item {
    background-color: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.accordion-header {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-dark);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accordion-icon {
    font-size: 1.3rem;
    transition: var(--transition);
    color: var(--primary);
}
.accordion-item.active .accordion-icon {
    transform: rotate(45deg);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;/* CSS RESET & VARIAVEIS */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg-primary: #f4f7f4;
    --bg-secondary: #ffffff;
    --text-main: #1b2e1b;
    --text-muted: #4e634e;
    --primary: #1e5e3a;
    --primary-dark: #124026;
    --accent: #d4a373;
    --accent-light: #fefae0;
    --border-color: #cbd5e1;
    --border-radius: 16px;
    --box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

/* BLINDAGEM DO MODO DE CONTRASTE */
body.high-contrast, body.high-contrast *:not(i):not(.icon) {
    background-color: #000 !important;
    color: #fff !important;
    border: 1px solid #ff0 !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}
body.high-contrast a, body.high-contrast button {
    color: #ff0 !important;
    text-decoration: underline !important;
    font-weight: bold !important;
}

/* REGRAS DE LAYOUT FLUIDO */
.container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2.5rem);
}

.flex-row { display: flex; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.text-center { text-align: center; }

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
}

/* ACESSIBILIDADE BAR */
.accessibility-bar {
    background-color: var(--primary-dark);
    color: var(--bg-secondary);
    padding: 8px 0;
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
}
.bar-text { font-weight: 500; }
.accessibility-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}
.accessibility-controls button {
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition);
}
.accessibility-controls button:hover {
    background: rgba(255,255,255,0.25);
}

/* HEADER */
.main-header {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    padding: clamp(1rem, 2vh, 1.5rem) 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.03);
}
.logo {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 800;
    color: var(--primary);
}
.logo-accent { color: var(--accent); }
.main-nav {
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
}
.main-nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition);
}
.main-nav a:hover {
    color: var(--primary);
}

/* BOTOES */
.btn {
    display: inline-block;
    padding: clamp(0.7rem, 1.5vh, 1rem) clamp(1.2rem, 2vw, 2rem);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    text-align: center;
}
.btn-primary {
    background-color: var(--primary);
    color: white;
}
.btn-primary:hover {
    background-color: var(--primary-dark);
}
.btn-secondary {
    background-color: var(--accent-light);
    color: var(--primary-dark);
    border: 2px solid var(--primary);
}
.btn-secondary:hover {
    background-color: var(--primary);
    color: white;
}
.btn-block {
    width: 100%;
    display: block;
}

/* HERO SECTION */
.hero-section {
    padding: clamp(4rem, 10vh, 8rem) 0;
    background: linear-gradient(135deg, rgba(238,244,238,0.9) 0%, rgba(222,235,222,0.9) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M0,50 Q25,35 50,50 T100,50 L100,100 L0,100 Z" fill="%231e5e3a" fill-opacity="0.03"/></svg>');
    background-size: cover;
    background-position: center;
}
.hero-content {
    max-width: 750px;
}
.badge {
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--primary-dark);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(30,94,58,0.2);
}
.hero-section h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
}
.hero-section p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}
.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* STATS */
.stats-section {
    padding: 3rem 0;
    background-color: var(--bg-secondary);
    margin-top: -3rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 10;
}
.stat-card {
    text-align: center;
    padding: 1.5rem;
}
.stat-card h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--primary);
    margin-bottom: 0.5rem;
}
.stat-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
}

/* SECTIONS COMUNS */
.solutions-section, .regions-section, .testimonials-section, .faq-section {
    padding: clamp(4rem, 8vh, 6rem) 0;
}
.section-header {
    max-width: 650px;
    margin: 0 auto clamp(2.5rem, 5vh, 4rem) auto;
}
.section-header h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: var(--primary-dark);
    margin-bottom: 1rem;
}
.section-header p {
    color: var(--text-muted);
}

/* CARDS DE SOLUCOES */
.solution-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.02);
}
.solution-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(30,94,58,0.1);
}
.card-icon {
    width: 50px;
    height: 50px;
    background-color: var(--accent-light);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1.5rem;
}
.solution-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--primary-dark);
}
.solution-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* CARROSSEL DE REGIOES */
.carousel-container {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
}
.carousel-track {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.region-card {
    min-width: calc(33.333% - 1rem);
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    flex-shrink: 0;
}
.region-header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--bg-primary);
    padding-bottom: 1rem;
}
.region-tag {
    background-color: var(--primary);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}
.region-climate {
    font-weight: 700;
    color: var(--accent);
}
.region-card h3 {
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-size: 1.4rem;
}
.region-details p {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
}
.region-details strong {
    color: var(--primary);
}
.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
}
.carousel-btn {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}
.carousel-btn:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* TESTIMONIALS */
.testimonial-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}
.testimonial-text {
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}
.testimonial-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.profile-avatar {
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-info h4 {
    color: var(--primary-dark);
    font-size: 1rem;
}
.profile-info p {
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
}

/* ACORDEAO FAQ */
.accordion-container {
    max-width: 800px;
    margin: 0 auto;
}
.accordion-item {
    background-color: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.accordion-header {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-dark);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accordion-icon {
    font-size: 1.3rem;
    transition: var(--transition);
    color: var(--primary);
}
.accordion-item.active .accordion-icon {
    transform: rotate(45deg);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;
}
.accordion-item.active .accordion-content {
    padding-bottom: 1.5rem;
}

/* CTA FORM SECTION */
.cta-section {
    background-color: var(--primary-dark);
    color: white;
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-radius: clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem) 0 0;
}
.cta-text h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    margin-bottom: 1.5rem;
}
.cta-text p {
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}
.cta-list {
    list-style: none;
}
.cta-list li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}
.cta-list li::before {
    content: "✓";
    color: var(--accent);
    font-weight: 700;
}
.cta-form-container {
    background-color: var(--bg-secondary);
    padding: clamp(1.5rem, 3vw, 3rem);
    border-radius: var(--border-radius);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.cta-form .form-group {
    margin-bottom: 1.25rem;
}
.cta-form label {
    display: block;
    color: var(--text-main);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}
.cta-form input, .cta-form select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-main);
    background-color: var(--bg-primary);
}/* CSS RESET & VARIAVEIS */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg-primary: #f4f7f4;
    --bg-secondary: #ffffff;
    --text-main: #1b2e1b;
    --text-muted: #4e634e;
    --primary: #1e5e3a;
    --primary-dark: #124026;
    --accent: #d4a373;
    --accent-light: #fefae0;
    --border-color: #cbd5e1;
    --border-radius: 16px;
    --box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

/* BLINDAGEM DO MODO DE CONTRASTE */
body.high-contrast, body.high-contrast *:not(i):not(.icon) {
    background-color: #000 !important;
    color: #fff !important;
    border: 1px solid #ff0 !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}
body.high-contrast a, body.high-contrast button {
    color: #ff0 !important;
    text-decoration: underline !important;
    font-weight: bold !important;
}

/* REGRAS DE LAYOUT FLUIDO */
.container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2.5rem);
}

.flex-row { display: flex; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.text-center { text-align: center; }

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
}

/* ACESSIBILIDADE BAR */
.accessibility-bar {
    background-color: var(--primary-dark);
    color: var(--bg-secondary);
    padding: 8px 0;
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
}
.bar-text { font-weight: 500; }
.accessibility-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}
.accessibility-controls button {
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition);
}
.accessibility-controls button:hover {
    background: rgba(255,255,255,0.25);
}

/* HEADER */
.main-header {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    padding: clamp(1rem, 2vh, 1.5rem) 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.03);
}
.logo {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 800;
    color: var(--primary);
}
.logo-accent { color: var(--accent); }
.main-nav {
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
}
.main-nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition);
}
.main-nav a:hover {
    color: var(--primary);
}

/* BOTOES */
.btn {
    display: inline-block;
    padding: clamp(0.7rem, 1.5vh, 1rem) clamp(1.2rem, 2vw, 2rem);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    text-align: center;
}
.btn-primary {
    background-color: var(--primary);
    color: white;
}
.btn-primary:hover {
    background-color: var(--primary-dark);
}
.btn-secondary {
    background-color: var(--accent-light);
    color: var(--primary-dark);
    border: 2px solid var(--primary);
}
.btn-secondary:hover {
    background-color: var(--primary);
    color: white;
}
.btn-block {
    width: 100%;
    display: block;
}

/* HERO SECTION */
.hero-section {
    padding: clamp(4rem, 10vh, 8rem) 0;
    background: linear-gradient(135deg, rgba(238,244,238,0.9) 0%, rgba(222,235,222,0.9) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M0,50 Q25,35 50,50 T100,50 L100,100 L0,100 Z" fill="%231e5e3a" fill-opacity="0.03"/></svg>');
    background-size: cover;
    background-position: center;
}
.hero-content {
    max-width: 750px;
}
.badge {
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--primary-dark);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(30,94,58,0.2);
}
.hero-section h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
}
.hero-section p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}
.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* STATS */
.stats-section {
    padding: 3rem 0;
    background-color: var(--bg-secondary);
    margin-top: -3rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 10;
}
.stat-card {
    text-align: center;
    padding: 1.5rem;
}
.stat-card h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--primary);
    margin-bottom: 0.5rem;
}
.stat-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
}

/* SECTIONS COMUNS */
.solutions-section, .regions-section, .testimonials-section, .faq-section {
    padding: clamp(4rem, 8vh, 6rem) 0;
}
.section-header {
    max-width: 650px;
    margin: 0 auto clamp(2.5rem, 5vh, 4rem) auto;
}
.section-header h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: var(--primary-dark);
    margin-bottom: 1rem;
}
.section-header p {
    color: var(--text-muted);
}

/* CARDS DE SOLUCOES */
.solution-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.02);
}
.solution-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(30,94,58,0.1);
}
.card-icon {
    width: 50px;
    height: 50px;
    background-color: var(--accent-light);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1.5rem;
}
.solution-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--primary-dark);
}
.solution-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* CARROSSEL DE REGIOES */
.carousel-container {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
}
.carousel-track {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.region-card {
    min-width: calc(33.333% - 1rem);
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    flex-shrink: 0;
}
.region-header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--bg-primary);
    padding-bottom: 1rem;
}
.region-tag {
    background-color: var(--primary);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}
.region-climate {
    font-weight: 700;
    color: var(--accent);
}
.region-card h3 {
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-size: 1.4rem;
}
.region-details p {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
}
.region-details strong {
    color: var(--primary);
}
.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
}
.carousel-btn {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}
.carousel-btn:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* TESTIMONIALS */
.testimonial-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}
.testimonial-text {
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}
.testimonial-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.profile-avatar {
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-info h4 {
    color: var(--primary-dark);
    font-size: 1rem;
}
.profile-info p {
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
}

/* ACORDEAO FAQ */
.accordion-container {
    max-width: 800px;
    margin: 0 auto;
}
.accordion-item {
    background-color: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.accordion-header {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-dark);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accordion-icon {
    font-size: 1.3rem;
    transition: var(--transition);
    color: var(--primary);
}
.accordion-item.active .accordion-icon {
    transform: rotate(45deg);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;
}
.accordion-item.active .accordion-content {
    padding-bottom: 1.5rem;
}

/* CTA FORM SECTION */
.cta-section {
    background-color: var(--primary-dark);
    color: white;
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-radius: clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem) 0 0;
}
.cta-text h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    margin-bottom: 1.5rem;
}
.cta-text p {
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}
.cta-list {
    list-style: none;
}
.cta-list li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}
.cta-list li::before {
    content: "✓";
    color: var(--accent);
    font-weight: 700;
}
.cta-form-container {
    background-color: var(--bg-secondary);
    padding: clamp(1.5rem, 3vw, 3rem);
    border-radius: var(--border-radius);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.cta-form .form-group {
    margin-bottom: 1.25rem;
}
.cta-form label {
    display: block;
    color: var(--text-main);
    font-weight: 600;/* CSS RESET & VARIAVEIS */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg-primary: #f4f7f4;
    --bg-secondary: #ffffff;
    --text-main: #1b2e1b;
    --text-muted: #4e634e;
    --primary: #1e5e3a;
    --primary-dark: #124026;
    --accent: #d4a373;
    --accent-light: #fefae0;
    --border-color: #cbd5e1;
    --border-radius: 16px;
    --box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

/* BLINDAGEM DO MODO DE CONTRASTE */
body.high-contrast, body.high-contrast *:not(i):not(.icon) {
    background-color: #000 !important;
    color: #fff !important;
    border: 1px solid #ff0 !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}
body.high-contrast a, body.high-contrast button {
    color: #ff0 !important;
    text-decoration: underline !important;
    font-weight: bold !important;
}

/* REGRAS DE LAYOUT FLUIDO */
.container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2.5rem);
}

.flex-row { display: flex; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.text-center { text-align: center; }

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
}

/* ACESSIBILIDADE BAR */
.accessibility-bar {
    background-color: var(--primary-dark);
    color: var(--bg-secondary);
    padding: 8px 0;
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
}
.bar-text { font-weight: 500; }
.accessibility-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}
.accessibility-controls button {
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition);
}
.accessibility-controls button:hover {
    background: rgba(255,255,255,0.25);
}

/* HEADER */
.main-header {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    padding: clamp(1rem, 2vh, 1.5rem) 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.03);
}
.logo {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 800;
    color: var(--primary);
}
.logo-accent { color: var(--accent); }
.main-nav {
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
}
.main-nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition);
}
.main-nav a:hover {
    color: var(--primary);
}

/* BOTOES */
.btn {
    display: inline-block;
    padding: clamp(0.7rem, 1.5vh, 1rem) clamp(1.2rem, 2vw, 2rem);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    text-align: center;
}
.btn-primary {
    background-color: var(--primary);
    color: white;
}
.btn-primary:hover {
    background-color: var(--primary-dark);
}
.btn-secondary {
    background-color: var(--accent-light);
    color: var(--primary-dark);
    border: 2px solid var(--primary);
}
.btn-secondary:hover {
    background-color: var(--primary);
    color: white;
}
.btn-block {
    width: 100%;
    display: block;
}

/* HERO SECTION */
.hero-section {
    padding: clamp(4rem, 10vh, 8rem) 0;
    background: linear-gradient(135deg, rgba(238,244,238,0.9) 0%, rgba(222,235,222,0.9) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M0,50 Q25,35 50,50 T100,50 L100,100 L0,100 Z" fill="%231e5e3a" fill-opacity="0.03"/></svg>');
    background-size: cover;
    background-position: center;
}
.hero-content {
    max-width: 750px;
}
.badge {
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--primary-dark);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(30,94,58,0.2);
}
.hero-section h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
}
.hero-section p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}
.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* STATS */
.stats-section {
    padding: 3rem 0;
    background-color: var(--bg-secondary);
    margin-top: -3rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 10;
}
.stat-card {
    text-align: center;
    padding: 1.5rem;
}
.stat-card h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--primary);
    margin-bottom: 0.5rem;
}
.stat-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
}

/* SECTIONS COMUNS */
.solutions-section, .regions-section, .testimonials-section, .faq-section {
    padding: clamp(4rem, 8vh, 6rem) 0;
}
.section-header {
    max-width: 650px;
    margin: 0 auto clamp(2.5rem, 5vh, 4rem) auto;
}
.section-header h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: var(--primary-dark);
    margin-bottom: 1rem;
}
.section-header p {
    color: var(--text-muted);
}

/* CARDS DE SOLUCOES */
.solution-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.02);
}
.solution-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(30,94,58,0.1);
}
.card-icon {
    width: 50px;
    height: 50px;
    background-color: var(--accent-light);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1.5rem;
}
.solution-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--primary-dark);
}
.solution-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* CARROSSEL DE REGIOES */
.carousel-container {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
}
.carousel-track {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.region-card {
    min-width: calc(33.333% - 1rem);
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    flex-shrink: 0;
}
.region-header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--bg-primary);
    padding-bottom: 1rem;
}
.region-tag {
    background-color: var(--primary);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}
.region-climate {
    font-weight: 700;
    color: var(--accent);
}
.region-card h3 {
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-size: 1.4rem;
}
.region-details p {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
}
.region-details strong {
    color: var(--primary);
}
.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
}
.carousel-btn {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}
.carousel-btn:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* TESTIMONIALS */
.testimonial-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}
.testimonial-text {
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}
.testimonial-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.profile-avatar {
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-info h4 {
    color: var(--primary-dark);
    font-size: 1rem;
}
.profile-info p {
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
}

/* ACORDEAO FAQ */
.accordion-container {
    max-width: 800px;
    margin: 0 auto;
}
.accordion-item {
    background-color: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.accordion-header {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-dark);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accordion-icon {
    font-size: 1.3rem;
    transition: var(--transition);
    color: var(--primary);
}
.accordion-item.active .accordion-icon {
    transform: rotate(45deg);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;
}
.accordion-item.active .accordion-content {
    padding-bottom: 1.5rem;
}

/* CTA FORM SECTION */
.cta-section {
    background-color: var(--primary-dark);
    color: white;
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-radius: clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem) 0 0;
}
.cta-text h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    margin-bottom: 1.5rem;
}
.cta-text p {
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}
.cta-list {
    list-style: none;
}
.cta-list li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}
.cta-list li::before {
    content: "✓";
    color: var(--accent);
    font-weight: 700;
}
.cta-form-container {
    background-color: var(--bg-secondary);
    padding: clamp(1.5rem, 3vw, 3rem);
    border-radius: var(--border-radius);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.cta-form .form-group {
    margin-bottom: 1.25rem;
}
.cta-form label {
    display: block;
    color: var(--text-main);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}
.cta-form input, .cta-form select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-main);
    background-color: var(--bg-primary);
}
.cta-form input:focus, .cta-form select:focus {
    outline: 2px solid var(--primary);
}

/* FOOTER */
.main-footer {
    background-color: #0f2115;
    color: rgba(255,255,255,0.6);
    padding: 2rem 0;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* RESPONSIVIDADE ADICIONAL VIA MEDIA QUERIES PARA ADAPTACOES DE CARROSSEL */
@media (max-width: 1024px) {
    .region-card {
        min-width: calc(50% - 0.75rem);
    }
}
@media (max-width: 680px) {
    .main-header .btn { display: none; }
    .main-nav { display: none; }
    .region-card {
        min-width: 100%;
    }
}
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}
.cta-form input, .cta-form select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-main);
    background-color: var(--bg-primary);
}
.cta-form input:focus, .cta-form select:focus {
    outline: 2px solid var(--primary);
}

/* FOOTER */
.main-footer {
    background-color: #0f2115;
    color: rgba(255,255,255,0.6);
    padding: 2rem 0;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* RESPONSIVIDADE ADICIONAL VIA MEDIA QUERIES PARA ADAPTACOES DE CARROSSEL */
@media (max-width: 1024px) {
    .region-card {
        min-width: calc(50% - 0.75rem);
    }
}
@media (max-width: 680px) {
    .main-header .btn { display: none; }
    .main-nav { display: none; }
    .region-card {
        min-width: 100%;
    }
}
.cta-form input:focus, .cta-form select:focus {
    outline: 2px solid var(--primary);
}

/* FOOTER */
.main-footer {
    background-color: #0f2115;
    color: rgba(255,255,255,0.6);
    padding: 2rem 0;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* RESPONSIVIDADE ADICIONAL VIA MEDIA QUERIES PARA ADAPTACOES DE CARROSSEL */
@media (max-width: 1024px) {
    .region-card {
        min-width: calc(50% - 0.75rem);
    }
}
@media (max-width: 680px) {
    .main-header .btn { display: none; }
    .main-nav { display: none; }
    .region-card {
        min-width: 100%;
    }
}
}
.accordion-item.active .accordion-content {
    padding-bottom: 1.5rem;
}

/* CTA FORM SECTION */
.cta-section {
    background-color: var(--primary-dark);
    color: white;
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-radius: clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem) 0 0;
}
.cta-text h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    margin-bottom: 1.5rem;
}
.cta-text p {
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}
.cta-list {
    list-style: none;
}
.cta-list li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}
.cta-list li::before {
    content: "✓";
    color: var(--accent);
    font-weight: 700;
}
.cta-form-container {
    background-color: var(--bg-secondary);
    padding: clamp(1.5rem, 3vw, 3rem);
    border-radius: var(--border-radius);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.cta-form .form-group {
    margin-bottom: 1.25rem;
}
.cta-form label {
    display: block;
    color: var(--text-main);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}
.cta-form input, .cta-form select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-main);
    background-color: var(--bg-primary);
}
.cta-form input:focus, .cta-form select:focus {
    outline: 2px solid var(--primary);
}

/* FOOTER */
.main-footer {
    background-color: #0f2115;
    color: rgba(255,255,255,0.6);
    padding: 2rem 0;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* RESPONSIVIDADE ADICIONAL VIA MEDIA QUERIES PARA ADAPTACOES DE CARROSSEL */
@media (max-width: 1024px) {
    .region-card {
        min-width: calc(50% - 0.75rem);
    }
}
@media (max-width: 680px) {
    .main-header .btn { display: none; }
    .main-nav { display: none; }
    .region-card {
        min-width: 100%;
    }
}
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}
.carousel-btn:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* TESTIMONIALS */
.testimonial-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}
.testimonial-text {
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}
.testimonial-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.profile-avatar {
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-info h4 {
    color: var(--primary-dark);
    font-size: 1rem;
}
.profile-info p {
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
}

/* ACORDEAO FAQ */
.accordion-container {
    max-width: 800px;
    margin: 0 auto;
}
.accordion-item {
    background-color: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.accordion-header {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-dark);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accordion-icon {
    font-size: 1.3rem;
    transition: var(--transition);
    color: var(--primary);
}
.accordion-item.active .accordion-icon {
    transform: rotate(45deg);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;
}
.accordion-item.active .accordion-content {
    padding-bottom: 1.5rem;
}

/* CTA FORM SECTION */
.cta-section {
    background-color: var(--primary-dark);
    color: white;
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-radius: clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem) 0 0;
}
.cta-text h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    margin-bottom: 1.5rem;
}
.cta-text p {
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}
.cta-list {
    list-style: none;
}
.cta-list li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}
.cta-list li::before {
    content: "✓";
    color: var(--accent);
    font-weight: 700;
}
.cta-form-container {
    background-color: var(--bg-secondary);
    padding: clamp(1.5rem, 3vw, 3rem);
    border-radius: var(--border-radius);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.cta-form .form-group {
    margin-bottom: 1.25rem;
}
.cta-form label {
    display: block;
    color: var(--text-main);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}
.cta-form input, .cta-form select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-main);
    background-color: var(--bg-primary);
}
.cta-form input:focus, .cta-form select:focus {
    outline: 2px solid var(--primary);
}

/* FOOTER */
.main-footer {
    background-color: #0f2115;
    color: rgba(255,255,255,0.6);
    padding: 2rem 0;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* RESPONSIVIDADE ADICIONAL VIA MEDIA QUERIES PARA ADAPTACOES DE CARROSSEL */
@media (max-width: 1024px) {
    .region-card {
        min-width: calc(50% - 0.75rem);
    }
}
@media (max-width: 680px) {
    .main-header .btn { display: none; }
    .main-nav { display: none; }
    .region-card {
        min-width: 100%;
    }
}om/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600"
                },
                {
                    nome: "Região Nordeste",
                    clima: "Semiárido / Tropical",
                    desc: "Altas temperaturas o ano todo. No interior (Polígono das Secas), as chuvas são escassas e irregulares; no litoral, o clima é úmido.",
                    agro: "Expansão da fruticultura irrigada de alta tecnologia no Vale do São Francisco. Implementação de cisternas e cultivares geneticamente tolerantes ao estresse hídrico.",
                    img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&q=80&w=600"
                },
                {
                    nome: "Região Sudeste",
                    clima: "Tropical de Altitude / Atlântico",
                    desc: "Temperaturas amenizadas pela altitude nas serras. Apresenta verões chuvosos e invernos secos, ideais para culturas perenes.",
                    agro: "Nicho perfeito para cafés especiais de alta qualidade. Exige manejo preciso do estresse hídrico controlado para uniformizar a floração dos cafezais.",
                    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600"
                },
                {
                    nome: "Região Norte",
                    clima: "Equatorial Úmido",
                    desc: "Altas temperaturas, baixa amplitude térmica e elevados índices pluviométricos durante praticamente o ano todo, sob influência da Floresta Amazônica.",
                    agro: "Foco total em Sistemas Agroflorestais (SAFs), cultivo sustentável do açaí, cacau e manejo de pastagens rotacionadas integradas à floresta nativa.",
                    img: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=600"
                }
            ];

            const track = document.getElementById('carouselTrack');
            regioesData.forEach(item => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.innerHTML = `
                    <div class="slide-grid">
                        <div class="slide-img">
                            <img src="${item.img}" alt="${item.nome}">
                        </div>
                        <div class="slide-info">
                            <span class="climate-badge"><i class="fa-solid fa-cloud-sun-rain"></i> ${item.clima}</span>
                            <h3>${item.nome}</h3>
                            <p><strong>Características:</strong> ${item.desc}</p>
                            <p style="margin-top: 15px; border-left: 4px solid var(--primary); padding-left: 10px;">
                                <strong>Impacto no Agro:</strong> ${item.agro}
                            </p>
                        </div>
                    </div>
                `;
                track.appendChild(slide);
            });

            let index = 0;
            const slides = document.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;

            function updateCarousel() {
                track.style.transform = `translateX(-${index * 100}%)`;
            }

            document.getElementById('nextSlide').addEventListener('click', () => {
                index = (index + 1) % totalSlides;
                updateCarousel();
            });

            document.getElementById('prevSlide').addEventListener('click', () => {
                index = (index - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });


            // 3. COMPONENTE: Acordeão de Estratégias Agrícolas (Array de Objetos)
            const accordionData = [
                {
                    titulo: "Como mitigar quebras de safra devido a veranicos severos?",
                    conteudo: "A recomendação técnica primordial envolve a implantação rigorosa do Sistema de Plantio Direto (SPD). A manutenção da palhada na superfície do solo reduz drasticamente a evaporação da água, mantendo a umidade crítica nas raízes por até 15 dias a mais durante estiagens curtas estruturais."
                },
                {
                    titulo: "Qual o papel do Zoneamento Agrícola de Risco Climático (ZARC)?",
                    conteudo: "O ZARC é uma ferramenta científica essencial que determina as datas de semeadura com menor probabilidade de perdas climáticas para cada município, associando ciclo da cultura e tipo de solo. Cooperativas utilizam o ZARC para liberação de crédito e seguros agrícolas."
                },
                {
                    titulo: "Sistemas ILPF (Integração Lavoura-Pecuária-Floresta) e o Microclima",
                    conteudo: "A inserção de linhas de árvores na lavoura cria um microclima favorável: reduz a velocidade do vento, atenua as temperaturas extremas nas horas mais quentes do dia e protege o gado contra o estresse térmico, maximizando o ganho de peso e o rendimento por hectare de forma sustentável."
                }
            ];

            const accContainer = document.getElementById('accordionContainer');
            accordionData.forEach(item => {
                const accItem = document.createElement('div');
                accItem.className = 'accordion-item';

                const header = document.createElement('button');
                header.className = 'accordion-header';
                header.innerHTML = `${item.titulo} <i class="fa-solid fa-chevron-down"></i>`;

                const content = document.createElement('div');
                content.className = 'accordion-content';
                content.innerHTML = `<p style="padding: 15px 0;">${item.conteudo}</p>`;

                header.addEventListener('click', () => {
                    const isActive = header.classList.contains('active');
                    
                    // Reset outros itens
                    document.querySelectorAll('.accordion-header').forEach(h => {
                        h.classList.remove('active');
                        h.nextElementSibling.style.maxHeight = null;
                    });

                    if (!isActive) {
                        header.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });

                accItem.appendChild(header);
                accItem.appendChild(content);
                accContainer.appendChild(accItem);
            });

            // 4. AUTO-DEBUG: Validação interna de integridade
            const expectedSelectors = ['btn-font-decrease', 'btn-font-increase', 'btn-contrast', 'carouselTrack', 'prevSlide', 'nextSlide', 'accordionContainer'];
            expectedSelectors.forEach(id => {
                if (!document.getElementById(id)) {
                    console.error(`Aviso de Integridade: Elemento #${id} não encontrado no DOM.`);
                }
            });
        });
    </script>
</body>
</html>
