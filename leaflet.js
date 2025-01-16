// leaflet.js

// Load Leaflet CSS and JS via CDN
const leafletCSS = document.createElement('link');
leafletCSS.rel = 'stylesheet';
leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
document.head.appendChild(leafletCSS);

const leafletJS = document.createElement('script');
leafletJS.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
leafletJS.integrity = 'sha256-pv1tmx1K7nY1dG1eLqjAF8q+yEoCsFF5o0wH1P49vRg=';
leafletJS.crossOrigin = '';
document.body.appendChild(leafletJS);

// Initialize the map after Leaflet JS loads
leafletJS.onload = () => {
  const map = L.map('map').setView([46.603354, 1.888334], 6); // Centered on France

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Define trip locations
  const locations = [
    { name: 'Daventry', coords: [52.2279, -1.2074] },
    { name: 'Strasbourg', coords: [48.5734, 7.7521] },
    { name: 'Black Forest', coords: [48.2000, 8.2000] },
    { name: 'Triberg', coords: [48.1626, 8.2358] },
    { name: 'Lake Titisee', coords: [47.9428, 8.2714] },
    { name: 'Avignon', coords: [43.9493, 4.8055] },
    { name: 'Jávea', coords: [38.7425, 0.1583] },
    { name: 'Girona', coords: [41.9794, 2.8214] },
  ];

  // Add markers to the map
  locations.forEach(location => {
    L.marker(location.coords)
      .addTo(map)
      .bindPopup(`<strong>${location.name}</strong>`)
      .openPopup();
  });

  // Draw the route
  const latlngs = locations.map(loc => loc.coords);
  L.polyline(latlngs, { color: 'blue' }).addTo(map);
};