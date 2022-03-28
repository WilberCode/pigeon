<?php
  session_start();

  $user_name = $_POST["nombre"];
  $user_address = $_POST["direccion"];
  $user_email = $_POST["correo"];
  $user_phone = $_POST["celular"];
  $user_embarazo = $_POST["embarazo"];
  $user_country = $_POST["pais"];


  $_SESSION['user_name'] =   $user_name ;
  $_SESSION['user_address'] = $user_address;
  $_SESSION['user_email'] = $user_email;
  $_SESSION['user_phone'] = $user_phone;
  $_SESSION['user_embarazo'] = $user_embarazo;
  $_SESSION['user_country'] = $user_country;