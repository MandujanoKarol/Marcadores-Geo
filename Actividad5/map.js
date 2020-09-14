    ///Mapa estilos
    const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    ///centrar mapa en cierta coordenada
    let Mapview = L.map('Mapview').setView([21.152334, -101.713132],13);
    ///Agregar a  mapa propiedades
    L.tileLayer(tilesProvider,{maxZoom:17,}).addTo(Mapview); 
    ///Iconos de Marcadores
    ///Icono-Par
    var newIconpar = L.icon({    
        iconUrl:'ubicacionpar.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]
    });
    ///Icono-Impar
    var newIconimpar = L.icon({    
        iconUrl:'ubicacionimpar.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]
    });

    ///Desactivar docle click zoom
    Mapview.doubleClickZoom.disable();

    ///Contenedor de clicks 
    var tam=0; 
    ///Arreglo de marcadores
    var markers=[];  
    ///Evento docle click en mapa
    Mapview.on('dblclick', function(e){  
        ///Aumentar clicks  
        tam++; 
        ///obtener las coordenadas de el evento
        let latLng = Mapview.mouseEventToLatLng(e.originalEvent)  
        ///Verificar si es par o impar
        if(tam%2==0){
            ///Agregar marcador a mapa icon par
            markers.push(L.marker([latLng.lat,latLng.lng],{icon: newIconpar}).addTo(Mapview)); 
        }else{
            ///Agregar marcador a mapa icon impar
            markers.push(L.marker([latLng.lat,latLng.lng],{icon: newIconimpar}).addTo(Mapview)); 
        } 
    });  