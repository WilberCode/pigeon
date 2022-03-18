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

    <script>

    $(document).ready(function(){	
	$(".form-products").submit(function(e){
         
			var form_data = $(this).serialize();
			var button_content = $(this).find('button[type=submit]');
			button_content.html('Agregando...'); //Loading button text 

			$.ajax({ //make ajax request to cart_process.php
				url: "cart_process.php",
				type: "POST",
				dataType:"json", //expect json value from server
				data: form_data
			}).done(function(data){ //on Ajax success
				$("#cart-info").html(data.items); //total items in cart-info element 
				//button_content.html('Elegir'); //reset button text to original text
				button_content.replaceWith('<span class="flex items-center h-[29px]" ><img src="./images/check.svg" class="w-[21.38px]" ></span>'); //reset button text to original text
				//alert("Item added to Cart!"); //alert user
				if($(".shopping-cart-box").css("display") == "block"){ //if cart box is still visible
					$(".cart-box").trigger( "click" ); //trigger click to update the cart box.
				}
			})
			 e.preventDefault();
		});

	//Show Items in Cart
	$( ".cart-box").click(function(e) { //when user clicks on cart box
		e.preventDefault(); 
		$(".shopping-cart-box").fadeIn(); //display cart box
		$("#shopping-cart-results").html('<img src="images/ajax-loader.gif">'); //show loading image
		$("#shopping-cart-results" ).load( "cart_process.php", {"load_cart":"1"}); //Make ajax request using jQuery Load() & update results
	});
	
	//Close Cart
	$( ".close-shopping-cart-box").click(function(e){ //user click on cart box close link
		e.preventDefault(); 
		$(".shopping-cart-box").fadeOut(); //close cart-box
	});
	
	//Remove items from cart
	$("#shopping-cart-results").on('click', 'a.remove-item', function(e) {
		e.preventDefault(); 
		var pcode = $(this).attr("data-code"); //get product code

		$(this).parent().fadeOut(); //remove item element from box
		$.getJSON( "cart_process.php", {"remove_code":pcode} , function(data){ //get Item count from Server
			$("#cart-info").html(data.items); //update Item count in cart-info
			$(".cart-box").trigger( "click" ); //trigger click on cart-box to update the items list
		});
        $(`#product-${pcode}  span`).replaceWith('   <button class="border-2 border-white border-solid bg-transparent px-2 py-1 leading-8 text-middle " type="submit">Elegir</button>');
	});

});
</script>
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
							<h1 class="ttl-txt">Lista de productos seleccionadas  </h1>
						</div>
					</div>
				</div>
			</div>    
  
            <div class="max-w-tl-lg mx-auto px-3 lg:px-0 mb-[40px] mt-16 " >
				<div  class=" bg-white max-w-[600px] mx-auto" > 
				<h1 class="sm:text-[18px] pt-8 pb-3" >Lista de productos seleccionados</h1>
			<?php
				if(isset($_SESSION["products"]) && count($_SESSION["products"])>0){
					$total 			= 0;
					$list_tax 		= '';
					$cart_box 		= '<ul class="view-cart ">';

					foreach($_SESSION["products"] as $product){ //Print each item, quantity and price.
						$product_name = $product["product_name"];
						$product_qty = $product["product_qty"];
						$product_price = $product["product_price"];
						$product_id = $product["product_id"];
						$product_image = $product["product_image"];
					
						
						$item_price 	= sprintf("%01.2f",($product_price * $product_qty));  // price x qty = total item price
						$cart_box .=  "<li> <img src='images/$product_image' > <div> <h4>$product_name</h4> <span>(Cantidad : $product_qty  )</span> </div>  <span>$currency ".sprintf("%01.2f", ($product_price * $product_qty)). "</span>    </li>";

					//	$cart_box 		.=  "<li> <img class='w-[100px]' src='images/$product_image' alt=''> $product_id &ndash;  $product_name (Cantidad : $product_qty ) <span> $currency. $item_price </span></li>";
						
						$subtotal 		= ($product_price * $product_qty); //Multiply item quantity * price
						$total 			= ($total + $subtotal); //Add up to total price
					}
					
					$grand_total =  $total; //grand total
				 
					 
					//Print Shipping, VAT and Total
					$cart_box .= "<li class=\"view-cart-total  \"> <span  class='ml-auto' >Perecio total : $currency ".sprintf("%01.2f", $grand_total)."</span> </li>";
					$cart_box .= "</ul>";
					
					echo $cart_box;
				}else{
					echo "<p>Tu lista aun está vacía: <a class='!text-primary-500' href='/lista'>regresar para seleccionar algun producto</a> </p>";
				} 
				 
				?>	 
				<h3 class="sm:text-[18px] pt-8 pb-3" >Información de la Mamá</h3>

				<?php
					if(isset($_SESSION['user_email'])){	?>
						<ul class="view-cart-user">
					  <li> 
						  <h4>Nombre completo Mamá: </h4>
						  <p><?php echo $_SESSION['user_name']; ?></p> 
					  </li>
					  <li> 
						  <h4>Dirección donde se enviarán los regalos: </h4>
						  <p><?php echo $_SESSION['user_address']; ?></p> 
					  </li>
					  <li> 
						  <h4>E-mail Mamá: </h4>
						  <p><?php echo $_SESSION['user_email']; ?></p> 
					  </li>
					  <li> 
						  <h4>Celular Mamá: </h4>
						  <p><?php echo $_SESSION['user_phone']; ?></p> 
					  </li>
					  <li> 
						  <h4>Meses de embarazo: </h4>
						  <p><?php echo $_SESSION['user_embarazo']; ?></p> 
					  </li>
					  <li> 
						  <h4>País:</h4>
						  <p><?php echo $_SESSION['user_country']; ?></p> 
					  </li>
				  </ul>	
			 	<?php
				 }else{
					echo "<p>Regístrate <a class='!text-primary-500' href='/lista'>aquí</a> para continuar. </p>";
				}
				?>
				  
				  <?php
				  
				  if(isset($_SESSION["products"]) && count($_SESSION["products"])>0 && isset($_SESSION['user_email'])){ ?>
 					<section class="text-center mt-16 mb-40">
                       <input type="submit"   value="ENVIAR LISTA AL CORREO"   class="submit  boton_rojo border-none py-4  font-medium md:py-6 px-[5rem] rounded-full tracking-wide cursor-pointer bg-primary-500 text-white  leading-[30px]   md:text-base  "  > 
                   </section>  
				 <?php }  ?>

				 
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