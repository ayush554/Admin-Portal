<html>
<head><!-- Latest compiled and minified CSS -->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
                                <style >
                                button{cursor: pointer;}
                                th{text-transform: capitalize;}
                                	td,th{ white-space: nowrap;
                                		text-align: center;
                                		 font-family: sans-serif;
                                		 
                                		
                                		

                                	}
                                	tr{border-color: white;}
                                	
                                	#div1{background-color: #000;
                                		color: #fff;
                                		font-family: sans-serif;
                                		height:28%;
                                		min-width: 1500px;
                                		width: 100%;
                                		text-align: center;
                                		margin-top:-172px;
                                		position: fixed;
                                		
                                	}
                                	#f{position: fixed;}
                                	h3{margin-top: 3%;
                                		margin-left: -20px;}
                                	
                                	
                                		
                                			button{margin-top: 10px;}
                                			
                                			tbody{
                                				overflow: auto;}
                                				.highlight{background-color: #CBC2C3;
                                					border:2px solid #840029;}






#b2{margin-left: -8%;
	margin-top: 0%;
  width: 93.59px;
position: fixed;}
#b3{width: 93.59px;
	margin-left:0%;
	margin-top:0%;
	position: fixed;
}
#Ap{
position: fixed;
float: right;
margin-left: 28%;
margin-top:-4%; }

#btnlogout{
position: fixed;
float: right;
margin-left: 93%;
margin-top:-10.55%; }

                                	
                                	
table{
	margin-top: 150px;
}
                                </style>
                                </head>
                            <body>
                          


<script src="https://www.gstatic.com/firebasejs/3.7.5/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAiAMct-f9T9YLtYYfagZ2CRvWjj2IhSNk",
    authDomain: "credainatcon2017.firebaseapp.com",
    databaseURL: "https://credainatcon2017.firebaseio.com",
    projectId: "credainatcon2017",
    storageBucket: "credainatcon2017.appspot.com",
    messagingSenderId: "343435373817"
  };
  firebase.initializeApp(config);
</script>
 <div id = "f">
<div class="panel-heading" id = "div1">

		        <h3>Natcon Registered
			        </h3>
		        
		         
		        
		        
		        
		        <button id = "b2" class="btn btn-success" onclick="submitclick(this.id)">Approve</button>
              	<button id = "b3" class="btn btn-danger" onclick="submitclick(this.id)">Deny</button>
		        
		        

		        
              	
              	
              	
              	
              	
              	
		
            
            
	<button id='Ap' class="btn btn-primary">Admin Portal</button>
</div>

<button id='btnlogout' class="btn btn-primary">Logout</button>
</div>

                          </div>
		          

	
            <table   class="table table-hover" >
                  <thead  class="thead-inverse" >
                  <tr id = "table_header">
                  		<th><input type="checkbox"  onClick="toggle(this)" id="x1"></th>

                  

                      
                                                               
                  </tr>
                       
              </thead>  

              <tbody  id = "table_body" >

             

                
                                    
              
               </tbody>
            </table>
            
           

                            
                     
<script src="app1.js"></script>

              	

                        </body></html>