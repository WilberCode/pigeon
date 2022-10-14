 

<?php

include '../includes/config.php';

session_start(); 

session_destroy();  ?>


<script> 
window.location.replace("<?php echo getTheDomainUrl().'/lista-de-bebe'; ?>");
</script> 