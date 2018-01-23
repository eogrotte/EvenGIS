function drawLayers(tempLayersArray){
    for (i=0; i<tempLayersArray.length; i++){
        if (i==0 || i==4 || i==6){
            var layerZero = L.geoJson(tempLayersArray[i], {style: waterStyle});
            layerVars.push(layerZero);
            layerVars[i].addTo(map);
            //map.removeLayer(layerZero);
            //var innsjoLayer = new L.geoJSON(innsjoJS, { style: waterStyle}).addTo(map);
            //tmp.setStyle(brownStyle);
        }
        if (i==1 || i==3 || i==5){
            var tempX = L.geoJson(tempLayersArray[i], {style: brownStyle});
            layerVars.push(tempX);
            layerVars[i].addTo(map);
        }
        if (i==2){
            var temp2 = new L.geoJson(tempLayersArray[i], {style: roadStyle}).addTo(map);
            layerVars.push(temp2);
            layerVars[i].addTo(map);
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

    selectBufferUpdate.remove(index);
    selectLayer.remove(index);
    selectDifference.remove(index);
    selectDifferenceTwo.remove(index);
    selectIntersection.remove(index);
    selectIntersectionTwo.remove(index);
    selectUnion.remove(index);
    selectUnionTwo.remove(index);

    map.removeLayer(layerVars[index-1]);

    layersArray.splice(index-1, 1);
    layerNames.splice(index-1, 1);
    layerVars.splice(index-1, 1);


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
    if (actionIndex == 3){
        hideLayer(selectedLayerIndex);
    }
    if (actionIndex == 4){
        editAppearance(selectedLayerIndex);
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

function hideLayer(index){
    if (hidden[index-1] == true){
        layerVars[index-1].addTo(map);
        hidden.splice(index-1, 1);
        return;
    }
    var layerAct = document.getElementById("layerAction");
    map.removeLayer(layerVars[index-1]);
    hidden[index-1]=true;
}

function editAppearance(index){

    thing.classList.toggle("m-fadeOut");
    thing2.classList.toggle("m-fadeIn");
}


function changeColour(colour){
    var tempStyle = {
        "color": colour,
        "fillColor": colour,
        "weight": 1,
        "opacity": 0.8,
        "fillOpacity": 0.7,
    };

    var selectedLayerIndex = document.getElementById("layerControl").selectedIndex;
    layerVars[selectedLayerIndex-1].setStyle(tempStyle);
    editAppearance(0);
}