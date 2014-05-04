<?php

if(isset($_POST['name'])&&isset($_POST['mail'])&&isset($_POST['mssg'])){

if (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
if(!is_numeric($_POST['name'])){
$to='info@h2omo.com';
$subject='Contact Us';
$mssg=$_POST['name'].'\n\r'.$_POST['mail'].'\n\r';
if(isset($_POST['phone']))
$mssg.=$_POST['phone'].'\n\r';
$mssg.=$_POST['mssg'].'\n\r';

mail($to, $subject, $mssg);
}
else
echo "Name must contain only alphabets";
}
else
echo "Invalid E-mail Adress";
}

?>