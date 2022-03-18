<?php
session_start(); //start session

$correo = 'parionahuaraca@gmail.com';
 //Correo 
 if(isset($_SESSION["products"]) && isset($_SESSION["user_email"])){ 
      $headers  = 'MIME-Version: 1.0' . "\r\n"; 
      $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n"; 

      $headers .= 'From: Pigeon Latam <admin@tendenzeperu.com>'."\r\n";

      $destino = $correo;
      $asunto = "¡Hola! Tu lista de bebé - Pigeon Latam"; 


      $mensaje = file_get_contents('./lista-emailing-content.php', true);
     
      mail($destino,$asunto, $mensaje,  $headers);  
    

 } else{
     echo 'Los datos no estan completos';
 }