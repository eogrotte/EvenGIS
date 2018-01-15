function drawLayers(tempLayersArray){
    for (i=0; i<tempLayersArray.length; i++){
        if (i==0 || i==4 || i==6){
            var tmp = new L.geoJson(tempLayersArray[i], {style: waterStyle}).addTo(map);
            //var innsjoLayer = new L.geoJSON(innsjoJS, { style: waterStyle}).addTo(map);
            //tmp.setStyle(brownStyle);
        }
        if (i==1 || i==3 || i==5){
            var tempX = new L.geoJson(tempLayersArray[i], {style: brownStyle}).addTo(map);
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

function deleteLayer(index){

    var selectBufferUpdate = document.getElementById("bufferLayers");
    var selectLayer = document.getElementById("layerControl");
    var selectDifference = document.getElementById("differenceLayersOne");
    var selectDifferenceTwo = document.getElementById("differenceLayersTwo");
    var selectIntersection = document.getElementById("intersectionLayerOne");
    var selectIntersectionTwo = document.getElementById("intersectionLayerTwo");
    var selectUnion = document.getElementById("unionLayerOne");
    var selectUnionTwo = document.getElementById("unionLayerTwo");

    alert("test");
    selectBufferUpdate.remove(index);
    selectLayer.remove(index);
    selectDifference.remove(index);
    selectDifferenceTwo.remove(index);
    selectIntersection.remove(index);
    selectIntersectionTwo.remove(index);
    selectUnion.remove(index);
    selectUnionTwo.remove(index);
}

function layerAction(){
    var selectedLayerIndex = document.getElementById("layerControl").selectedIndex;
    var actionIndex = document.getElementById("layerAction").selectedIndex;

    //actionIndex of 0 does nothing, 1 deletes layer, 2 downloads layer, 3 hides, 4 edits (appearance)
    if (actionIndex === 1){
        deleteLayer(selectedLayerIndex);
    }
    if (actionIndex == 2){
        downloadLayer(selectedLayerIndex);
    }

}

function downloadLayer(layerIndex){
    //window.open('testLayers/data/vann.geojson');
    var json = layerArray[layerIndex].toGeoJSON();

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));

    //var path= "testLayers/data/vann.geojson";
    // var save = document.createElement('a');
    // save.href = dataStr;
    // save.download = layerNames[layerIndex];
    // save.target = '_blank';
    // document.body.appendChild(save);
    // save.click();
    // document.body.removeChild(save);


    var dlAnchorElem = document.createElement('downloadLayer');
    dlAnchorElem.href=dataStr;
    dlAnchorElem.download = layerNames[layerIndex] + ".geojson";
    dlAnchorElem.target='_blank';
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    document.body.removeChild(save);
}
