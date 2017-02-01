function changeText() {
	var YearInput = document.getElementById("YearInput").value;
	var YearInfo = document.getElementById("YearInfo");
	document.getElementById("year").innerHTML = YearInput; 
    if (YearInput == "2017") {
	YearInfo.innerHTML = "Launched My <br> First Website";
	}
	else if (YearInput == "2016") {
	YearInfo.innerHTML = "Developed My First <br> Android App";
	}
	else if (YearInput == "2015") {
	YearInfo.innerHTML = "Developed My <br> First Game";
	}
	else if (YearInput == "2014") {
	YearInfo.innerHTML = "Built My First <br> Gaming Computer";
	}
	else if (YearInput == "2013") {
	YearInfo.innerHTML = "Took My First <br> Engineering Class";
	}
	else if (YearInput == "2011") {
	YearInfo.innerHTML = "Rooted my Galaxy S2";
	}
	else if (YearInput == "2010") {
	YearInfo.innerHTML = "Recieved My <br> First Smartphone";
	}
	else if (YearInput == "2009") {
	YearInfo.innerHTML = "Recieved My <br> First Smartphone";
	}
	else if (YearInput == "2006") {
	YearInfo.innerHTML = "Played my First Video Game";
	}
	
	else if (YearInput == "1999") {
	YearInfo.innerHTML = "I Was Born";
	}
	else if (YearInput < "1999") {
	YearInfo.innerHTML = "I Wasn't even <br> born yet";
	}
	else if (YearInput > "2017") {
	YearInfo.innerHTML = "You Time Travellin?";
	}	   	     
}
console.log(year);