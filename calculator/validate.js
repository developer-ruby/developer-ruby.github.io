function validate(){

    var userId=document.getElementById("userId").value;
    var password=document.getElementById("userPass").value;


if(userId=="admin" && password=="admin"){
    window.location.href="calc.html";
}else{
    alert("error");
}

}
