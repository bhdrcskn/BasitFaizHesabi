//Klavyeden değişkenlerin girdisinin yapılması
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	
//Koşulun ifade edilmesi
    if (principal <= 0) { //Burada pozitif değer durumu kontrol ediliyor
        alert("Enter a positive number");
        document.getElementById("principal").focus();
	}
		
    var HDB = new Date().getFullYear(); //Burada yılı al
    var future = parseInt(HDB, 10) + parseInt(years, 10);
    var interest = principal * years * rate / 100;
    var result = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark><br>";
    document.getElementById("result").innerHTML = result;
}

function showVal(newVal) { //Aralık değerini aralıkta gösterme
    document.getElementById("showRate").innerHTML = newVal + '%'; 
}
