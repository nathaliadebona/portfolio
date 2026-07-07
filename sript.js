const secoes = document.querySelectorAll('section');
const links = document.querySelectorAll('header ul li a');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada =>  {
        if (entrada.isIntersecting) {
            
        }
    })
})