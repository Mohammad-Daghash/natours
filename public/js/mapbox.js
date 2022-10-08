/* eslint-disable */

export const displayMap = locations => {
    var map = L.map('map', {
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
    });
    // .setView([34.111745, -118.113491], 13);

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '\xa9 OpenStreetMap',
    }).addTo(map);

    // Create marker icon
    const pinIcon = L.icon({
        iconUrl: '../img/pin.png',
        iconSize: [32, 40],
    });

    let coordsArr = [];
    locations.forEach(loc => {
        // Create popup
        const popup = new L.Popup()
            .setLatLng(loc.coordinates)
            .setContent(`Day ${loc.day}: ${loc.description}`)
            .addTo(map);

        // Add marker
        const marker = L.marker(loc.coordinates, { icon: pinIcon })
            .bindPopup(popup, {
                autoClose: false,
                closeOnClick: false,
            })
            .addTo(map);

        // Add coordinates to coordsArr
        coordsArr.push(loc.coordinates);
    });

    const bounds = new L.LatLngBounds(coordsArr);
    map.fitBounds(bounds, {
        padding: [100, 100],
    });
};

// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
