// document.write("<h1>Hola Mundo</h1>");
// console.log("consola desde JS");
// // console.error("error desde JS");

// // Variables
// let x;
// console.log(typeof x);
// let esPW = false;
// console.log(typeof esPW);
// if (esPW) {
//   console.log("Estamos en  clase");
// } else {
//   console.log("no estamos en clase");
// }

// let numero = -2324.2324243;
// console.log(numero);
// let cadena2 = 'otra cadena "al reves"';
// // interpolacion de variables
// let cadena3 = `otra cadena
// incluso pueedo tener renglones
// y variables ${numero}`;
// console.log(cadena3);

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1);
// let usuario = { nombre: "Martin", [id1]: 123 };
// console.log(usuario.nombre + " " + usuario[id1]);

// let variablenula = null;
// console.log(variablenula);

// const PI = 3.1416;
// console.log(PI);

// let arreglo = [];
// console.log(arreglo);
// arreglo = [1, 2, 3];
// console.log(arreglo);
// arreglo.push(4);
// console.log(arreglo);
// arreglo.pop();
// console.log(arreglo);
// arreglo.shift();
// console.log(arreglo);
// arreglo.unshift(10);
// console.log(arreglo);

// let objeto = { nombre: "Martin", edad: 21 };
// console.log(Object.keys(objeto));
// console.log(Object.values(objeto));
// console.log(Object.entries(objeto));

// // alert("Alerta en pantalla");
// // let edad = prompt("Dame la edad", 0);
// // console.log(edad);

// let variable = "valor";
// const CONSTANTE = "valor";
// function miFuncion(a = 2) {
//   // valor por defecto
//   return 2 * a;
// }
// console.log(miFuncion(6));

// const funcionFlecha = (a = 10) => {
//   return 2 * a;
// };
// console.log(funcionFlecha(7));

// // desctructuring - destructuracion
// // objetos
// const usuarios = {
//   nombre: "Martin",
//   apellido: "Flores",
// };

// // let nombre = usuarios.nombre;
// // let apellido = usuarios.apellido;
// let { nombre, apellido } = usuarios;
// console.log(nombre + " " + apellido);
// // otro objeto
// const usuarios2 = {
//   nombre: "Martin",
//   apellido: "Flores",
//   redes: {
//     sociales: {
//       twx: "@miusuario",
//       face: "@miface",
//     },
//   },
// };

// // const face = usuarios2.redes.sociales.face;
// // const { twx, face } = usuarios2.redes.sociales;
// // console.log(twx + " " + face);
// const {
//   redes: {
//     sociales: { twx },
//   },
// } = usuarios2;
// console.log(twx);

// // Arreglos
// const arregloNombres = ["Martin", "Juan", "Pedro"];
// // let nombre1 = arregloNombres[0];
// // let nombre3 = arregloNombres[2];
// const [nombre1, , nombre3] = arregloNombres;
// console.log(nombre1 + " " + nombre3);

// // combinaciones
// //objetos
// const usuarios3 = {
//   direccion: "conocida",
//   numeroCasa: "300",
// };

// // propagacion de campos
// const nuevoObjeto = { ...usuarios2, ...usuarios3 };
// console.log(nuevoObjeto);

// // arreglos
// const arregloApellidos = ["Flores", "Perez", "Gomez"];
// const nuevoArreglo = [...arregloNombres, ...arregloApellidos];
// console.log(nuevoArreglo);
// const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
// console.log(otroNuevoArreglo);

// // foreach, for, map, reduce <-- iterar arreglos
// for (let i = 0; i < nuevoArreglo.length; i++) {
//   console.log(nuevoArreglo[i]);
// }
// nuevoArreglo.forEach(function (nombre) {
//   console.log(nombre);
// });
// let numeros = [1, 2, 3, 4, 5];
// let suma = 0;
// numeros.forEach(function (numero) {
//   suma += numero;
// });
// console.log(suma);

// // MAP
// let precios = [10, 20, 30, 40, 50];
// const conversion = 0.85;
// let preciosNuevos = precios.map(function (precio) {
//   return precio * conversion;
// });
// console.log(preciosNuevos);

// //reduce
// let sumaPrecios = precios.reduce(function (suma, precio) {
//   return suma + precio;
// }, 0);
// console.log(sumaPrecios);

// // clases
// class Animal {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   habla() {
//     console.log(`Este ${this.nombre} hace ruido`);
//   }
// }

// class Perro extends Animal {
//   habla() {
//     console.log(`Mi perro ${this.nombre} ladra`);
//   }
// }
// const perro = new Perro("Hunter");
// perro.habla();

//clouseres
const variablefunction = () => {
  return "hola";
};
console.log(variablefunction());

const saludo = "hola";
function externa() {
  const persona = "Martin";
  function interna() {
    const fin = "flores";
    return saludo + persona + fin;
  }
  return interna;
}

console.log(externa()());
const clousure = externa();
console.log(clousure());

// otro ejemplo
const miContador = (function () {
  let contador = 0;
  function incrementar() {
    return ++contador;
  }

  function decrementar() {
    return --contador;
  }
  function valor() {
    return contador;
  }
  return {
    incrementar,
    decrementar,
    valor,
  };
})();
console.log(miContador);
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());

// Promesas
// Paginas dinamica <--- acceo a datos internos, externos
let datos = [
  { id: 1, materia: "PW", semestre: 6 },
  { id: 2, materia: "POO", semestre: 1 },
  { id: 3, materia: "Estructura de datos", semestre: 3 },
];

// datos = [];
// console.log(datos);
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    if (datos.length === 0) {
      reject(new error("Datos esta vacio"));
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};
// console.log(obtenerDatos());
// Funcion async debe de esperar a que terminie de obtener la informacion
async function procesarDatos() {
  try {
    const misDatos = await obtenerDatos();
    console.log(misDatos);
  } catch (error) {
    console.log(error.message);
  }
}
procesarDatos();
