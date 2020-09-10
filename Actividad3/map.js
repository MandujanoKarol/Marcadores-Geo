    
    const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let Mapview = L.map('Mapview').setView([21.152334, -101.713132],13)
    L.tileLayer(tilesProvider,{    maxZoom:17,}).addTo(Mapview) 
    var newIcon = L.icon({    
        iconUrl:'ubicacion.png',    
        iconSize:[60,60],    
        iconAnchor:[30,60],    
        popupAnchor:[-3,-76]}
    )
     
    
    Mapview.doubleClickZoom.disable();
    
    var tam=0;
    var poligono=null;
    var posiciones=[]; 
    var tem=0;


    Mapview.on('dblclick', function(e){    
        tam=document.getElementById('tam').value ; 
        let latLng = Mapview.mouseEventToLatLng(e.originalEvent)   

       
        if(posiciones.length<tam){
            posiciones.push(latLng);
            L.marker([latLng.lat,latLng.lng],{icon: newIcon}).addTo(Mapview);
        }

        console.log(posiciones.length);
        if(posiciones.length==tam && tem==0){  
                poligono=L.polygon([
                    posiciones
                ]).addTo(Mapview);
                tem=1; 
        }
        
    });