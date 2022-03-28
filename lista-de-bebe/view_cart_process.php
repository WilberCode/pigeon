<?php 
 
function get_shops($country ){
    $data =  json_decode(file_get_contents("./shops.json"), true);
    $shops_html ='<ul class="view-cart-shops" >';
    
    if(isset($data[$country])){
        for ($i=0; $i <  count($data[$country]) ; $i++) { 
            //echo $data[$country][$i]['name'];
            $shops_html.= "<li> <a href=".$data[$country][$i]['link'].' target="_blank"> <img src='.$data[$country][$i]['image'].' alt='.$data[$country][$i]['name']."></a> </li>";
        } 
        
        $shops_html .= "</ul>"; 
        return $shops_html;
    }else{
        return 'No estan  disponible las tiendas';
    } 
    
}   
function get_shops_email($country){
    $data =  json_decode(file_get_contents("./shops.json"), true);
    $shops_html =' <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" >';
    
    if(isset($data[$country])){
        for ($i=0; $i <  count($data[$country]) ; $i++) { 
            //echo $data[$country][$i]['name'];
            $shops_html.= "<li> <a href=".$data[$country][$i]['link'].' target="_blank"> <img src='.$data[$country][$i]['image'].' alt='.$data[$country][$i]['name']."></a> </li>";
        } 
        
        $shops_html .= "</table>"; 
        return $shops_html;
    }else{
        return 'No estan  disponible las tiendas';
    } 
    
}   