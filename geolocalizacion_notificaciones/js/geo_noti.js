let info = document.querySelector("#info");
let boton = document.querySelector("#ubicacion");

function obtenerUbicacion() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      info.textContent = `Latitud: ${lat} - Longitud: ${lon}`;
      notificar();
    },
    function (error) {
      console.log(error.message);
    }
  );
}

boton.addEventListener("click", () => {
  obtenerUbicacion();
});

//Notificacion
const notificar = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Coordenadas obtenidas");
    }
  });
};
