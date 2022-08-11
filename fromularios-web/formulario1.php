!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title >TABLA</title>
</head>
<body >
</br>
    <h1  style="text-align: center;" class="titulo" >validacion del formulario 1</h1>
</br>
</br>
    
</body>
</html>
<?php
//creo variables y les paso el nombre de cada valor del campo de html
$nombre=$_POST['nombre'];

//creo una tabla para mostrar los datos mas ordenados
echo '<table width="20%" align="center" cellpadding="12px" cellspacing="0px"border="10px">';
echo '<tr>';
echo '<td align="center">Nombre</td>';

echo '</tr>';
echo '<tr>';
echo '<td align="center">'.$nombre.'</td>';
echo '</tr>';
echo '</table>' ;

?>


<html>
    <center>
    <body>
</br>
<a  class="boton" href="..fromulario-web/HOME.html" target="_blanck"><button>Regresar</button></a>
    </body>
    </center>
   
</html>