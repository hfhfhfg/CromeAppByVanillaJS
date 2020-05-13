const API_KEY = "996b3db534f52f2b60b5d8dab0184d2b";
const COORDS = 'coords';

function saveCoords(coordsObj){
	
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
	
}


function handleGeoSucces(position){
	console.log(position);
	
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
			latitude,
			longitude
	};
	
	saveCoords(coordsObj);
}

function handleGeoError(){
	console.log("Cant access geo location");
	
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	
	if(loadedCoords === null){
		askForCoords();
	}else{
		
		console.log("succes");
	}
}

function init(){
	loadCoords();
}

init();