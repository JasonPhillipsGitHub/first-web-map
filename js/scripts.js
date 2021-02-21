mapboxgl.accessToken = 'pk.eyJ1IjoianA1NDg1IiwiYSI6ImNrM2Y3bTN5cDAxemEzaG5ubjM1NHpzdXIifQ.1ZnEtqoWaJQRTjp7E2GgGA';

var map = new mapboxgl.Map({
    container: 'mapContainer', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-73.925879,40.747927], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
// add the navigation control
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-left');




// Add EM Responses

$.getJSON('./data/em-responses.json', function(EmResponseData){
  console.log(EmResponseData)

  EmResponseData.forEach(function(response) {
    console.log(response.incidenttype, response.year)

var html = `
<div>
    <h4>Incident Category:  ${response.incidentcategory}</h4>
        <div> Type: ${response.incidenttype}</div>
        <div> Location: ${response.Location}</div>
        <div> Borough: ${response.Borough}</div>
        <div> Date: ${response.month}/${response.day}/${response.year}</div>
        <div> Time: ${response.time}  ${response.ampm}</div>
</div>
`

// Assign the color of the marker by type of response
var color = 'black'

if (response.incidentcategory === 'Aviation'){
  color = '#8fa5c9'
}

if (response.incidentcategory === 'Fire'){
  color = '#e36505'
}

if (response.incidentcategory === 'HazMat'){
  color = '#f2e127'
}
if (response.incidentcategory === 'Structural'){
  color = '#472d2f'
}
if (response.incidentcategory === 'Transportation'){
  color = '#5ec4a2'
}
if (response.incidentcategory === 'Law Enforcement'){
  color = '#091c87'
}
if (response.incidentcategory === 'Rescue'){
  color = '#870909'
}
if (response.incidentcategory === 'Utility'){
  color = '#868687'
}
    new mapboxgl.Marker({
      color: color
    })
        .setLngLat([response.Longitude,response.Latitude])
         .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
        .addTo(map);
})
})
