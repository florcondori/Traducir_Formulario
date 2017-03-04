//obtener los elementos por su Id
	var title = document.getElementById('form-signin-heading');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');

	var remember = document.getElementsByTagName('span')[0];
	var button = document.getElementsByClassName('btn')[0];
//obtener el boton y el div para imprimir la informacion
	var mostrar = document.getElementById('mostrar');
	var contenido = document.getElementById('contenido');
	//Funcion que traduce la pagina principal
	function traducirFormulario(){
		title.innerHTML = "Por favor inicie sesión";
		email.placeholder = "Por favor ingrese su correo";
		password.placeholder ="Contraseña";

		remember.innerHTML = "Recordar Datos";
		button.innerHTML = "Iniciar sesión";
	}
	traducirFormulario();//se ejecuta cuando carga la pagina
//imprimir cuando dan click sobre el boton
	mostrar.onclick=function(){
		if(email.value!=""){
			if(password.value!=""){
				contenido.innerHTML = "<h3>Datos de Formulario</h3>"+
										"<h4>El correo ingresado es: </h4>"+
										email.value+"</br>"+
										"<h4>La clave ingresada es: </h4>"+
										password.value;	
			}
			
		}else{
			alert("Llenar campos por favor");
		}

	};
