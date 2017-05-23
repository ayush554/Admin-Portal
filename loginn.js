var rootref = firebase.database().ref().child('admin');

var txtemail = document.getElementById('e');
var txtpassword = document.getElementById('p');
var btlogin = document.getElementById('btl');
btlogin.addEventListener('click', e =>{
var email = txtemail.value;
var password = txtpassword.value;
var auth = firebase.auth();

var promise = auth.signInWithEmailAndPassword(email,password);



firebase.auth().onAuthStateChanged(user => { 
  if(user) {
  	
  	rootref.once('value').then(function(snapshot){
  		
var user1 = snapshot.val().username;
var pwd = snapshot.val().password;
if(email==user1 && password ==pwd )
{
    window.location = 'loggedin.html'; 
    
  }
  else{
  	firebase.auth().signOut();
  	console.log("hello");
	txtemail.style.borderColor="white";
 	txtpassword.style.borderColor="white";
 	p2.innerHTML="Wrong Credentials. Try Again";

  }
 
 	
});

}
else{console.log("hello2");
  txtemail.style.borderColor="white";
  txtpassword.style.borderColor="white";
  p2.innerHTML="Wrong Credentials. Try Again";

}





});



});