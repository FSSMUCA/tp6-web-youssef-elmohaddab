<?php
  $etablissement = "Université Cadi Ayyad - FSSM";
  $module = "Prgrammation Web";
  $annee = 2025;

  $a = 10;
  $b = 5;

  $addition = $a + $b;
  $multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Info PHP</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 20px;
    }
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      max-width: 500px;
      margin: auto;
    }
    h2 {
      color: #1e90ff;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Informations PHP</h2>
    <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>

    <h3>Variables numériques :</h3>
    <p>A = <?php echo $a; ?>, B = <?php echo $b; ?></p>
    <p>A + B =  <?php echo $addition; ?></p>
    <p>A * B = <?php echo $multiplication; ?></p>
  </div>
</body>
</html>