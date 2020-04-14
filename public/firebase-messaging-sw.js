importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');


var firebaseConfig = {
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

  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  