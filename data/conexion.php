 <?php
	function getTheDomainUrl(){
		$domain = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[SERVER_NAME]";
		return  $domain;
	}


	$link = null; 
	if(getTheDomainUrl() == 'http://pigeonlatam.pe' ){
		$link = mysqli_connect("localhost", "root", "", "pigeon");  
	}else{
		//$link = mysqli_connect("localhost", "pigeon_user000", "pig@ten2021", "pigeon");  
	}
	if (mysqli_connect_errno()) {
		printf("Error de conexión: %s\n", mysqli_connect_error());
		exit();
	} 
	
?>
