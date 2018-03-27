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
        $('#left-text').html('Choose your enemy:');

        $('#attack-btn').append('<button type="button" class="btn btn-default">Attack</button');
    }
});

$('#NerdBob').on('click', function(){

    if (userCharEmpty == true) {
        
        $('#NerdBob').hide();
        $('#NerdBob').addClass('good-guy');
        $('#user-char').append(nerdBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){
           
            $('#NerdBob').hide();
            $('#NerdBob').addClass('bad-guy');
            $('#enemy-char').append(nerdBob.createImage());

            enemyCharEmpty = false;
        }

        
    }
    
});

$('#DoodleBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#DoodleBob').hide();
        $('#DoodleBob').addClass('good-guy');
        $('#user-char').append(doodleBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){

            $('#DoodleBob').hide();
            $('#DoodleBob').addClass('bad-guy');
            $('#enemy-char').append(doodleBob.createImage());

            enemyCharEmpty = false;
        }
        
    }
    
});

$('#ChickenBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#ChickenBob').hide();
        $('#ChickenBob').addClass('good-guy');
        $('#user-char').append(chickenBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){

            $('#ChickenBob').hide();
            $('#ChickenBob').addClass('bad-guy');
            $('#enemy-char').append(chickenBob.createImage());

            userCharEmpty = false;
        }
        
    }
    
});

$('#SkateBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#SkateBob').hide();
        $('#SkateBob').addClass('good-guy');
        $('#user-char').append(skateBob.createImage());

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){
              
            $('#SkateBob').hide();
            $('#SkateBob').addClass('bad-guy');
            $('#enemy-char').append(skateBob.createImage());
            
            enemyCharEmpty = false;
        }
        
    }
    
});

$('.char-image').on('click', function(){
    
    $('.jumbotron').removeClass('hide');
    
});

$('#attack-btn').on('click', function(){
    
});


});