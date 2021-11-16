
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var isPaused = 1;
function jump(){
    if (isPaused == 0){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },500);
                  //document.body.onkeyup=function(k){
                //if (k.keyCode==32){
                    counter++;
                //}
            //}

    }
}

function changeColor (color){
    if (color=="orange") {
        document.getElementById("character").style.backgroundImage = "url('circle-24.ico')";
    }
    if (color=="blue") {
        document.getElementById("character").style.backgroundImage = "url('circle.ico')";
    }
    if (color=="red") {
        document.getElementById("character").style.backgroundImage = "url('circle-24 (2).ico')";
    }
}

function startGame() {
    isPaused = 0;
    block.style.webkitAnimationPlayState="running";
    var checkDead=setInterval(function(){
        let characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft<20 && blockLeft >- 20 && characterTop>=130) {
            block.style.animation="none";
            alert("Game Over (Score:"+Math.floor(counter/100)+")");
            counter=0;
            block.style.animation="block 2s infinite linear";
        }
        else{
 
            document.getElementById("scoreSpan").innerHTML = counter;

        }

    },10);


}

function pauseGame () {
    block.style.webkitAnimationPlayState="paused";
    isPaused = 1;
}

window.onload = pauseGame;