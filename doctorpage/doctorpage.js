(function () {
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

    var userDataRef = firebase.database().ref("doctors").orderByKey();
    userDataRef.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();

                var html = '<div class="row">' +
                    '<div class="col-md-3" style="padding-top: 15px;padding-right:100px;padding-bottom:20px;">' +
                    '<img class="img-circle search_page_doctor_image pull-right" src="unknown.png" alt="profile pic">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                    '<p class="des"> Name : ' + childData.name + '</p>' +
                    '<p class="des"> Degree : ' + childData.degree + '</p>' +
                    '<p class="des"> specialty : ' + childData.specialty + '</p>' +
                    '</div>' +
                    '<div class="col-md-3">' +
                    '<p> Hospital : ' + childData.mainHospital + '</p>' +
                    '<p> Address : ' + childData.hospitalAddress + '</p>' +
                    '<p> District : ' + childData.district + '</p>' +
                    '<p> Days : ' + childData.hospitalServiceDays + '</p>' +
                    '<p> Time : ' + childData.hospitalServiceTime + '</p>' +
                    '<p> Fee : ' + childData.hospitalConsultaionFee + '</p>' +
                    '</div>' +
                    '<div class="col-md-3">' +
                    '<p> Chamber : ' + childData.chamberName + '</p>' +
                    '<p> Address : ' + childData.chamberAddress + '</p>' +
                    '<p> Days : ' + childData.chamberServiceDays + '</p>' +
                    '<p> Time : ' + childData.chamberServiceTime + '</p>' +
                    '<p> Fee : ' + childData.chamberConsultaionFee + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<hr>';
                $("#mydiv").append(html);
            });
        });
}());