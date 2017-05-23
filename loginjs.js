console.log('email');
(function() {

var config = {
    apiKey: "AIzaSyDNqMUFf41UU9gWkRhvgfCXCM_ywrpgZRI",
    authDomain: "credainatcon17-f96ad.firebaseapp.com",
    databaseURL: "https://credainatcon17-f96ad.firebaseio.com",
    storageBucket: "credainatcon17-f96ad.appspot.com",
    messagingSenderId: "12953074207"
  };
  firebase.initializeApp(config);


var txtemail = document.getElementById('e');
var txtpassword = document.getElementById('p');
var btlogin = document.getElementById('btl');
btlogin.addEventListener('click', e =>{
var email = txtemail.value;
var password = txtpassword.value;
var auth = firebase.auth();
console.log(email);
console.log(password);
if(email=="admin@credai.com" && password =="123456789" )
var promie = auth.signInwithEmailAndPassword(email,password);
});
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'loggedin.html'; //After successful login, user will be redirected to home.html
  }
  else
  	{console.log("Please Login With right credentials")}
});

}());