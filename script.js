let isLogin = document.getElementById('btn_login');

function login() {
    console.log("login :)")
    let user = document.getElementById('txt_user').value;
    let password = document.getElementById('txt_key').value;

    if(user == null || password == null){
        alert("Dados inválidos!");
        clear();
    } else {
        alert("Login Bem Sucedido!");
        clear();
    }
}
function clear(){
    document.getElementById("txt_user").value = "";
    document.getElementById("txt_key").value = "";
}
function garden() {
    setTimeout(function() {
        clear();
        window.open('Garden/garden.html', "_self");
      }, 800);
}
isLogin.addEventListener('click', login);