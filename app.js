
var rootref = firebase.database().ref().child('users');
var y=0;
     rootref.once("value",function(snapshot){ 
     	snapshot.forEach(function(childSnapshot){  
            y++;
            var x = childSnapshot.key;
            
     		 var tb = document.getElementById('table_body');
                  var thh = document.getElementById('table_header');
         var tr = document.createElement('tr');
         
         tb.appendChild(tr);
         tr.id=childSnapshot.key;

         var bt = document.createElement('td')
         tr.appendChild(bt);
         var ck = document.createElement('input');
     			ck.type = "checkbox";
     			
     			ck.id = "ck";
     			ck.name = "ck1";
     			bt.appendChild(ck);
     				
  if (y>1){
    rootref.child(x).on("child_added",snap => {
    if(snap.key=="password" || snap.key=="notificationtoken" || snap.key=="transkey"){}
        else{
        var td = document.createElement('td')
         tr.appendChild(td);
         td.innerText = snap.val();
          td.className=snap.key;
      }
    
    });
  }
  else{
     		rootref.child(x).on("child_added",snap => {
	if(snap.key=="password" || snap.key=="notificationtoken" || snap.key=="transkey"){}
        else{
        var th = document.createElement('th');
        thh.appendChild(th);
        th.innerText=snap.key;
         var td = document.createElement('td')
         tr.appendChild(td);
         td.innerText = snap.val();
		  td.className=snap.key;
        }
	});
     	}	 
	
     		rootref.child(x).on('child_changed',snap => {
		  if(snap.key=="password" || snap.key=="notificationtoken" ||snap.key=="transkey"){}else{
     const jk = document.getElementById(childSnapshot.key).getElementsByClassName(snap.key)[0];
         
         jk.innerText=snap.val(); 
      }
         
         

        
         





     	});
     });
     });
     $(document).ready(function() {
    $('table').on('click', 'tr', function(event) {
        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
        }
    });
});

     $(document.body).on('click', "input[type=checkbox]", function(){
	$(':checkbox').each(function( ) {

var jj = $(this).closest('tr').attr('id');
 if($(this).is(":checked")){ 
   
$('#'+jj).addClass('highlight');
  }
    else{
    	$('#'+jj).removeClass('highlight');
      
    }

});
	
});

	function toggle(source) {
  checkboxes = document.getElementsByName('ck1');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

function natconclick() {window.location="natcon.html";
    
}
	function submitclick(clicked_id) {
		


		 $(':checkbox:checked').each(function() { 
		 	var x = $(this).attr('id');

		 	if (x == 'x1'){
		 		return;}
		 	

  var closestTr = $(this).closest('tr').attr('id');
  

 var firebaseRef = firebase.database().ref().child("users").child(closestTr);
 firebaseRef.once("value",function(snapshot){
        switch(clicked_id)
        {case 'b0' :
        	var ch=snapshot.val().adminauth;
            if(ch=="approved")
                {break;}
            else{
            firebaseRef.child("adminauth").set("approved");
            var key=snapshot.val().notificationtoken;
            console.log(key);
            var title="Approved";
            var message="Your Admin Authorisation has been Approved";
           $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
        	break;
        }
        case 'b1' :
        	var ch=snapshot.val().adminauth;
            if(ch=="denied")
                {break;}
            else{
            firebaseRef.child("adminauth").set("denied");
            var key=snapshot.val().notificationtoken;
            console.log(key);
            var title="Denied";
            var message="Your Admin Authorisation has been Denied";
           $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
            break;
        }
        case 'b2' :
        	   var ch=snapshot.val().natconregistered;
            if(ch=="approved")
                {break;}
            else{
            firebaseRef.child("natconregistered").set("approved");
            var key=snapshot.val().notificationtoken;
            console.log(key);
            var title="Approved";
            var message="Your Natcon Registration has been Approved";
           $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
            break;
        }
        case 'b3' :
           var ch=snapshot.val().natconregistered;
        	   if(ch=="denied")
                {break;}
            else{
            firebaseRef.child("natconregistered").set("denied");
            var key=snapshot.val().notificationtoken;
            console.log(key);
            var title="Denied";
            var message="Your Natcon Registration has been Denied";
           $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
            break;
        }
        case 'b4' :
        	var ch=snapshot.val().paymentstatus;
               if(ch=="approved")
                {break;}
            else{
            firebaseRef.child("paymentstatus").set("approved");
            var key=snapshot.val().notificationtoken;
            console.log(key);
            var title="Approved";
            var message="Your Payment Status has been Approved";
           $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
            break;
        }
        case 'b5' :
        	var ch=snapshot.val().paymentstatus;
               if(ch=="denied")
                {break;}
            else{
            firebaseRef.child("paymentstatus").set("denied");
            var key=snapshot.val().notificationtoken;
            console.log(key);
            var title="Denied";
            var message="Your Payment Status has been Denied";
           $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
            break;
        }

        
        
        
        
        

        }
    });
    });
		}
                var App = document.getElementById('Ap');
Ap.addEventListener('click', e=>{
    
  window.location = 'natcon.html';
});
var logout = document.getElementById('btnlogout');
logout.addEventListener('click', e=>{
	firebase.auth().signOut().then(function() {
  window.location = 'index.html';
});
});


		
     
		
     
    
        
    
    

		



        
        
	
