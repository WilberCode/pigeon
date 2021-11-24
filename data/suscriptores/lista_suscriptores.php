<?php
	include_once("../conexion.php");
?>
<!DOCTYPE html>
<html>
	<head> 
		<meta charset="utf-8">
		<title>Suscriptores - Pigeon Latam</title> 
		<script src="https://code.jquery.com/jquery-3.5.1.js" charset="utf-8"></script> 
		<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js" charset="utf-8"></script> 
		<script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap5.min.js" charset="utf-8"></script> 


		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap5.min.css">


 		<style media="screen">
		  
		  @media (min-width:1366px) {
			.container-fluid{
				width: 100%;
				max-width:1366px !important;
			}
		  }
		</style>
		
		<script type="text/javascript">
			$(document).ready(function() {
				var selected = [];
					$('#example').DataTable({
						"language": {
							"lengthMenu" 	: "Registros _MENU_",
							"zeroRecords"	: "No se encontraron registros",
							"info"			: "Página _PAGE_ de _PAGES_",
							"infoEmpty"		: "No hay registros disponibles",
							"infoFiltered"	: "(filtrados de _MAX_ registros totales)",
							"decimal"		: ",",
							"thousands"		: ".",
							"search"		: "Buscar: ",
							"paginate" : {
								"first"		: "Primero",
								"last"		: "Último",
								"next"		: "Siguiente",
								"previous"	: "Anterior"
							},
						},
						// "order": [[ 1, "asc" ]],
						"scrollY"			: 307,
						"scrollCollapse"	: true,
						"paging"			: true,
						"lengthMenu"		: [[7, 25, 50, -1], [7, 25, 50, "All"]],
						"columnDefs": [{
								"orderable"	: false,
								"targets"	: -1
						}] //NO ORDENAMOS LA ULTIMA FILA DE LA TABLA
					});
			});
		</script>
	</head>
	<body>
		<div class=" container-fluid " style="height:100vh;">
			<h1 class="mt-4 text-center "  >Suscriptores - Pigeon Latam</h1> 
			<div class="mt-4 mb-4 text-center ">
				<a class="btn btn-success btn-lg" href="excel_suscriptores.php" target="_parent"  >Exportar a Excel</a>   
			</div>
			<table id="example" data-seccion="distrito" class=" table table-striped table-responsive" cellspacing="0" width="100%" align="center">
				<thead class="table-dark">
					<tr>
						<th width="20">#</th>
						<th>Correo</th> 
						<th>Nombre completo</th> 
						<th>Soy mamá</th>
						<th>Estoy embarazada</th>
						<th>Nacimiento último hijo </th>
						<th>Vivo en </th>
						<th>Fecha de Registro</th>
					</tr>
				</thead>
			
				<tbody>
					<?php
						$consulta = "SELECT * FROM suscriptores ORDER BY nombre_completo ASC";
						$sql = mysqli_query($link, $consulta);
						$row = mysqli_num_rows($sql);
						$a = 1;
						for ($i=0; $i < $row; $i++) {
							$col = mysqli_fetch_array($sql, MYSQLI_ASSOC);
							$correo = $col["correo"];  
							$nombre_completo = $col["nombre_completo"];
							$mama = $col["mama"]; 
							$embarazada = $col["embarazada"];
							$nacimiento_ultimo_hijo = $col["nacimiento_ultimo_hijo"];
							$pais = $col["pais"];
							$fecha_de_registro = $col["fecha_de_registro"];
							echo '<tr>
								<th   scope="row"> '.$a.'</th>
								<td>'.strtolower($correo).'</td>
								<td>'.$nombre_completo. '</td> 
								<td>'.$mama.'</td>
								<td>'.$embarazada.'</td> 
								<td>'.$nacimiento_ultimo_hijo.'</td> 
								<td>'.$pais.'</td>  
								<td>'.$fecha_de_registro.'</td> 
								
							</tr>';
							$a++;
						}
					?>
				</tbody>
				<tfoot>
					<tr>
						<th width="20">#</th>
						<th>Correo</th> 
						<th>Nombre completo</th> 
						<th>Soy mamá</th>
						<th>Estoy embarazada</th>
						<th>Nacimiento último hijo </th>
						<th>Vivo en </th>
						<th>Fecha de Registro</th>
					</tr>
				</tfoot>
			</table>
		</div>
	</body>
</html>
