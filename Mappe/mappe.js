// CODED BY JONATHAN DEREWITH 
var initialize = function() {

	var latlng = new google.maps.LatLng(45.433033,12.33387);// venezia
	var latlng1 = new google.maps.LatLng(45.517279,12.23392);// via don peron
	var latlng2 = new google.maps.LatLng(45.505475,12.239439); // mameli
	var latlng3 = new google.maps.LatLng(45.493984,12.245529);// piazza 27 ottobre
	var latlng4 = new google.maps.LatLng(45.485966,12.239864);//aleardi
	var latlng5 = new google.maps.LatLng(45.485966,12.239864);//caffi
	var latlng6 = new google.maps.LatLng(45.472877,12.225845);//cavallotti
	var latlng7 = new google.maps.LatLng(45.496601,12.241645);//manin
	var latlng8 = new google.maps.LatLng(45.491803,12.241902);//olivi
	var latlng9 = new google.maps.LatLng(45.491803,12.241902);//paleopaca
	var latlng10 = new google.maps.LatLng(45.477086,12.21937);//pepe
	var latlng11 = new google.maps.LatLng(45.490665,12.247057);//tommaseo
	var latlng12 = new google.maps.LatLng(45.469551,12.225769);//verdi
	var latlng13 = new google.maps.LatLng(45.492945,12.235358);//zambeccari
	var latlng14 = new google.maps.LatLng(45.517279,12.23392);//garibaldi

	var options = {
  		zoom: 11,
  		center: latlng,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
	};	

	var map = new google.maps.Map(document.getElementById('map_canvas'), options);
	
	var marker = new google.maps.Marker(
		{
  			position: latlng,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip = '<div id="tooltip">'+
				'<img src="veneiza.jpg" alt="Venezia">'+
   				'<p><strong>Venezia</strong><br>'+
				'cap: 30173<br>'+
    			'provincia: Venezia<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow = new google.maps.InfoWindow({
		content: tooltip
	});
	
	google.maps.event.addListener(marker, 'click', function() {
  				infowindow.open(map,marker);
			});

		//FINISCE PRIMO
			
	var marker1 = new google.maps.Marker(
		{
  			position: latlng1,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip1 = '<div id="tooltip">'+
				'<img src="peron.jpg" alt="viaDonPeron">'+
   				'<p><strong>Via don peron</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow1 = new google.maps.InfoWindow({
		content: tooltip1
	});
	
	google.maps.event.addListener(marker1, 'click', function() {
  				infowindow1.open(map,marker1);
			});
			
	// FINISCE SECONDO
	
	var marker2 = new google.maps.Marker(
		{
  			position: latlng2,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip2 = '<div id="tooltip">'+
				'<img src="img/mameli.jpg" alt="viaMameli">'+
   				'<p><strong>via Mameli</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow2 = new google.maps.InfoWindow({
		content: tooltip2
	});
	
	google.maps.event.addListener(marker2, 'click', function() {
  				infowindow2.open(map,marker2);
			});
	// FINE TERZO
	
	var marker3 = new google.maps.Marker(
		{
  			position: latlng3,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip3 = '<div id="tooltip">'+
				'<img src="img/ottobre.jpg" alt="piazza27ottobre">'+
   				'<p><strong>piazza 27 ottobre</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow3 = new google.maps.InfoWindow({
		content: tooltip3
	});
	
	google.maps.event.addListener(marker3, 'click', function() {
  				infowindow3.open(map,marker3);
			});
			
	// FINE QUARTO
	
	var marker4 = new google.maps.Marker(
		{
  			position: latlng4,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip4 = '<div id="tooltip">'+
				'<img src="img/aleardi.jpg" alt="viaAleardi">'+
   				'<p><strong>via Aleardi</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow4 = new google.maps.InfoWindow({
		content: tooltip4
	});
	
	google.maps.event.addListener(marker4, 'click', function() {
  				infowindow4.open(map,marker4);
			});
	
	// FINE QUINTO
	
	var marker5 = new google.maps.Marker(
		{
  			position: latlng5,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip5 = '<div id="tooltip">'+
				'<img src="img/caffi.jpg" alt="viaAleardi">'+
   				'<p><strong>via Caffi</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow5 = new google.maps.InfoWindow({
		content: tooltip5
	});
	
	google.maps.event.addListener(marker5, 'click', function() {
  				infowindow5.open(map,marker5);
			});
			
	// FINE SESTO
	
	var marker6 = new google.maps.Marker(
		{
  			position: latlng6,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip6 = '<div id="tooltip">'+
				'<img src="img/cavallotti.jpg" alt="viaAleardi">'+
   				'<p><strong>via Cavalotti</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow6 = new google.maps.InfoWindow({
		content: tooltip6
	});
	
	google.maps.event.addListener(marker6, 'click', function() {
  				infowindow6.open(map,marker6);
			});
			
	// FINE SETTIMO
	
	var marker7 = new google.maps.Marker(
		{
  			position: latlng7,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip7 = '<div id="tooltip">'+
				'<img src="img/manin.jpg" alt="viaAleardi">'+
   				'<p><strong>via Manin</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow7 = new google.maps.InfoWindow({
		content: tooltip7
	});
	
	google.maps.event.addListener(marker7, 'click', function() {
  				infowindow7.open(map,marker7);
			});
			
	// FINE OTTO
	
	var marker8 = new google.maps.Marker(
		{
  			position: latlng8,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip8 = '<div id="tooltip">'+
				'<img src="img/olivi.jpg" alt="viaAleardi">'+
   				'<p><strong>via olivi</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow8 = new google.maps.InfoWindow({
		content: tooltip8
	});
	
	google.maps.event.addListener(marker8, 'click', function() {
  				infowindow8.open(map,marker8);
			});
	
	// FINE NOVE
	
	var marker9 = new google.maps.Marker(
		{
  			position: latlng9,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip9 = '<div id="tooltip">'+
				'<img src="img/paleopaca.jpg" alt="viaAleardi">'+
   				'<p><strong>via Paleopaca</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow9 = new google.maps.InfoWindow({
		content: tooltip9
	});
	
	google.maps.event.addListener(marker9, 'click', function() {
  				infowindow9.open(map,marker9);
			});
			
	// FINE DIECI
	
	var marker10 = new google.maps.Marker(
		{
  			position: latlng10,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip10 = '<div id="tooltip">'+
				'<img src="img/pepe.jpg" alt="viaAleardi">'+
   				'<p><strong>via Pepe</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow10 = new google.maps.InfoWindow({
		content: tooltip10
	});
	
	google.maps.event.addListener(marker10, 'click', function() {
  				infowindow10.open(map,marker10);
			});
			
	// FINE unDIECI
	
	var marker11 = new google.maps.Marker(
		{
  			position: latlng11,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip11 = '<div id="tooltip">'+
				'<img src="img/tommaseo.jpg" alt="viaAleardi">'+
   				'<p><strong>via Tommaseo</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow11 = new google.maps.InfoWindow({
		content: tooltip11
	});
	
	google.maps.event.addListener(marker11, 'click', function() {
  				infowindow11.open(map,marker11);
			});
			
	// FINE dueDIECI
	
	var marker12 = new google.maps.Marker(
		{
  			position: latlng12,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip12 = '<div id="tooltip">'+
				'<img src="img/verdi.jpg" alt="viaAleardi">'+
   				'<p><strong>via Verdi</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow12 = new google.maps.InfoWindow({
		content: tooltip12
	});
	
	google.maps.event.addListener(marker12, 'click', function() {
  				infowindow12.open(map,marker12);
			});
			
	// FINE treDIECI
	
	var marker13 = new google.maps.Marker(
		{
  			position: latlng13,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip13 = '<div id="tooltip">'+
				'<img src="img/zambeccari.jpg" alt="viaAleardi">'+
   				'<p><strong>via Zambeccari</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow13 = new google.maps.InfoWindow({
		content: tooltip13
	});
	
	google.maps.event.addListener(marker13, 'click', function() {
  				infowindow13.open(map,marker13);
			});
			
   // FINE quattroDIECI
	
	var marker14 = new google.maps.Marker(
		{
  			position: latlng13,
  			map: map,
  			icon: 'http://google-maps-icons.googlecode.com/files/country.png',
			flat: true
		}
	);
	
	var tooltip14 = '<div id="tooltip">'+
				'<img src="img/garibaldi.jpg" alt="viaAleardi">'+
   				'<p><strong>viale Gariabali</strong><br>'+
				'cap: 30173<br>'+
    			'citta: Mestre<br>'+
				'nazione: Italia</p>'+
    			'</div>';
	
	var infowindow14 = new google.maps.InfoWindow({
		content: tooltip14
	});
	
	google.maps.event.addListener(marker14, 'click', function() {
  				infowindow14.open(map,marker14);
			});
}


window.onload = initialize;