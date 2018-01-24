function calculateBuffer() {

    var bufferDistanceValue = document.getElementById("bufferDistance").value;
    var bufferName = document.getElementById("bufferName").value;
    console.log(bufferName);
    var bufferHtml = document.getElementById("bufferLayers");
    var bufferIndex = bufferHtml.selectedIndex;
    console.log(bufferIndex);

    var innsjoBuffer = turf.buffer(layersArray[bufferIndex-1], (bufferDistanceValue/1000), {units: 'kilometers'});


    addToMap(innsjoBuffer, bufferName);

}

function calculateDifference() {

    var layerOne = document.getElementById('differenceLayersOne').value;
    var layerTwo = document.getElementById('differenceLayersTwo').value;
    var tempDifferenceName = document.getElementById("differenceLayerName").value;

    if (tempDifferenceName=="difference"){
        tempDifferenceName = tempDifferenceName + (Math.floor(Math.random() * 10000) + 1).toString();
        alert(tempDifferenceName);
    }

    if (layerOne != 0 && layerTwo != 0){
        var difference = turf.difference(layerOne, layerTwo);
        if (difference == undefined){
            alert("the difference is undefined");
        }
        else {
            addToMap(difference, tempDifferenceName);
        }
    }
    else {
        alert("Cannot compute difference. One or both of the layers are empty.");
    }
}

function calculateIntersection(){

    var intersectLayerOne = document.getElementById("intersectionLayerOne");
    var intersectLayerTwo = document.getElementById("intersectionLayerTwo");
    var indexOne = intersectLayerOne.selectedIndex;
    var indexTwo = intersectLayerTwo.selectedIndex;

    alert("test1");

    var intersectName = document.getElementById("intersectionLayerName").value;


    var intersected = turf.intersect(layersArray[indexOne-1], layersArray[indexTwo-1]);

    addToMap(intersected, intersectName);
}

function calculateUnion(){
    var unionLayerOne = document.getElementById("unionLayerOne");
    var unionLayerTwo = document.getElementById("unionLayerTwo");
    var unionName = document.getElementById("unionLayerName")
    var indexOne = unionLayerOne.selectedIndex;
    var indexTwo = unionLayerTwo.selectedIndex;
    var unionLayer = turf.union(layerArray[indexOne-1], layerArray[indexTwo-1])

    addToMap(unionLayer, unionName);
}

function addToMap(layerTemp, layerNameTemp){
    layersArray.push(layerTemp);
    layerNames.push(layerNameTemp);
    addLayerToLists(layerNameTemp, layerTemp);
    var colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    var tempStyle = {
        "color": colour,
        "fillColor": colour,
        "weight": 1,
        "opacity": 0.8,
        "fillOpacity": 0.7,
    };
    var newLayer = L.geoJson(layerTemp, {style: tempStyle});
    layerVars.push(newLayer);
    layerVars[layerVars.length-1].addTo(map);
}