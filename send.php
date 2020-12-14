<?php
$to = $_POST['mail_dest'];
$objet = $_POST['objet'];
$message = '<html><head><meta charset="UTF-8"><title>Carte</title></head><body>
<h1>Vous avez reçu une magnifique carte de voeux !</h1>
<p>cliquez sur le lien ci-dessous pour la voir</p>
<a href="http://localhost/noel/card.html">Lien</a>
</body>
</html>';
$headers = 
    'MIME-Version: 1.0'."\r\n".
    'Content-type: text/html; charset=iso-8859-1'."\r\n".
    'From: '. $_POST['votre_nom'].'<'. $_POST['votre_email'].'>'."\r\n".
    'Reply-To: '. $_POST['nom_dest']."\r\n".
    'X-Mailer: '. 'PHP/' . phpversion()
;

mail($to,$objet,$message,$headers);
header("Location: index.php");