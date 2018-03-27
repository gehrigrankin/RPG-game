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
    this.createName = function(){
        return '<p>' + this.name + '</p>';
    };
    this.createHP = function(){
        return this.health;
    };
}

var GoodGuy = {};
var BadGuy = {};



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
        $('#user-char').append(nerdBob.createImage());
        $('#user-name').append(nerdBob.createName());
        $('#user-hp').append(nerdBob.createHP());

        for(var k in nerdBob) GoodGuy[k]=nerdBob[k];

        console.log(GoodGuy);

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){
           
            $('#NerdBob').hide();
            $('#enemy-char').append(nerdBob.createImage());
            $('#enemy-name').append(nerdBob.createName());
            $('#enemy-hp').append(nerdBob.createHP());
            for(var k in nerdBob) BadGuy[k]=nerdBob[k];

            enemyCharEmpty = false;
        }

        
    }
    
});

$('#DoodleBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#DoodleBob').hide();
        $('#user-char').append(doodleBob.createImage());
        $('#user-name').append(doodleBob.createName());
        $('#user-hp').append(doodleBob.createHP());
        for(var k in doodleBob) GoodGuy[k]=doodleBob[k];

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){

            $('#DoodleBob').hide();
            $('#enemy-char').append(doodleBob.createImage());
            $('#enemy-name').append(doodleBob.createName());
            $('#enemy-hp').append(doodleBob.createHP());
            for(var k in doodleBob) BadGuy[k]=doodleBob[k];
            

            enemyCharEmpty = false;
            console.log(BadGuy);
        }
        
    }
    
});

$('#ChickenBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#ChickenBob').hide();
        $('#user-char').append(chickenBob.createImage());
        $('#user-name').append(chickenBob.createName());
        $('#user-hp').append(chickenBob.createHP());
        for(var k in chickenBob) GoodGuy[k]=chickenBob[k];

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){

            $('#ChickenBob').hide();
            $('#enemy-char').append(chickenBob.createImage());
            $('#enemy-name').append(chickenBob.createName());
            $('#enemy-hp').append(chickenBob.createHP());
            for(var k in chickenBob) BadGuy[k]=chickenBob[k];

            userCharEmpty = false;
        }
        
    }
    
});

$('#SkateBob').on('click', function(){

    if (userCharEmpty == true) {

        $('#SkateBob').hide();
        $('#user-char').append(skateBob.createImage());
        $('#user-name').append(skateBob.createName());
        $('#user-hp').append(skateBob.createHP());
        for(var k in skateBob) GoodGuy[k]=skateBob[k];

        userCharEmpty = false;
    }
    else {
        if (enemyCharEmpty == true){
              
            $('#SkateBob').hide();
            $('#enemy-char').append(skateBob.createImage());
            $('#enemy-name').append(skateBob.createName());
            $('#enemy-hp').append(skateBob.createHP());
            for(var k in skateBob) BadGuy[k]=skateBob[k];
            
            enemyCharEmpty = false;
        }
        
    }
    
});

$('.char-image').on('click', function(){
    
    $('.jumbotron').removeClass('hide');
    
});

$('#attack-btn').on('click', function(){
    
    GoodGuy.health -= BadGuy.attack;
    BadGuy.health -= GoodGuy.attack;

    if (GoodGuy.health > 0){
        $('#user-hp').html(GoodGuy.health);
        
    }
    else {
        $('#user-hp').html(0);
    }



    if (BadGuy.health >= 0){
        $('#enemy-hp').html(BadGuy.health);
    }
    else {
        $('#enemy-hp').html(0);
    }
    
    
});



});