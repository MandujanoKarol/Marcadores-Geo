var coordenadas = null;
let Mapview = null;
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var newIcon = L.icon({
    iconUrl: 'ubicacion.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [-3, -76]
});



///carga cuando el documento ya este listo
$(document).ready(function () {
    ////if the navigator containe geolocation 
    if (navigator.geolocation) {
        ///get position
        navigator.geolocation.getCurrentPosition(function (position) {
            for (let el of document.querySelectorAll('.opm')) el.style.visibility = 'hidden';
            ///cords
            coordenadas = {
                Latitud: position.coords.latitude,
                Longitud: position.coords.longitude
            }
            Mapview = L.map('Mapview').setView([coordenadas.Latitud, coordenadas.Longitud], 13);
            L.tileLayer(tilesProvider, { maxZoom: 17, }).addTo(Mapview);
            L.marker([coordenadas.Latitud, coordenadas.Longitud], { icon: newIcon }).addTo(Mapview);
            //registrar coordenadas
            return db.collection('act-3').doc().set({
                "coordenadas": coordenadas,
                "metodo": "getCurrentPosition",
                "fechaRegistro": new Date().toLocaleString()
            }).then(function (result) {

            }).catch(function (error) {

            });

        }, function (error) {
            for (let el of document.querySelectorAll('.opm')) el.style.visibility = 'visible';
            Mapview = L.map('Mapview').setView([21.152334, -101.713132], 13);
            L.tileLayer(tilesProvider, { maxZoom: 17, }).addTo(Mapview);
        });


    } else {


    }
});



function savecoordfb() {
    if (document.getElementById('lat').value != "" && document.getElementById('long').value != "") { 
        var coordenadas = {
            Latitud: document.getElementById('lat').value,
            Longitud: document.getElementById('long').value
        }
        L.marker([coordenadas.Latitud, coordenadas.Longitud], { icon: newIcon }).addTo(Mapview);
        Mapview.setView([coordenadas.Latitud, coordenadas.Longitud], 13);
        //registrar coordenadas
        return db.collection('act-3').doc().set({
            "coordenadas": coordenadas,
            "metodo": "ingresomanual",
            "fechaRegistro": new Date().toLocaleString()
        }).then(function (result) {

        }).catch(function (error) {

        });
    } else {
        alert("ingrese la latitud y longitud");
    }

};