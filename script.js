function validarDadosLogin(){
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    console.log(email);
    console.log(senha);

    if(!email){
        alert('Por favor, insira seu E-mail');
        return false;
    }

    if(!senha || senha.length < 8){
        alert("Por favor, insira uma senha que tenha pelo menos 8 dígitos");
        return false;
    }

    window.location.href = "Dashboard.html"
    return false
}

function validarDadosEmail(){
    const emailrec = document.getElementById('emailrec').value.trim();

    console.log(emailrec);

    if(!emailrec){
        alert('Por favor, insira seu E-mail');
        return false;
    }

    window.location.href = "novasenha.html"
    return false
}

function validarDadosSenha(){
    const novaSenha = document.getElementById('novaSenha').value.trim();
    const confirmSenha = document.getElementById('confirmSenha').value.trim();

    console.log(novaSenha);
    console.log(confirmSenha);

    if(!novaSenha || novaSenha.length < 8){
        alert('Por favor, insira uma senha que tenha pelo menos 8 dígitos');
        return false;
    }

    if(!confirmSenha || confirmSenha !== novaSenha){
        alert('Por favor, insira a mesma senha');
        return false;
    }

    window.location.href = "index.html"
    return false
}

function openSidebar(){
    document.getElementById("sidebar").style.display = "block";
}

function closeSidebar(){
    document.getElementById("sidebar").style.display = "none";
}