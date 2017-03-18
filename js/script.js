//js archivo

		console.log('Esto debe aparecer en la consola');

//cambiar color de una caja 

	var showHide = function() {
		var nombreActual = document.getElementById('box1').className;

		if (nombreActual == 'caja') {
			document.getElementById('box1').className = 'caja show';
		} else {
			document.getElementById('box1').className = 'caja'
		}  


		//document.getElementById('box1').className = 'caja rojo';
	};

	var cambiarPalabra = function() {
		document.getElementById('cambiarPalabra').innerHTML = "OCULTAR";
	}

	var colorChange = function() {
		var nombreActual = document.getElementById('box1').className;

		if (nombreActual == 'caja show') {
			document.getElementById('box1').className = 'caja show color';
		} else {
			document.getElementById('box1').className = 'caja'
		}  


		//document.getElementById('box1').className = 'caja rojo';
	};

//primer codigo de prueba 

		// var auto = {
		// 	marca: 'Suzuki',
		// 	tipo: 'Szwift',
		// 	color: 'gris',
		// 	estaPrendido: false,
		// 	numDeRuedas: 4,
		// 	asientos: [
		// 		'asiento1',
		// 		'asiento2',
		// 		'asiento3',
		// 		'asiento4',
		// 		'asiento5'
		// 	],
		// 	prender : function() {
		// 		this.estaPrendido = true;
		// 	},
		// 	apagar : function() {
		// 		this.estaPrendido = false;
		// 	},
		// 	// cambiarColor : function (color) {
		// 	// 	if (color == 'gris'){
		// 	// 		alert ('El auto es de color ' + color);
		// 	// 	} else {
		// 	// 		alert ('Te equivocaste de Auto');
		// 	// 	}
		// 	// }
		// 	cambiarColor : function (color) {
		// 		if (color == 'gris') {
		// 			alert ('El auto ya es ' + color);
		// 		} else if (color != 'gris') {
		// 			alert ('Haz cambiado tu auto al color ' + color);
		// 		}
		// 	}

		// };