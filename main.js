
let a = 5;
let b = 10;


let c = a + b;


console.log("El valor de a es: " + a);
console.log("El valor de b es: " + b);
console.log("El valor de c es: " + c);


let nombre = prompt("Por favor, ingresa tu nombre:");


console.log("Hola, " + nombre + "! Bienvenido.");

let x = prompt("ingrese un número");
let y = prompt("ingrese un número");
let z = prompt("ingrese un número");

let mayor;

if (x > y && x > z) {
    mayor = x;
} else if (y > x && y > z) {
    mayor =y;
} else if (z > x && z > y) {
    mayor = z;
} else {
    mayor = "todos los numeros son iguales"
}
console.log("El número mayor de los 3 ingresados es: " + mayor);


let numero = prompt("Introduce un número:");

if (isNaN(numero)) {
    console.log("El valor ingresado no es un número válido.");
} else if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}


let variable = 10;

while (variable > 0) {
    console.log(variable);
    variable--;
}

let num;

// Usar un bucle do...while para pedir al usuario que ingrese un número mayor a 100
do {
    num = parseInt(prompt("Por favor, ingresa un número mayor a 100:"));
    if (num <= 100) {
        console.log("El número ingresado no es mayor a 100. Ingresa un número mayor a 100!!!!!!!!");
    }
} while (num <= 100);


console.log("Has ingresado un número mayor a 100: " + num);


function esPar (paridad) {
    if(paridad % 2 === 0) {
        return true;
        
    } else {
        return false;
        
    }
}
console.log("El número 2 es Par " + esPar(2));
console.log("El número 7 es Par "+ esPar(7));
console.log("El número 8 es Par " +esPar(8));


function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

let celsiusIngresado = parseFloat(prompt("Indique cuantos grados desea convertir a Fahrenheit"));

let fahrenheitConvertido = convertirCelsiusAFahrenheit(celsiusIngresado);

console.log(celsiusIngresado + "°C son equivalentes a " + fahrenheitConvertido + "°F");


let persona = {
    nombre: "Emi",
    edad: 22,
    ciudad: "Rivadavia",

    // Método para cambiar la ciudad de la persona
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

console.log("Propiedades iniciales de la persona:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

persona.cambiarCiudad("Mendoza");


console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);


let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 2005,

    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        return (añoActual - this.año) > 10;
    }
};


console.log("Propiedades del libro:");
console.log("Título: " + libro.titulo);
console.log("Autor: " + libro.autor);
console.log("Año de publicación: " + libro.año);

if (libro.esAntiguo()) {
    console.log("El libro es antiguo.");
} else {
    console.log("El libro es reciente.");
}


// Declarar el array numeros con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declarar un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Usar un bucle para multiplicar cada número por 2 y almacenar los resultados en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log("Array original:");
console.log(numeros);

console.log("Array con números multiplicados por 2:");
console.log(numerosMultiplicados);

// Crear un array vacío llamado pares
let pares = [];

// Usar un bucle for para iterar hasta 20 y agregar los primeros 10 números pares al array
for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

// Imprimir el array pares en la consola
console.log("Array de los primeros 10 números pares:");
console.log(pares);


// Función para cambiar el color de todos los elementos <p> a azul
function cambiarColorAParrafos() {
    // Seleccionar todos los elementos <p> en la página
    let parrafos = document.querySelectorAll('p');

    // Iterar sobre cada elemento <p> y cambiar su color a azul
    parrafos.forEach(function(parrafo) {
        parrafo.style.color = 'blue';
    });
}

// Asignar la función al evento click del botón
document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorAParrafos);



function mostrarAlerta() {
    // Obtener el valor del campo de texto
    let valorCampoTexto = document.getElementById('miCampoTexto').value;


    alert('Has ingresado: ' + valorCampoTexto);
}


document.getElementById('miBoton').addEventListener('click', mostrarAlerta);




document.addEventListener('DOMContentLoaded', function() {

    const lista = document.getElementById('miLista');


    const elementos = lista.getElementsByTagName('li');

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', function() {

            console.log(this.textContent);
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {

    const campoTexto = document.getElementById('miCampoTexto');
    const deshabilitarBtn = document.getElementById('deshabilitarBtn');
    const habilitarBtn = document.getElementById('habilitarBtn');


    if (campoTexto && deshabilitarBtn && habilitarBtn) {

        deshabilitarBtn.addEventListener('click', function() {
            campoTexto.disabled = true;
        });


        habilitarBtn.addEventListener('click', function() {
            campoTexto.disabled = false;
        });
    } else {
        console.error('No se encontraron todos los elementos necesarios');
    }
});


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario, el campo de correo y el div de visualización
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const emailDisplay = document.getElementById('emailDisplay');

    // Verificar si los elementos existen
    if (emailForm && emailInput && emailDisplay) {
        // Función para mostrar el correo guardado
        function displayEmail() {
            const savedEmail = localStorage.getItem('email');
            if (savedEmail) {
                emailDisplay.innerHTML = `
                    <p>Correo guardado: ${savedEmail}</p>
                    <button id="deleteBtn">Eliminar</button>
                `;
                // Agregar evento click al botón de eliminar
                document.getElementById('deleteBtn').addEventListener('click', function() {
                    localStorage.removeItem('email');
                    displayEmail();
                });
            } else {
                emailDisplay.innerHTML = '';
            }
        }

        // Mostrar el correo guardado al cargar la página
        displayEmail();

        // Agregar evento submit al formulario
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío del formulario
            const email = emailInput.value;
            localStorage.setItem('email', email);
            displayEmail();
            emailInput.value = ''; // Limpiar el campo de entrada
        });
    } else {
        console.error('No se encontraron todos los elementos necesarios');
    }
});
