import React from "react";

import * as firebase from "firebase/app";
import  "firebase/messaging";

import logo from "./logo.svg";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyDcC0UMkq92ZfKKGxIERPYDMNFluT9pAgs",
  authDomain: "dappstore-test.firebaseapp.com",
  databaseURL: "https://dappstore-test.firebaseio.com",
  projectId: "dappstore-test",
  storageBucket: "dappstore-test.appspot.com",
  messagingSenderId: "406106692779",
  appId: "1:406106692779:web:e311546355e9047fdcabee",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

function onClick() {
  messaging
    .requestPermission()
    .then(function () {
      console.log("Have permission");
      return messaging.getToken();
    })
    .then(function (token) {
      console.log(token);
    })
    .catch(function (err) {
      console.log("Error Occured.");
    });

    
}







function App() {


  React.useEffect(() => {
    messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      // ...

      if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
          new Notification('Hi there!', {
            body: 'How are you doing?',
          });
        } else {
            // request permission from user
            Notification.requestPermission().then(function(p) {
               if(p === 'granted') {
                   


                new Notification('Hi there!', {
                  body: 'How are you doing?',
                });

               } else {
                   console.log('User blocked notifications.');
               }
            }).catch(function(err) {
                console.error(err);
            });
        }
    }






    });
   
  }, [])
  return (
    <div className="App">
      <header className="App-header">

<button onClick={onClick}>Click</button>

      </header>
    </div>
  );
}

export default App;
