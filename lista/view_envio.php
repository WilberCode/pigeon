<?php
session_start(); //start session
include("config.inc.php"); //include config file
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
			?>



 




  
            <div class="max-w-tl-lg mx-auto px-3 lg:px-0 mb-[40px] mt-16 " >
				<div  class=" bg-white max-w-[600px] mx-auto" >  
				 <div class="view-cart-message hidden px-5 py-16 bg-lista-500 text-white  text-[18px] text-center" id="view-cart-message" >  
                        <h3>¡Se envió correctamente, ya puedes revisar tu correo!</h3>  
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