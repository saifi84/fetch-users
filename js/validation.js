
  
var password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters = /^[A-Za-z]+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function signUp()
{

var name= document.getElementById("name").value;
var email= document.getElementById("email").value;
var password= document.getElementById("password").value;			
var confirmPassword= document.getElementById("confirmPassword").value;

    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Email not correct');
    }
    else if(password=='')
    {
        alert('Please enter Password');
    }
    else if(confirmPassword=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!password_expression.test(password))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(password != confirmPassword)
    {
        alert ('Password not Matched');
    }
    else
    {	        
       
        let data=new Array();
        data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(data.some((item)=>{
            return item.email==email
        }))
        {
          alert("User Allready Register");
        }
        else
        {
          data.push({
          "name":name,
          "email":email,
          "password":password
          
        })
        alert("Register Successfully");
        window.location.href="login.html"
        localStorage.setItem("users",JSON.stringify(data));
        }

    }
}

function logIn(){

    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    let name=localStorage.getItem('name')?localStorage.getItem('name'):''
    console.log(name);
    if(name!='')
    {
    alert('Please visit profile');
    window.location.href="home.html";
    }

    if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(password=='')
    {
        alert('Please enter Password');
    }
    else
    {				                     
       
        let data=new Array();
        data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(data.some((item)=>{return item.email==email && item.password==password}))
        {
        alert("Login Pass");
        let current_user=data.filter((item)=>{
            return item.email==email && item.password==password
        })[0]
        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        window.location.href="home.html"
        }
        else
        {
        alert('Login Fail');
        }
    }

}

