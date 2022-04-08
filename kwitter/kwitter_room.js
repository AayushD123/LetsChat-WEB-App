var firebaseConfig = {
      apiKey: "AIzaSyDBO6csCyHh7Pmp8smVHknnzN2OIJKenqw",
      authDomain: "kwitterproject-d775c.firebaseapp.com",
      databaseURL: "https://kwitterproject-d775c-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-d775c",
      storageBucket: "kwitterproject-d775c.appspot.com",
      messagingSenderId: "575648040739",
      appId: "1:575648040739:web:23fcd3e2a21db756e3ee96"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
