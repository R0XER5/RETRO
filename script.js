var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var mySound;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    music();
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
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

        }

    },10);


}

function pauseGame () {
    block.style.webkitAnimationPlayState="paused";

}

window.onload = pauseGame;