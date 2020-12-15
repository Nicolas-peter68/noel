<?php
$to = $_POST['mail_dest'];
$objet = $_POST['objet'];
$message = '<html><head><meta charset="UTF-8"><title>Carte</title></head><body>
<h1>Vous avez reçu une magnifique carte de vœux !</h1>
<p>cliquez sur le lien ci-dessous pour la voir</p>
<a href="https://nicolasp.promo-45.codeur.online/noel/card.html">Lien</a>
<p>Carte de vœux réalisée par Nicolas Peter</p>
<p>Bonnes fêtes de la part des <a href="https://www.accesscodeschool.fr/">ACS de Belfort !</a>.</p>
</body>
</html>';
$headers = 
    'MIME-Version: 1.0'."\r\n".
    'Content-type: text/html; charset=UTF-8'."\r\n".
    'From: '. $_POST['votre_nom'].'<'. $_POST['votre_email'].'>'."\r\n".
    'Reply-To: '. $_POST['votre_email']."\r\n".
    'X-Mailer: '. 'PHP/' . phpversion()
;

mail($to,$objet,$message,$headers);
header("Location: index.php");