// Solicitud de datos
let nombre = prompt('Hola, ingresa tu nombre');
let apellido = prompt('Hola, ingresa tu apellido');
let direccion = prompt('Hola, ingresa tu dirección');

// Declaración de variables y constantes
let empanada;
let precio;
let costo1 = '$1000';
let costo2 = '$1200';
let costo3 = '$1400';
let costo4 = '$1600';
const opcion1 = 'La empanada de Queso tiene un costo de ';
const opcion2 = 'La empanada de Carne tiene un costo de ';
const opcion3 = 'La empanada de Frijoles tiene un costo de ';
const opcion4 = 'La empanada de Pescado tiene un costo de ';

// Función para pedir empanadas
function pedirEmpanadas() {
    let listaEmpanadas = parseInt(prompt('¡Hola, ' + nombre + ' ' + apellido + '! ¿Qué deliciosa y sensual empanada quieres esta vez?\n 1: Queso (no te la recomiendo)\n 2: Carne\n 3: Frijoles\n 4: Pescado\n 5: Que asco, no me gustan las empanadas, prefiero un chori, chao.'));

    while (listaEmpanadas == 1) {
        alert(opcion1 + costo1);
        let comprar1 = parseInt(prompt('¿Deseas comprar una aburrida empanada de queso?\n 1- Sí, tengo muy mal gusto \n 2- Claro que no'));
        if (comprar1 == 1) {
            alert('Su aburrida e insípida empanada de queso va en camino a: ' + direccion)
        } else if (comprar1 == 2) {
            alert('Así me gusta, mejor pide una de carne');
        }
        break;
    }

    // Otros casos para las empanadas (2, 3 y 4)

    // Pregunta si quiere seguir ordenando
    let continuar = parseInt(prompt('¡Hola, ' + nombre + ' ' + apellido + '! ¿Quieres seguir ordenando? \n 1: Quiero seguir engordando\n 2: No, debería estar a dieta'));
    if (continuar == 1) {
        pedirEmpanadas(); // Llamada recursiva para repetir la función
    } else {
        alert('Gracias por su orden. ¡Buen provecho!');
    }
}

pedirEmpanadas(); // Llamada inicial a la función
