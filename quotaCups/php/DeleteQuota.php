<?php

$print_name = $_POST['printer'];
shell_exec("../bash/delete.sh $print_name");
header ('Location: ../index.html');
exit;

?>
