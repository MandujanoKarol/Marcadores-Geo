///5 Mapa estilos
var layerarray = [
    { nombre: "tile1", tile: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },
    { nombre: "tile2", tile: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' },
    { nombre: "tile3", tile: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png' },
    { nombre: "tile4", tile: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' },
    { nombre: "tile5", tile: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png' }];
$(document).ready(function () {
    for (var j = 0; j < layerarray.length; j++) {
        var option = document.createElement("option");
        option.value = layerarray[j].tile;
        option.text = layerarray[j].nombre;
        document.getElementById("selectid").add(option);
    }
});


///centrar mapa en cierta coordenada
let Mapview = L.map('Mapview').setView([21.152334, -101.713132], 13);

///Agregar a  mapa propiedades
var index = 0;
var Layer = L.tileLayer(layerarray[0].tile, { maxZoom: 17, }).addTo(Mapview);
///Icono de Marcadores 
var iconmarker = null;
var iconmarker1 = L.icon({
    iconUrl: "ubicacion1.png",
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [-3, -76]
});
iconmarker = iconmarker1;
var iconmarker2 = L.icon({
    iconUrl: "ubicacion2.png",
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [-3, -76]
});
var iconmarker3 = L.icon({
    iconUrl: "ubicacion3.png",
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [-3, -76]
});
///Desactivar docle click zoom
Mapview.doubleClickZoom.disable();
///posiciones
var posiciones = [];
///Contenedor de clicks 
var tam = 0;
///Arreglo de marcadores
var markers = [];
///Evento docle click en mapa
Mapview.on('dblclick', function (e) {
    ///obtener las coordenadas de el evento
    let latLng = Mapview.mouseEventToLatLng(e.originalEvent);
    markers.push(L.marker([latLng.lat, latLng.lng], { icon: iconmarker }).addTo(Mapview));
    posiciones.push(latLng);
    if (tam === 2) {
        index = indexr(index);
        if (index === 0) {
            iconmarker = iconmarker1;
        }
        if (index === 1) {
            iconmarker = iconmarker2;
        }
        if (index === 2) {
            iconmarker = iconmarker3;
        }
        tam = 0;
        return true;
    }
    ///Aumentar clicks  
    tam++;

});
function indexr(index) {
    if (index === 0) {
        return 1;
    }
    if (index === 1) {
        return 2;
    }
    if (index === 2) {
        return 0;
    }
}
$('#selectid').change(function () {
    Mapview.removeLayer(Layer);
    Layer = L.tileLayer($(this).val().toString(), { maxZoom: 17, }).addTo(Mapview);
    Mapview.addLayer(Layer);
})
function defaulttile() {
    Mapview.removeLayer(Layer);
    Layer = L.tileLayer(layerarray[0].tile, { maxZoom: 17, }).addTo(Mapview);
    Mapview.addLayer(Layer);
    removemakers();
}
function removemakers() {
    if (markers.length > 0) {
        markers.forEach(element => element.remove());
        markers.length = 0;
    }
}