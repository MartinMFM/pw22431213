let numeros: number;
numeros = 101;
console.log(numeros);
let arreglosnumeros: number[];
arreglosnumeros = [1, 2, 3, 4, 5, 6];
let arreglosstrings: string[];
arreglosstrings = ["cadena", "string", "3"];
let decisiones = true;
let arreglosbooleanos: boolean[];
arreglosbooleanos = [true, false, true];
function info(a: number, b: string, c: boolean, d?: number): void {
  // ? parametro opcional
  console.log(a + " " + b + " " + c + " " + (d == undefined ? "-" : d));
}
info(1, "2", false, 10);

enum TipoUsuario {
  Administrador,
  Moderador,
  Invitado,
}
type Usuario = {
  nombre: string;
  tipo: TipoUsuario;
  edad: boolean;
  readonly ipsecreta: string;
};
type UsuarioRedes = Usuario & {
  // extendiendo el tipo
  ip: string;
};

function usuarios(usuario: UsuarioRedes): void {
  console.log(
    "Nombre: " +
      usuario.nombre +
      " Tipo: " +
      usuario.tipo +
      " Edad: " +
      usuario.edad +
      " con la ip: " +
      usuario.ip +
      " " +
      usuario.ipsecreta
  );
}

console.log(
  usuarios({
    nombre: "Martin",
    tipo: TipoUsuario.Invitado,
    edad: true,
    ip: "192.168.4.1",
    ipsecreta: "algo",
  })
);
