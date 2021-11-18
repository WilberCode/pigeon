<?php
//Base de datos

$mysqli = new mysqli("localhost", "root", "", "pigeon");

//fecha de la exportaci贸n
$fecha = date("d-m-Y");
$consulta= "SELECT * FROM suscriptores ORDER BY nombre_completo";
 
$resultado= $mysqli->query($consulta);
//Inicio de la instancia para la exportaci贸n en Excel 

//header ('Content-type: text/html; charset=utf-8'); 
header('Content-Type: text/html; charset=ISO-8859-1');  
header('Content-type: application/vnd.ms-excel'); 
header("Content-Disposition: attachment; filename= LarcomarGrant$fecha.xls");
header("Pragma: no-cache");
header("Expires: 0");

echo "<table border=1> ";
echo "<tr> ";
echo "	<th style='background:#1A1A1A;color:#FFF;'>Correo</th>"; 
echo "	<th style='background:#1A1A1A;color:#FFF;'>Nombre completo</th>";
echo "	<th style='background:#1A1A1A;color:#FFF;'>Soy mam&aacute;</th>";
echo "	<th style='background:#1A1A1A;color:#FFF;'>Estoy embarazada</th>"; 
echo "	<th style='background:#1A1A1A;color:#FFF;'>Nacimiento &uacute;ltimo hijo</th>";
echo "	<th style='background:#1A1A1A;color:#FFF;'>Vivo en</th>"; 
echo "	<th style='background:#1A1A1A;color:#FFF;'>Fecha de Registro</th>";
echo "</tr> ";
$a = 1; 

while($row = mysqli_fetch_array($resultado)){

	$correo = $row["correo"]; 
	$nombre_completo = $row["nombre_completo"];
	$mama = $row["mama"];  
	$embarazada = $row["embarazada"]; 
	$nacimiento_ultimo_hijo = $row["nacimiento_ultimo_hijo"];
	$pais = $row["pais"];
	$fecha_registro = $row["fecha_de_registro"];

	echo '<tr>
        <td>'.strtolower($correo).'</td>
		<td>'.utf8_decode($nombre_completo).'</td>
		<td>'.$mama.'</td>
		<td>'.$embarazada.'</td>
		<td>'.$nacimiento_ultimo_hijo.'</td>
		<td>'.utf8_decode($pais).'</td>
		<td>'.$fecha_registro.'</td>
	</tr>';
}
echo "</table> ";
?>
