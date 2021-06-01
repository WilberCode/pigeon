<?php include '../includes/config.php' ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Productos | Pigeon </title>
    <meta name="title" content="Productos | Pigeon">
    <meta name="description"
        content="Encuentra Tiendas Online y Tiendas Físicas en Latinoamérica para comprar Biberones y Tetinas, Lactancia Materna, Destete, Limpieza y Esterilización, Consuelos y Mordedores, Cuidado del Bebé y Salud">
    <meta name="keywords"
        content="Biberones y Tetinas, Lactancia Materna, Destete, Limpieza y Esterilización, Consuelos y Mordedores, Cuidado, Salud">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <link rel="canonical" href="<?=theCurrentUrl();?>" />
    <meta property="og:type" content="website">
    <meta property="og:title" content="Productos | Pigeon ">
    <meta property="og:site_name" content="Productos">
    <meta property="og:url" content="/productos/">
    <meta property="og:description"
        content="Encuentra Tiendas Online y Tiendas Físicas en Latinoamérica para comprar Biberones y Tetinas, Lactancia Materna, Destete, Limpieza y Esterilización, Consuelos y Mordedores, Cuidado del Bebé y Salud">
    <meta property="og:image" content="/productos/files/images/Limpieza_y_Esterilizacion.jpg">
    <link rel="stylesheet" href="/assets/css/common.css">
    <link rel="stylesheet" href="/assets/css/app.css?v=1">
    <link rel="stylesheet" href="/assets/css/products.css?v=1">
</head>

<body id="top">

    <noscript>Es posible que Javascript no se muestre correctamente porque está desactivado.</noscript>

    <!-- [ WRAP ] -->
    <div id="l-wrap">
        <!-- [ GLOBAL HEADER ] -->
        <?php include '../includes/header.php' ?>
        <!-- [ /GLOBAL HEADER ] -->


        <!-- [ CONTENT ] -->
        <main class="bg-white">
            <div class="m-txt-ttl">
                <div data-fixed>
                    <div class="ttl-inner">
                        <div class="max-w-lg m-auto ">
                            <h1 class="ttl-txt">Productos</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" px-4 py-18 lg:px-0 max-w-lg m-auto ">
                <div class="content-main">
                    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 products  ">
                        <li  class="product-card" >
                            <a href="biberones_y_tetinas">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Biberones_y_Tetinas.jpg"
                                        alt="Biberones y Tetinas">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Biberones y Tetinas</h3>
                                </div>
                            </a>
                        </li>
                        <li  class="product-card" >
                            <a href="/productos/lactancia_materna/">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Lactancia_Materna.jpg"
                                        alt="Lactancia Materna">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Lactancia Materna</h3>
                                </div>
                            </a>
                        </li>
                        <li  class="product-card" >
                            <a href="/productos/destete/">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Destete.jpg" alt="Destete">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Destete</h3>
                                </div>
                            </a>
                        </li>
                        <li  class="product-card" >
                            <a href="/productos/limpieza_y_esterilizacion/">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Limpieza_y_Esterilizacion.jpg"
                                        alt="Limpieza y Esterilización">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Limpieza y Esterilización</h3>
                                </div>
                            </a>
                        </li>
                        <li  class="product-card" >
                            <a href="/productos/consuelos_y_mordedores/">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Consuelos_y_Mordedores.jpg"
                                        alt="Consuelos y Mordedores">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Consuelos y Mordedores</h3>
                                </div>
                            </a>
                        </li>
                        <li  class="product-card" >
                            <a href="/productos/cuidado_del_bebe/">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Cuidado_del_Bebe.jpg"
                                        alt="Cuidado del Bebé">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Cuidado del Bebé</h3>
                                </div>
                            </a>
                        </li>
                        <li  class="product-card" >
                            <a href="salud">
                                <figure class="block m-0 ">
                                    <img class="w-full" src="/productos/files/images/Salud.jpg" alt="Salud">
                                </figure>
                                <div class="product-card-body ">
                                    <h3>Salud</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <br><br>
            <div class="content-pagepath" data-fixed="">
                <ul class="m-box-pagepath">
                    <li><a href="/">Home</a></li>
                    <li><span>Productos</span> </a></li>
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
    <script src="/assets/js/search.js?v=7"></script>

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