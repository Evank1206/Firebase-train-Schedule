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

  var database = firebase.database();

  $("#submitBtn").on('click', function(event){
      event.preventDefault();

      var trainName = $("#trainName").val().trim();
      var destination = $("#destination").val().trim();
      var frequencyMin = $("#frequency-Min").val().trim();
      var arrival = $("#time").val().trim();

      // console.log(trainName);

     database.ref("triansT").push({
       name: trainName,
       destination: destination,
       frequencyMin: frequencyMin,
       arrival: arrival

     });

     database.ref("triansT").on("child_added", function(snap){
       console.log(snap.val());
       $('#trainName').append( snap.val());

     });

     

  });





// var randomFormat = "MM/DD/YYYY";
// var convertedDate = moment(randomFormat);

// console.log(convertedDate.format("MM/DD/YYYY"));
// console.log(convertedDate.format("hh:mm:ss"));

var tFrequency = 10;

var firstTime = "06:00";

var timeSet = moment(firstTime, "HH:mm").subtract(1, "hour");

// console.log(timeSet);

var currentTime = moment();
// console.log('current time' + moment(currentTime).format('hh:mm') );
$('#currentTime').append( moment(currentTime).format('hh:mm'));



