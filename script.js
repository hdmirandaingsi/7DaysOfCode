document.querySelectorAll('.day-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


/* DIA 1 */ 
// Primer ejercicio: Comparaciones con == (erróneo)
console.log(false == '0'); // true
console.log(null == undefined); // true
console.log(" \t\r\n" == 0); // true
console.log(' ' == 0); // true 
// primero ejercicio: Comparaciones corregidas
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10'; 
// Comparando numeroUn y stringUn
if (numeroUn == stringUn) {
    console.log(numeroUn + '\t = \t' + stringUn);
} else {
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
} 
// Comparando numeroTreinta y stringTreinta
if (numeroTreinta == stringTreinta) {
    console.log(numeroTreinta + '\t = \t' + stringTreinta);
} else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
} 
// Comparando numeroDiez y stringDiez
if (numeroDiez == stringDiez) {
    console.log(numeroDiez + '\t = \t' + stringDiez);
} else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
/* FIN DIA 1 */


/* DIA 2 */ 
 /*mostrando mensaje */
function mostrarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;

    let mensaje = `Hola ${nombre}, tienes ${edad} años y te gusta programar en ${lenguaje}.`;

    let ventanaMensaje = document.getElementById("ventana-mensaje");
    ventanaMensaje.textContent = mensaje;
    ventanaMensaje.style.display = "block";

    console.log(mensaje);
    alert(mensaje);
    window.open("", "_blank").document.write(mensaje);
}
/* FIN  dia 2 */






/* dia 3 */
function selectLevel1(choice) {
    document.getElementById('level2').style.display = 'block';

    // Cambiar color del botón seleccionado en el nivel 1
    if (choice === 'frontend') {
        document.getElementById('frontend').style.backgroundColor = 'darkblue';
        document.getElementById('backend').style.backgroundColor = ''; // Restaurar color del otro botón
    } else if (choice === 'backend') {
        document.getElementById('backend').style.backgroundColor = 'darkred';
        document.getElementById('frontend').style.backgroundColor = ''; // Restaurar color del otro botón
    }

    // Cambiar color de los botones del nivel 2
    if (choice === 'frontend') {
        document.getElementById('option1').innerText = 'React';
        document.getElementById('option2').innerText = 'Vue';
        document.getElementById('option1').style.backgroundColor = 'darkblue';
        document.getElementById('option2').style.backgroundColor = 'darkblue';
    } else if (choice === 'backend') {
        document.getElementById('option1').innerText = 'C#';
        document.getElementById('option2').innerText = 'Java';
        document.getElementById('option1').style.backgroundColor = 'darkred';
        document.getElementById('option2').style.backgroundColor = 'darkred';
    }
}



function selectLevel2(optionId) {
    let selectedTechnology = document.getElementById(optionId).innerText;
    let message = '';
    switch (selectedTechnology) {
        case 'React':
            message = 'React es una librería JavaScript muy popular para construir interfaces de usuario. ¡Buena elección!';
            break;
        case 'Vue':
            message = 'Vue.js es un framework progresivo para construir interfaces de usuario. ¡Excelente!';
            break;
        case 'C#':
            message = 'C# es un lenguaje de programación orientado a objetos desarrollado por Microsoft. ¡Buena elección!';
            break;
        case 'Java':
            message = 'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos. ¡Excelente!';
            break;
    }

    document.getElementById('message').innerText = message;

    // Preguntar por especialización o Fullstack
    let specializationChoice = prompt("¿Deseas especializarte en " + selectedTechnology + " o convertirte en Fullstack? (Responde 'especializar' o 'fullstack')");
    if (specializationChoice.toLowerCase() === 'especializar') {
        message += " ¡Es genial especializarse en " + selectedTechnology + "!";
    } else if (specializationChoice.toLowerCase() === 'fullstack') {
        message += " ¡Convertirse en Fullstack es un gran objetivo!";
    } else {
        message += " ¡Sigue explorando tus opciones!";
    }

    document.getElementById('message').innerText = message;

    askForTechnologies();
}

function askForTechnologies() {
    let moreTechnologies = true;
    while (moreTechnologies) {
        let technology = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Responde 'ok' para continuar o cualquier otra cosa para terminar)");
        if (technology.toLowerCase() === 'ok') {
            let techName = prompt("Ingresa el nombre de la tecnología:");
            let comment = getCommentForTechnology(techName);
            alert(comment);
        } else {
            moreTechnologies = false;
        }
    }
}

function getCommentForTechnology(techName) {
    switch (techName.toLowerCase()) {
        case 'nodejs':
            return 'Node.js es un entorno de ejecución de JavaScript de lado del servidor muy popular.';
        case 'python':
            return 'Python es un lenguaje de programación versátil utilizado en muchos campos, incluyendo la ciencia de datos y el desarrollo web.';
        case 'sql':
            return 'SQL es un lenguaje de consulta estándar para bases de datos relacionales.';
        default:
            return `¡${techName} es una tecnología interesante! ¡Sigue aprendiendo!`;
    }
}
/* FIN dia 3 */



/* dia 4 */
// Generar el número aleatorio al cargar la página
const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
const numeroFijo = 7; // Número fijo para comparar

// Mostrar el número aleatorio y el número fijo en la consola
console.log("Número aleatorio a adivinar:", numeroAdivinacion);
console.log("Número fijo:", numeroFijo);

function adivinar() {
    const numeroInput = document.getElementById("numeroInput").value;
    const mensaje = document.getElementById("mensaje");

    if (numeroInput == numeroAdivinacion) {
        mensaje.textContent = "¡Felicidades, acertaste! El número era " + numeroAdivinacion + ".";
    } else {
        mensaje.textContent = "¡Incorrecto! El número era " + numeroAdivinacion + ".";
    }
}
/* FIN dia 4 */

let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let precio = 0;
let eliminar = "";

function iniciarPrograma() {
    let agregarMas = "sí";
    while (agregarMas != "no") {
        if (
            frutas.length === 0 &&
            lacteos.length === 0 &&
            dulces.length === 0 &&
            congelados.length === 0
        ) {
            agregarMas = prompt(
                "¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'."
            );
        } else {
            agregarMas = prompt(
                "¿Deseas agregar una comida a la lista de compras? Responde 'si', 'no' o 'eliminar'."
            );
        }

        while (
            agregarMas != "si" &&
            agregarMas != "no" &&
            agregarMas != "eliminar"
        ) {
            alert(`¡Operación no reconocida!`);
            agregarMas = prompt(
                "¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'."
            );
        }

        if (agregarMas === "no") {
            break;
        }

        if (agregarMas === "si") {
            comida = prompt("¿Qué comida deseas agregar?");
            precio = parseFloat(prompt("¿Cuál es el precio de este artículo?"));
            categoria = prompt(
                "¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?"
            );
            if (categoria === "frutas") {
                frutas.push({ nombre: comida, precio: precio });
            } else if (categoria === "lacteos") {
                lacteos.push({ nombre: comida, precio: precio });
            } else if (categoria === "dulces") {
                dulces.push({ nombre: comida, precio: precio });
            } else if (categoria === "congelados") {
                congelados.push({ nombre: comida, precio: precio });
            } else {
                alert("Esa categoria no está predefinida.");
            }
        } else if (agregarMas === "eliminar") {
            if (
                frutas.length === 0 &&
                lacteos.length === 0 &&
                dulces.length === 0 &&
                congelados.length === 0
            ) {
                alert(`¡La lista está vacía!`);
            } else {
                eliminar = prompt(
                    `Lista de compras:\n  Frutas: ${frutas.map(
                        (item) => item.nombre
                    )}\n  Lácteos: ${lacteos.map(
                        (item) => item.nombre
                    )}\n  Dulces: ${dulces.map(
                        (item) => item.nombre
                    )}\n  Congelados: ${congelados.map(
                        (item) => item.nombre
                    )}\n\n¿Qué producto deseas eliminar?`
                );
                let encontrado = false;
                for (let i = 0; i < frutas.length; i++) {
                    if (frutas[i].nombre === eliminar) {
                        frutas.splice(i, 1);
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) {
                    for (let i = 0; i < lacteos.length; i++) {
                        if (lacteos[i].nombre === eliminar) {
                            lacteos.splice(i, 1);
                            encontrado = true;
                            break;
                        }
                    }
                }
                if (!encontrado) {
                    for (let i = 0; i < dulces.length; i++) {
                        if (dulces[i].nombre === eliminar) {
                            dulces.splice(i, 1);
                            encontrado = true;
                            break;
                        }
                    }
                }
                if (!encontrado) {
                    for (let i = 0; i < congelados.length; i++) {
                        if (congelados[i].nombre === eliminar) {
                            congelados.splice(i, 1);
                            encontrado = true;
                            break;
                        }
                    }
                }
                if (encontrado) {
                    alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`);
                } else {
                    alert(`¡No fue posible encontrar el ítem dentro de la lista!`);
                }
            }
        }

        actualizarListaHTML();
    }

    alert(
        `Lista de compras:\n  Frutas: ${frutas.map(
            (item) => item.nombre
        )}\n  Lácteos: ${lacteos.map((item) => item.nombre)}\n  Dulces: ${dulces.map(
            (item) => item.nombre
        )}\n  Congelados: ${congelados.map((item) => item.nombre)}`
    );
}

function actualizarListaHTML() {
    document.getElementById("frutas").innerHTML = "";
    document.getElementById("lacteos").innerHTML = "";
    document.getElementById("dulces").innerHTML = "";
    document.getElementById("congelados").innerHTML = "";

    frutas.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        document.getElementById("frutas").appendChild(li);
    });

    lacteos.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        document.getElementById("lacteos").appendChild(li);
    });

    dulces.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        document.getElementById("dulces").appendChild(li);
    });

    congelados.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        document.getElementById("congelados").appendChild(li);
    });

    let total = 0;
    frutas.forEach((item) => {
        total += item.precio;
    });
    lacteos.forEach((item) => {
        total += item.precio;
    });
    dulces.forEach((item) => {
        total += item.precio;
    });
    congelados.forEach((item) => {
        total += item.precio;
    });

    document.getElementById("total").textContent = total.toFixed(2);

    document.getElementById("cantidadFrutas").textContent = frutas.length;
    document.getElementById("cantidadLacteos").textContent = lacteos.length;
    document.getElementById("cantidadDulces").textContent = dulces.length;
    document.getElementById("cantidadCongelados").textContent =
        congelados.length;
}





/* FIN dia 6 */  
/* FIN dia 6 */ 


/* dia 7 */
let operador = null;

function operacion(op) {
    operador = op;
    // Restablecer colores de todos los botones
    resetButtonColors();
    // Cambiar el color del botón seleccionado
    document.querySelector(`button[onclick="operacion('${op}')"]`).style.backgroundColor = "green";
}

function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (operador === "+") {
        resultado = num1 + num2;
    } else if (operador === "-") {
        resultado = num1 - num2;
    } else if (operador === "*") {
        resultado = num1 * num2;
    } else if (operador === "/") {
        if (num2 === 0) {
            resultado = "Error: División por cero";
        } else {
            resultado = num1 / num2;
        }
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    resetButtonColors();
}

function resetButtonColors() {
    // Obtener todos los botones de operación
    const botonesOperacion = document.querySelectorAll("button[onclick^='operacion']");

    // Restablecer el color de fondo de cada botón
    botonesOperacion.forEach(button => {
        button.style.backgroundColor = ""; // O el color original del botón
    });
}
/* FIN dia 7 */ 
