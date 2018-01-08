function drawLayers(tempLayersArray){
    for (i=0; i<tempLayersArray.length; i++){
        if (i==0 || i==2 || i==4 || i==6){
            var tmp = new L.geoJson(tempLayersArray[i], {style: waterStyle}).addTo(map);
            //var innsjoLayer = new L.geoJSON(innsjoJS, { style: waterStyle}).addTo(map);
            //tmp.setStyle(brownStyle);
        }
        if (i==1 || i==3 || i==5){
            var tempX = new L.geoJson(tempLayersArray[i], {style: brownStyle}).addTo(map);
        }
    }
}

function addLayer(tempLayer){

}
