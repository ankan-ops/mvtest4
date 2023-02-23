<?php
    var_dump($_POST);
    $ver = SQLite3::version();
    var_dump($ver);
?>

<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>