/*
    El operador de flecha (tambien llamado 'fat arrow' [porque emplea el simbolo = en lugar de -]) sirve
    para definir funciones simples en menos espacio, con la finalidad de hacer mas legible.
*/

var hello = ['Verónica', 'Raquel', 'Stephanye'];

//  En conjunto con el metodo 'map' se consiguen efectos amplificados de esta virtud.
console.log(hello.map((n) => 'Tú amas a ' + n)); // [ 'Tú amas a Verónica', 'Tú amas a Raquel', 'Tú amas a Stephanye' ]

// También es posible definir propiedades como funciones.
hello.sayHello = (n) => 'Hola, ' + n;
console.log(hello.sayHello('Lascario')); // "Hola, Lascario"

/*
    Prueba ejecutando este código con NodeJS y comienza a asombrarte por el operador de flecha
*/