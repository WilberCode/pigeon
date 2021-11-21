<?php
   include_once("conexion.php");
   
 	$nombre_completo = htmlspecialchars($_POST["nombre_completo"]); 
  $correo = $_POST["correo"];
  $paises = htmlspecialchars($_POST["paises"]);
  
 
 
  if(!isset($_POST['mama'])){  $mama = 'No'; }else{ $mama =  $_POST["mama"]; }

  if(!isset($_POST['embarazada'])){  $embarazada = 'No'; }else{ $embarazada =  $_POST["embarazada"]; }


  $nacimiento_ultimo_hijo =  date("Y-m-d"); 
  if(!isset($_POST["day"]) && !isset($_POST["month"]) && !isset($_POST["year"])){ 
    $nacimiento_ultimo_hijo = 'Sin hijos';  
  }else{  
    $nacimiento_ultimo_hijo = $_POST["year"].'-'.$_POST["month"].'-'.$_POST["day"];  
  }
 
	$fecha_de_registro =  date("Y-m-d"); 

    $sql2 = "SELECT * FROM suscriptores WHERE correo = '$correo'";
    $result2 =  $link  -> query($sql2);
    $row_cnt2 = $result2->num_rows;

    if ($row_cnt2 < 1  ) { 
      if(isset($_POST['correo']) && isset($_POST['nombre_completo']) && isset($_POST['paises'])){ 
        $consulta  = "INSERT INTO suscriptores (correo,nombre_completo,mama,embarazada,nacimiento_ultimo_hijo,pais,fecha_de_registro)
        VALUES ('$correo','$nombre_completo','$mama','$embarazada','$nacimiento_ultimo_hijo','$paises','$fecha_de_registro')";
      } 
    }
      
    $link -> query($consulta);
 
?> 

