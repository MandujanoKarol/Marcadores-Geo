    
    var tilesProvider='	https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var mymap = L.map('mapid').setView([21.152334, -101.7113132], 14);

	L.tileLayer(tilesProvider, {
		maxZoom: 17,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	var marker=L.marker([21.152334, -101.7113132]).addTo(mymap)
        .bindPopup("<b>Universidad de la salle bajio!</b><br />").openPopup();
        


    var newicon=L.icon({
        iconUrl:'ubicacion.png',
        iconSize:[60,60],
        iconAnchor:[30,30],
        popupAnchor:[-3,-76]
    });

    L.marker([21.152334, -101.7113132],{icon:newicon}).addTo(mymap)
		.bindPopup("<b>Marcador perzonalizado!</b><br />").openPopup();
   
    mymap.doubleClickZoom.disable();

    function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(mymap);
    }
    
    mymap.on('click', onMapClick);
