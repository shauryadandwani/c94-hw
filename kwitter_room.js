const firebaseConfig = {
    apiKey: "AIzaSyA-Ppr6XZ5biW0SitTFKWsuv6j61Hf_yHU",
    authDomain: "hw-c-91-92-93.firebaseapp.com",
    projectId: "hw-c-91-92-93",
    storageBucket: "hw-c-91-92-93.appspot.com",
    messagingSenderId: "540179621946",
    appId: "1:540179621946:web:39fb4141ffd4fed5c3ad03",
    measurementId: "G-C0YLL4NN9W"
  };
  
  firebase.initializeApp(firebaseConfig);
  function addroom(){
     user_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "test kiwer firebase-username"
         
     });
     window.location="kwitter_page.html";
  }




  function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
 document.getElementById("output").innerHTML += row;
//End code
});});}
getData();