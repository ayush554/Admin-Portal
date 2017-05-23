var rootref1 = firebase.database().ref().child('users');
var rootref = firebase.database().ref().child('natconregistrations');
var y=0;
     rootref.once("value",function(snapshot){
     	snapshot.forEach(function(childSnapshot){  
     		var x = childSnapshot.key;
             rootref1.child(x).once('value').then(function(snapshot){
                var h = snapshot.val().natconregistered;
                if(h!='no'){y++;
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
    if(snap.key=='passportfrontimage' || snap.key=='passportbackimage')
        {
            var button = document.createElement("button");
    button.type = "button";
    button.innerText="Click To View Image"
    button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#myModal");
button.onclick=imageview;   
button.className=snap.key;

    
    
   
    
            var td = document.createElement('td');
            
            tr.appendChild(td);
            td.appendChild(button);
            
}
else{
        var td = document.createElement('td');
         tr.appendChild(td);
         
         td.innerText = snap.val();
          td.className=snap.key;
      }
    
    });
  }
  else{ 
            rootref.child(x).on("child_added",snap => {
   
        var th = document.createElement('th');
        thh.appendChild(th);
        th.innerText=snap.key;
         if(snap.key=='passportfrontimage' || snap.key=='passportbackimage')
        {
            var button = document.createElement("button");
    button.type = "button";
    button.innerText="Click To View Image"; 
    button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#myModal");   
button.onclick=imageview;
button.className=snap.key;
    
    
            var td = document.createElement('td');
             tr.appendChild(td);
            td.appendChild(button);
            
}else{
         var td = document.createElement('td');
         tr.appendChild(td);
         td.innerText = snap.val();
          td.className=snap.key;
     }
      });
    
            
     		 
	
     		rootref.child(x).on('child_changed',snap => {
		
         const jk = document.getElementById(childSnapshot.key).getElementsByClassName(snap.key)[0];
         
         jk.innerText=snap.val(); 
    
         

        
         





     	});
     
     }
 }
     });
    });
    });   
function imageview(){
    var ii= $(this).closest('tr').attr('id');
    var op=$(this).attr('class');

console.log(op);
rootref.child(ii).once('value').then(function(snapshot){
    var b = snapshot.val().passportbackimage;
    var c = snapshot.val().passportfrontimage;
if(op=='passportfrontimage'){
    var n = document.getElementById('m').src=c;
}
if(op=='passportbackimage'){
    var n = document.getElementById('m').src=b;
}
});
}
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



	function submitclick(clicked_id) {
		


		 $(':checkbox:checked').each(function( ) { 
		 	var x = $(this).attr('id');

		 	if (x == 'x1'){
		 		return;}
		 	

  var closestTr = $(this).closest('tr').attr('id');
  console.log(closestTr);

 var firebaseRef = firebase.database().ref().child("users").child(closestTr);
        switch(clicked_id)
        {
        case 'b2' :
        	firebaseRef.child("natconregistered").set("approved");
            var key=snapshot.val().notificationtoken;
            var title="Approved";
            var message="Your Natcon Registration has been approved";
            $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
        	break;
        case 'b3' :
        	firebaseRef.child("natconregistered").set("denied");
            var key=snapshot.val().notificationtoken;
            var title="Denied";
            var message="Your Natcon Registration has been denied";
            $.post('send_notification.php',{postkey:key,posttitle:title,postmessage:message});
        	break;
        
        
        
        
        

        }
    });
		}
var logout = document.getElementById('btnlogout');
logout.addEventListener('click', e=>{
	firebase.auth().signOut().then(function() {
  window.location = 'index.html';
});
});

		
     
		var App = document.getElementById('Ap');
Ap.addEventListener('click', e=>{
    {
  window.location = 'loggedin.html';
}
});

     
    
        
    
    

		



        
        
	
