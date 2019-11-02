  /* // Your web app's Firebase configuration */
  var firebaseConfig = {
    apiKey: "AIzaSyAO4KKOOPc7rmJGlDYIYotpmkmKAsn6_ho",
    authDomain: "fir-assignment-007.firebaseapp.com",
    databaseURL: "https://fir-assignment-007.firebaseio.com",
    projectId: "fir-assignment-007",
    storageBucket: "fir-assignment-007.appspot.com",
    messagingSenderId: "518864508765",
    appId: "1:518864508765:web:0627c2a6ab6f120fa37ab4"
  };
  /* // Initialize Firebase */
  firebase.initializeApp(firebaseConfig);

var randomFormat = "MM/DD/YYYY";
var convertedDate = moment(randomFormat);

console.log(convertedDate.format("MM/DD/YYYY"));
console.log(convertedDate.format("hh:mm:ss"));
