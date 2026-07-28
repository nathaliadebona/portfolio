// MODAL PROJETOS
const modal = document.querySelector('#modal-projeto');
const btnFechar = document.querySelector('.btn-fechar');

let slideModalAtual = 0;

const setaModalPrev = document.querySelector('.seta-modal-prev');
const setaModalNext = document.querySelector('.seta-modal-next');

const projetos = {
    'holly-desserts': {
        nome: 'Holly Desserts',
        descricao: {
            pt: 'Meu primeiro site. Uma página simples sobre sobremesas, feita com HTML e CSS básico. Longe de ser bonito, mas foi onde tudo começou — e sem ele os outros não existiriam.',
            en: 'My first website. A simple page about desserts, built with basic HTML and CSS. Far from beautiful, but it\'s where it all began — and without it, none of the others would exist.'
        },
        link: 'https://nathaliadebona.github.io/holly-desserts/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain'],
            texto: {
                pt: ['Página única'],
                en: ['Single page']
            }
        }
    },

    'holy-kitchen-v1': {
        nome: 'Holy Kitchen! V1',
        descricao: {
            pt: 'Site de receitas culinárias com múltiplas páginas funcionando — doces, salgadas, contato e artigos com dicas. Um salto claro em relação ao anterior, mesmo que a estética ainda estivesse engatinhando.',
            en: 'A culinary recipe website with multiple working pages — sweet, savory, contact and tip articles. A clear step up from the previous one, even though the aesthetic was still finding its footing.'
        },
        link: 'https://nathaliadebona.github.io/holy-kitchen/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain'],
            texto: {
                pt: ['Multi-páginas'],
                en: ['Multi-page']
            }
        }
    },

    'cambio-facil': {
        nome: 'CâmbioFácil',
        descricao: {
            pt: 'Conversor de moedas entre BRL, USD, EUR e GBP com taxas fixas. Meu primeiro projeto focado em JavaScript — foi aqui que aprendi a usar objetos como tabela de dados, notação de colchetes para acesso dinâmico e validação de entrada. Simples, mas cheio de lógica.',
            en: 'A currency converter between BRL, USD, EUR and GBP with fixed rates. My first JavaScript-focused project — this is where I learned to use objects as data tables, bracket notation for dynamic access and input validation. Simple, but full of logic.'
        },
        link: 'https://nathaliadebona.github.io/cambio-facil/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Página única'],
                en: ['Single page']
            }
        }
    },

    'task-flow': {
        nome: 'TaskFlow',
        descricao: {
            pt: 'App de lista de tarefas para freelancers e pequenos empreendedores. Permite adicionar, marcar como concluída, excluir tarefas e limpar as concluídas de uma vez. Os dados persistem entre recarregamentos via localStorage. Foi onde aprendi a criar elementos dinamicamente com createElement e a organizar código em funções reutilizáveis.',
            en: 'A task list app for freelancers and small entrepreneurs. Allows adding, marking as complete, deleting tasks and clearing completed ones at once. Data persists between reloads via localStorage. This is where I learned to create elements dynamically with createElement and organize code into reusable functions.'
        },
        link: 'https://nathaliadebona.github.io/task-flow/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Página única'],
                en: ['Single page']
            }
        }
    },

    'cafe-velvet': {
        nome: 'Café Velvet',
        descricao: {
            pt: 'Site institucional de uma cafeteria fictícia em Florianópolis com cinco páginas: Home, Sobre, Cardápio, Galeria e Contato. Inclui tabelas de preços com zebra striping, galeria em CSS Grid e formulário de contato. Um dos meus primeiros trabalhos mais completos, feito só com HTML e CSS.',
            en: 'Institutional website for a fictional coffee shop in Florianópolis with five pages: Home, About, Menu, Gallery and Contact. Includes price tables with zebra striping, a CSS Grid gallery and a contact form. One of my first most complete projects, built with HTML and CSS only.'
        },
        link: 'https://nathaliadebona.github.io/cafe-velvet/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain'],
            texto: {
                pt: ['Multi-páginas'],
                en: ['Multi-page']
            }
        }
    },

    'lumiere': {
        nome: 'Lumière Atelier de Aromas',
        descricao: {
            pt: 'Site de uma marca artesanal fictícia de velas de soja e sabonetes naturais. Quatro páginas com identidade visual refinada, banner responsivo com três tamanhos diferentes, carrossel de imagens nos produtos e sombra animada no header ao rolar. Um dos projetos que mais me orgulho esteticamente.',
            en: 'Website for a fictional artisanal brand of soy candles and natural soaps. Four pages with a refined visual identity, responsive banner in three different sizes, image carousel on products and animated header shadow on scroll. One of the projects I\'m most proud of aesthetically.'
        },
        link: 'https://nathaliadebona.github.io/lumiere/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Multi-páginas', 'Design editorial'],
                en: ['Multi-page', 'Editorial design']
            }
        }
    },

    'glow-republic': {
        nome: 'Glow Republic',
        descricao: {
            pt: 'Site de uma marca de skincare vegano voltada ao público jovem. Oito páginas interligadas com modal de produtos, filtro por categoria, validação customizada de formulário, contador animado com IntersectionObserver e tag flutuante com @keyframes. Uma vitrine do meu crescimento com JavaScript.',
            en: 'Website for a vegan skincare brand targeting young audiences. Eight interconnected pages with a product modal, category filter, custom form validation, animated counter with IntersectionObserver and floating tag with @keyframes. A showcase of my JavaScript growth.'
        },
        link: 'https://nathaliadebona.github.io/glow-republic/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Animações', 'Multi-páginas'],
                en: ['Animations', 'Multi-page']
            }
        }
    },

    'isabela-voss': {
        nome: 'Isabela Voss',
        descricao: {
            pt: 'Site portfólio de uma consultora de imagem e personal stylist. Um projeto que estava na gaveta e resolvi finalizar — simples, mas que fechou um ciclo e manteve o ritmo de entrega.',
            en: 'Portfolio website for a fictional image consultant and personal stylist. A project that had been sitting in a drawer that I decided to finish — simple, but it closed a cycle and kept the delivery rhythm going.'
        },
        link: 'https://nathaliadebona.github.io/isabela-voss/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Página única'],
                en: ['Single page']
            }
        }
    },

    'mendes-braga': {
        nome: 'Mendes & Braga Incorporações',
        descricao: {
            pt: 'Site institucional de uma incorporadora fictícia de alto padrão. Primeiro desafio fora dos estilos que eu estava acostumada — mais sóbrio e corporativo. Inclui menu hambúrguer, contador de números animado com IntersectionObserver e validação customizada de formulário com mensagens de erro inline.',
            en: 'Institutional website for a fictional high-end real estate developer. My first challenge outside the styles I was used to — more sober and corporate. Includes a hamburger menu, animated number counter with IntersectionObserver and custom form validation with inline error messages.'
        },
        link: 'https://nathaliadebona.github.io/mendes-braga/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Página única'],
                en: ['Single page']
            }
        }
    },

    'duarte-studio': {
        nome: 'Duarte Studio',
        descricao: {
            pt: 'Site portfólio de um estúdio de fotografia e vídeo fictício com estética editorial inspirada em revistas de moda. Meu primeiro projeto bilíngue PT/EN, com lightbox interativo no portfólio, menu hambúrguer e toggle de idioma via dataset. O mais trabalhoso até então — e o mais recompensador.',
            en: 'Portfolio website for a fictional photography and video studio with an editorial aesthetic inspired by fashion magazines. My first bilingual PT/EN project, with an interactive lightbox in the portfolio, hamburger menu and language toggle via dataset. The most demanding so far — and the most rewarding.'
        },
        link: 'https://nathaliadebona.github.io/duarte-studio/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Bilíngue', 'Página única'],
                en: ['Bilingual', 'Single page']
            }
        }
    },

    'nexon': {
        nome: 'Nexon',
        descricao: {
            pt: 'Landing page de uma startup B2B de SaaS fictícia especializada em automação com IA. O projeto mais ousado esteticamente: fundo escuro, efeitos de glow neon, glassmorphism no header e identidade visual gerada com IA. Bilíngue PT/EN com toggle de idioma e menu hambúrguer em painel.',
            en: 'Landing page for a fictional B2B SaaS startup specializing in AI automation. The boldest project aesthetically: dark background, neon glow effects, glassmorphism in the header and AI-generated visual identity. Bilingual PT/EN with language toggle and panel hamburger menu.'
        },
        link: 'https://nathaliadebona.github.io/nexon/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Bilíngue', 'Página única'],
                en: ['Bilingual', 'Single page']
            }
        }
    },

    'holy-kitchen-v2': {
        nome: 'Holy Kitchen! V2',
        descricao: {
            pt: 'Reconstrução completa do meu segundo site — agora com 13 páginas organizadas em hubs, JavaScript do zero ao avançado e identidade visual totalmente repensada. Inclui filtro de receitas, calculadora de porções proporcional, checklist interativo, modal de comparador de medidas, carrossel automático e validação customizada de formulários. A prova mais clara da minha evolução.',
            en: 'A complete rebuild of my second website — now with 13 pages organized into hubs, JavaScript from basics to advanced and a completely rethought visual identity. Includes a recipe filter, proportional serving calculator, interactive checklist, measurement converter modal, automatic carousel and custom form validation. The clearest proof of my evolution.'
        },
        link: 'https://nathaliadebona.github.io/holy-kitchen-v2/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Multi-páginas'],
                en: ['Multi-page']
            }
        }
    },

    'navalha-co': {
        nome: 'Navalha & Co.',
        descricao: {
            pt: 'Site de uma barbearia premium fictícia na Vila Olímpia, reconstruído do zero com tudo que aprendi no caminho. Inclui modal de agendamento com dialog nativo reaproveitado pelos três barbeiros via dataset, galeria interativa com hover e scrollspy manual calculado via getBoundingClientRect. Nem sempre é o nicho que a gente escolheria — mas o resultado surpreendeu.',
            en: 'Website for a fictional premium barbershop in Vila Olímpia, rebuilt from scratch with everything I\'d learned along the way. Includes a booking modal with a native dialog reused by all three barbers via dataset, interactive gallery with hover effects and manual scrollspy calculated via getBoundingClientRect. Not always the niche you\'d choose — but the result was surprising.'
        },
        link: 'https://nathaliadebona.github.io/navalha-e-co/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['Página única'],
                en: ['Single page']
            }
        }
    },

    'bossa-static': {
        nome: 'Bossa & Static',
        descricao: {
            pt: 'Loja virtual fictícia de discos nacionais e internacionais — meu primeiro e-commerce completo. Quatro páginas com carrinho funcional, filtro por categoria, cupom de desconto com validação, carrossel de depoimentos e modal de boas-vindas. Dados do carrinho persistem entre páginas via localStorage.',
            en: 'A fictional online store for national and international vinyl records — my first complete e-commerce project. Four pages with a functional cart, category filter, discount coupon with validation, testimonial carousel and welcome modal. Cart data persists between pages via localStorage.'
        },
        link: 'https://nathaliadebona.github.io/bossa-e-static/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['localStorage', 'Multi-páginas'],
                en: ['localStorage', 'Multi-page']
            }
        }
    },

    'focus-flow': {
        nome: 'Focus & Flow',
        descricao: {
            pt: 'Dashboard de produtividade pessoal com notas, calendário e estatísticas — inspirado nas ferramentas que uso no dia a dia. Permite criar, editar e excluir notas e eventos, anexar arquivos ao calendário e importar dados via CSV ou JSON. Tudo armazenado localmente via localStorage, sem nenhum servidor. Em evolução contínua.',
            en: 'A personal productivity dashboard with notes, calendar and statistics — inspired by the tools I use every day. Allows creating, editing and deleting notes and events, attaching files to the calendar and importing data via CSV or JSON. Everything stored locally via localStorage, with no server. Continuously evolving.'
        },
        link: 'https://nathaliadebona.github.io/focus-flow/',
        tags: {
            icones: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
            texto: {
                pt: ['localStorage', 'Página única'],
                en: ['localStorage', 'Single page']
            }
        }
    }
}

document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card-projeto');
        const id = card.dataset.id;
        const projeto = projetos[id];

        const modalNome = document.querySelector('#modal-projeto h3');
        const modalDescricao = document.querySelector('#modal-projeto p');
        const modalLink = document.querySelector('.btn-ver-site');
        const modalIcones = document.querySelector('.modal-tags ul:first-child');
        const modalTexto = document.querySelector('.modal-tags ul:last-child');

        modalIcones.innerHTML = '';
        modalTexto.innerHTML = '';

        projeto.tags.icones.forEach(icone => {
            modalIcones.innerHTML += `<li><i class="${icone}"></i></li>`;
        });

        const idioma = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';

        modalNome.textContent = projeto.nome;
        modalDescricao.textContent = projeto.descricao[idioma];
        modalLink.href = projeto.link;
        modalLink.target = '_blank';
        modalLink.textContent = idioma === 'pt' ? 'Ver site' : 'View site';

        projeto.tags.texto[idioma].forEach(tag => {
            modalTexto.innerHTML += `<li>${tag}</li>`;
        });

        modal.showModal();
    });
});

btnFechar.addEventListener('click', () => {
    modal.close();
});