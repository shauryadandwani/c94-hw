//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA-Ppr6XZ5biW0SitTFKWsuv6j61Hf_yHU",
      authDomain: "hw-c-91-92-93.firebaseapp.com",
      projectId: "hw-c-91-92-93",
      storageBucket: "hw-c-91-92-93.appspot.com",
      messagingSenderId: "540179621946",
      appId: "1:540179621946:web:39fb4141ffd4fed5c3ad03",
      measurementId: "G-C0YLL4NN9W"
    };
    

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })

      document.getElementById("msg").value="";
}

    


    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
      }