document.querySelector("form"),addEventListener("submit",login_user)
let signed_arr=JSON.parse(localStorage.getItem("CREATE_ID"))||[]

function login_user()
{
    event.preventDefault()
    if(signed_arr.length==0)
    {
        alert("Invalid!")
    }
    let obj={
        E_mail:document.querySelector("#mail").value,
        password:document.querySelector("#pswd").value  
    }
    let update=false
    signed_arr.forEach(function(ele) {
        if(ele.email===obj.E_mail && ele.password===obj.password)
        {
            update=true
            localStorage.setItem("signup",JSON.stringify(ele))
            alert("signup successfull.")
            window.location.href="day-2.html"
        }
    });
    if(update===false)
    {
        alert("user not found...")
    }
}