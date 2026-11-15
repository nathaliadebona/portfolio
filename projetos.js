// MODAL PROJETOS
const modal = document.querySelector('#modal-projeto');
const btnFechar = document.querySelector('.btn-fechar');

let slideModalAtual = 0;

const setaModalPrev = document.querySelector('.seta-modal-prev');
const setaModalNext = document.querySelector('.seta-modal-next');

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

const lista = document.getElementById('lista-projetos');

let filtroMostrar = 'destaques';
let filtroTipo = 'todos';

function mostrarProjetos() {
    let html = '';

    const filtrados = Object.entries(projetos).filter(([id, projeto]) => {
        return (filtroMostrar === 'todos' || projeto.destaque) && (filtroTipo === 'todos' || projeto.tipo === filtroTipo);
    });

    filtrados.forEach(([id, projeto]) => {
        html += `
        <a class="card-projeto" href="projeto.html?id=${id}">
            <img src="${projeto.imagem}" alt="${projeto.nome}">
            <div class="card-corpo">
                <h3>${projeto.nome}</h3>
                <span class="card-seta">→</span>
            </div>
            <span class="card-tag" data-pt="${tipos[projeto.tipo].pt}" data-en="${tipos[projeto.tipo].en}">${tipos[projeto.tipo][idiomaAtual]}</span>
        </a>
        `;
    });

    document.getElementById('contagem').textContent = `${filtrados.length} ${idiomaAtual === 'pt' ? 'projetos' : 'projects'}`;

    if (filtrados.length === 0) {
        html = `<p>${idiomaAtual === 'pt' ? 'Nenhum projeto com essa combinação. Tente tirar algum filtro.' : 'No projects match this combination. Try removing a filter.'}</p>`;
    }

    lista.innerHTML = html;
}

const chips = document.querySelectorAll('.chip');

chips.forEach(chip => {
    chip.addEventListener('click', () => {
        if (chip.dataset.filtro === 'mostrar') {
            filtroMostrar = chip.dataset.valor;
        } else {
            filtroTipo = chip.dataset.valor;
        }

        const irmaos = chip.parentElement.querySelectorAll('.chip');

        irmaos.forEach(irmao => {
            irmao.setAttribute('aria-pressed', 'false');
        });

        chip.setAttribute('aria-pressed', 'true');

        mostrarProjetos();
    });
});

mostrarProjetos();
