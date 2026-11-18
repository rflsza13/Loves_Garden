let isLogin = document.getElementById('btn_login');

let usuario = JSON.parse(sessionStorage.getItem("user"));

function login() {
    let loginUser = document.getElementById('txt_user').value;
    let password = document.getElementById('txt_key').value;

    for(let i = 0; i < usuarios.length; i++){
        if(loginUser.toLowerCase() == usuario[i].usuario){
            if(password == usuario[i].senha){
                garden();
                return;
            } else {
                alert("Dados inválidos! \nTente Novamente");
                clear();
                garden();
                return;
            }
        }
    }
    alert("Dados inválidos! \nTente Novamente");
    clear();
}
function clear(){
    document.getElementById("txt_user").value = "";
    document.getElementById("txt_key").value = "";
}
function garden() {
    setTimeout(function() {
        clear();
        window.open('page/garden.html', "_self");
      }, 800);
}
isLogin.addEventListener('click', login);
