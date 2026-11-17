# Portfólio · Nathália de Bona ✦

Portfólio pessoal de **Nathália de Bona**, desenvolvedora front-end em formação. O site reúne meus projetos, uma página de detalhes para cada um e um jeito fácil de falar comigo.

**Acesse online:** [nathaliadebona.github.io/portfolio](https://nathaliadebona.github.io/portfolio/)

Tudo foi escrito à mão, só com **HTML, CSS e JavaScript puro**, sem frameworks, bibliotecas de animação ou ferramentas de build. O portfólio é, ele mesmo, um projeto de aprendizado.

## O que tem no site

### Página inicial
- **Hero** com apresentação, foto e botões para os projetos e para o contato, que entram em sequência ao abrir a página
- **Sobre mim** e **Habilidades**
- **Projetos em destaque**, com cards que levam à página de cada projeto
- **Contato** com formulário (envio pelo [Formspree](https://formspree.io/)) e links para o GitHub e o LinkedIn
- **Botão de voltar ao topo**, que aparece depois de rolar a página

### Lista de projetos
- Todos os projetos em cards, com os destaques em primeiro plano
- **Filtros** por "Destaques ou Todos" e por tipo: páginas únicas, sites com várias páginas, apps interativos e projetos com backend
- No celular, os filtros ficam num painel que abre e fecha, com um contador dos filtros ativos e um botão que mostra quantos projetos serão exibidos

### Página de cada projeto
- Resumo, tipo, ano e tecnologias
- Descrição completa, galeria de telas e botões para ver online e para ver o código no GitHub
- Projetos que não estão online mostram só o botão do GitHub
- Atalho para o próximo projeto

### Em todo o site
- **Português e inglês:** um botão troca o idioma de todos os textos, inclusive os dados dos projetos
- **Menu** que destaca a seção visível enquanto você rola e vira um menu retrátil no celular
- **Animações discretas:** entrada do hero, seções que aparecem ao rolar e um cursor com ✦ que acompanha o mouse
- **Responsivo**, com ajustes específicos para telas de celular

## Decisões de design

O redesign teve um objetivo: um portfólio **claro, rosado e editorial**, com movimento suave e discreto.

- **Paleta quente e suave:** um creme de fundo (`#FBF3EA`) com tinta escura em vez de preto puro (`#2B1F1A`), rosa claro (`#F2C9C0`) e terracota (`#A8472A`) como cor de destaque. A mistura é acolhedora, sem perder contraste para leitura.
- **Duas fontes com papéis claros:** **Fraunces**, uma serifada com personalidade, para títulos, e **DM Sans**, limpa e legível, para o texto corrido.
- **O ✦ como assinatura:** um ornamento pequeno que se repete no site, até no cursor, para dar identidade sem poluir.
- **Movimento com moderação:** as animações são curtas, sobem pouco e acontecem uma vez. A ideia é guiar o olhar, não chamar atenção para o efeito.
- **Header fixo:** a navegação fica sempre à mão, e o header ganha um fundo ao rolar a página para continuar legível.
- **Mobile pensado à parte:** no celular, os filtros viraram um painel, a lista e as páginas de detalhe foram reorganizadas em uma coluna, e botões e links ganharam áreas de toque maiores.

## Acessibilidade

- Menu e filtros do celular usam `aria-expanded` e `aria-controls` para informar se estão abertos
- Ornamentos e o cursor com ✦ usam `aria-hidden`, então leitores de tela os ignoram
- Imagens com texto alternativo
- As animações e o cursor com ✦ são desligados para quem ativa **"reduzir movimento"** no sistema
- O cursor com ✦ só aparece em dispositivos com mouse e nunca bloqueia cliques

## Tecnologias

- **HTML5** semântico
- **CSS3** com variáveis (`:root`), Flexbox, Grid, `@keyframes` e media queries
- **JavaScript** (ES6+): manipulação do DOM, `IntersectionObserver`, `fetch` e geração de conteúdo a partir de dados
- [Font Awesome](https://fontawesome.com/) para os ícones
- [Google Fonts](https://fonts.google.com/) para Fraunces e DM Sans
- [Formspree](https://formspree.io/) para o formulário de contato
- Publicado no **GitHub Pages**

## Como os projetos funcionam

Os projetos não estão escritos à mão em cada página. Eles ficam num único arquivo de dados, o `dados-projetos.js`, usado por duas páginas:

- `projetos.js` monta a lista e os filtros
- `projeto.js` monta a página de detalhes, lendo o `id` do projeto na URL (`projeto.html?id=kairo`)

Cada projeto é um objeto com nome, tipo, se é destaque, imagem, descrição e resumo (em português e inglês), ano, link online, link do GitHub, tecnologias e galeria. Campos opcionais, como o link online, simplesmente não aparecem na página quando não existem.

### Para adicionar um projeto

1. Crie a pasta `imagens/projetos/<nome-do-projeto>/` com a imagem principal e as imagens da galeria, em `.webp`
2. Adicione um novo objeto em `dados-projetos.js`, seguindo o formato dos outros
3. Se for um projeto em destaque, marque `destaque: true`. Para aparecer também na home, o card correspondente precisa ser adicionado em `index.html`

## Estrutura de pastas

```
portfolio/
├── index.html            # página inicial
├── projetos.html         # lista de projetos com filtros
├── projeto.html          # modelo da página de detalhes
├── style.css             # estilos compartilhados e da página inicial
├── projetos.css          # estilos da lista de projetos
├── projeto.css           # estilos da página de detalhes
├── script.js             # menu, idioma, animações, cursor e formulário
├── projetos.js           # lista e filtros
├── projeto.js            # página de detalhes
├── dados-projetos.js     # dados de todos os projetos
└── imagens/
    ├── nathalia.webp
    └── projetos/         # uma pasta por projeto
```

## Como rodar localmente

Não há nada para instalar. Basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/nathaliadebona/portfolio.git
cd portfolio
```

Para ver as mudanças enquanto edita, use a extensão **Live Server** do VS Code.

## Contato

- **GitHub:** [@nathaliadebona](https://github.com/nathaliadebona)
- **LinkedIn:** [Nathália de Bona](https://www.linkedin.com/in/nathaliadalila/)
- **Portfólio:** [nathaliadebona.github.io/portfolio](https://nathaliadebona.github.io/portfolio/)

---

Feito com carinho e muitos commits ✦
