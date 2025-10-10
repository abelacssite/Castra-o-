function salvarCadastro(dados) {
    // Usa a variável 'db' definida no index.html
    db.collection("Animais") // Define o nome da coleção no Firestore
        .add(dados) // Adiciona os dados do formulário
        .then(() => {
            alert("Cadastro salvo com sucesso no Firebase!");
            // Se você quiser que a lista recarregue, chame aqui:
            // atualizarLista(); 
        })
        .catch((error) => {
            alert("Erro ao salvar cadastro: " + error);
        });
}
// Ouve o evento de "submit" (envio) do formulário
document.getElementById("formCadastro").addEventListener("submit", function(e) {
    // ESSENCIAL: Impede o navegador de recarregar a página
    e.preventDefault(); 
    
    // Captura os valores de TODOS os campos do seu formulário
    const dados = {
        tutorNome: document.getElementById("Tutor").value,
        tutorTelefone: document.getElementById("Telefone").value,
        animalNome: document.getElementById("Animal").value,
        animalEspecie: document.getElementById("Especie").value,
        animalRaca: document.getElementById("Raca").value,
        animalIdade: document.getElementById("Idade").value,
        animalSexo: document.getElementById("Sexo").value,
        animalPeso: document.getElementById("Peso").value,
    };

    // Chama a função que salva no Firebase (que você já corrigiu)
    salvarCadastro(dados);

    // Limpa os campos do formulário após o envio
    this.reset();
});

// A função 'atualizarLista()' deve estar em algum lugar do seu código
// A função 'salvarCadastro(dados)' também deve estar no seu código
