<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoyer du mail à Bryan LEGRAIN</title>
</head>
<body>
    <?php
        if(isset($_POST['message'])) {
            $retour = mail('brylegrain@gmail.com', 'Envoi depuis la page Contact de mon Portfolio', $_POST['message'], 'From :' . $_POST['name'] . ',' $_POST['email']);

            if ($retour) {
                echo '<p>Votre message a bien été envoyé.</p>';
            }
            } else {
                echo '<p>Veuillez écrire un message</p>'
        };
    ?>
</body>
</html>