// Initialize Firebase
var config = {
    apiKey: "AIzaSyAp9P7HZ8dfgUiZYir7Ru3sDSLwBfLjscg",
    authDomain: "dc-3d6b.firebaseapp.com",
    databaseURL: "https://dc-3d6b.firebaseio.com",
    projectId: "dc-3d6b",
    storageBucket: "dc-3d6b.appspot.com",
    messagingSenderId: "202620899397"
  };
  firebase.initializeApp(config);

//referece masseges collection
var database = firebase.database();
var ref = database.ref("profile/doctor");
var myId;
var sad;
var man;
var xx, yy;

const btnPost = document.getElementById("btnPost");

btnPost.addEventListener("click", e => {
  writeNewPost(myId);
});



function writeNewPost(uid) {
  var name = document.getElementById("name").value;
  var bmdc = document.getElementById("bmdc").value;
  var speciality = document.getElementById("speciality").value;
  var degree = document.getElementById("degree").value;
  var location = document.getElementById("pac-input").value;
  var haddress = document.getElementById("haddress").value;
  var hday = document.getElementById("hday").value;
  var hfee = document.getElementById("hfee").value;
  var cname = document.getElementById("cname").value;
  var caddress = document.getElementById("caddress").value;
  var cday = document.getElementById("cday").value;
  var cfee = document.getElementById("cfee").value;
  
  // A post entry.
  var postData = saveMessage(jobTitle, jobDescription, location, address, initalBudget, deadline);

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

/*
function gotData(data) {
  var restaurants = data.val();
  var keys = Object.keys(restaurants);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var lon = restaurants[k].lon;
    var lat = restaurants[k].lat;
  }
}
*/

function errData() {
  alert("network error");
}

function getData() { }

function saveMessage(jobTitle, jobDescription, location, address, initalBudget, deadline) {
  return {
    jobTitle: jobTitle,
    jobDescription: jobDescription,
    deadline: deadline,
    location: location,
    address: address,
    initalBudget: initalBudget,
    status: 0,
    longitude: sad,
    latitude: man
  };
}


firebase.auth().onAuthStateChanged(function (user) {
  myId = user.uid;
  if (!user) {
    window.location.href = 'index.html';
  }
});

//place and map api

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
