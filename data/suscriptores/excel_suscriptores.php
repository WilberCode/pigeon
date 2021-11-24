<?php 

function getTheDomainUrl(){
	$domain = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[SERVER_NAME]";
	return  $domain;
}
 //Base de datos  
$mysqli  = null; 
if(getTheDomainUrl() == 'http://pigeonlatam.pe' ){
	$mysqli  =  new mysqli("localhost", "root", "", "pigeon");
}else{
	$mysqli  = new mysqli("localhost", "pigeon_user000", "pig@ten2021", "pigeon");
}
if (mysqli_connect_errno()) {
	printf("Error de conexión: %s\n", mysqli_connect_error());
	exit();
} 



//fecha de la exportaci贸n
$fecha = date("d-m-Y");
$consulta= "SELECT * FROM suscriptores ORDER BY nombre_completo";
 
$resultado= $mysqli->query($consulta);

//Inicio de la instancia para la exportaci贸n en Excel 

//header ('Content-type: text/html; charset=utf-8'); 
header('Content-Type: text/html; charset=ISO-8859-1');  
header('Content-type: application/vnd.ms-excel'); 
header("Content-Disposition: attachment; filename= excel_suscriptores_pigeonlatam_$fecha.xls"); 
header("Pragma: no-cache");
header("Expires: 0");

echo "<table border=1  align=left >  ";
echo "<tr> ";
echo "	<th style='background:#e65550;color:#FFF;'>Correo</th>"; 
echo "	<th style='background:#e65550;color:#FFF;'>Nombre completo</th>";
echo "	<th style='background:#e65550;color:#FFF;'>Soy mam&aacute;</th>";
echo "	<th style='background:#e65550;color:#FFF;'>Estoy embarazada</th>"; 
echo "	<th style='background:#e65550;color:#FFF;'>Nacimiento &uacute;ltimo hijo</th>";
echo "	<th style='background:#e65550;color:#FFF;'>Vivo en</th>"; 
echo "	<th style='background:#e65550;color:#FFF;'>Fecha de Registro</th>";
echo "</tr> ";
$a = 1; 

while($row = mysqli_fetch_array($resultado)){

	$correo = $row["correo"]; 
	$nombre_completo = $row["nombre_completo"];
	$mama = $row["mama"];  
	$embarazada = $row["embarazada"]; 
	$nacimiento_ultimo_hijo = $row["nacimiento_ultimo_hijo"];
	$pais = $row["pais"];
	$fecha_de_registro = $row["fecha_de_registro"];

	echo '<tr align=left  >
        <td>'.strtolower($correo).'</td>
		<td>'.utf8_decode($nombre_completo).'</td>
		<td>'.$mama.'</td>
		<td>'.$embarazada.'</td>
		<td>'.$nacimiento_ultimo_hijo.'</td>
		<td align=left  >'.utf8_decode($pais).'</td>
		<td align=left  >'.$fecha_de_registro.'</td>
	</tr>';
}
echo "</table> ";
?>
