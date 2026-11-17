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
const botoesIdioma = document.querySelectorAll('#toggle-idioma, #toggle-idioma-mobile');

function trocarIdioma() {
    if (idiomaAtual === "pt") {
        idiomaAtual = "en";
        document.documentElement.lang = "en";
    } else {
        idiomaAtual = "pt";
        document.documentElement.lang = "pt";
    }

    botoesIdioma.forEach((botao) => {
        botao.textContent = idiomaAtual === "pt" ? "EN" : "PT";
    });

    const elementos = document.querySelectorAll('[data-pt]');

    elementos.forEach((elemento) => {
        if (idiomaAtual === "pt") {
            elemento.textContent = elemento.dataset.pt;
        } else {
            elemento.textContent = elemento.dataset.en;
        }
    });

    if (typeof mostrarProjetos === 'function') {
        mostrarProjetos();
    }
}

botoesIdioma.forEach((botao) => {
    botao.addEventListener('click', trocarIdioma);
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

// APARECER AO ROLAR
const elementosRevelar = document.querySelectorAll('.revelar');

const observerRevelar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('revelado');
            observerRevelar.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

elementosRevelar.forEach(elemento => observerRevelar.observe(elemento));

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

const rotuloMenu = btnMenu.querySelector('span');

function atualizarRotuloMenu() {
    const aberto = menu.classList.contains('aberto');

    rotuloMenu.dataset.pt = aberto ? 'Fechar' : 'Menu';
    rotuloMenu.dataset.en = aberto ? 'Close' : 'Menu';
    rotuloMenu.textContent = rotuloMenu.dataset[idiomaAtual];

    btnMenu.setAttribute('aria-expanded', aberto);
}

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
    atualizarRotuloMenu();
});

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('aberto');
        atualizarRotuloMenu();
    });
});

document.addEventListener('click', (evento) => {
    if (!menu.contains(evento.target) && !btnMenu.contains(evento.target)) {
        menu.classList.remove('aberto');
        atualizarRotuloMenu();
    }
});




// CURSOR COM BRILHO
const temMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (temMouse && !prefereMenosMovimento) {
    const brilho = document.createElement('span');
    brilho.className = 'cursor-brilho';
    brilho.setAttribute('aria-hidden', 'true');
    brilho.textContent = '✦';
    document.body.appendChild(brilho);

    const deslocamento = 16;
    const suavidade = 0.15;
    let alvoX = 0;
    let alvoY = 0;
    let brilhoX = 0;
    let brilhoY = 0;
    let animando = false;

    function moverBrilho() {
        brilhoX += (alvoX - brilhoX) * suavidade;
        brilhoY += (alvoY - brilhoY) * suavidade;

        brilho.style.transform = `translate3d(${brilhoX}px, ${brilhoY}px, 0)`;

        if (Math.abs(alvoX - brilhoX) > 0.1 || Math.abs(alvoY - brilhoY) > 0.1) {
            requestAnimationFrame(moverBrilho);
        } else {
            animando = false;
        }
    }

    document.addEventListener('mousemove', (evento) => {
        alvoX = evento.clientX + deslocamento;
        alvoY = evento.clientY + deslocamento;

        if (!brilho.classList.contains('ativo')) {
            brilhoX = alvoX;
            brilhoY = alvoY;
            brilho.classList.add('ativo');
        }

        if (!animando) {
            animando = true;
            requestAnimationFrame(moverBrilho);
        }
    });

    document.addEventListener('mouseover', (evento) => {
        const clicavel = evento.target.closest('a, button, input, textarea, select, label');
        brilho.classList.toggle('sobre-clicavel', Boolean(clicavel));
    });

    document.documentElement.addEventListener('mouseleave', () => {
        brilho.classList.remove('ativo');
    });
}
