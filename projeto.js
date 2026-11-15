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

    const textoResumo = projeto.resumo || projeto.descricao;

    const resumo = document.getElementById('projeto-resumo');
    resumo.textContent = textoResumo[idiomaAtual];
    resumo.dataset.pt = textoResumo.pt;
    resumo.dataset.en = textoResumo.en;

    const imagem = document.getElementById('projeto-imagem');
    imagem.src = projeto.imagem;
    imagem.alt = projeto.nome;

    document.getElementById('projeto-descricao').innerHTML = `
        <p data-pt="${projeto.descricao.pt}" data-en="${projeto.descricao.en}">${projeto.descricao[idiomaAtual]}</p>
    `;

    let botoes = `
        <a class="btn" href="${projeto.link}" target="_blank" data-pt="Ver online" data-en="View online">Ver online</a>
    `;

    if (projeto.github) {
        botoes += `
            <a class="btn btn-contorno" href="${projeto.github}" target="_blank" data-pt="Ver código no GitHub" data-en="View code on GitHub">Ver código no GitHub</a>
        `;
    }

    document.getElementById('projeto-botoes').innerHTML = botoes;

    document.title = `${projeto.nome} | Nathália de Bona`;
}

