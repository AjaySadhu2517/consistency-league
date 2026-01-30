const firebaseConfig = {
  apiKey: "AIzaSyB901W2WzB-gb0YnAgpDfC35289Wq2Y4sM",
  authDomain: "consistency-league.firebaseapp.com",
  projectId: "consistency-league",
  storageBucket: "consistency-league.firebasestorage.app",
  messagingSenderId: "608407960208",
  appId: "1:608407960208:web:eb474ed0268a1726faf615",
  measurementId: "G-7KQH27WKSX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
