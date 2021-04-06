var singOperation, fnumber;

function calc(i) {
	document.querySelector(".resulst").innerHTML += i;
}

document.getElementById("equal").addEventListener("click", calculResults);

function calculResults() {
	var num1 = 0,
		num2 = 0;

	if (singOperation == "p") {
		num1 = fnumber;
		console.log("okay" + num1);
		num2 = document.querySelector(".resulst").innerHTML;
		console.log("okay" + " " + num1 + " " + num2);
		document.querySelector(".resulst").innerHTML = Math.pow(
			parseFloat(num1),
			parseFloat(num2)
		);
		singOperation = "";
		return;
	} else if (singOperation == "cos") {
		num1 = fnumber;
		console.log("cos : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.cos(num1)
		);
		return;
	} else if (singOperation == "sin") {
		num1 = fnumber;
		console.log("sin : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.sin(num1)
		);
		return;
	} else if (singOperation == "tan") {
		num1 = fnumber;
		console.log("tan : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.tan(num1)
		);
		return;
	} else if (singOperation == "ln") {
		num1 = fnumber;
		console.log("ln : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.log(num1)
		);
		return;
	} else if (singOperation == "abs") {
		num1 = fnumber;
		console.log("abs : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.abs(num1)
		);
		return;
	} else if (singOperation == "exp") {
		num1 = fnumber;
		console.log("exp : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.exp(num1)
		);
		return;
	} else if (singOperation == "sqrt") {
		num1 = fnumber;
		console.log("sqrt : " + num1);
		document.querySelector(".resulst").innerHTML = parseFloat(
			Math.sqrt(num1)
		);
		return;
	}
	console.log("simple equation");
	var equation = document.querySelector(".resulst");
	var realdeal = equation.innerHTML;
	console.log(eval(realdeal));
	document.querySelector(".resulst").innerHTML = eval(realdeal);
}
//function thta clear th e result cection
document.getElementById("opclear").addEventListener("click", clear);
function clear() {
	console.log("function clear");
	document.querySelector(".resulst").innerHTML = "";
}
// fuction that calculat the cos of a given number
document.getElementById("opcos").addEventListener("click", coscalc);
function coscalc() {
	console.log("fucntion cos");
	singOperation = "cos";
	fnumber = document.querySelector(".resulst").innerHTML;
}
// fuction that calculat the sin of a given number
document.getElementById("opsin").addEventListener("click", sincalc);
function sincalc() {
	console.log(" function sin");
	singOperation = "sin";
	fnumber = document.querySelector(".resulst").innerHTML;
}
// fuction that calculat the tan of a given number
document.getElementById("optan").addEventListener("click", tancalc);
function tancalc() {
	console.log(" function tan");
	singOperation = "tan";
	fnumber = document.querySelector(".resulst").innerHTML;
}
//function that calculat the power of a given number
document.getElementById("oppuissance").addEventListener("click", calcpower);
function calcpower() {
	singOperation = "p";
	console.log("function power");
	fnumber = document.querySelector(".resulst").innerHTML;
	clear();
}
// fuction that calculat the ln of a given number
document.getElementById("opln").addEventListener("click", lncalc);
function lncalc() {
	console.log(" function ln");
	singOperation = "ln";
	fnumber = document.querySelector(".resulst").innerHTML;
}
// fuction that calculat the apsolut value a given number
document.getElementById("opabs").addEventListener("click", lncalc);
function abscalc() {
	console.log(" function abs");
	singOperation = "abs";
	fnumber = document.querySelector(".resulst").innerHTML;
}
// fuction that calculat the exp value a given number
document.getElementById("opexp").addEventListener("click", expcalc);
function expcalc() {
	console.log(" function exp");
	singOperation = "exp";
	fnumber = document.querySelector(".resulst").innerHTML;
}
// fuction that calculat the sqrt value a given number
document.getElementById("opsqrt").addEventListener("click", sqrtcalc);
function sqrtcalc() {
	console.log(" function sqrt");
	singOperation = "sqrt";
	fnumber = document.querySelector(".resulst").innerHTML;
}
// fuction that calculat the SUM value of two ginen number
document.getElementById("opsqrt").addEventListener("click", sqrtcalc);
function sqrtcalc() {
	console.log(" function sqrt");
	singOperation = "sqrt";
	fnumber = document.querySelector(".resulst").innerHTML;
}
