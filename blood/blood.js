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

    var userDataRef = firebase.database().ref("users").orderByKey();
    userDataRef.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();

                var html = '<div class="col-xs-12 col-sm-6 col-md-4">' +
                    '<div class="image-flip" ontouchstart="this.classList.toggle("hover;")">' +
                    '<div class="mainflip">' +
                    '<div class="frontside">' +
                    '<div class="card">' +
                    '<div class="card-body text-center">' +
                    '<p><img class=" img-fluid" src="unknown.png" alt="card image"></p>' +
                    '<h4 class="card-title" id="name">' + childData.name + '</h4>' +
                    '<p class="card-text"></p>' +
                    '<a href="#" class="btn btn-primary btn-sm" id="blood">' + childData.blood + '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="backside">' +
                    '<div class="card">' +
                    '<div class="card-body text-center mt-4">' +
                    
                    '<p class="card-text" id="district"> District : ' + childData.district + '</p>' +
                    '<p class="card-text" id="phone"> Phone : ' + childData.phone + '</p>' +
                    '</div>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                $("#mydiv").append(html);
            });
        });
}());