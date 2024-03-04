function generatePassword(){
    myname = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    mycolor = document.getElementById("color").value;
    var mynumber = 23;
    mynumber += 5;

    password = document.getElementById("password");

    password.innerHTML = myname +  surname + mycolor + mynumber;
}