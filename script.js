//Created by kingKong
//This is a google map clone app

//Registrying the token from the Mapbox api
const MAPBOX_ACCESS_TOKEN = 
    process.env.MAPBOXKEY;

navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, {
        enableHighAccuracy: true
    })

//Creating the map
function setupMap (centerPosition){
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 13
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
        new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
        }),
        'top-left'
    );
}

//If the user allows position in the browser, it tracks position
function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([11.6, 3.8]) //Brings back to yaounde, Cameroon
}