
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXI5MjQiLCJhIjoiY201b2RweHNhMGxjazJscTI0cm92MDNuOCJ9.DUSIWV2_-BR0a9LOqhn15w';

//creating map
const createMap = (zoomValue) => {
	const map = new mapboxgl.Map({
		container: 'map', 
		style: 'mapbox://styles/ander924/cm6sdtrs2004t01qshcd17pgy', // style URL
		center: [-123.126, 49.249], // starting view [lng, lat]
		zoom: zoomValue, // starting zoom
		minZoom: zoomValue //can't zoom out
	});
	
	map.on('load', () => {
		// Load Public Art GeoJSON into github
		map.addSource('public-art', {
			type: 'geojson',
			data: 'https://raw.githubusercontent.com/NAnder924/GGR472_Lab2/refs/heads/main/public-art.geojson'
		});
	//details regarding markers for public art
		map.addLayer({
			id: 'public-art-layer',
			type: 'circle', //type of marker
			source: 'public-art', //using the source for public art added above
			paint: {
				'circle-radius': 3, //circle radius size
				'circle-color': '#B33951',  //colour of circle
				'circle-stroke-width': 0.5, //border of circle width
				'circle-stroke-color': '#691E06' //border of circle colour
			}
		});
	
		// Load Community Gardens and Food Trees GeoJSON into github
		map.addSource('community-gardens-and-food-trees', {
			type: 'geojson',
			data: 'https://raw.githubusercontent.com/NAnder924/GGR472_Lab2/refs/heads/main/community-gardens-and-food-trees.geojson'
		});
	//details regarding markers for community gardens and food trees
		map.addLayer({
			id: 'community-gardens-and-food-trees', 
			type: 'circle', //type of marker
			source: 'community-gardens-and-food-trees', //using the source for community gardens and foodtrees added above
			paint: {
				'circle-radius': 3, //circle radius size
				'circle-color': '#284B63', //colour of circle
				'circle-stroke-width': 1, //border of circle width
				'circle-stroke-color': '#2F3E46' //border of circle colour
			}
		})
	});
}

createMap(11)
// creating legend popout and map characteristics

// making button change from show legend to hide legend depending if opened or not
const renameButton = () => {
	const button = document.getElementById("button");
	console.log(button.innerHTML)
	button.innerHTML === "Hide Legend" ? button.innerHTML = "Show Legend" : button.innerHTML = "Hide Legend"
}

document.getElementById('button').addEventListener('click', () => {
	const mapDiv = document.getElementById('map');
//if map has this view than create map11, otherwise create map10.5
	 if (mapDiv.style.width === '70vw') {//map view width 70%
		mapDiv.style.width='100vw' //map view width 100%
		mapDiv.style.height='100vh' //map view height 100%
		createMap(11)
	} else {
		mapDiv.style.width='70vw' //map view width 70%
		mapDiv.style.height='100vh' //map view height 100%
		createMap(10.5)
	}
})
