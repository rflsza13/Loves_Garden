let isLogin = document.getElementById('btn_login');

let user = JSON.parse(sessionStorage.getItem("user"));

function login() {
    let user = document.getElementById('txt_user').value;
    let password = document.getElementById('txt_key').value;

    for(let i = 0; i < usuarios.length; i++){
        if(user.toLowerCase() == user[i].usuario){
            if(password == user[i].senha){
                garden();
                return;
            } else {
                alert("Dados inválidos! \nTente Novamente");
                clear();
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