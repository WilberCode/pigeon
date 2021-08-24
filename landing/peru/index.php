<?php include '../../includes/config.php' ?> 
<!doctype html>
<html lang="ES" >
<head> 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>Perú | Landing | Pigeon Latam</title>       
    <meta name="description" content="Compra en un click en tu tienda favorita AQUÍ - Pigeon Peru"> 
     
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Perú | Landing | Pigeon">
    <meta property="og:site_name" content="Perú | Landing | Pigeon">
    <meta property="og:locale" content="es_ES">
    <meta property="og:url" content="<?=theCurrentUrl();?>"> 
    <meta property="og:image" content="img/pigeon-landing-banner.jpg">
    <meta property="og:description" content="Compra en un click en tu tienda favorita AQUÍ - Pigeon Peru">

    <link rel="canonical" href="<?=theCurrentUrl();?>">  
    <link rel="stylesheet" href="/assets/css/common.css">
    <link rel="stylesheet" href="/assets/css/app.css">
    <link rel="stylesheet" href="/landing/peru/css/peru.css">
    <link rel="stylesheet" href="/landing/font/font.css">

    <!-- trackEvent - google analytics --> 
    <script type="text/javascript"> 
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-199275406-1']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })(); 
    </script>
</head>
<body id="top" class=" ready ">
    <noscript>Es posible que Javascript no se muestre correctamente porque está desactivado.</noscript>
        <!-- [ WRAP ] -->
        <div id="l-wrap">
        <!-- [ GLOBAL HEADER ] -->
        <?php include '../../includes/header.php' ?>
            <!-- [ /GLOBAL HEADER ] -->
        <div class="max-w-[1366px] m-auto" >  
            <img class="w-full m-auto block" src="img/pigeon-landing-banner.jpg" alt="Pigeon banner" > 
        </div> 
        <div class="pt-[3em] pb-[3em] container px-3 sm:px-0 ">
            <h1 class="text-center leading-7 sm:leading-normal font-pigeon " ><span class="font-bold sm:text-[2em] tracking-wider text-black opacity-75 ">Compra en un click</span> <span class="sm:text-[2em] text-black opacity-75  tracking-wider  " >en tu tienda favorita</span><span class="font-bold sm:text-[2em] text-primary-500" > AQUÍ</span>
            </h1>
        </div>
        <div class="max-w-[1255px] m-auto px-5   lg:px-6 ">
            <section  class="clients flex  flex-wrap  justify-center -mx-3 sm:-mx-5 relative z-20">
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 "    >
                    <a class="clients-card " href="https://bit.ly/2VAs4xT" > 
                        <img class="w-45 m-auto block" src="img/baby.png" onclick=" _gaq.push(['_trackEvent', 'Baby House', 'Enlace Saliente', 'Baby House']);" alt="baby logo" >  
                    </a>
                </article>
            
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 "    >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'alobebe', 'Enlace Saliente', 'alobebe']);" href="https://www.alobebe.pe/alimentacion" > 
                        <img class="w-45 m-auto block" src="img/alobebe.png" alt="alobebe logo" >  
                    </a>
                </article>
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Wong', 'Enlace Saliente', 'Wong']);"  href="https://www.wong.pe/busca/?ft=pigeon" > 
                        <img class="xs:w-33 m-auto block wong" src="img/wong.png" alt="wong logo" >  
                    </a>
                </article>
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card "  onclick=" _gaq.push(['_trackEvent', 'Inkafarma', 'Enlace Saliente', 'Inkafarma']);"  href="https://inkafarma.pe/buscador?keyword=pigeon" >

                        <img class="w-50 m-auto block" src="img/inkafarma.png" alt="inkafarma logo" >  
                    </a>
                </article> 
            
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Lineo', 'Enlace Saliente', 'Lineo']);" href="https://bit.ly/2VwYlWC" >

                        <img class="w-36 m-auto block" src="img/linio.png" alt="linio logo" >  
                    </a>
                </article> 
                
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Mercado Libre', 'Enlace Saliente', 'Mercado Libre']);"  href="https://bit.ly/3axTzN2" >

                        <img class="w-33 m-auto block" src="img/mercado-libre.png" alt="mercado logo" >  
                    </a>
                </article>
                
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'BUP maternity', 'Enlace Saliente', 'BUP maternity']);" href="https://bit.ly/3bME5pX" >

                        <img class="w-34 m-auto block" src="img/bup.png" alt="bup logo" >  
                    </a>
                </article>
                
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card "  onclick=" _gaq.push(['_trackEvent', 'Lumingo', 'Enlace Saliente', 'Lumingo']);" href="https://www.lumingo.com/categoria/juguetes-ninos-y-bebe/c/12?q=pigeon&utm_source=facebook&utm_medium=paid&utm_campaign=cyber-wow-pigeon-peru&utm_term=06-07-2020&utm_content=lumingo" >

                        <img class="w-36 m-auto block" src="img/lumingo.png" alt="lumingo logo" >  
                    </a>
                </article>  
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Mifarma', 'Enlace Saliente', 'Mifarma']);"  href="https://www.mifarma.com.pe/s/result?keyword=pigeon" >

                        <img class="w-48 m-auto block" src="img/mifarma.png" alt="mifarma logo" >  
                    </a>
                </article>  
                <article class=" clients-card-wrap w-1/3 md:w-1/3 lg:w-1/5 px-3 sm:px-5 " >
                    <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Promart', 'Enlace Saliente', 'Promart']);"  href=" https://www.promart.pe/infantil/bebe/accesorios-de-bebe/pigeon" >

                        <img class="w-48 m-auto block" src="img/bromart.png" alt="promart logo" >  
                    </a>
                </article>   
            </section>
        
            <div class="sm:flex flex-wrap  -mx-3 sm:-mx-5  ">
                <div class=" w-full lg:w-3/5 px-3 sm:px-5  ">
                    <section  class="clients flex   justify-center -mx-3 sm:-mx-5 relative z-20   ">   
                        <article class="clients-card-wrap w-1/3  px-3 sm:px-5  " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Plazavea', 'Enlace Saliente', 'Plazavea']);"  href="https://www.plazavea.com.pe/bebe-e-infantil?filter=B:60590" > 
                                <img class="w-36 m-auto block" src="img/plazavea.png" alt="plazavea logo" >  
                            </a>
                        </article>  
                        <article class="clients-card-wrap w-1/3  px-3 sm:px-5  " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Baby lock', 'Enlace Saliente', 'Baby lock']);" href="https://babylock.com.pe/page/1/?product_cat&s=pigeon&post_type=product" > 
                                <img class="w-36 m-auto block" src="img/babylock.png" alt="babylock logo" >  
                            </a>
                        </article>  
                        <article class="clients-card-wrap w-1/3  px-3 sm:px-5   " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Baby Infantil', 'Enlace Saliente', 'Baby Infantil']);" href="https://www.babyinfanti.com.pe/catalogsearch/result/index/?c=0&limit=36&q=pigeon" >
            
                                <img class="w-36 m-auto block " src="img/babyinfantil.png" alt="babyinfantil logo" >  
                            </a>
                        </article> 
                    
                    </section>
                    <section  class="clients flex   justify-center -mx-2 sm:-mx-4 relative z-20   ">  
                        <article class="clients-card-wrap w-1/3  px-3 sm:px-5   " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', ' Oeschle', 'Enlace Saliente', ' Oeschle']);" href=" https://www.oechsle.pe/infantil/cuidado-del-bebe?search=P:[2%20TO%201256],B:2001323&page=1" > 
                                <img class="w-36 m-auto block" src="img/oeschle.png" alt="lumingo logo" >  
                            </a>
                        </article> 
                    
                        <article class="clients-card-wrap w-1/3  px-3 sm:px-5   " >
                            <a class="clients-card "  onclick=" _gaq.push(['_trackEvent', ' Bebétogo', 'Enlace Saliente', ' Bebétogo']);" href="https://www.bbtogo.pe/"> 
                                <img class="w-36 m-auto block" src="img/bebetogo.png" alt="bebe togo logo" >  
                            </a>
                        </article>  
                        <article class=" clients-card-wrap w-1/3  px-3 sm:px-5  " >
                            <a class="clients-card "  onclick=" _gaq.push(['_trackEvent', ' La momy ', 'Enlace Saliente', ' La momy']);" href="https://www.facebook.com/LamOmyboutique/"> 
                                <img class="w-36 m-auto block" src="img/lamomy.png" alt="lamomy logo" >  
                            </a>
                        </article>   
                    
                    </section>
                    <section  class="clients flex   justify-center -mx-2 sm:-mx-4 relative z-20   "> 
                        <article class=" clients-card-wrap w-1/3  px-3 sm:px-5 " >
                            <a class="clients-card "  onclick=" _gaq.push(['_trackEvent', ' Sodimac', 'Enlace Saliente', 'Sodimac']);" href="https://www.sodimac.com.pe/sodimac-pe/search?Ntt=pigeon"> 
                                <img class="w-36 m-auto block" src="img/sodimac.jpg" alt="sodimac logo" >  
                            </a>
                        </article>  
                        <article class=" clients-card-wrap w-1/3  px-3 sm:px-5 " >
                            <a class="clients-card "  onclick=" _gaq.push(['_trackEvent', 'La casadel biberon', 'Enlace Saliente', 'La casadel biberon']);" href="https://lacasadelbiberon.com/catalogo/productos?buscar=pigeon"> 
                                <img class="w-36 m-auto block" src="img/lacasadelbiberon.png" alt="La casa del biberon logo" >  
                            </a>
                        </article>   
                        <article class=" clients-card-wrap w-1/3  px-3 sm:px-5 " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', ' Vida bebé', 'Enlace Saliente', 'Vida bebé']);" href="https://vidabebe.pe/?s=pigeon&post_type=product"> 
                                <img class="w-36 m-auto block" src="img/vidabebe.png" alt="mamaybebe logo" >  
                            </a>
                        </article>    
                        
                    </section>
                    <section  class="clients flex     justify-center -mx-2 sm:-mx-4 relative z-20   ">  
                        <article class=" clients-card-wrap w-1/3  px-3 sm:px-5 " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Falabella', 'Enlace Saliente', 'Falabella']);" href="https://www.falabella.com.pe/falabella-pe/search?Ntt=pigeon"> 
                                <img class="w-36 m-auto block" src="img/falabella.png" alt="Falabella logo" >  
                            </a>
                        </article>   
                        <article class=" clients-card-wrap  w-1/3  px-3 sm:px-5 " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'realplaza', 'Enlace Saliente', 'realplaza']);" href="https://www.realplazago.com/FervalPeru?map=category-1,seller&query=/mundo-bebe/FervalPeru&searchState"> 
                                <img class=" realplaza  sm:w-36 m-auto block" src="img/realplaza.png" alt="realplaza logo" >  
                            </a>
                        </article>    
                        <article class=" clients-card-wrap w-1/3  px-3 sm:px-5 " >
                            <a class="clients-card " onclick=" _gaq.push(['_trackEvent', 'Ripley', 'Enlace Saliente', 'Ripley']);" href="https://simple.ripley.com.pe/mundo-bebe/mundo-bebe/marcas-pigeon?source=search&term=pigeon"> 
                                <img class=" realplaza  sm:w-36 m-auto block" src="img/ripley.jpg" alt="Ripley logo" >  
                            </a>
                        </article>    
                    </section>
                </div>
                <div class=" w-full lg:w-2/5  px-3 sm:px-4  ">
                    <article class="text-center lg:text-left" > 
                        <img src="img/mamaybebe.jpg"  class="lg:absolute w-full max-w-[36em] m-auto " alt="Mamá y bebe">
                    </article>  
                </div>
            </div>
        
        </div> 
        <footer class="bg-[#e20613] py-[1em] mt-16 max-w-[1366px] m-auto" >
            <section class="container flex justify-center" >
                <div class="inline-flex items-center" >
                    <div class="inline-flex social" >
                        <a href="https://web.facebook.com/Pigeon.Peru/?_rdc=1&_rdr">                   
                            <img class="w-[35px] sm:w-[49px] m-auto block" src="img/facebook.png" alt="facebook" >   
                    </a>
                    <a href="https://www.instagram.com/bebepigeonperu/"  class="ml-2 sm:ml-5" >
                        <img class="w-[35px] sm:w-[49px] m-auto block " src="img/instagram.png" alt="instagram" >  
                    </a>
                    </div> 
                    <h2 class="   md:text-[31px] font-semibold text-white ml-8   tracking-wider font-pigeon	" > Pigeon Perú </h2>
                </div>
            </section>
        </footer>
        
         <!-- [ /CONTENT ] --> 

         <div class="hide-tab" data-device></div>
         <div class="hide-pc" data-device></div>
        <div id="l-wrap"> 
     <!-- [ WRAP ] -->
     <script src="/assets/js/library.js"></script>
     <script src="/assets/js/setting.js"></script>
     <script src="/assets/js/function.js"></script>
     <script src="/assets/js/common.js"></script>
     <script src="/assets/js/search.js?v=1"></script>



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