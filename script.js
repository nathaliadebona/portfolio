const header = document.querySelector('header');
const btnTopo = document.querySelector('#btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
        btnTopo.classList.add('visivel');
    } else {
        btnTopo.classList.remove('visivel');
    }
})

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let idiomaAtual = "pt";
const btnIdioma = document.querySelector('#toggle-idioma');

const elementos = document.querySelectorAll('[data-pt]');

btnIdioma.addEventListener('click', () => {
    if (idiomaAtual === "pt") {
        idiomaAtual = "en";
        btnIdioma.textContent = "PT"
        document.documentElement.lang = "en";
    } else {
        idiomaAtual = "pt";
        btnIdioma.textContent = "EN"
        document.documentElement.lang = "pt";
    }

    elementos.forEach((elemento) => {
        if (idiomaAtual === "pt") {
            elemento.textContent = elemento.dataset.pt;
        } else {
            elemento.textContent = elemento.dataset.en;
        }
    });
});

const secoes = document.querySelectorAll('section');
const linksMenu = document.querySelectorAll('header ul li a');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            linksMenu.forEach(link => link.classList.remove('ativo'));

            const linkAtivo = document.querySelector(`header ul li a[href="#${entrada.target.id}"]`);
            if (linkAtivo) {
                linkAtivo.classList.add('ativo');
            }
        }
    });
}, { threshold: 0.1, rootMargin: '-50px 0px -50px 0px' });

secoes.forEach(secao => observer.observe(secao));

// FUNÇÃO TYPEWRITER
function typewriter(elemento) {
    const texto = elemento.textContent;
    elemento.textContent = '';
    let i = 0;

    const intervalo = setInterval(() => {
        elemento.textContent += texto[i];
        i++;
        if (i === texto.length) {
            clearInterval(intervalo);
        }
    }, 100);
}

// TYPEWRITER NO H1 (repete infinito)
const h1 = document.querySelector('#hero h1');
if (h1) {
    const textoH1 = h1.textContent;
    h1.textContent = '';
    let i = 0;
    let apagando = false;
    let esperando = false;

    setInterval(() => {
        if (apagando) {
            h1.textContent = textoH1.substring(0, i);
            i--;
            if (i < 0) {
                apagando = false;
                esperando = false;
            }
        } else {
            h1.textContent = textoH1.substring(0, i);
            if (i <= textoH1.length) i++;
            if (i > textoH1.length && !esperando) {
                esperando = true;
                setTimeout(() => {
                    apagando = true;
                }, 800);
            }
        }
    }, 100);
}

// FORMULARIO
const form = document.querySelector('#form-contato');

if (form) {
    form.addEventListener('submit', async (evento) => {
        evento.preventDefault();

        const resposta = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (resposta.ok) {
            // envio bem sucedido
            form.reset(); // limpa o formulário
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Ops, algo deu errado. Tente novamente!');
        }
    });
}

const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('header ul');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('aberto');
    });
});

document.addEventListener('click', (evento) => {
    if (!menu.contains(evento.target) && !btnMenu.contains(evento.target)) {
        menu.classList.remove('aberto');
    }
});

// CARROSSEL
const track = document.querySelector('.carrossel-track');
const slides = document.querySelectorAll('.carrossel-slide');

if (track) {
    const tracinhos = document.querySelectorAll('.tracinho');
    const setaPrev = document.querySelector('.seta-prev');
    const setaNext = document.querySelector('.seta-next');
    let slideAtual = 0;

    function trocarSlide() {
        track.style.transform = `translateX(${slideAtual * -100}%)`;

        tracinhos.forEach(tracinho => tracinho.classList.remove('ativo'));
        tracinhos[slideAtual].classList.add('ativo');

    }

    setaNext.addEventListener('click', () => {
        if (slideAtual < slides.length - 1) {
            slideAtual++;
        } else {
                slideAtual = 0;
        }
        trocarSlide();
    });

    setaPrev.addEventListener('click', () => {
        if (slideAtual === 0) {
            slideAtual = slides.length - 1;
        } else {
            slideAtual--;
        }
        trocarSlide();
    });

    setInterval(() => {
        if (slideAtual < slides.length - 1) {
            slideAtual++;
        } else {
            slideAtual = 0;
        }
        trocarSlide()
    }, 4000);
}

