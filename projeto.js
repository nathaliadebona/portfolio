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

    let htmlInfos = `
        <div>
            <span class="info-rotulo" data-pt="Tipo" data-en="Type">Tipo</span>
            <span class="info-valor" data-pt="${tipos[projeto.tipo].pt}" data-en="${tipos[projeto.tipo].en}">${tipos[projeto.tipo][idiomaAtual]}</span>
        </div>
    `;

    if (projeto.ano) {
        htmlInfos += `
            <div>
                <span class="info-rotulo" data-pt="Ano" data-en="Year">Ano</span>
                <span class="info-valor">${projeto.ano}</span>
            </div>
        `;
    }

    if (projeto.tecnologias) {
        htmlInfos += `
            <div>
                <span class="info-rotulo" data-pt="Tecnologias" data-en="Technologies">Tecnologias</span>
                <span class="info-valor">${projeto.tecnologias.join(', ')}</span>
            </div>
        `;
    }

    document.getElementById('projeto-infos').innerHTML = htmlInfos;

    document.getElementById('projeto-descricao').innerHTML = `
        <p data-pt="${projeto.descricao.pt}" data-en="${projeto.descricao.en}">${projeto.descricao[idiomaAtual]}</p>
    `;

    let botoes = '';

    if (projeto.link) {
        botoes += `
            <a class="btn" href="${projeto.link}" target="_blank" data-pt="Ver online" data-en="View online">Ver online</a>
        `;
    }

    if (projeto.github) {
        botoes += `
            <a class="btn ${projeto.link ? 'btn-contorno' : ''}" href="${projeto.github}" target="_blank" data-pt="Ver código no GitHub" data-en="View code on GitHub">Ver código no GitHub</a>
        `;
    }

    document.getElementById('projeto-botoes').innerHTML = botoes;

    if (projeto.galeria) {
        document.getElementById('galeria-grade').innerHTML = projeto.galeria
            .map((caminho, indice) => `<img src="${caminho}" alt="${projeto.nome} - tela ${indice + 1}">`)
            .join('');
    } else {
        document.getElementById('projeto-galeria').style.display = 'none';
    }

    const ids = Object.keys(projetos);
    const posicao = ids.indexOf(id);
    const proximoId = ids[(posicao + 1) % ids.length];

    document.getElementById('proximo-nome').textContent = projetos[proximoId].nome;
    document.getElementById('proximo-link').href = `projeto.html?id=${proximoId}`;

    document.title = `${projeto.nome} | Nathália de Bona`;
}

