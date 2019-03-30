import React, { Component } from 'react';
import FirebaseLogin from "./FirebaseLogin";
import firebase from 'firebase'
import { Root, Tabs } from './src/config/router';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvPpzlPYk7dNB-ijJvpghJjsyVsm5AETg",
    authDomain: "entertainmentrepublic-f0c4e.firebaseapp.com",
    databaseURL: "https://entertainmentrepublic-f0c4e.firebaseio.com",
    projectId: "entertainmentrepublic-f0c4e",
    storageBucket: "entertainmentrepublic-f0c4e.appspot.com",
    messagingSenderId: "436326701914"
  };
  firebase.initializeApp(config);




class App extends Component {
  render() {
    return (
      <FirebaseLogin login={user => console.warn(user)}/>
    )
  }
}

export default App;
