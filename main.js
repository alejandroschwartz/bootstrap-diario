
let boton1 = document.getElementById('primer');
boton1.addEventListener('click', mostrar1)
let boton2 = document.getElementById('segundo');
boton2.addEventListener('click', mostrar2);

let one = document.getElementById('uno');
let two = document.getElementById('dos');
let three = document.getElementById('tres');
let four = document.getElementById('cuatro');
let five = document.getElementById('cinco');
let six = document.getElementById('seis');

let seleccion = document.getElementById('selection');

let resultado = document.getElementById("resultado");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");
let resultado4 = document.getElementById("resultado4");
let resultado5 = document.getElementById("resultado5");
let resultado6 = document.getElementById("resultado6");


function mostrar1() {
    
    resultado.innerHTML = '';
    resultado2.innerHTML = '';
    resultado3.innerHTML = '';
    resultado4.innerHTML = '';
    resultado5.innerHTML = '';
    resultado6.innerHTML = '';


    function condicion1() {

        if( one.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado.innerHTML = one.name + '<br/> introduccion 1';
            }
            else if( seleccion.value == 2 ) {
                resultado.innerHTML = one.name + '<br/> seguridad 1';
            }
            else if( seleccion.value == 3 ) {
                resultado.innerHTML = one.name + '<br/> economia 1';
            }
            else {
                resultado.innerHTML = one.name + '<br/> todos los temas 1';
            }
        }

        if( two.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado2.innerHTML = two.name + '<br/> introduccion 1';
            }
            else if( seleccion.value == 2 ) {
                resultado2.innerHTML = two.name + '<br/> seguridad 1';
            }
            else if( seleccion.value == 3 ) {
                resultado2.innerHTML = two.name + '<br/> economia 1';
            }
            else {
                resultado2.innerHTML = two.name + '<br/> todos los temas 1';
            }
        }

        if( three.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado3.innerHTML = three.name + '<br/> introduccion 1';
            }
            else if( seleccion.value == 2 ) {
                resultado3.innerHTML = three.name + '<br/> seguridad 1';
            }
            else if( seleccion.value == 3 ) {
                resultado3.innerHTML = three.name + '<br/> economia 1';
            }
            else {
                resultado3.innerHTML = three.name + '<br/> todos los temas 1';
            }
        }

        if( four.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado4.innerHTML = four.name + '<br/> introduccion 1';
            }
            else if( seleccion.value == 2 ) {
                resultado4.innerHTML = four.name + '<br/> seguridad 1';
            }
            else if( seleccion.value == 3 ) {
                resultado4.innerHTML = four.name + '<br/> economia 1';
            }
            else {
                resultado4.innerHTML = four.name + '<br/> todos los temas 1';
            }
        }

        if( five.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado5.innerHTML = five.name + '<br/> introduccion 1';
            }
            else if( seleccion.value == 2 ) {
                resultado5.innerHTML = five.name + '<br/> seguridad 1';
            }
            else if( seleccion.value == 3 ) {
                resultado5.innerHTML = five.name + '<br/> economia 1';
            }
            else {
                resultado5.innerHTML = five.name + '<br/> todos los temas 1';
            }
        }

        if( six.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado6.innerHTML = six.name + '<br/> introduccion 1';
            }
            else if( seleccion.value == 2 ) {
                resultado6.innerHTML = six.name + '<br/> seguridad 1';
            }
            else if( seleccion.value == 3 ) {
                resultado6.innerHTML = six.name + '<br/> economia 1';
            }
            else {
                resultado6.innerHTML = six.name + '<br/> todos los temas 1';
            }
        }
    }

    condicion1();
}

function mostrar2() {

    resultado.innerHTML = '';
    resultado2.innerHTML = '';
    resultado3.innerHTML = '';
    resultado4.innerHTML = '';
    resultado5.innerHTML = '';
    resultado6.innerHTML = '';

    function condicion2() {

        if( one.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado.innerHTML = one.name + '<br/> introduccion 2';
            }
            else if( seleccion.value == 2 ) {
                resultado.innerHTML = one.name + '<br/> seguridad 2';
            }
            else if( seleccion.value == 3 ) {
                resultado.innerHTML = one.name + '<br/> economia 2';
            }
            else {
                resultado.innerHTML = one.name + '<br/> todos los temas 2';
            }
        }

        if( two.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado2.innerHTML = two.name + '<br/> introduccion 2';
            }
            else if( seleccion.value == 2 ) {
                resultado2.innerHTML = two.name + '<br/> seguridad 2';
            }
            else if( seleccion.value == 3 ) {
                resultado2.innerHTML = two.name + '<br/> economia 2';
            }
            else {
                resultado2.innerHTML = two.name + '<br/> todos los temas 2';
            }
        }

        if( three.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado3.innerHTML = three.name + '<br/> introduccion 2';
            }
            else if( seleccion.value == 2 ) {
                resultado3.innerHTML = three.name + '<br/> seguridad 2';
            }
            else if( seleccion.value == 3 ) {
                resultado3.innerHTML = three.name + '<br/> economia 2';
            }
            else {
                resultado3.innerHTML = three.name + '<br/> todos los temas 2';
            }
        }

        if( four.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado4.innerHTML = four.name + '<br/> introduccion 2';
            }
            else if( seleccion.value == 2 ) {
                resultado4.innerHTML = four.name + '<br/> seguridad 2';
            }
            else if( seleccion.value == 3 ) {
                resultado4.innerHTML = four.name + '<br/> economia 2';
            }
            else {
                resultado4.innerHTML = four.name + '<br/> todos los temas 2';
            }
        }

        if( five.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado5.innerHTML = five.name + '<br/> introduccion 2';
            }
            else if( seleccion.value == 2 ) {
                resultado5.innerHTML = five.name + '<br/> seguridad 2';
            }
            else if( seleccion.value == 3 ) {
                resultado5.innerHTML = five.name + '<br/> economia 2';
            }
            else {
                resultado5.innerHTML = five.name + '<br/> todos los temas 2';
            }
        }

        if( six.checked == true ) {


            if( seleccion.value == 1 ) {
                resultado6.innerHTML = six.name + '<br/> introduccion 2';
            }
            else if( seleccion.value == 2 ) {
                resultado6.innerHTML = six.name + '<br/> seguridad 2';
            }
            else if( seleccion.value == 3 ) {
                resultado6.innerHTML = six.name + '<br/> economia 2';
            }
            else {
                resultado6.innerHTML = six.name + '<br/> todos los temas 2';
            }
        }
    }

    condicion2();
}
