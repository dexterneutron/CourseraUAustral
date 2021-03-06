var map = L.map('main_map').setView([9.7456903,  -63.1832314], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVsaXhsZyIsImEiOiJja2I2cGl1b3YwMHZ6MzJtZDF1NHFxNGVkIn0.Ylg-TlDmYE8MNGanyL03yA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.pk.eyJ1IjoiZmVsaXhsZyIsImEiOiJja2I2cGl1b3YwMHZ6MzJtZDF1NHFxNGVkIn0.Ylg-TlDmYE8MNGanyL03yA.Ylg-TlDmYE8MNGanyL03yA'
}).addTo(map);

$.ajax({
    datatType:'json',
    url:'api/bicicletas',
    success: function (result) {
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion,{title:bici.id}).addTo(map);
        });
    }
});