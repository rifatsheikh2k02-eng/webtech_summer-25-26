
console.log("Connected");

function LoginValidation()
{
    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;
        console.log(username); 

    document.getElementById("UsernameError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
        console.log(password); 

    if(username == "")
    {
        document.getElementById("UsernameError").innerHTML = "Username is required";
        return false;
    }

    if(password == "")
    {
        document.getElementById("PasswordError").innerHTML = "Password is required";
        return false;
    }

    alert("Login Successfull");
    return false;
}