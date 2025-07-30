function PaginaAnterior() {
  const container = document.getElementById("container");
  container.classList.add("flip-reverse");
  setTimeout(() => {
    window.location.href = "pagina3.html";
  }, 1000);
}
