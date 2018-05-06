

function initMap() {
  let options = {
    center: { lat: 42.4668, lng: -70.9495 },
    zoom: 8
  };
  const map = new google.maps.Map(document.getElementById('map'), options);

  //Add a marker onclick
  google.maps.event.addListener(map, 'click',
    function (event) {
      // Add Marker
      addMarker({ coords: event.latLng });
    });

  // An Array holding all of my markers
  const markers = [
    {
      coords: { lat: 42.4668, lng: -70.9495 },
      iconImg:'http://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1>Lynn MA</h1>'
    },
    {
      coords: { lat: 42.9668, lng: -70.9495 }
    }
  ];
  // Looping through my markers array
  for (let i in markers) {
    addMarker(markers[i]);
  }

  // ADD MARKER FUNCTION
  // Props come from markers function above.
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    // If it has an iconImg prop use the data to set icon
    if (props.iconImg) {
      marker.setIcon(props.iconImg)
    }

    // If it has a content prop then display content when clicked.
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      // Listening for marker click
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      })
    }
  }
}

