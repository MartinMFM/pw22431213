let elemento = document.querySelector("#elemento");
let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#listaDinamica");
elemento.focus();

agregar.addEventListener("click", () => {
  if (elemento.value.trim() != "") {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = elemento.value;
    lista.appendChild(nuevoElemento);
    elemento.value = "";
    elemento.focus();
  }
});

elemento.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    agregar.click();
  }
});

// arrastrar y soltar
let arrastra = document.querySelector("#arrastra");
let zonasoltar = document.querySelector("#zonasoltar");

arrastra.addEventListener("dragstart", function (e) {
  this.style.border = "5px solid red";
});

zonasoltar.addEventListener("dragover", function (e) {
  //olvide su function pericipal
  event.preventDefault();
});

zonasoltar.addEventListener("drop", function (e) {
  arrastra.style.border = "none";
  arrastra.style.display = "blockk";
  this.append(arrastra);
});
