const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getStorage } = require("firebase/storage");
const { getFirestore } = require("firebase/firestore");
const { getMessaging } = require("firebase/messaging");

const firebaseConfig = {
  apiKey: "AIzaSyA7CeePxMozCVznkF9DgU8BCIDvyxpntfI",
  authDomain: "vihiga-intranet.firebaseapp.com",
  projectId: "vihiga-intranet",
  storageBucket: "vihiga-intranet.appspot.com",
  messagingSenderId: "686048599992",
  appId: "1:686048599992:web:a135ae187a3815b3a5f94d",
  measurementId: "G-H9ZG4GS912",
};

// Initialize Firebase app

const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

// Export Firebase services
module.exports = { auth, db };
