function guardarDatos(){
 localStorage.nombre = document.getElementById("nombreR").value;
 localStorage.password = document.getElementById("passwordR").value;
}
function recuperarDatos(){
	 if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
	  document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
	 }
	 else{
	  document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
	 }
}
function login(){
	var usu = document.getElementById("nombreL").value;
	var passwordL =  document.getElementById("passwordL").value;
	
	document.getElementById("datos2").innerHTML += "Nombre: " + usu + " ,Password: "+ passwordL;
	guardarDatos(); 
	if((localStorage.nombre == usu)&& (localStorage.password == passwordL)){
		alert("Bienvenido "+ usu);
		location.href ="Pagina.html";		
	}else{
		alert("Contraseña Incorrecta");
	}
	
}
function buscar(){
	alert("hola");
}
