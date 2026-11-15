const parametros = new URLSearchParams(window.location.search);
const id = parametros.get('id');
const projeto = projetos[id];

if (!projeto) {
    window.location.href = 'projetos.html';
} else {
    document.getElementById('projeto-nome').textContent = projeto.nome;

    const tag = document.getElementById('projeto-tag');
    tag.textContent = tipos[projeto.tipo][idiomaAtual];
    tag.dataset.pt = tipos[projeto.tipo].pt;
    tag.dataset.en = tipos[projeto.tipo].en;

    const resumo = document.getElementById('projeto-resumo');
    resumo.textContent = projeto.descricao[idiomaAtual];
    resumo.dataset.pt = projeto.descricao.pt;
    resumo.dataset.en = projeto.descricao.en;

    const imagem = document.getElementById('projeto-imagem');
    imagem.src = projeto.imagem;
    imagem.alt = projeto.nome;

    document.getElementById('projeto-botoes').innerHTML = `
        <a class="btn" href="${projeto.link}" target="_blank" data-pt="Ver online" data-en="View online">Ver online</a>
    `;

    document.title = `${projeto.nome} | Nathália de Bona`;
}

