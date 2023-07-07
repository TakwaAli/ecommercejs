var signup = document.getElementById("signUpForm")
var single = document.getElementById("show");

function signUpData(e){
    e.preventDefault()
    var UserNameInp = document.getElementById('username').value;
    var EmailInp = document.getElementById('email').value;
    var PasswordInp = document.getElementById('password').value;
    var invalid = document.getElementById('invalid');
    const user = {
        id: Date.now(),
        UserName: UserNameInp,
        Email: EmailInp,
        Password: PasswordInp, 
        cart: []
    }
    var existName;
    var existEmail;
    var i;
    const users = readData();

    var userFromStorage = JSON.parse(localStorage.getItem('users')) || [] 

    for (let index = 0; index < users.length - 1; index++) {
        console.log(index);
        if(UserNameInp == userFromStorage[index].UserName || EmailInp == userFromStorage[index].Email){
            existName = userFromStorage[index].UserName;
            existEmail = userFromStorage[index].Email;
            i = index;
            break;
        }
        else{
            existName = ""
            existEmail = ""
        }     
    }
    console.log(existName, existEmail, i);
    if(existName == "" || existEmail == "" || existName == undefined){
        users.push(user);
        window.localStorage.setItem("users", JSON.stringify(users));
        invalid.innerHTML = "welcome"
        showSingle(users[userFromStorage.length] )
    }
    else{
        invalid.innerHTML = "This User Name or Email is already in use please choose another one or log in."
    }
}

function readData(){
    data = JSON.parse(localStorage.getItem("users")) || []
    return data
}

function readuser(){
    data = JSON.parse(localStorage.getItem("user")) || []
    return data
}

function storeData(data){
    console.log(data);
    window.localStorage.setItem("user", JSON.stringify(data))
    // window.location.href="thankYou.html"
}

function showSingle(user){
    console.log(user);
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

if(signup){
    signup.addEventListener("submit", signUpData)
}

function logout(){
    localStorage.removeItem("user")
    console.log("remove items");
    window.location.href = "website.html"
}

