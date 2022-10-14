<?php
session_start(); //start session
include_once("config.inc.php"); //include config file
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
############# add products to session #########################
 

if(isset($_POST["product_id"]))
{
	foreach($_POST as $key => $value){
		$new_product[$key] = filter_var($value, FILTER_UNSAFE_RAW); //create a new product array 
	}
	
	//we need to get product name and price from database.
	$statement = $mysqli_conn->prepare("SELECT product_name, product_price, product_image FROM products WHERE product_id=? LIMIT 1");
	$statement->bind_param('s', $new_product['product_id']);
	$statement->execute();
	$statement->bind_result($product_name, $product_price, $product_image);
	

	while($statement->fetch()){ 
		$new_product["product_name"] = $product_name; //fetch product name from database
		$new_product["product_price"] = $product_price;  //fetch product price from database
		$new_product["product_image"] = $product_image;  //fetch product price from database
		
		if(isset($_SESSION["products"])){  //if session var already exist
			if(isset($_SESSION["products"][$new_product['product_id']])) //check item exist in products array
			{
				unset($_SESSION["products"][$new_product['product_id']]); //unset old item
			}			
		}
		
		$_SESSION["products"][$new_product['product_id']] = $new_product;	//update products with new item array	
	}
	
 	$total_items = count($_SESSION["products"]); //count total items
	die(json_encode(array('items'=>$total_items))); //output json 

}

################## list products in cart ###################
if(isset($_POST["load_cart"]) && $_POST["load_cart"]==1)
{

	if(isset($_SESSION["products"]) && count($_SESSION["products"])>0){ //if we have session variable
		$cart_box = '<ul class="cart-products-loaded">';
		$total = 0;
		foreach($_SESSION["products"] as $product){ //loop though items and prepare html content
			
			//set variables to use them in HTML content below
			$product_image = $product["product_image"];
			$product_name = $product["product_name"];
			$product_price = $product["product_price"];
			$product_id = $product["product_id"];
			$product_qty = $product["product_qty"];
			
			$cart_box .=  "<li> <img src='images/$product_image' > <div> <h4>$product_name</h4> <span>(Cantidad : $product_qty  )</span> </div>  <span>$currency ".sprintf("%01.2f", ($product_price * $product_qty)). "</span>   <a href=\"#\" class=\"remove-item\" data-code=\"$product_id\">&times;</a></li>";
			$subtotal = ($product_price * $product_qty);
			$total = ($total + $subtotal);
		}
		$cart_box .= "</ul>";

	    $cart_btn_checkout = '<div class="cart-products-total "> <button   class="register-from-cart" title="Registrarse">Registrate para continuar</button> <span> Total : '.$currency.sprintf("%01.2f",$total).' <span></div>'; 
		if(isset($_SESSION['user_email'])){	 
			$cart_btn_checkout = '<div class="cart-products-total"> <a href="view_cart.php" title="Review Cart and Check-Out">Continuar</a> <span> Total : '.$currency.sprintf("%01.2f",$total).' <span></div>';
		}
		$cart_box .= $cart_btn_checkout;
	 
	
		die($cart_box); //exit and output content
	
	
	}else{
		die("<span  class=' block px-3 py-6 text-center bg-white text-lista-500 text-[17px] ' >Tu carrito esta vacío</span>"); //we have empty cart
	}
}

################# remove item from shopping cart ################
if(isset($_GET["remove_code"]) && isset($_SESSION["products"]))
{
	$product_id   = filter_var($_GET["remove_code"], FILTER_UNSAFE_RAW); //get the product code to remove

	if(isset($_SESSION["products"][$product_id]))
	{
		unset($_SESSION["products"][$product_id]); 
	}
	
 	$total_items = count($_SESSION["products"]);
	die(json_encode(array('items'=>$total_items)));
}

 
