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

    const palavraProjetos = idiomaAtual === 'pt' ? 'projetos' : 'projects';

    document.getElementById('contagem').textContent = `${filtrados.length} ${palavraProjetos}`;
    document.getElementById('ver-projetos').textContent = `${idiomaAtual === 'pt' ? 'Ver' : 'See'} ${filtrados.length} ${palavraProjetos}`;

    let filtrosAtivos = 0;

    if (filtroMostrar !== 'destaques') {
        filtrosAtivos++;
    }

    if (filtroTipo !== 'todos') {
        filtrosAtivos++;
    }

    document.getElementById('filtros-ativos').textContent = filtrosAtivos > 0 ? filtrosAtivos : '';

    if (filtrados.length === 0) {
        html = `<p>${idiomaAtual === 'pt' ? 'Nenhum projeto com essa combinação. Tente tirar algum filtro.' : 'No projects match this combination. Try removing a filter.'}</p>`;
    }

    lista.innerHTML = html;
}

const chips = document.querySelectorAll('.chip');

function atualizarChips() {
    chips.forEach(chip => {
        const valorAtual = chip.dataset.filtro === 'mostrar' ? filtroMostrar : filtroTipo;
        chip.setAttribute('aria-pressed', chip.dataset.valor === valorAtual);
    });
}

chips.forEach(chip => {
    chip.addEventListener('click', () => {
        if (chip.dataset.filtro === 'mostrar') {
            filtroMostrar = chip.dataset.valor;
        } else {
            filtroTipo = chip.dataset.valor;
        }

        atualizarChips();
        mostrarProjetos();
    });
});

const btnFiltros = document.getElementById('btn-filtros');
const filtros = document.querySelector('.filtros');

btnFiltros.addEventListener('click', () => {
    const filtroAberto = filtros.classList.toggle('aberto');
    btnFiltros.setAttribute('aria-expanded', filtroAberto);
});

document.getElementById('limpar-filtros').addEventListener('click', () => {
    filtroMostrar = 'destaques';
    filtroTipo = 'todos';

    atualizarChips();
    mostrarProjetos();
});

document.getElementById('ver-projetos').addEventListener('click', () => {
    filtros.classList.remove('aberto');
    btnFiltros.setAttribute('aria-expanded', 'false');
});

mostrarProjetos();