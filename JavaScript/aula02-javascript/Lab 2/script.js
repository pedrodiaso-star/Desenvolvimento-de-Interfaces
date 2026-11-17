function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
   }
   function verificarSituacao(media) {
    if (media >= 7) return "Aprovado";
    if (media >= 5) return "Recuperação";
    return "Reprovado";
   }
   function notaValida(nota) {
    return !Number.isNaN(nota) &&
    nota >= 0 &&
    nota <= 10;
   }
   const nomeEstudante = prompt(
    "Informe o nome do estudante:"
   );
   const nota1 = Number(prompt("Informe a primeira nota:"));
   const nota2 = Number(prompt("Informe a segunda nota:"));
   const nota3 = Number(prompt("Informe a terceira nota:"));
   if (nomeEstudante === null || nomeEstudante.trim() === "") {
    console.log("Informe o nome do estudante.");
   } else if (
    !notaValida(nota1) ||
    !notaValida(nota2) ||
    !notaValida(nota3)
   ) {
    console.log("As notas devem estar entre 0 e 10.");
   } else {
    const media = calcularMedia(nota1, nota2, nota3);
    const situacao = verificarSituacao(media);
    console.log("Estudante:", nomeEstudante);
    console.log("Média:", media.toFixed(1));
    console.log("Situação:", situacao);
   }