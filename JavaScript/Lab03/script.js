const botao = document.getElementById("btnCalcular");
botao.addEventListener("click", function () {
 const campo1 = document.getElementById("nota1");
 const campo2 = document.getElementById("nota2");
 const campo3 = document.getElementById("nota3");
 const resultado = document.getElementById("resultado");
 if (campo1.value === "" || campo2.value === ""|| campo3.value === "") {
 resultado.textContent = "Preencha os 3 numeros.";
 return;
 }
 const nota1 = Number(campo1.value);
 const nota2 = Number(campo2.value);
 const nota3 = Number(campo3.value);
 const média = (nota1 + nota2 + nota3) / 3

 resultado.innerHTML = `
 <p>Media: ${média}</p>
 `;
});

