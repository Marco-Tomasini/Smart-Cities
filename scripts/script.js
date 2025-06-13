function openSidebar(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openSendMessage(){
    document.getElementById("enviarMensagem").style.display = "flex";
}

function closeSendMessage(){
    document.getElementById("enviarMensagem").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){

    const login = document.getElementById('login');

    login.addEventListener('submit', function(e){
        e.preventDefault();

        let valido = true;

        document.getElementById('errorEmail').textContent = "";
        document.getElementById('errorSenha').textContent = "";

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            document.getElementById('errorEmail').textContent = "*e-mail inválido";
            valido = false;
        }

        if (senha.length < 8) {
            document.getElementById('errorSenha').textContent = "*a senha deve ter pelo menos 8 caracteres";
            valido = false;
        }

        if (valido) {
            login.reset();
            window.location.href = 'public/dashboard.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", function(){

    const esqueci = document.getElementById('esqueci');

    esqueci.addEventListener('submit', function(e){
        e.preventDefault();

        let valido = true;

        document.getElementById('errorEmailRec').textContent = "";

        const emailrec = document.getElementById('emailrec').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailrec)) {
            document.getElementById('errorEmailRec').textContent = "*e-mail inválido";
            valido = false;
        }

        if (valido) {
            esqueci.reset();
            window.location.href = 'novaSenha.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", function(){

    const newPass = document.getElementById('newPass');

    newPass.addEventListener('submit', function(e){
        e.preventDefault();

        let valido = true;

        document.getElementById('errorNovaSenha').textContent = "";
        document.getElementById('errorConfSenha').textContent = "";

        const novaSenha = document.getElementById('novaSenha').value.trim();
        const confirmSenha = document.getElementById('confirmSenha').value.trim();

        if (novaSenha.length < 8) {
            document.getElementById('errorNovaSenha').textContent = "*a nova senha deve ter pelo menos 8 caracteres";
            valido = false;
        }

        if (confirmSenha !== novaSenha) {
            document.getElementById('errorConfSenha').textContent = "*as senhas não coincidem";
            valido = false;
        }

        if (valido) {
            newPass.reset();
            window.location.href = '../index.html';
        }
    });
});

function alterTxtMsg() {
    let txt = document.getElementById("AVISAR");
    txt.innerText = "Mensagem enviada✓";
    txt.disabled = true;
}

function alterTxtRemove() {
    let txt = document.getElementById("remover");
    if (confirm("Deseja realmente remover este item?")) {
        txt.innerText = "Removido✓";
        txt.disabled=true;
    } else {
        txt.innerText = "Remover";
    }
}
