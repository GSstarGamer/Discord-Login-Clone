import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAvmanYfyqemDtu1s1ob7BMJNZcchQ7JH8",
  authDomain: "discord-creds.firebaseapp.com",
  projectId: "discord-creds",
  storageBucket: "discord-creds.appspot.com",
  messagingSenderId: "501024774044",
  appId: "1:501024774044:web:43cd9450002543a7c05a59",
  measurementId: "G-38WBKQDG4L"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();