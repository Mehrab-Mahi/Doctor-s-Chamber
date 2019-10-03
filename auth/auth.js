var config = {
    apiKey: "AIzaSyAp9P7HZ8dfgUiZYir7Ru3sDSLwBfLjscg",
    authDomain: "dc-3d6b.firebaseapp.com",
    databaseURL: "https://dc-3d6b.firebaseio.com",
    projectId: "dc-3d6b",
    storageBucket: "dc-3d6b.appspot.com",
    messagingSenderId: "202620899397"
  };
  firebase.initializeApp(config);

var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    recaptchaParameters: {
        size: 'invisible',
    },
    privacyPolicyUrl: function () {
        window.location.assign('<your-privacy-policy-url>');
    }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
  var doctorRef = firebase.database().ref('doctors/' + user.uid);

    doctorRef.once('value', function (snapshot) {

        
        var doctorData = snapshot.val();
        if(!doctorData){


                    //reg page
                    window.location.href = '../doctorORuser/doctorORuser.html';
            

        }
        else{
            //profile page
            window.location.href = '../doctorprofile/doctorprofile.html';
        }

    
        

    });


        
    }
}, function (error) {
    console.log(error);
});