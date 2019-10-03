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
var uid;


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
  var e = document.getElementById("specialty");
  var specialty = e.options[e.selectedIndex].innerHTML;
  var email = document.getElementById("em").value;
  var bmdcRegNo = document.getElementById("bmdcRegNo").value;
  var degree = document.getElementById("degree").value;
  var mainHospital = document.getElementById("mainHospital").value;
  var hospitalAddress = document.getElementById("hospitalAddress").value;
  var y = document.getElementById("district");
  var district = y.options[y.selectedIndex].innerHTML;
  var hospitalServiceDays = document.getElementById("hospitalServiceDays").value;
  var hospitalServiceTime = document.getElementById("hospitalServiceTime").value;
  var hospitalConsultaionFee = document.getElementById("hospitalConsultaionFee").value;
  var chamberName = document.getElementById("chamberName").value;
  var chamberAddress = document.getElementById("chamberAddress").value;
  var chamberServiceDays = document.getElementById("chamberServiceDays").value;
  var chamberServiceTime = document.getElementById("chamberServiceTime").value;
  var chamberConsultaionFee = document.getElementById("chamberConsultaionFee").value;  
  
  
  
  var doctorData = doctorInfo(name, specialty, email, bmdcRegNo, degree, mainHospital, hospitalAddress,district, hospitalServiceDays, hospitalServiceTime, hospitalConsultaionFee , chamberName, chamberAddress , chamberServiceDays, chamberServiceTime, chamberConsultaionFee);
  
  firebase.database().ref('doctors/' + uid).set(doctorData);
  
}


function doctorInfo(name, specialty, email, bmdcRegNo, degree, mainHospital, hospitalAddress, district, hospitalServiceDays, hospitalServiceTime, hospitalConsultaionFee , chamberName, chamberAddress , chamberServiceDays, chamberServiceTime, chamberConsultaionFee) {
  return {
    name : name,
    specialty :specialty,
    email : email,
    bmdcRegNo : bmdcRegNo,
    degree : degree,
    mainHospital : mainHospital,
    hospitalAddress : hospitalAddress,
    district : district,
    hospitalServiceDays : hospitalServiceDays,
    hospitalServiceTime : hospitalServiceTime,
    hospitalConsultaionFee : hospitalConsultaionFee,
    chamberName : chamberName,
    chamberAddress : chamberAddress,
    chamberServiceDays : chamberServiceDays,
    chamberServiceTime : chamberServiceTime,
    chamberConsultaionFee : chamberConsultaionFee
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