function validacao() {
var mens = " ";
if (document.getElementById("num1").validity.rangeOverflow) {
mens = "Número é maior!";
}

else if (document.getElementById("num1").validity.rangeUnderflow) {
mens = "Número é menor!";
}

else {
mens = "Número válido!";
}
document.getElementById("imprimi").innerHTML = mens;
}