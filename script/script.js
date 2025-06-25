function ProximaPagina() {
  const container = document.getElementById("container");
  container.classList.add("flip");
  setTimeout(() => {
    window.location.href = "pagina1.html";
  }, 1000);
}