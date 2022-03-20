<?php
$result = shell_exec("lpstat -p | grep -oP 'printer \w+' |  cut -d' ' -f2");
echo $result;
?>
