 <?php include '../includes/config.php' ?> 
 
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Menú Semanal | Pigeon </title>
    <meta name="description" content="Encuentra Tiendas LATAM en los siguientes países: Bolivia, Chile, Colombia, Costa Rica, Guatemala, Ecuador, México, Panamá y Perú. ">
    <meta name="keywords" content="Tiendas LATAM, Bolivia, Chile, Colombia, Costa Rica, Guatemala, Ecuador, México, Panamá, Perú , Lumilu peru, pedidos Ya, Bati Kids, Plazavea">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Menú Semanal | Pigeon">
    <meta property="og:site_name" content="Menú Semanal ">
    <meta property="og:url" content="<?=theCurrentUrl();?>">
    <meta property="og:description" content="Encuentra Tiendas LATAM en los siguientes países: Bolivia, Chile, Colombia, Costa Rica, Guatemala, Ecuador, México, Panamá y Perú.">
    <meta property="og:image" content="/tiendaslatam/files/images/tiendas-latam-banner.jpg">
    <link rel="stylesheet" href="/assets/css/common.css">
    <link rel="stylesheet" href="/assets/css/app.css?v=<?=theVersion();?>">  
    <link rel="stylesheet" href="/assets/css/menu-semanal.css?v=<?=theVersion();?>">
    <link rel="canonical" href="<?=theCurrentUrl();?>" />
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
							<h1 class="ttl-txt">Menú Semanal  </h1>
						</div>
					</div>
				</div>
			</div>  
            <div  class="flex justify-center items-start pt-[10rem] md:pt-[12rem] bg-black bg-opacity-25 fixed top-0 left-0 right-0 bottom-0   z-40 ">

                <div  class= "w-full max-w-[500px] py-[5rem] bg-white text-center px-8" >
                    <h3  CLASS=" text-[20px] sm:text-[23px] mb-8 text-primary-500 font-medium" >Menú Semanal</h3>
                     <a  title="Descargar PDF" id="menu-semanal-descarga"  class="menu-semanal-descarga bg-primary-500 !text-white rounded-md px-8 inline-flex py-4 hover:text-white animate-bounce hover:animate-none active:scale-50 "  href="./menu-semanal.pdf" download   >Descargar PDF <img class="  w-[28px] h-[21px] ml-2" src="download.svg" alt="Descargar"> </a>
                </div>  
            </div>

            <div class="content-pagepath" data-fixed="">
                <ul class="m-box-pagepath">
                    <li><a href="/">Home</a></li>
                    <li> <span>Menú Semanal</span></li> 
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
	<script src="/assets/js/search.js?v=685656"></script>

 

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