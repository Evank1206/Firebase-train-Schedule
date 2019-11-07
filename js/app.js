/* // Your web app's Firebase configuration */
$(document).ready(function () {
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
      var currentTime = moment();
      // calling the function
      $("#submitBtn").on('click', function (event) {
          event.preventDefault();
          // set user input values to variables   өөрөөр хэлвэл бичсэн мэдээллийг console.log д гаргана
          var name = $("#trainName").val().trim();
          var dest = $("#destination").val().trim();
          // console.log(name, dest);
          // coniverts user input to usable info */ display болхгүйч анхны галт тэрэг явж эхлсэн мэдээллийг ажигилах
          var firstTrainTime = $('#firstTrain').val().trim();
          // 06:00 am
          var frequency = $('#frequency-Min').val().trim();
          // current time.. одоогийн цаг
          // console.log(currentTime);
          // console.log('curretent time ' + moment(currentTime).format('hh:mm'));
          console.log(name);
          console.log(dest);
          console.log(firstTrainTime);
          console.log(frequency);
          // add new trains info
          var newTrain = {
              train: name,
              trainGoingTo: dest,
              trainComing: firstTrainTime,
              everyMinORHour: frequency
          };
          console.log(newTrain);
          // and push it to firebase database
          database.ref().push(newTrain);
      });
      // last added element to firebase database
      // сүүлд нэмэгдсэн өгөгдлийг агуулхад хадгалах ба console log р харуулна
      database.ref().on('child_added', function (childSnapshot) {
          // console.log(childSnapshot.val());
          // storing in variables
          var name = childSnapshot.val().train;
          var dest = childSnapshot.val().trainGoingTo;
          var firstTrainTime = childSnapshot.val().trainComing;
          var frequency = childSnapshot.val().everyMinORHour;
          console.log(name);
          console.log(dest);
          console.log(firstTrainTime);
          console.log(frequency);
          var test = moment(firstTrainTime, "HH:mm");
          console.log(test);
          // frist train time
          var trainTime = firstTrainTime;
          console.log(trainTime);
          // calculate difference between time
          var defference = moment().diff(test, 'minutes');
          console.log(defference)
          // time remaining
          // var frequency = [''];
          //defference needs to be an integer value; frequency needs to be an integer value
          // calculate time left
          var timeRemain = Math.abs(defference % frequency);
          //12%5 = 2
          console.log(timeRemain);
          var minUntil = frequency - timeRemain;
          // next arrival time
          var nextArrival = moment(currentTime).add(minUntil, 'minutes').format('hh:mm');
          // console.log(nextArrival);
          $('#th-head > tbody').append('<tr><td>' + name + '</td><td>' + dest + '</td><td>' + frequency + '</td><td>' + nextArrival + '</td><td>' + minUntil + '</td></tr>');
          // $('#th-head > tbody').append('<h1>' + name + '</h1>');
      });
   });
   // var tFrequency = [];
   // var firstTime = [];
   // var timeSet = moment(firstTime, "HH:mm");
   // var currentTime = moment();
   // $('#currentTime').append( moment(currentTime).format('hh:mm'));
   // });
   // __.append(
   // `<tr>
   //     <td>${first}</td>
   //     <td>SEC</td>
   //     <td>frec</td>
   
   //     <td>00:00</td>
   //     <td>min away</td>
   // </tr>`
   // );