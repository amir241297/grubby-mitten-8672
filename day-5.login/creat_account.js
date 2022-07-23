document.querySelector("form"),addEventListener("submit",create_ID)
let arr=JSON.parse(localStorage.getItem("CREATE_ID"))||[]
function create_ID()
{
    
    event.preventDefault()
    let obj={
        email:document.querySelector("#can_email").value,
        password:document.querySelector("#can_pswd").value,
        name: document.querySelector("#can_name").value,
        address:document.querySelector("#can_address").value,
        location:document.querySelector("#can_location").value,
        state:document.querySelector("#State").value,
        number:document.querySelector("#can_telephone").value, 
        repat_pswd:document.querySelector("#repeat_pswd").value,
        pincode:document.querySelector("#pincode").value,
        city:document.querySelector("#location").value,
    }
    if(obj.email!=="" && obj.name !=="" && obj.password!=="" && obj.address!=="" && obj.location!=="" && obj.location!==""
    && obj.state!=="" && obj.number!=="" && obj.repat_pswd!=="" && obj.pincode!=="" && obj.city!=="")
    {
        alert("signup successfully!")
    }
    arr.push(obj)
    localStorage.setItem("CREATE_ID",JSON.stringify(arr))
    
}



