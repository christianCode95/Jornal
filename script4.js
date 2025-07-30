function ProximaPagina() {
    const container = document.getElementById('container');
    container.classList.add('flip');
    setTimeout(() => {
        window.location.href = "pagina4.html";
    }, 1000);
}

function PaginaAnterior() {
    const container = document.getElementById('container');
    container.classList.add('flip-reverse');
    setTimeout(() => {
        window.location.href = "pagina2.html";
    }, 1000);
}