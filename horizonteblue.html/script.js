
/* =========================
   CADASTRO
========================= */
document.getElementById("formCadastro").addEventListener("submit", function(e){
    e.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        email: document.getElementById("email").value,
        cep: document.getElementById("cep").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        senha: document.getElementById("senha").value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    this.reset();
});


/* =========================
   LOGIN
========================= */
document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const cpfLogin = document.getElementById("cpfLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;

    if(!usuario){
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if(usuario.cpf === cpfLogin && usuario.senha === senhaLogin){
        alert("Login realizado com sucesso!");
    } else {
        alert("CPF ou senha incorretos!");
    }

    this.reset();
});


/* =========================
   ORÇAMENTO
========================= */
document.getElementById("formOrcamento").addEventListener("submit", function(e){
    e.preventDefault();

    const dadosOrcamento = {
        cpf: document.getElementById("cpf").value,
        destino: document.getElementById("destino").value,
        data: document.getElementById("data").value,
        email: document.getElementById("email").value,
        pessoas: document.getElementById("pessoas").value,
        observacoes: document.getElementById("observacoes").value
    };

    console.log(dadosOrcamento);

    alert("Orçamento enviado com sucesso!");

    this.reset();
});