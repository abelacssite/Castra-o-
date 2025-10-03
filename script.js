// Recupera cadastros do localStorage ao iniciar
let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

function salvarCadastro(dados) {
  cadastros.push(dados);
  localStorage.setItem("cadastros", JSON.stringify(cadastros));
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaCadastros");
  lista.innerHTML = "";
  cadastros.forEach((c, i) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <strong>${c.animalNome}</strong> (${c.animalEspecie}, ${c.animalSexo})<br>
      Tutor: ${c.tutorNome} - ${c.tutorTelefone}<br>
      Idade: ${c.animalIdade || "?"} anos | Peso: ${c.animalPeso || "?"} kg<br>
      Raça: ${c.animalRaca || "-"}
      <hr>
    `;
    lista.appendChild(item);
  });
}

// Carrega lista ao abrir
atualizarLista();

document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();
  const dados = {
    tutorNome: document.getElementById("tutorNome").value,
    tutorTelefone: document.getElementById("tutorTelefone").value,
    animalNome: document.getElementById("animalNome").value,
    animalEspecie: document.getElementById("animalEspecie").value,
    animalRaca: document.getElementById("animalRaca").value,
    animalIdade: document.getElementById("animalIdade").value,
    animalSexo: document.getElementById("animalSexo").value,
    animalPeso: document.getElementById("animalPeso").value
  };
  salvarCadastro(dados);
  this.reset();
});
