document.querySelector("form"),addEventListener("click",login_user)
let arr=JSON.parse(localStorage.getItem("user_login"))||[]
function login_user()
{
    event.preventDefault()
    let obj={
        E_mail:document.querySelector("#mail").value,
        password:document.querySelector("#pswd").value  
    }
    arr.push(obj)
    localStorage.setItem("Log In",JSON.stringify(arr))
}