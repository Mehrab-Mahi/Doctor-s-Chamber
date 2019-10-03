var config = {
    apiKey: "AIzaSyAp9P7HZ8dfgUiZYir7Ru3sDSLwBfLjscg",
    authDomain: "dc-3d6b.firebaseapp.com",
    databaseURL: "https://dc-3d6b.firebaseio.com",
    projectId: "dc-3d6b",
    storageBucket: "dc-3d6b.appspot.com",
    messagingSenderId: "202620899397"
};

firebase.initializeApp(config);

const btnLogOut = document.getElementById("btnLogOut");

var uid=1 ;


firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
  
      //redirect to home
    }
    else{
        uid = user.uid;
    }
  }, function (error) {
    console.log(error);
  });
  

btnLogOut.addEventListener("click", e => {
    firebase.auth().signOut();
    window.location.href = '../index.html';
});


window.onload = function() {
    pullData();
};
   
function pullData() {
    


    var name = document.getElementById("name");
    var blood = document.getElementById("blood");
    var email = document.getElementById("em");
    var address = document.getElementById("address");
    var district = document.getElementById("district");
    var specialty = document.getElementById("specialty");
    
    
    var doctorRef = firebase.database().ref('users/' + uid);
    
    
    doctorRef.once('value', function (snapshot) {
        
        var doctorData = snapshot.val();
        name.innerHTML = doctorData.name;
        blood.innerHTML = doctorData.blood;
        email.innerHTML = doctorData.email;
        address.innerHTML = doctorData.address;
        district.innerHTML = doctorData.district;
        specialty.innerHTML = doctorData.specialty;
       
        readImage()
        
        
        
    });

    
    
}


function readImage() {
    var starsRef = firebase.storage().ref().child('photos/' + uid + '.jpg');
    starsRef.getDownloadURL().then(function (url) {
        document.getElementById("profilePicture").src = url;
    }).catch(function (error) {
    });
}



