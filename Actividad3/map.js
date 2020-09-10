    
    const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let Mapview = L.map('Mapview').setView([21.152334, -101.713132],13)
    L.tileLayer(tilesProvider,{    maxZoom:17,}).addTo(Mapview)
    let marker = L.marker([21.152334, -101.713132]).addTo(Mapview)
    
    var newIcon = L.icon({    
        iconUrl:'ubicacion.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]}
    )
    
    L.marker([21.16, -101.8], {icon: newIcon}).addTo(Mapview);
    
    Mapview.doubleClickZoom.disable()
    var tam=0;

    var posiciones=[]; 
    Mapview.on('dblclick', function(e){    
        tam=document.getElementById('tam').value ; 
        let latLng = Mapview.mouseEventToLatLng(e.originalEvent)    
        console.log(latLng); 
        console.log(tam);   
        L.marker([latLng.lat,latLng.lng],{icon: newIcon}).addTo(Mapview);
        posiciones.push(latLng);
        if(posiciones.length>=tam  ){
            var poligono=null; 
            poligono=L.polygon([
                posiciones
            ]).addTo(Mapview);
        }
        
    });