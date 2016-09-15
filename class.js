/*
    Esto activa el "modo estricto", el cual básicamente permite que JavaScript esté alerta ante
    posibles errores de escritura que hayan sido cometidos por el programador.
*/
"use strict";

// Se define una nueva clase empleando la palabra reservada "class", seguida del nombre de la clase
class Person {

    // El método "constructor", se comportará como el constructor de la clase
    constructor(age, name, lastname) {
        this.age       = age;
        this.fullName  = name + ' ' + lastname;
        this.isRunning = false;
    }

    // Los métodos se definen sin el empleo de la palabra reservada "function"
    about() {
        return this.fullName + ' tiene ' + this.age + ' años';
    }

    run() {
        this.isRunning = true;
        return this.fullName + ' ha comenzado a correr';
    }

    stopRunning() {
        if (this.isRunning) {
            this.isRunning = false;
            return this.fullName + ' ha dejado de correr';
        } else {
            return this.fullName + ' no puede dejar de correr porque no estaba corriendo';
        }
    }
};

// El objeto se utiliza naturalmente, tal como se haría en otros lenguajes de programación orientados a objetos
var p = new Person(22, 'Lascario', 'Pacheco');

console.log(p.about()); // "Lascario Pacheco tiene 22 años"
console.log(p.run()); // "Lascario Pacheco ha comenzado a correr"
console.log(p.stopRunning()); // "Lascario Pacheco ha dejado de correr"
console.log(p.stopRunning()); // "Lascario Pacheco no puede dejar de correr porque no estaba corriendo"