function drawLayers(tempLayersArray){
    for (i=0; i<tempLayersArray.length; i++){
        if (i==0 || i==4 || i==6){
            var tmp = new L.geoJson(tempLayersArray[i], {style: waterStyle}).addTo(map);
            //var innsjoLayer = new L.geoJSON(innsjoJS, { style: waterStyle}).addTo(map);
            //tmp.setStyle(brownStyle);
        }
        if (i==1 || i==3 || i==5){
            //var tempX = new L.geoJson(tempLayersArray[i], {style: brownStyle}).addTo(map);
        }
        if (i==2){
            var temp2 = new L.geoJson(tempLayersArray[i], {style: roadStyle}).addTo(map);
        }
    }
}

function addLayerToLists(layerName, layer){
    //This is a method that adds a new layer to all the lists.
    var selectBufferUpdate = document.getElementById("bufferLayers");
    var selectLayer = document.getElementById("layerControl");
    var selectDifference = document.getElementById("differenceLayersOne");
    var selectDifferenceTwo = document.getElementById("differenceLayersTwo");
    var selectIntersection = document.getElementById("intersectionLayerOne");
    var selectIntersectionTwo = document.getElementById("intersectionLayerTwo");
    var selectUnion = document.getElementById("unionLayerOne");
    var selectUnionTwo = document.getElementById("unionLayerTwo");



    selectBufferUpdate.options[selectBufferUpdate.options.length] = new Option(layerName, layer);
    selectLayer.options[selectLayer.options.length] = new Option(layerName, layer);
    selectDifference.options[selectDifference.options.length] = new Option(layerName, layer);
    selectDifferenceTwo.options[selectDifference.options.length] = new Option(layerName, layer);
    selectIntersection.options[selectIntersection.options.length] = new Option(layerName, layer);
    selectIntersectionTwo.options[selectIntersectionTwo.options.length] = new Option(layerName, layer);
    selectUnion.options[selectUnion.options.length] = new Option(layerName, layer)
    selectUnionTwo.options[selectUnionTwo.options.length] = new Option(layerName, layer);



}

function removeLayer(name, layer){
    var selectBufferUpdate = document.getElementById("bufferLayers");
    while (selectBufferUpdate.options.length) {
        obj.remove(0);
    }
}
