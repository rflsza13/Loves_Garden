let isLogin = document.getElementById('btn_login');

function login() {
    console.log("login :)")
    let user = document.getElementById('txt_user').value;
    let password = document.getElementById('txt_key').value;
    clear();

    // if(user == null || password == null){
    //     alert("Dados inválidos!");
    //     clear();
    // } else {
    //     if(user == "rafael" || user == "Rafael"){
    //         if(password == "17952872"){
    //                 garden();
    //             } else {
    //                 alert("Dados inválidos!");
    //                 clear();
    //             }
    //     } else {
    //         if (user == "julia" || user == "Julia"){
    //             if(password == "102749jf@2024"){
    //                 garden();
    //             } else {
    //                 alert("Dados inválidos!");
    //                 clear();
    //             }
    //         }
    //     }
    // }
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