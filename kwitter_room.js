
const firebaseConfig = {
      apiKey: "AIzaSyA8LswR7kHUtJwPpRpRW32VhysuTdGlhDU",
      authDomain: "thanujaa-s-kwitter-app.firebaseapp.com",
      databaseURL: "https://thanujaa-s-kwitter-app-default-rtdb.firebaseio.com",
      projectId: "thanujaa-s-kwitter-app",
      storageBucket: "thanujaa-s-kwitter-app.appspot.com",
      messagingSenderId: "51708904965",
      appId: "1:51708904965:web:e92c777a9506885690fe6c",
      measurementId: "G-Y0B74MFY1S"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
