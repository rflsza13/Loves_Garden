let isLogin = document.getElementById('btn_login');
let usuarios = [sessionStorage.getItem("user1"), sessionStorage.getItem("user2")];
let senhas = [sessionStorage.getItem("senha1"), sessionStorage.getItem("senha2")];

function login() {
    console.log(usuarios)
    let user = document.getElementById('txt_user').value;
    let password = document.getElementById('txt_key').value;

    for(let i = 0; i < usuarios.length; i++){
        if(user.toLowerCase() == usuarios[i]){
            if(password == senhas[0]){
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