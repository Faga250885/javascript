//Solicitud de datos
let nombre = (prompt('Hola, ingresa tu nombre'));
let apellido = (prompt('Hola, ingresa tu apellido'));
let direccion = (prompt('Hola, ingresa tu dirección'));

//Declaración de variables y constantes
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

//Función para continuar comprando o irse
function continuar() {
    let continuar = parseInt(prompt('¡Hola, ' + nombre + ' ' + apellido + '! ¿Quieres seguir ordenando? \n 1: Quiero seguir engordando\n 2: No, debería estar a dieta'));
if (continuar == 1) {
    pedirEmpanadas(); // Llamada recursiva para repetir la función
} else {
    alert('Me decepcionas como gordo potencial... Adios');
}}

//Función para pedir empanadas
function pedirEmpanadas() {
    let listaEmpanadas = parseInt(prompt('¡Hola, ' + nombre + ' ' + apellido + '! ¿Qué deliciosa y sensual empanada quieres esta vez?\n 1: Queso (no te la recomiendo)\n 2: Carne\n 3: Frijoles\n 4: Pescado\n 5: Que asco, no me gustan las empanadas, prefiero un chori, chao.'));

    while (listaEmpanadas == 1) {
        alert(opcion1 + costo1);
        let comprar1 = parseInt(prompt('¿Deseas comprar una aburrida empanada de queso?\n 1- Sí, tengo muy mal gusto \n 2- Claro que no'));
        if (comprar1 == 1) {
            alert('Su aburrida e insípida empanada de queso va en camino a: ' + direccion)
        } else if (comprar1 == 2) {
            alert('Así me gusta, mejor pide una de carne');}
        continuar ();
        break;
    }

    while (listaEmpanadas == 2) {
        alert(opcion2 + costo2);
        let comprar1 = parseInt(prompt('¿Deseas comprar una emocionante empanada de carne?\n 1: Sí, me comeria un caballo \n 2: Claro que no, tengo mal gusto'));
        if (comprar1 == 1) {
            alert('Su emocionante y muy machota empanada de carne de animal desconocido va en camino a '+ direccion +'')}
        else if (comprar1 == 2) {
            alert('Ayyy vale, ¿te vas a comer una de queso?');}
            continuar ();
        break;
    }

    while (listaEmpanadas == 3) {
        alert(opcion3 + costo3);
        let comprar1 = parseInt(prompt('¿Deseas comprar una decepcionante empanada de frijoles?\n 1: Sí, tal vez está vez si sepa bien \n 2: Ay no, eso da muchos gases'));
        if (comprar1 == 1) {
            alert('Su empanada de frijoles va en camino a '+ direccion +', su esposa pasará una muy mala noche, asqueroso')}
        else if (comprar1 == 2) {
            alert('Que bueno, su esposa se lo agradecerá');}
            continuar ();
        break;
    }

    while (listaEmpanadas == 4) {
        alert(opcion4 + costo4);
        let comprar1 = parseInt(prompt('¿Deseas comprar una empanada de... ¿¿¿Pescado en serio???\n 1: Sí, me gusta tener mal aliento todo el día \n 2: Prefiero mantener mi aliento intacto'));
        if (comprar1 == 1) {
            alert('Su empanada de..... Pescado... (asqueroso) va en camino a: '+ direccion +'')}
        else if (comprar1 == 2) {
            alert('Gracias a dios, no me va a tocar cocinar pescado');}
            continuar ();
        break;
    }

    while (listaEmpanadas == 5) {
        alert('Ayyy vale, no le gustan las empanadas, anda a comer pancito entonces.');
        break;
    }
}

pedirEmpanadas();