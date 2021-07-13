function calculator()
{
    var amount=parseInt(document.getElementById("amount").value);
    var interest_rate=parseInt(document.querySelector("#interest").value);
    var months=parseInt(document.querySelector("#months").value);
    var interest =parseInt(amount * (interest_rate * 5) / months);
    var payment =parseInt((amount/months) + interest);

   document.querySelector("#payment").innerHTML = "EMI :₹" + payment;
    console.log(interest_rate)

}