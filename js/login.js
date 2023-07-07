// log In Page
var logInForm = document.getElementById("logInForm");
var NameCheck = document.getElementById("username-check");
var PasswordCheck = document.getElementById("password-check");
var single = document.getElementById("show");
var invalid = document.getElementById('invalid');
function logIn(e){
    e.preventDefault()
    var user = readData()
    var exist;
    for (let index = 0; index < user.length; index++) {
        if(NameCheck.value == user[index].UserName && PasswordCheck.value == user[index].Password)
        {
            invalid.innerHTML = "welcome"
            var i = index;
            exist = user[i].UserName;
            break;
        }
        else
        {
            exist = "";
        }

    }
    if(exist == ""){
        invalid.innerHTML = "please enter the correct username or password <br> if you don't have an account? please sign up first."
    }
    else{
        showSingle(user[i])
    }
}

function readData(){
    data = JSON.parse(localStorage.getItem("users")) || []
    return data
}

function storeData(data){
    window.localStorage.setItem("user", JSON.stringify(data))
}

function readuser(){
    data = JSON.parse(localStorage.getItem("user")) || []
    return data
}


function showSingle(user){
    storeData(user)
    window.location.href = "profile.html"
}

if(single){
    var show = readuser();
    console.log(show);
    single.innerHTML = `<div> <div><img src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg" alt="" class="myImg"></div><h2 style="margin: 20px;">${show.UserName}</h2><h4>${show.Email}<h4> 
    <p><a id="edit" href="#" onclick="logout()">log out</a></p>
    </div>`
}


if(logInForm){
    logInForm.addEventListener("submit", logIn)
}

function logout(){
    localStorage.removeItem("user")
    console.log("remove items");
}