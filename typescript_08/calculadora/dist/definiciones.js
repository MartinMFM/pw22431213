"use strict";
let numeros;
numeros = 101;
console.log(numeros);
let arreglosnumeros;
arreglosnumeros = [1, 2, 3, 4, 5, 6];
let arreglosstrings;
arreglosstrings = ["cadena", "string", "3"];
let decisiones = true;
let arreglosbooleanos;
arreglosbooleanos = [true, false, true];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? "-" : d));
}
info(1, "2", false, 10);
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Administrador"] = 0] = "Administrador";
    TipoUsuario[TipoUsuario["Moderador"] = 1] = "Moderador";
    TipoUsuario[TipoUsuario["Invitado"] = 2] = "Invitado";
})(TipoUsuario || (TipoUsuario = {}));
function usuarios(usuario) {
    console.log("Nombre: " +
        usuario.nombre +
        " Tipo: " +
        usuario.tipo +
        " Edad: " +
        usuario.edad +
        " con la ip: " +
        usuario.ip +
        " " +
        usuario.ipsecreta);
}
console.log(usuarios({
    nombre: "Martin",
    tipo: TipoUsuario.Invitado,
    edad: true,
    ip: "192.168.4.1",
    ipsecreta: "algo",
}));
let tiempo = 76000000;
let animal = "dinosaurio";
let extinto = true;
let mivariable;
mivariable = "cadena";
mivariable = 42;
let animales = ["perro", "gato", "caballo"];
let numeros1 = [1, 2, 3, 4, 5];
let atributos = [];
let numeros2 = [];
let tupla = [1, "cadena"];
tupla.push(12);
let tupla2 = [1, ["cadena", "cadena2", "candena3"]];
const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Medina"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const tallaGrande = Talla.Grande;
console.log("Talla:", tallaGrande);
const estado = 2;
const objeto = { id: 1, nombre: "" };
objeto.nombre = "PW";
const objeto2 = { id: 1 };
objeto2.nombre = "PW";
const objeto3 = {
    id: 1,
    nombre: "PW",
    talla: Talla.Medina,
};
const objeto4 = { id: 1, nombre: "PW", talla: Talla.ExtraGrande };
const objeto5 = {
    id: 1,
    nombre: "PW",
    talla: Talla.Chica,
    domicilio: { numero: 1, calle: "conocida", pais: "Mexico" },
};
function func() { }
const fn1 = (y) => {
    let x = 2;
    if (x > 5) {
        return y;
    }
    return 4;
};
const fun2 = () => {
    let x = 2;
    if (x > 5) {
        return 2;
    }
    return 4;
};
const fn3 = (edad) => {
    if (edad > 18) {
        return "Puedes pasar";
    }
    return "No puedes pasar";
};
function ErrorUsuario1() {
    throw new Error("Error de usuario");
}
function ErrorUsuario2() {
    throw new Error("Error de usuario");
}
