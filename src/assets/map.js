function initMap() {
    var map = new atlas.Map('myMap', {
        center: [-122.33, 47.6],
        zoom: 12,
        language: 'en-US',
        authOptions: {
            authType: 'subscriptionKey',
            subscriptionKey: '[Azure_Maps_Key]'
        }
    });
}

document.addEventListener("DOMContentLoaded", function (e) {
    setTimeout(function () { initMap() }, 5000)
});