mapboxgl.accessToken = 'pk.eyJ1IjoianA1NDg1IiwiYSI6ImNrM2Y3bTN5cDAxemEzaG5ubjM1NHpzdXIifQ.1ZnEtqoWaJQRTjp7E2GgGA';

var map = new mapboxgl.Map({
    container: 'mapContainer', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-73.974802,40.775782], // starting position [lng, lat]
    zoom: 12 // starting zoom
});
// add the navigation control
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-left');

// Adding simple marker to the map
var marker = new mapboxgl.Marker({
  color: 'red'
})
    .setLngLat([-74.006, 40.7128])
    .setPopup(new mapboxgl.Popup().setHTML("<h1>City Hall!</h1>")) // add popup
    .addTo(map);


// practice data

var dummyData =[
  {
    name: 'The Pond',
    point: [-73.974073,40.765843]
  },
  {
    name: 'Strawberry Fields',
    point: [-73.974802,40.775782]
  },
  {
    name: 'Dalehead Arch',
    point: [-73.978578,40.770726]
  }
]

dummyData.forEach(function(data) {
  console.log(data.name, data.point)

  new mapboxgl.Marker()
      .setLngLat(data.point)
      .setPopup(new mapboxgl.Popup().setHTML(`<h1> ${data.name} </h1>`)) // add popup
      .addTo(map);

})

// Add EM Responses

$.getJSON('./data/em-responses.json', function(EmResponseData){
  console.log(EmResponseData)

  EmResponseData.forEach(function(response) {
    console.log(response.incidenttype, response.year)

var html = `
<div>
    <h4>Incident Type:  ${response.incidenttype}</h4>
        <div> Location: ${response.Location}</div>
        <div> Borough: ${response.Borough}</div>

</div>
`
    new mapboxgl.Marker()
        .setLngLat([response.Longitude,response.Latitude])
         .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
        .addTo(map);
})
})
