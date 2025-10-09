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
