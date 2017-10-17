guiElements.initGUI = {

    initMap: function () {
        var map = L.map('mapid').setView([63.4269, 10.3969],13);
        var x = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
        x.addTo(map);
    }
}