function calculateBuffer() {

    //almost finito

    var bufferDistanceValue = document.getElementById("bufferDistance").value;
    console.log("test");
    console.log(x); //JA EVEN DU ER BEST JA DU ER BEST JA DU ER BEST@@@

    var innsjoBuffer = turf.buffer(innsjoJS, (bufferDistanceValue/1000), {units: 'kilometers'});
    L.geoJson(innsjoBuffer, {style: {weight: 4, color:"red"}}).addTo(map);
}

function calculateDifference() {

}