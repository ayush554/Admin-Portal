<?php  
require "init.php";
$title=$_POST['posttitle'];
$message=$_POST['postmessage'];
$path_to_fcm = 'https://fcm.googleapis.com/fcm/send';
$server_key = "AAAAT_ZX7Pk:APA91bEAnBnHSRjJXTI_m9RwdK1LB-30AJy-Beqq8WEo_q89gVn7N-19HFVO_7ml9fJ4yZ78iuBuIV0wIFTk5pw3Ib7VSrH60lMN4ih_uSvxV339JE0yGqzgVjfLO54X2cOFboQv9tzV";
$key=$_POST['postkey'];

$headers = array(
	'Authorization:key='.$server_key,
	'Content-Type:application/json'
	);
	$fields = array ('to' =>$key,
		'notification' => array('title' =>$title,'body' =>$message,  
      'sound' =>'default'));
	$payload = json_encode($fields);
	$curl_session = curl_init();
	curl_setopt($curl_session, CURLOPT_URL,$path_to_fcm);
	curl_setopt($curl_session, CURLOPT_POST, true);
	curl_setopt($curl_session, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($curl_session, CURLOPT_RETURNTRANSFER,true); 
	curl_setopt($curl_session, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($curl_session, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
	curl_setopt($curl_session, CURLOPT_POSTFIELDS, $payload);
	$result=curl_exec($curl_session);
	curl_close($curl_session);
	mysqli_close($con);


?>