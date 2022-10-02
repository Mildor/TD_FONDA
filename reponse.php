<?php
$answers = [
    "ultime" => [
        "answer" => "42",
        "text" => "Quelle est la réponse ultime",
        "score" => 1
    ],
    "cheval" => [
        "answer" => "blanc",
        "text" => "Quelle est la couleur du cheval blanc d'henri IV ?",
        "score" => 2
    ],
    "mousquetaires" => [
        "answer"=> array('athos', 'porthos', 'aramis'),
        "text"=> "Qui sont les 3 mousquetaires",
        "score"=> 3
    ],
    "acteur" => [
        "answer" => "leonardodicaprio",
        "text" => "Quelle est l'acteur principal du film inception",
        "score" => 1
    ],
    "whatscolor" => [
        "answer" => "#ff0000",
        "text" => "Choisis la bonne couleur, courage !",
        "score" => 1
    ],
    "twins" => [
        "answer" => "2001-09-11",
        "text" => "Quelle est la date de l'attentat des Tours Jumelles",
        "score" => 1
    ],
    "ww2" => [
        "answer" => "1945",
        "text" => "Quelle est l'année de fin de la 2ème Guerre Mondiale",
        "score" => 1
    ],
    "durer" => [
        "answer" => "02:28",
        "text" => "Quelle est la durée exacte du film Inception",
        "score" => 1
    ],
    "ultimate" => [
        "answer" => "4",
        "text" => "Quelle est le chiffre du malheur pour la culture chinoise",
        "score" => 1
    ],
];

$all_points = 0;

foreach($answers as $clefs=>$valeurs){
    foreach($valeurs as $key=>$value){
        if ($key == "score")
            $all_points += intval($value);
    }
    
}

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $score = 0;
    $count = 0;
    if (isset($_POST) && !empty($_POST)){
        foreach($_POST as $cle=>$valeur){
            if($valeur == ""){
                header('Location: quizz.html?err=1');        
            }
            if ($cle != 'mousquetaires'){
                $valeur = htmlentities($valeur);
                if($valeur == $answers[$cle]['answer']){
                    $score += intval($answers[$cle]['score']);
                }else{
                    echo 'Vous avez eu faux a la question : "'.$answers[$cle]['text'].'" | la réponses était : "'.$answers[$cle]['answer'].'" Vous avez mis : "'.$valeur.'"<br/>';
                }
            }else{
                if (!is_null($valeur)){
                    if(sizeof($valeur) == 3){
                        foreach ($valeur as $key => $value) {
                            $value = htmlentities($value);
                            if (in_array($value, $answers[$cle]['answer'])){
                                $count++;
                            }
                        }
                    }else{
                        $all_reponses = implode(" / ", $valeur);
                        echo 'Vous avez eu faux a la question : "'.$answers[$cle]['text'].'" | la réponses était : "'.$answers[$cle]['answer'][0]." / ".$answers[$cle]['answer'][1]." / ".$answers[$cle]['answer'][2].'" Vous avez mis : "'.$all_reponses.'"<br/>';
                    }
                }else{
                    $all_reponses = implode(" / ", $valeur);
                    echo 'Vous avez eu faux a la question : "'.$answers[$cle]['text'].'" | la réponses était : "'.$answers[$cle]['answer'][0]." / ".$answers[$cle]['answer'][1]." / ".$answers[$cle]['answer'][2].'" Vous avez mis : "'.$all_reponses.'"<br/>';
                }

                if($count == 3){
                    $score += 3;
                }else{
                    $all_reponses = implode(" / ", $valeur);
                    echo 'Vous avez eu faux a la question : "'.$answers[$cle]['text'].'" | la réponses était : "'.$answers[$cle]['answer'][0]." / ".$answers[$cle]['answer'][1]." / ".$answers[$cle]['answer'][2].'" Vous avez mis : "'.$all_reponses.'"<br/>';                   
                }
            }
            
        }
        echo "Votre score :".$score."/".$all_points;
    }else{
        header('Locations: quizz.html?err=1');
    }
    
}
