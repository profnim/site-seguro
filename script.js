document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const comentario = document.getElementById("comentario").value;

  // Sanitiza a saída (evita XSS básico)
  const escapeHTML = (str) =>
    str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  document.getElementById("resposta").innerHTML =
    `<p>Obrigado, <strong>${escapeHTML(nome)}</strong>!</p>` +
    `<p>Comentário recebido: "${escapeHTML(comentario)}"</p>`;
});
