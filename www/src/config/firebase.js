import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyDGHkicWugX5cZ7p6MxVY0LnmXywlAigTY",
  authDomain: "gatsby-manor.firebaseapp.com",
  databaseURL: "https://gatsby-manor.firebaseio.com",
  projectId: "gatsby-manor",
  storageBucket: "gatsby-manor.appspot.com",
  messagingSenderId: "25338911788"
}

// Instantiate a Firebase app.
firebase.initializeApp(config)

export const firebaseApp = firebase
