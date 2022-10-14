<?php  
function get_shops($country, $data_countries){
    $shops_html ='<ul class="view-cart-shops" >';
    
    if(isset(  $data_countries[$country])){
        for ($i=0; $i <  count(  $data_countries[$country]) ; $i++) { 
            //echo   $data_countries[$country][$i]['name'];
            $shops_html.= "<li> <a href=".  $data_countries[$country][$i]['link'].' target="_blank"> <img src='.  $data_countries[$country][$i]['image'].' alt='.  $data_countries[$country][$i]['name']."></a> </li>";
        } 
        
        $shops_html .= "</ul>"; 
        return $shops_html;
    }else{
        return 'No estan  disponible las tiendas';
    } 
    
}   
function get_shops_email($country, $data_countries){ 
    $shops_html =' <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" >';
    $tr_total = '';
    $tr = '';
    $td = ''; 
    $counter=1;
    if(isset($data_countries[$country])){

        $tr_total =  ceil(count($data_countries[$country])/4);
        for ($j=0; $j <  count($data_countries[$country]) ; $j++) {   
                 $td .= "<td width='150' align='center' colspan='1' style=' padding:18px 8px; border: 1px solid #f5f5f5;' > 
                            <a href=".$data_countries[$country][$j]['link']." target='_blank'>
                            <img  width='145px' src=".$data_countries[$country][$j]['image']." alt=".$data_countries[$country][$j]['name'].">
                        </a> </td>";
                     
                if ($counter*4 == $j+1) {
                    $tr .= '<tr>'.$td.'</tr>';  
                    $td = '';
                    $counter++;
                }elseif ($j+1 == count($data_countries[$country])){
                    $tr .= '<tr>'.$td.'</tr>';  
                } 
      }    
     $shops_html .= $tr."</table>"; 
     return $shops_html;
    }else{
        return 'No estan  disponible las tiendas';
    }  
    
}   