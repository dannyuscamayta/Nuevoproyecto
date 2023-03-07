const btnMarkerAqp = document.getElementById("btnMarkerAqp");
const btnMarkerAqpEliminar = document.getElementById("btnMarkerAqpEliminar");
const btnPolyline = document.getElementById("btnPolyline");
const btnEnfocarPuno = document.getElementById("btnEnfocarPuno");

let markerAQP;

let map = L.map("map").setView([-13.51619, -71.98662], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Metodo click en el mapa, para buscar y poner un marcador nuevo cada vez que se haga click en el mapa
map.on("click", (e) => {
  const marcador = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  // contextmenu = es el evento del click derecho o anticlick para borrar los marcadores que se puso en el mapa
  marcador.on("contextmenu", () => {
    map.removeLayer(marcador);
  });
});

btnMarkerAqp.onclick = () => {
    // crear un Icono para colocarlo como marcador en vez de location
    let iconDelivery = L.icon({
        iconUrl: "./img/delivery.svg",
        iconSize: [24, 24]
    });
  //marcador del mapa situado en el punto de Arequipa
  markerAQP = L.marker([-13.51619, -71.98662], {icon: iconDelivery}).addTo(map);
};

btnMarkerAqpEliminar.onclick = () => {
  //eliminando un mapa teniendo su referencia
  map.removeLayer(markerAQP);
};

btnPolyline.onclick = () => {
    //dibujando una ruta estatica por el momento
    let rutaArequipa = [
        [-16.41614133217009, -71.53874158859254],
        [-16.415873753803165, -71.53822660446168],
        [-16.41638832725895, -71.5379047393799],
        [-16.417005813608597, -71.53756141662599],
        [-16.41673823643115, -71.53664946556093],
        [-16.416172206573364, -71.53576970100404],
        [-16.416676487799453, -71.5354371070862],
        [-16.417077853555007, -71.53515815734865],
        [-16.417736503256116, -71.53476119041444],
        [-16.418312819914494, -71.53560876846315],
        [-16.420144672234677, -71.53814077377321],
      ];
      let polylineAqp = L.polyline(rutaArequipa, {color: "#ff0000"}).addTo(map);

      //forma 1 para centrar el mapa luego de dibujar el polyline
      // map.fitBounds(rutaArequipa);

      // forma 2 para centrar el mapa luego de dibujar el polyline
      map.fitBounds(polylineAqp.getBounds(), {animate: true, duration: 3});
};

btnEnfocarPuno.onclick = () => {
    //Mover o enfocar la camara en el area de Puno
    //fitbounds = recibe un arreglo de LatLng, es decir un arreglo
    //de coordenadas que en conjunto, queremos visualizar en el area del mapa
    //esto quiere decir que si mandamos mas de una coordenada, el area de visualizacion del mapa
    //va a contener todas esas coordenadas
    map.fitBounds([[-15.840222, -70.021881]]);
};
