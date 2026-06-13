


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Climas do Brasil - Inteligência Climática para o Agronegócio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="accessibility-bar" role="complementary" aria-label="Ferramentas de Acessibilidade">
        <div class="container accessibility-container">
            <span>Acessibilidade:</span>
            <button id="btn-font-decrease" aria-label="Diminuir tamanho da fonte">A-</button>
            <button id="btn-font-increase" aria-label="Aumentar tamanho da fonte">A+</button>
            <button id="btn-contrast" aria-label="Alternar Alto Contraste"><i class="fa-solid to-contrast fa-circle-half-stroke"></i> Alto Contraste</button>
        </div>
    </div>

    <header class="main-header">
        <div class="container header-container">
            <a href="#" class="logo" aria-label="Climas do Brasil Home">
                <i class="fa-solid fa-leaf"></i> <span>ClimasDo<span>Brasil</span></span>
            </a>
            <nav class="main-nav" aria-label="Navegação Principal">
                <a href="#inicio">Início</a>
                <a href="#regioes">Regiões e Climas</a>
                <a href="#solucoes">Soluções Agrícolas</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#contato" class="btn-nav">Fale com Especialista</a>
            </nav>
        </div>
    </header>

    <section id="inicio" class="hero-section">
        <div class="container hero-container">
            <div class="hero-content">
                <span class="badge">Sustentabilidade & Produtividade</span>
                <h1>Domine o Clima, Maximize sua Colheita</h1>
                <p>A primeira plataforma de inteligência climática desenhada exclusivamente para o produtor rural brasileiro. Da agricultura familiar às grandes cooperativas, transforme dados meteorológicos em decisões estratégicas de alta rentabilidade.</p>
                <div class="hero-actions">
                    <a href="#contato" class="btn-primary">Consultar Diagnóstico Regional</a>
                    <a href="#regioes" class="btn-secondary">Explorar Climas</a>
                </div>
            </div>
            <div class="hero-image-wrapper">
                <div class="hero-card">
                    <i class="fa-solid fa-cloud-sun-rain"></i>
                    <h3>Previsibilidade Total</h3>
                    <p>Mapeamento de safras baseado em microclimas regionais.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="regioes" class="regioes-section">
        <div class="container">
            <div class="section-header">
                <h2>Análise Climática das Regiões Brasileiras</h2>
                <p>Explore as especificidades dinâmicas de cada território e saiba como mitigar riscos agroclimáticos em sua propriedade.</p>
            </div>
            
            <div class="carousel-container">
                <button class="carousel-btn btn-prev" id="carousel-prev" aria-label="Slide anterior"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="carousel-track-container">
                    <div class="carousel-track" id="carousel-track">
                        </div>
                </div>
                <button class="carousel-btn btn-next" id="carousel-next" aria-label="Próximo slide"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
            <div class="carousel-nav" id="carousel-nav">
                </div>
        </div>
    </section>

    <section id="solucoes" class="solucoes-section">
        <div class="container">
            <div class="section-header">
                <h2>Soluções para o Desenvolvimento Agrícola</h2>
                <p>Segurança técnica do plantio à colheita para estudantes, fazendeiros e cooperativas.</p>
            </div>
            <div class="grid-solucoes">
                <div class="solucao-card">
                    <div class="icon-wrapper"><i class="fa-solid fa-seedling"></i></div>
                    <h3>Estudantes & Pesquisadores</h3>
                    <p>Acesso a bancos de dados históricos e relatórios acadêmicos sobre a transição climática nas lavouras do país.</p>
                </div>
                <div class="solucao-card">
                    <div class="icon-wrapper"><i class="fa-solid fa-tractor"></i></div>
                    <h3>Médios e Grandes Fazendeiros</h3>
                    <p>Alertas de geadas, estiagem prolongada e volumes pluviométricos customizados para as coordenadas da sua fazenda.</p>
                </div>
                <div class="solucao-card">
                    <div class="icon-wrapper"><i class="fa-solid fa-users-gear"></i></div>
                    <h3>Grandes Cooperativas</h3>
                    <p>Dashboards consolidados para gestão de risco de crédito agrícola e previsão de safra de cooperados.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="depoimentos" class="depoimentos-section">
        <div class="container">
            <div class="section-header">
                <h2>Quem Cultiva Confiando nos Dados</h2>
                <p>Veja o impacto real da inteligência climática na produtividade de quem move o país.</p>
            </div>
            <div class="grid-depoimentos">
                <div class="depoimento-card">
                    <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <p>"Com os dados do Semiárido Nordestino, ajustamos o calendário de irrigação da uva e reduzimos o consumo de água em 22%, aumentando o dulçor do fruto."</p>
                    <div class="autor">
                        <strong>Ricardo Mendes</strong>
                        <span>Produtor de Fruticultura - Petrolina/PE</span>
                    </div>
                </div>
                <div class="depoimento-card">
                    <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <p>"O monitoramento do Clima Subtropical nos salvou de uma perda total na safra de trigo durante a última grande geada. Alerta cirúrgico!"</p>
                    <div class="autor">
                        <strong>Helena Schimdt</strong>
                        <span>Diretora Técnica de Cooperativa - Passo Fundo/RS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <div class="container">
            <div class="section-header">
                <h2>Perguntas Frequentes sobre Manejo e Clima</h2>
                <p>Esclareça suas principais dúvidas técnicas sobre nossa infraestrutura de dados.</p>
            </div>
            <div class="accordion-wrapper" id="faq-accordion">
                </div>
        </div>
    </section>

    <section id="contato" class="contato-section">
        <div class="container contato-container">
            <div class="contato-info">
                <h2>Pronto para Blindar Sua Produção contra as Incertezas do Tempo?</h2>
                <p>Fale com um engenheiro agrônomo especialista e receba uma análise preliminar gratuita do microclima da sua região.</p>
                <div class="contato-items">
                    <div class="item"><i class="fa-solid fa-phone"></i> <span>0800 777 CLIMA</span></div>
                    <div class="item"><i class="fa-solid fa-envelope"></i> <span>contato@climassustentaveis.com.br</span></div>
                </div>
            </div>
            <div class="contato-form-wrapper">
                <form class="contato-form" id="lp-form">
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" required placeholder="Ex: João Silva">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail Profissional</label>
                        <input type="email" id="email" required placeholder="Ex: joao@agro.com.br">
                    </div>
                    <div class="form-group">
                        <label for="perfil">Seu Perfil no Agronegócio</label>
                        <select id="perfil" required>
                            <option value="" disabled selected>Selecione seu perfil</option>
                            <option value="estudante">Estudante / Pesquisador</option>
                            <option value="fazendeiro">Produtor / Fazendeiro</option>
                            <option value="cooperativa">Cooperativa / Agroindústria</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-submit">Solicitar Diagnóstico Gratuito</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="main-footer">
        <div class="container footer-container">
            <div class="footer-brand">
                <a href="#" class="logo"><i class="fa-solid fa-leaf"></i> <span>ClimasDo<span>Brasil</span></span></a>
                <p>Tecnologia e sustentabilidade unindo o campo e a ciência metereológica.</p>
            </div>
            <div class="footer-copy">
                <p>&copy; 2026 Climas do Brasil Inteligência Agrícola S.A. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
