function validarDados(){
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
