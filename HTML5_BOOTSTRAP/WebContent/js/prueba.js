function login(){
	var usu = document.getElementById("nombreL").value;
	localStorage.setItem("nombreL", usu);
	if (document.getElementById("nombreR").value != null) {
		var usu = document.getElementById("nombreR").value;
		localStorage.setItem("nombreR", login);
	}
}
function cargar(){
	var usu = localStorage.getItem("nombreL");
	document.getElementById("bienvenido").innerHTML = "Bienvenido: "
		+ localStorage.getItem("nombreL");
}

function mostrar(){
    document.getElementById('segundo').style.display="block";
    document.getElementById('contraer').style.display="block";
}
function mostrarC(){
    document.getElementById('cuatro').style.display="block";
    document.getElementById('contraerC').style.display="block";
}
function contraer(){
    document.getElementById('segundo').style.display="none";
    document.getElementById('contraer').style.display="none";
}
function contraerC(){
    document.getElementById('cuatro').style.display="none";
    document.getElementById('contraerC').style.display="none";
}