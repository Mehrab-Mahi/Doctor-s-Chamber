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
var uid =1;


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
    var specialty = document.getElementById("specialty");
    var email = document.getElementById("em");
    var bmdcRegNo = document.getElementById("bmdcRegNo");
    var degree = document.getElementById("degree");
    var mainHospital = document.getElementById("mainHospital");
    var hospitalAddress = document.getElementById("hospitalAddress");
    var district = document.getElementById("district");
    var hospitalServiceDays = document.getElementById("hospitalServiceDays");
    var hospitalServiceTime = document.getElementById("hospitalServiceTime");
    var hospitalConsultaionFee = document.getElementById("hospitalConsultaionFee");
    var chamberName = document.getElementById("chamberName");
    var chamberAddress = document.getElementById("chamberAddress");
    var chamberServiceDays = document.getElementById("chamberServiceDays");
    var chamberServiceTime = document.getElementById("chamberServiceTime");
    var chamberConsultaionFee = document.getElementById("chamberConsultaionFee");  
    
    var doctorRef = firebase.database().ref('doctors/' + uid);


    doctorRef.once('value', function (snapshot) {

        
        var doctorData = snapshot.val();
        name.innerHTML = doctorData.name;
        specialty.innerHTML = doctorData.specialty;
        email.innerHTML = doctorData.email;
        bmdcRegNo.innerHTML = doctorData.bmdcRegNo;
        degree.innerHTML = doctorData.degree;
        mainHospital.innerHTML = doctorData.mainHospital;
        hospitalAddress.innerHTML = doctorData.hospitalAddress;
        district.innerHTML = doctorData.district;
        hospitalServiceDays.innerHTML = doctorData.hospitalServiceDays;
        hospitalServiceTime.innerHTML = doctorData.hospitalServiceTime;
        hospitalConsultaionFee.innerHTML = doctorData.hospitalConsultaionFee;
        chamberName.innerHTML = doctorData.chamberName;
        chamberAddress.innerHTML = doctorData.chamberAddress;
        chamberServiceDays.innerHTML = doctorData.chamberServiceDays;
        chamberServiceTime.innerHTML = doctorData.chamberServiceTime;
        chamberConsultaionFee.innerHTML = doctorData.chamberConsultaionFee;
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