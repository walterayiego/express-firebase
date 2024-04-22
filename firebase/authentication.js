const { auth } = require("./firebase.js");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const userData = {};

const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
  const uid = currentUser?.uid;
  if (uid) {
    console.log(uid, "User Data");
  } else {
    await sigin("test2@gmail.com", "test2@gmail.com");
  }
});

const createUser = async () => {
  await createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
    })
    .catch((error) => console.log(error));
};

const sigin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      userData.uid = userCredential.user.uid;

      console.log("Success!! Signed In", userData);
    })
    .catch((error) => console.log(error));
};

module.exports = { auth, unsubscribe, createUser, sigin, userData };
