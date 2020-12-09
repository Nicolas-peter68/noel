<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/scss/dist/custom.css">
    <link rel="stylesheet" href="assets/scss/dist/style.css">
    <link rel="stylesheet" href="assets/scss/dist/snow.css">
    <title>Document</title>
</head>
<body>
    <section>
    <?php for ($i=0; $i < 250; $i++) { 
        echo '<div class="snow"></div>';
    } ?>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="row vh-100">
                    <div class="my-auto px-4">
                        <h1>Saisissez l'adresse mail de la personne à qui vous voulez souhaiter un joyeux noël</h1>
                    <form class="form-row">
                        <div class="form-group col-sm-12">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1">
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="exampleInputPassword1">Objet</label>
                            <input type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="exampleInputPassword1">Nom</label>
                            <input type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group col-sm-12">
                            <button type="submit" class="btn-noel">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
</body>
</html>