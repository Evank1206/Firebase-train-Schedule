/* current time on display */
$('#currentTime').append( moment().format('dddd hh:mm a'));
/* jQuery starts here */
$(document).ready(function () {
    /* Web app's Firebase configuration */
    var firebaseConfig = {
        apiKey: "AIzaSyAO4KKOOPc7rmJGlDYIYotpmkmKAsn6_ho",
        authDomain: "fir-assignment-007.firebaseapp.com",
        databaseURL: "https://fir-assignment-007.firebaseio.com",
        projectId: "fir-assignment-007",
        storageBucket: "fir-assignment-007.appspot.com",
        messagingSenderId: "518864508765",
        appId: "1:518864508765:web:0627c2a6ab6f120fa37ab4"
    };
    /* Initialize Firebase */
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    var currentTime = moment();

    /* submit function starts here */
    $("#submitBtn").on('click', function (event) {
        event.preventDefault();
        // set user input values to variables && grabing the value from user input
        var name = $("#trainName").val().trim();
        var dest = $("#destination").val().trim();
        var firstTrain = $('#firstTrain').val().trim();
        var frequency = $('#frequency-Min').val().trim();

        // creating new object  
        var newTrain = {
            train: name,
            trainGoingTo: dest,
            trainStartGoing: firstTrain,
            everyMinORHour: frequency
        };
        // conditional statement for if user trainName && destination didn't filled out alert to screen if did push value to database
        if (!name || !dest) {
            alert("fill the form")
        } else {
            // push it to firebase database
            database.ref().push(newTrain);
        }

    }); /* submit function ends here */

    // last added element to firebase database = /* Pulling the data from database 'childSnapShot' */
    // сүүлд нэмэгдсэн өгөгдлийг агуулхад хадгалах 
    database.ref().on('child_added', function (childSnapshot) {

        // storing in variables /* IF CONSOLE.LOG BELOW VAR : CAN SEE ALL PUSHED DATA FROM FIREBASE */
        var name = childSnapshot.val().train;
        var dest = childSnapshot.val().trainGoingTo;
        var firstTrain = childSnapshot.val().trainStartGoing;
        var frequency = childSnapshot.val().everyMinORHour;

        var test = moment(firstTrain, "hh:mm");

        // calculate difference between time
        var defference = moment().diff(test, 'minutes');
        // console.log(defference);

        // calculate time left // minutes away // 12%5 = 2
        var timeRemain = Math.abs(defference % frequency);
        // console.log(timeRemain);

        var minutesAway = frequency - timeRemain;
        // console.log(minutesAway);
        
        // next arrival time
        var nextArrival = moment(currentTime).add(frequency, 'minutes').format('hh:mm');
        console.log(nextArrival);
        // DOM ing
        $('#th-head > tbody').append('<tr><td>' + name + '</td><td>' + dest + '</td><td>' + frequency + '</td><td>' + nextArrival + '</td><td>' + minutesAway + '</td></tr>');
    
    });

}); /* jQuery ends here */

