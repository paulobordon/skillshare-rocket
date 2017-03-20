//js archivo

		console.log('HOLA COHETE');

//funciones variables
var timer = null;
var cuentaRegresiva = 10;
//arriba determino las variables del temporizador y de la cuenta regresiva, al que le doy un valor

var cambiaEstado = function(estado) {
	document.body.className = 'body-stage'+estado;
	clearInterval(timer);
	cuentaRegresiva = 10;
	document.getElementById('cuentabajo').innerHTML = cuentaRegresiva;
//en esta función, lo que digo es que los que tenga evento con la variable/funcion "cambiaEstado", donde dentro del parentesis se va a encontrar los valores de cada estado.
//Para cambiar la clase del BODY, que son 'estados', digo que agarre el Body con la clase 'body-stage' más el estado.
//Al hacer click en el evento, como los parametros están definidos en el HTML, cambia el body de estado
	if (estado == 2) {
		timer = setInterval(function(){
			cuentaRegresiva = cuentaRegresiva -1;
			document.getElementById('cuentabajo').innerHTML = cuentaRegresiva;
			if (cuentaRegresiva <= -1){
				cambiaEstado(3);
			}

		}, 1000);
//En esta funcion digo que si el ESTADO del body es igual a 2, que inicie el timer. Donde con la funcion setInterval() determino otra función donde digo que agarre el elemento con id 'cuentabajo' y con el innerHTML, digo que agarre la variable cuentaRegresiva. Luego, digo que el valor de cuentaRegresiva sea igual al valor del mismo menos 1. Al final, digo que esta funcion de cuentaRegresiva sea realizada cada 1000 ms, o sea, cada segundo
	} else if (estado == 3){

		var exito = setTimeout (function() {
			var randomNumber = Math.round(Math.random()*10);
			console.log('randomNumber: ',randomNumber);
			if (randomNumber > 3) {
				//exito
				cambiaEstado(4)
			} else {
				//FAIL
				cambiaEstado(5)
			}
		}, 3000);
	};

}

