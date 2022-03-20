<?php

$print_name = $_POST['printer'];
$Kilobytes = intval($_POST['klimit']);
$Period = intval($_POST['period']);
$PageLimit = intval($_POST['page']);

shell_exec("../bash/insert.sh $print_name $Period $PageLimit $Kilobytes ");
header ('Location: ../index.html');
exit;
?>
