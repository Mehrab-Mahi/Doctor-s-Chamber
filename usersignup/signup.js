var config = {
  apiKey: "AIzaSyAp9P7HZ8dfgUiZYir7Ru3sDSLwBfLjscg",
  authDomain: "dc-3d6b.firebaseapp.com",
  databaseURL: "https://dc-3d6b.firebaseio.com",
  projectId: "dc-3d6b",
  storageBucket: "dc-3d6b.appspot.com",
  messagingSenderId: "202620899397"
};
firebase.initializeApp(config);



var fileButton = document.getElementById('fileButton');
var btnSignUp = document.getElementById("btnSignUp");
var uid =1;



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    uid = user.uid;
  }
}, function (error) {
  console.log(error);
});





btnSignUp.addEventListener("click", e => {
  writeDoctorData();
});

fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];
    var storageRef = firebase.storage().ref('photos/' + uid + '.jpg');

    var task = storageRef.put(file);
});




function writeDoctorData() {
  
  var name = document.getElementById("name").value;
  var x = document.getElementById("blood");
  var blood = x.options[x.selectedIndex].innerHTML;
  var email = document.getElementById("em").value;
  var address = document.getElementById("address").value;
  var y = document.getElementById("district");
  var district = y.options[y.selectedIndex].innerHTML;
  var e = document.getElementById("specialty");
  var specialty = e.options[e.selectedIndex].innerHTML;
  
 

  var doctorData = doctorInfo(name,blood, email,address,district,specialty);
  
  firebase.database().ref('users/' + uid).set(doctorData);
  
}


function doctorInfo(name,blood, email,address,district, specialty) {
  return {
    name : name,
    blood : blood,
    email : email,
    address : address,
    district : district,
    specialty : specialty
  };
}

























/*

function initMap() {

  var myLatlng;

  navigator.geolocation.getCurrentPosition(function (location) {
    myLatlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
  });

  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13
  });
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function () {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });



}
google.maps.event.addDomListener(window, "load", initMap);

*/