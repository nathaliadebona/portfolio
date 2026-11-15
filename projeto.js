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

    document.title = `${projeto.nome} | Nathália de Bona`;
}