<?php

if(isset($_POST['enviar'])){
    if(!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['asunto']) && !empty($_POST['mensaje'])){

        $destino = "ogcu-secretaria@unasam.edu.pe";
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $mensaje = $_POST['mensaje'];
        
        $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nMensaje: " . $mensaje;
        $mail =  mail($destino, $asunto, $contenido);
        if($mail){
            
            echo "<h4> enviado exitosamente </h4>";

        }
    }
}

?>  
