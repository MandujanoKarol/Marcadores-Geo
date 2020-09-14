    ///3 Mapa estilos
    var layerarray=[
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png']
    ///centrar mapa en cierta coordenada
    let Mapview = L.map('Mapview').setView([21.152334, -101.713132],13);

    let Mapview2 = L.map('Mapview2').setView([21.152334, -101.713132],13);
    var Layer2 = L.tileLayer(layerarray[0],{maxZoom:17,}).addTo(Mapview2); 

    ///Agregar a  mapa propiedades
    var position =0;
    var position2 =0;
    var Layer = L.tileLayer(layerarray[0],{maxZoom:17,}).addTo(Mapview); 
    ///Icono de Marcadores 
    var newIcon = L.icon({    
        iconUrl:'ubicacion.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]
    }); 

    ///Desactivar docle click zoom
    Mapview.doubleClickZoom.disable();
    ///posiciones
    var posiciones=[]; 
    ///poligono
    var poligono=null;
    ///Contenedor de clicks 
    var tam=0; 
    ///Arreglo de marcadores
    var markers=[]; 
    var markers2=[];  
    ///Evento docle click en mapa
    Mapview.on('dblclick', function(e){  
         
        ///obtener las coordenadas de el evento
        let latLng = Mapview.mouseEventToLatLng(e.originalEvent);
        markers.push(L.marker([latLng.lat,latLng.lng],{icon: newIcon}).addTo(Mapview)); 
        posiciones.push(latLng);
        if(tam==9){
            poligono=L.polygon([
                posiciones
            ]).addTo(Mapview);
            if(markers2.length>0){ 
                markers2.forEach(element => element.remove()); 
            }
            Mapview2.removeLayer(Layer2); 
            const random2 = posicionr(position2);
            position2=random2;
            Layer2 = L.tileLayer(layerarray[random2],{maxZoom:17,}).addTo(Mapview2);
            Mapview2.addLayer(Layer2);
            posiciones.forEach( function(valor, indice, array) {
                markers2.push(L.marker([valor.lat,valor.lng],{icon: newIcon}).addTo(Mapview2));
            });
            alert(JSON.stringify(posiciones));
        }


        if (tam>9){
            if(poligono!=null){
                poligono.remove();
            }
            tam=0;
            Mapview.removeLayer(Layer); 
            const random = posicionr(position);
            position=random;
            Layer = L.tileLayer(layerarray[random],{maxZoom:17,}).addTo(Mapview);
            Mapview.addLayer(Layer);
        }
        ///Aumentar clicks  
        tam++;

    });  
    function posicionr(posicion){
        if(posicion ==0){
            return 1;
        }
        if(posicion==1){
            return 2;
        }
        if(posicion==2){
            return 0;
        } 
    }