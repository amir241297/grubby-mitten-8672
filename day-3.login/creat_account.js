document.querySelector("form"),addEventListener("click",create_ID)
let arr=JSON.parse(localStorage.getItem("CREATE_ID"))||[]
function create_ID()
{
    
    event.preventDefault()
    let obj={
        email_obj:document.querySelector("#can_email").value,
        password_obj:document.querySelector("#can_pswd").value,
        name_obj: document.querySelector("#can_name").value,
        address_obj:document.querySelector("#can_address").value,
        location_obj:document.querySelector("#can_location").value,
        state_obj:document.querySelector("#State").value,
        number_obj:document.querySelector("#can_telephone").value, 
        repat_pswd_obj:document.querySelector("#repeat_pswd").value,
        pincode_obj:document.querySelector("#pincode").value,
        city_obj:document.querySelector("#location").value,
    }
    arr.push(obj)
    localStorage.setItem("signup",JSON.stringify(arr))
}



