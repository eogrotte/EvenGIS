function calculateBuffer() {

    var bufferDistanceValue = document.getElementById("bufferDistance").value;
    var bufferName = document.getElementById("bufferName").value;
    console.log(bufferName);
    var bufferHtml = document.getElementById("bufferLayers");
    var bufferIndex = bufferHtml.selectedIndex;
    console.log(bufferIndex);

    var innsjoBuffer = turf.buffer(layersArray[bufferIndex-1], (bufferDistanceValue/1000), {units: 'kilometers'});
    layersArray.push(innsjoBuffer);
    layerNames.push(bufferName);

    L.geoJson(innsjoBuffer, {style: {weight: 4, color:"red"}}).addTo(map);
}

function calculateDifference() {

    var layerOne = document.getElementById('differenceLayersOne').value;
    var layerTwo = document.getElementById('differenceLayersTwo').value;
    var tempDifferenceName = document.getElementById("differenceLayerName");
    if (tempDifferenceName=="difference"){
        alert("alarm!");
    }

    if (layerOne != 0 && layerTwo != 0){
        var difference = turf.difference(layerOne, layerTwo);
        if (difference == undefined){
            alert("the difference is undefined");
        }
        else {
            layersArray.push(difference);
            if (tempDifferenceName != "difference"){
                layerNames.push(tempDifferenceName);
            }
            if (tempDifferenceName == "difference"){
                layerNames.push("difference" + (Math.floor(Math.random() * 1000) + 1).toString());
            }
        }
    }
    else {
        alert("Cannot compute difference. One or both of the layers are empty.");
    }



}