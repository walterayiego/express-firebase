const { db } = require("./firebase.js");

const { collection, addDoc, getDocs } = require("firebase/firestore");

const postSample = async () => {
  try {
    const docRef = await addDoc(collection(db, "postSample"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getData = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    data.push(doc.data());
  });
  console.log(data);
  return data;
};

module.exports = { postSample, getData };
