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
    <link rel="stylesheet" href="/assets/css/lista.css?v=<?=theVersion();?>">
    <link rel="canonical" href="<?=theCurrentUrl();?>" />

<!-- <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script> -->

    <script>

   /*  $(document).ready(function(){	
	
  


}); */
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
							<h1 class="ttl-txt">Lista de Bebé</h1>
						</div>
					</div>
				</div>
			</div>   
               <!-- <div class="content-inner mt-24 sm:mt-25 " data-fixed="">
                    <ul class="tl-countries" >
                        <li><a href="/tiendaslatam/bolivia/">Bolivia</a></li>
                        <li><a href="/tiendaslatam/chile/">Chile</a></li>
                        <li><a href="/tiendaslatam/colombia/">Colombia</a></li>
                        <li><a href="/tiendaslatam/costarica/">Costa Rica</a></li>
                        <li><a href="/tiendaslatam/guatemala/">Guatemala</a></li>
                        <li><a href="/tiendaslatam/ecuador/">Ecuador</a></li>
                        <li><a href="/tiendaslatam/mexico/">México</a></li>
                        <li><a href="/tiendaslatam/panama/">Panamá</a></li>
                        <li><a href="/tiendaslatam/peru/">Perú</a></li>
                    </ul> 
                </div> -->   

            <?php 
            
            $data_countries =  json_decode(file_get_contents("./shops.json"), true); 
            ?>
            <div  class=" formlista-modal-wrap absolute z-50 flex justify-center items-center top-0 right-0 left-0 bottom-0  px-3 sm:px-0  pt-[93px] sm:pt-0" id="formlista-modal-wrap" >
                <div  class="formlista-modal-close-wrap" id="formlista-modal-close-wrap" ></div>
                <div  class="formlista-modal w-full max-w-[620px] bg-white px-8 sm:px-3 py-8 relative   ">
                    <button class="formlista-modal-close" id="formlista-modal-close" >X</button>
                    <div class="formlista-modal-body" >
                        <div class="mt-24 sm:mt-25 mb-[5rem] text-center cursor-pointer">
                            <img class=" w-46 sm:w-57 md:w-60 " src="/assets/svg/logo.svg" alt="logo pigeon latam">
                        </div>
                        <div class="formlista-modal-message" id="formlista-modal-message" >  
                                <?php if(isset($_SESSION['user_email'])){ ?>
                                        <h3>¡ACTUALIZADO!</h3>  
                                    <?php }else{ ?>
                                        <h3>¡Registro completado!</h3>  
                                <?php } ?>
                        </div> 
                        <form  class="formlista max-w-[455px] mx-auto "  id="envioFormLista" data-nombre="envioFormLista" data-destino="/lista-de-bebe/envioFormLista.php" action="/lista-de-bebe/envioFormLista.php"  > 
                            <div>
                                <input type="text"  id="nombre"   name="nombre" class="texto required"  placeholder="Nombre completo Mamá" <?php if(isset($_SESSION['user_name'])){echo 'value="'.$_SESSION['user_name'].'"';} ?> >
                                <input type="text"  id="direccion"   name="direccion"  class="alfanumerico required"  placeholder="Dirección donde se enviarán los regalos" <?php if(isset($_SESSION['user_address'])){echo 'value="'.$_SESSION['user_address'].'"';} ?>>
                                <input type="email" id="correo"   name="correo"  class="email required"  placeholder="E-mail Mamá" <?php if(isset($_SESSION['user_email'])){echo 'value="'.$_SESSION['user_email'].'"';} ?>>
                                <input type="text" id="celular"   name="celular"  class="alfanumerico required"  placeholder="Celular Mamá" <?php if(isset($_SESSION['user_phone'])){echo 'value="'.$_SESSION['user_phone'].'"';} ?>>
                                <input type="number" id="embarazo"   name="embarazo" min="1" max="10"  class="numerico required"  placeholder="Meses de embarazo" <?php if(isset($_SESSION['user_embarazo'])){echo 'value="'.$_SESSION['user_embarazo'].'"';} ?> >
                                <!-- <input type="text" id="pais"   name="pais" class="texto required"   placeholder="País" >  -->
                                <select  id="pais" name="pais"  class="texto required" placeholder="País"> 
                                  
                                <!-- 	<optionn value="Bolivia">Bolivia</optionn>
                                    <option value="Chile">Chile</option>
                                    <optionion value="Colombia">Colombia</optionion>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <optionption value="Guatemala">Guatemala</optionption>
                                    <optionn value="Ecuador">Ecuador</optionn>
                                    <option value="México">México</option> -->
                                 <!--    <option value="peru">Perú</option>
                                    <option value="chile" disabled="disabled">Chile</option>
                                    <option value="panama" disabled="disabled">Panamá</option> -->
                                    <!-- <option value="Perú">Perú</option>  -->
                                    <?php 
                                      if (!isset($_SESSION['user_country'])) { ?>
                                        <option hidden style="display: none" >País</option>
                                      <?php }?>
                                      
                                      <?php 
									$country_selected =  $_SESSION['user_country']; 
									$country_selected_lower = strtolower($country_selected); 
									foreach ($data_countries  as $key => $value) {
                                        if (isset($_SESSION['user_country'])) { 
                                            if ($country_selected_lower === $key) {
                                                echo '<option value="'.$key.'" selected="selected">'.ucfirst($key).'</option>';
                                            }else{
                                                echo '<option  value="'.$key.'" >'.ucfirst($key).'</option>'; 
                                            } 
                                        }else{
                                          /*   if ('peru' === $key) {
                                                */
                                                echo '<option value="'.$key.'" >'.ucfirst($key).'</option>';

                                          /*   }else{  
                                                echo '<option disabled value="'.$key.'" >'.ucfirst($key).'</option>'; 
                                            }  */
                                        }
									
									} 
								?>
                                </select> 
                            </div>
                            <section class="text-center mt-16 mb-40">
                                  <input type="submit" id="formlista-modal-send" value=" <?php if(isset($_SESSION['user_email'])){echo "ACTUALIZAR DATOS";}else{echo "QUIERO REGISTRARME";} ?>"   class="submit  boton_rojo border-none py-4  font-medium md:py-6 px-[5rem] rounded-full tracking-wide cursor-pointer bg-primary-500 text-white  leading-[30px]   md:text-base  "  >
         
                            </section>  
                        </form>
                    </div>
                </div>
            </div>
            <div  class="relative" >
                <div class=" max-w-tl-lg text-center mb-30  mx-auto cursor-pointer  open-formlista-modal"   >
                    <img src="./images/registrate-y-empieza-tu-lista.jpg" alt="Presentes con lo mejor para tu bebé en 9 países de Latinoamérica">
                </div> 
               
                
                <div class="absolute w-full right-0 left-0 top-[-84px]  sm:top-0 flex justify-center cart-box-wrap z-[99999]" >

                    <div class=" max-w-tl-lg  relative w-full  mx-auto " > 
                            <div  class=" mt-5 mb-4  z-50  top-0 right-0 ">
                                <button href="#" class="cart-box"  title="Ver carrito">
                                    Ver lista
                                    <div  class="relative ml-3" >
                                        <img src="images/shopping-icon.svg"  class="h-[30px] " >
                                        <span id="cart-info" class="p-3   w-[26px] h-[26px] rounded-full  bg-white  absolute top-[-8px] right-[-18px] z-10  text-[16px]  text-[#6EC3BD] inline-flex items-center justify-center " >
                                        <?php 
                                            if(isset($_SESSION["products"])){
                                                echo count($_SESSION["products"]); 
                                            }else{
                                                echo 0; 
                                            }
                                            ?> 
                                        </span> 
                                    </div>
                                </button>
                                <div class="shopping-cart-box"> 
                                    <div  class="shopping-cart-header " >
                                        <h3 class="text-[18px]" >Tu lista de productos</h3>
                                        <button href="#" class="close-shopping-cart-box" >Cerrar lista</button>
                                    </div>
                                    <div id="shopping-cart-results">
                                    </div> 
                                </div>
                            </div>  
                            
                    </div>
                </div>
           </div>
            <div  class="max-w-tl-lg mx-auto px-3 lg:px-0 mb-[40px]" > 
                <div  class="max-w-[1031px] mx-auto relative">
                    <?php
                       if (isset( $_SESSION['user_name'])) {  ?>
                            <div  class="flex sm:space-x-4 flex-wrap sm:flex-nowrap justify-center items-center ">
                                    <h3>Nombre de la Mamá: <strong><?php echo $_SESSION['user_name']; ?></strong> </h3>
                                    <button class="btn btn-outline open-formlista-modal maxsm:mt-4  maxsm:mb-3">Modificar datos de la Lista ✎</button>
                                </div>
                       <?php }
                    ?>
                    <div  class=" mt-[50px] mb-[51px]">
                        <h2  class=" max-w-[850px]  mx-auto md:text-[22.76px] text-[#4D4D4D] font-medium text-center  md:leading-[36.68px]" ><span class="text-primary-500" >¡Bienvenida a esta nueva aventura!</span> Si ya estás registrada el próximo paso es elegir los productos para tu lista de bebé y mandarla a tus amigas o familia.</h2>
                    </div> 
                    
            
                        
                        <?php
                            //List products from database
                            $results = $mysqli_conn->query("SELECT product_id, product_name, product_image, product_price,category_name FROM products p INNER JOIN  (category c) WHERE  p.categ_id = c.category_id ORDER BY c.category_name ,p.product_name; ");
                            if (!$results){
                                printf("Error: %s\n", $mysqli_conn->error);
                                exit;
                            } 

                            $col_products = '';
                            $row_products = '';
                            $cat=""; 
                            ?> 

                        <ul class="form-products-wrap">
                            <?php 
                                while($row1 = $results->fetch_assoc()) {  
                                        if( $cat !== $row1["category_name"] ){  
                                            if( $row_products != '') {
                                                $col_products .=  '<div  class="grid grid-cols-1 gap-y-6  sm:gap-y-[25px]" >'.$row_products.'</div> ';
                                            }
                                            $row_products = '';  
                                            $cat=$row1["category_name"];  
                                            $row_products .= '
                                                <li><div class="shopping-categories-item">'.$row1["category_name"].'</div> </li> 
                                                <li>
                                                <form class="form-products" id="product-'.$row1["product_id"].'">
                                                    <div class="form-products-header" >
                                                        <h4 class="hidden" >'.$row1["product_name"].'</h4>
                                                        <div><img name="product_image" src="images/'.$row1["product_image"].'"></div> 
                                                    </div>
                                                    <div class="form-products-body"> 
                                                        <div style="display:none;" >
                                                            Cantidad: 
                                                            <input type="number" name="product_qty" value="1" min="1" max="30" style="width:50px"  >
                                                        </div>  
                                                    </div> 
                                                    <div  class="form-products-footer" >
                                                        <div class="leading-8" >Desde '.$currency.' '.$row1["product_price"].'</div>
                                                        <div>
                                                            <input name="product_id" type="hidden" value="'.$row1["product_id"].'">
                                                            <button class="border-2 border-white border-solid bg-transparent px-2 py-1 leading-8 text-middle " type="submit">Elegir</button>
                                                            
                                                        </div>
                                                    </div> 
                                                </form>
                                                </li>  
                                                ';
                                            
            
                                                
                                        } else{ 
                                            $row_products .= ' 
                                                <li>
                                                <form class="form-products" id="product-'.$row1["product_id"].'">
                                                    <div class="form-products-header" >
                                                        <h4 class="hidden" >'.$row1["product_name"].'</h4>
                                                        <div><img name="product_image" src="images/'.$row1["product_image"].'"></div> 
                                                    </div>
                                                    <div class="form-products-body"> 
                                                        <div style="display:none;" >
                                                            Cantidad: 
                                                            <input type="number" name="product_qty" value="1" min="1" max="30" style="width:50px"  >
                                                        </div>  
                                                    </div> 
                                                    <div  class="form-products-footer" >
                                                        <div class="leading-8" >Desde '.$currency.' '.$row1["product_price"].'</div>
                                                        <div>
                                                            <input name="product_id" type="hidden" value="'.$row1["product_id"].'">
                                                            <button class="border-2 border-white border-solid bg-transparent px-2 py-1 leading-8 text-middle " type="submit">Elegir</button>
                                                            
                                                        </div>
                                                    </div> 
                                                </form>
                                                </li>  
                                                ';  
                                        } 
                                            
                                        
                                } 
                                $col_products .= '<div  class="grid grid-cols-1 gap-y-6  sm:gap-y-[25px]" >'.$row_products.'</div> ';
                                echo  $col_products ; 
                                
                                
                                ?>

                        </ul>  
                    </div> 
            </div>
       

            <div class="content-pagepath  " data-fixed="">
                <ul class="m-box-pagepath">
                    <li><a href="/">Home</a></li>
                    <li> <span>Tiendas LATAM</span></li> 
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




<script>

    $(document).ready(function() {
        var stickyNavTop = $('.cart-box-wrap').offset().top;
        
        var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
            
        if (scrollTop > stickyNavTop) { 
            $('.cart-box-wrap').addClass('sticky');
        } else {
            $('.cart-box-wrap').removeClass('sticky'); 
        }
        };
        
        stickyNav();
        
        $(window).scroll(function() {
        stickyNav();
        });

        
    });

   
</script>

</body>

</html>