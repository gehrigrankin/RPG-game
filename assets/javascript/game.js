$(document).ready(function(){

    var userCharEmpty = true;
    var enemyCharEmpty = true;

    function Character(name, health, attack, img) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.img = img;
    this.createImage = function(){
        return '<img id="' + this.name + '" class="char-image col-md-12" src="' + this.img + '">'
    };

    //$('#neutral').append('<img id="nerd-bob" class="col-md-12" src="' + img + '">');
}

var nerdBob = new Character('NerdBob', 80, 20, "assets/images/NerdBob.jpg");
var doodleBob = new Character('DoodleBob', 80, 20, "assets/images/DoodleBob.jpg");
var chickenBob = new Character('ChickenBob', 80, 20, "assets/images/ChickenBob.jpg");
var skateBob = new Character('SkateBob', 80, 20, "assets/images/SkateBob.jpg");

$('.sender-list').append(nerdBob.createImage());
$('.sender-list').append(doodleBob.createImage());
$('.sender-list').append(chickenBob.createImage());
$('.sender-list').append(skateBob.createImage());


$('.char-image').on('click', function(){
    if (userCharEmpty == true){
        $('#middle-text').html('Choose your enemy:');
    }
    
});



$('#NerdBob').on('click', function(){

    if (userCharEmpty == true) {
        
        $('#NerdBob').hide();
        $('#user-char').append(nerdBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){
           
            $('#NerdBob').hide();
            $('#enemy-char').append(nerdBob.createImage());

            enemyCharEmpty = false;
        }

        
    }
    
});

$('#DoodleBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#DoodleBob').hide();
        $('#user-char').append(doodleBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){

            $('#DoodleBob').hide();
            $('#enemy-char').append(doodleBob.createImage());

            enemyCharEmpty = false;
        }
        
    }
    
});

$('#ChickenBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#ChickenBob').hide();
        $('#user-char').append(chickenBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){

            $('#ChickenBob').hide();
            $('#enemy-char').append(chickenBob.createImage());

            userCharEmpty = false;
        }
        
    }
    
});

$('#SkateBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#SkateBob').hide();
        $('#user-char').append(skateBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){
              
            $('#SkateBob').hide();
            $('#enemy-char').append(skateBob.createImage());
            
            enemyCharEmpty = false;
        }
        
    }
    
});



});