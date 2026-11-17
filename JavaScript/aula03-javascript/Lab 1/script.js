const formulario = document.querySelector("#formulario-media");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const campoNota3 = document.querySelector("#nota3");
const resultado = document.querySelector("#resultado");
const botaoLimpar = document.querySelector("#limpar");
function calcularMedia(nota1, nota2, nota3) {
 return (nota1 + nota2 + nota3) / 3;
}
function verificarSituacao(media) {
 if (media >= 7) return "Aprovado";
 if (media >= 5) return "Recuperação";
 return "Reprovado";
}
function notaValida(nota) {
 return !Number.isNaN(nota) && nota >= 0 && nota <= 10;
}
function obterClasseSituacao(situacao) {
 if (situacao === "Aprovado") return "aprovado";
 if (situacao === "Recuperação") return "recuperacao";
 return "reprovado";
}
formulario.addEventListener("submit", function (evento) {
 evento.preventDefault();
 const nome = campoNome.value.trim();
 const nota1 = Number(campoNota1.value);
 const nota2 = Number(campoNota2.value);
 const nota3 = Number(campoNota3.value);
 if (nome === "") {
 resultado.textContent = "Informe o nome do estudante.";
 resultado.className = "resultado erro";
 campoNome.focus();
 return;
 }
 if (campoNota1.value === "" ||
 campoNota2.value === "" ||
 campoNota3.value === "") {
 resultado.textContent = "Preencha todas as notas.";
 resultado.className = "resultado erro";
 return;
 }
 if (!notaValida(nota1) ||
 !notaValida(nota2) ||
 !notaValida(nota3)) {
 resultado.textContent =
 "As notas devem estar entre 0 e 10.";
 resultado.className = "resultado erro";
 return;
 }
 const media = calcularMedia(nota1, nota2, nota3);
 const situacao = verificarSituacao(media);
 const classe = obterClasseSituacao(situacao);
 resultado.innerHTML = `
 <strong>Estudante:</strong> ${nome}<br>
 <strong>Média:</strong> ${media.toFixed(1)}<br>
 <strong>Situação:</strong> ${situacao}
 `;
 resultado.className = `resultado ${classe}`;
});
botaoLimpar.addEventListener("click", function () {
 resultado.className = "resultado";
 campoNome.focus();
});