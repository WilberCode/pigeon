<?php
session_start(); //start session
include("config.inc.php"); //include config file

$domain = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[SERVER_NAME]";
?>
<?php include '../includes/config.php' ?> 
 
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tiendas LATAM | Pigeon </title>
    <meta name="description" content="Encuentra Tiendas LATAM en los siguientes países: Bolivia, Chile, Colombia, Costa Rica, Guatemala, Ecuador, México, Panamá y Perú. ">
    <meta name="keywords" content="Tiendas LATAM, Bolivia, Chile, Colombia, Costa Rica, Guatemala, Ecuador, México, Panamá, Perú">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Tiendas LATAM | Pigeon">
    <meta property="og:site_name" content="Tiendas LATAM ">
    <meta property="og:url" content="<?=theCurrentUrl();?>">
    <meta property="og:description" content="Encuentra Tiendas LATAM en los siguientes países: Bolivia, Chile, Colombia, Costa Rica, Guatemala, Ecuador, México, Panamá y Perú.">
    <meta property="og:image" content="/tiendaslatam/files/images/tiendas-latam-banner.jpg">
    <link rel="stylesheet" href="/assets/css/common.css">
    <link rel="stylesheet" href="/assets/css/app.css?v=<?=theVersion();?>"> 
    <link rel="stylesheet" href="/assets/css/tiendaslatam.css?v=<?=theVersion();?>">
    <link rel="stylesheet" href="/assets/css/view-cart.css?v=<?=theVersion();?>">
    <link rel="canonical" href="<?=theCurrentUrl();?>" />

	<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>

    
</head>

<body id="top" class=" ready ">
    <noscript>Es posible que Javascript no se muestre correctamente porque está desactivado.</noscript>
    <!-- [ WRAP ] -->
    <div id="l-wrap">
        <!-- [ GLOBAL HEADER ] -->
        <?php include '../includes/header.php' ?>
        <!-- [ /GLOBAL HEADER ] -->

       	<!-- [ CONTENT ] -->
           <main   class="bg-white" >
			<div class="m-txt-ttl"> 
				<div data-fixed> 
					<div class="ttl-inner">
						 <div class="max-w-lg  ">
							<h1 class="ttl-txt">Lista enviado </h1>
						</div>
					</div>
				</div>
			</div>    
			<?php
				if(isset($_SESSION["products"]) && count($_SESSION["products"])>0){
					$total 			= 0;
					$list_tax 		= '';
					$cart_box 		= '<table width="600" border="0" align="center" cellpadding="0" cellspacing="0"> ';

					foreach($_SESSION["products"] as $product){ //Print each item, quantity and price.
						$product_name = $product["product_name"];
						$product_qty = $product["product_qty"];
						$product_price = $product["product_price"];
						$product_id = $product["product_id"];
						$product_image = $product["product_image"];
					
						
						$item_price = sprintf("%01.2f",($product_price * $product_qty));  // price x qty = total item price 
						$cart_box .=  " <tr style='border-top: 1px solid #f5f5f5; color:#6ec3bd;' >   
											<td width='80' align='center' colspan='1' style=' padding:8px 0; font-size:15px;' > <img width='60' src='".$domain."/lista/images/$product_image' >  </td>
											<td width='250' align='left' colspan='1' style=' padding:8px 0; font-size:15px;' >  <h4 style='line-height:20px;color:#707070; padding:0; margin:0; font-weight:400;' >$product_name</h4> <span>(Cantidad : $product_qty  )</span>    </td>
											<td width='280' align='right' colspan='1' style=' padding:8px 0; font-size:15px;' >  <div style='padding-right:6px;'>$currency ".sprintf('%01.2f', ($product_price * $product_qty)). "</div>   </td>
											</tr> ";

					//	$cart_box 		.=  "<li> <img class='w-[100px]' src='images/$product_image' alt=''> $product_id &ndash;  $product_name (Cantidad : $product_qty ) <span> $currency. $item_price </span></li>";
						
						$subtotal 		= ($product_price * $product_qty); //Multiply item quantity * price
						$total 			= ($total + $subtotal); //Add up to total price
					}
					
					$grand_total =  $total; //grand total
				
					
					//Print Shipping, VAT and Total
					$cart_box .= " <tr style='border-top: 1px solid #f5f5f5; color:#6ec3bd;' > <td ></td><td></td> <td width='200' align='right'  style=' padding:18px 0; font-size:15px;' colspan='1' ><span  class='ml-auto' >Precio total : $currency ".sprintf("%01.2f", $grand_total)."</span> </td> </tr>";
					$cart_box .= "  </table> ";
					 
				}else{
					echo " ";
				}  
				?>  

				<?php
				  $user_data = "";
					if(isset($_SESSION['user_email'])){	 
						$user_data = "
						<table width='600' border='0' align='center' cellpadding='0' cellspacing='0'   >
						<tr style=' color:#6ec3bd;' >   
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >  <h4 style='color:#3a3a3a; margin:0; padding:0;' >Nombre completo Mamá: </h4> </td>
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <p>".$_SESSION['user_name']."</p>  </td>
						</tr>
						<tr style=' color:#6ec3bd;' >   
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <h4 style='color:#3a3a3a; margin:0; padding:0;' >Dirección donde se enviarán los regalos: </h4> </td>
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <p>".$_SESSION['user_address']."</p>  </td>
						</tr>
						<tr style='color:#6ec3bd;' >   
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <h4 style='color:#3a3a3a; margin:0; padding:0;' >E-mail Mamá: </h4> </td>
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >    <p>".$_SESSION['user_email']."</p>  </td>
						</tr>
						<tr style='color:#6ec3bd;' >   
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <h4 style='color:#3a3a3a; margin:0; padding:0;' >Celular Mamá: </h4> </td>
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <p>".$_SESSION['user_phone']."</p>  </td>
						</tr>
						<tr style='color:#6ec3bd;' >   
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >  <h4 style='color:#3a3a3a; margin:0; padding:0;' >Meses de embarazo: </h4> </td>
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >   <p>".$_SESSION['user_embarazo']."</p>  </td>
						</tr>
						<tr style='color:#6ec3bd;' >   
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >  <h4 style='color:#3a3a3a; margin:0; padding:0;' >País:</h4> </td>
							<td width='300' align='left' colspan='1' style=' padding:18px 8px; font-size:15px; border: 1px solid #f5f5f5;' >  <p>".$_SESSION['user_country']."</p>   </td>
						</tr>
					</table> 
						";
						 
					}else{
						echo " ";
					}
					?>  








			<?php
			$emailing_html = ' 
			<!doctype html>
			<html> 
			
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				<title>Emailing de lista de bebé</title>
			
				<style type="text/css"> 
					 body {
						-webkit-text-size-adjust: none;
						-ms-text-size-adjust: none; 
						font-family: "Roboto", sans-serif;
			
					} 
					body {
						margin: 0;
						padding: 0;
					} 
					html,*,body{
						  box-sizing: border-box;
					}
					table td {
						border-collapse: collapse;
						border-style: none;
						border-width: 0;
					} 
					table{
						border-collapse: collapse;
						border-spacing: 0;
						border:0;
					}
					p {
						margin: 0;
						padding: 0;
						margin-bottom: 0;
					} 
					h1,  h2,  h3,  h4,  h5, h6 {
						color: black;
						line-height: 100%;
					} 
					a,
					a:link {
						color: black  ;
						text-decoration: none  !important; 
					   
					}
					a, a:active, a:hover, a:focus, a:visited, a:focus{
						outline: none !important;
					}
				
				</style>
			</head>
			
			<body>
				<table width="600" border="0" align="center" cellpadding="0" cellspacing="0">  
						<tr>
							<td width="600" align="center" valign="middle" colspan="1" style=" background-color:#e65550; color:white;" height="60px" >   
							   <h2 style=" color:white; margin:0;font-weight: 400;"> Mi lista de bebé</h2>
							</td>
						</tr>    
				<tr>
					<td width="600" align="left" colspan="1" > 
						<h1   style="font-size:18px; padding-top:32px; padding-bottom:12px;margin:0; color:#4d4d4d; font-weight:500; " >Lista de productos seleccionados</h1>
						 '.$cart_box.'
					
					</td>
				</tr>   
				<tr>
					<td width="600" align="left" colspan="1" > 
						<h1   style="font-size:18px; padding-top:32px; padding-bottom:12px;margin:0; color:#4d4d4d; font-weight:500; " >Información de la Mamá</h1>
						'.$user_data.'
					</td>
				</tr>     
				<tr>
					<td width="600" align="center" valign="middle" colspan="1"   height="10" >   
				
					</td>
				</tr>
				<tr>
                <td width="600" align="center" valign="middle" colspan="1"   height="10" >   
						
							</td>
						</tr>
				</table> 
			</body>

			</html>	
			';
			
			
			?> 



			<?php 
 
			$correo = $_SESSION['user_email'];
			//Correo 
			if(isset($_SESSION["products"]) && isset($_SESSION["user_email"])){ 
				$headers  = 'MIME-Version: 1.0' . "\r\n"; 
				$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n"; 

				$headers .= 'From: Pigeon Latam <admin@tendenzeperu.com>'."\r\n";

				$destino = $correo;
				$asunto = "¡Hola! Tu lista de bebé - Pigeon Latam"; 


				$mensaje =  $emailing_html ; 
				
				mail($destino,$asunto, $mensaje,  $headers);  
				

			} else{
				echo 'Los datos no estan completos';
			}
			?>



 




  
            <div class="max-w-tl-lg mx-auto px-3 lg:px-0 mb-[40px] mt-16 " >
				<div  class=" bg-white max-w-[600px] mx-auto" >  
				 <div class="view-cart-message  px-5 py-16 bg-lista-500 text-white  text-[18px] text-center" id="view-cart-message" >  
                        <h3>¡Se envió correctamente, ya puedes revisar tu correo!</h3>  
                  </div>
				<div class="text-[16px] text-center my-10 hover:underline" >
					<a href="/lista">Volver a la página lista de bebé</a>
				</div>
				</div>
            </div> 


            <div class="content-pagepath  " data-fixed="">
                <ul class="m-box-pagepath">
                    <li><a href="/">Home</a></li>
                    <li> <span>Lista de productos</span></li> 
                </ul>
            </div>
		</main>
	  
		<!-- [ /CONTENT ] -->

        <!-- [ GLOBAL FOOTER ] -->
        <?php include '../includes/footer.php';?>
        <!-- [ /GLOBAL FOOTER ] -->

        <div class="hide-tab" data-device></div>
        <div class="hide-pc" data-device></div>
    </div>
    <!-- [ WRAP ] -->
    <script src="/assets/js/library.js"></script>
    <script src="/assets/js/setting.js"></script>
    <script src="/assets/js/function.js"></script>
    <script src="/assets/js/common.js"></script> 
	<script src="/assets/js/search.js?v=<?=theVersion();?>"></script>

 

    <!--[if lte IE 9]>
<script src="/assets/js/lib/flexibility/flexibility.js"></script>
<script>
$(function(){
flexibility(document.documentElement);
});
</script>
<![endif]-->
 
</body>

</html>