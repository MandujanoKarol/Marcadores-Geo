    const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let Mapview = L.map('Mapview').setView([21.152334, -101.713132],13)
    L.tileLayer(tilesProvider,{    maxZoom:17,}).addTo(Mapview) 
    var newIconpar = L.icon({    
        iconUrl:'ubicacionpar.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]
    });
    var newIconimpar = L.icon({    
        iconUrl:'ubicacionimpar.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]
    });
    Mapview.doubleClickZoom.disable();
    var tam=0; 
    var markers=[];  
    Mapview.on('dblclick', function(e){    
        tam++; 
        let latLng = Mapview.mouseEventToLatLng(e.originalEvent)  
        if(tam%2==0){
            markers.push(L.marker([latLng.lat,latLng.lng],{icon: newIconpar}).addTo(Mapview)); 
        }else{
            markers.push(L.marker([latLng.lat,latLng.lng],{icon: newIconimpar}).addTo(Mapview)); 
        } 
    });  