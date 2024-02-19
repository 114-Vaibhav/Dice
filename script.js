let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let announce = document.querySelector("#announcement");

let choice1 = Math.floor(1 + 6 * Math.random()); // Generate a random number between 1 and 6
let choice2 = Math.floor(1 + 6 * Math.random()); // Generate a random number between 1 and 6
// alert(choice1)
// Update the src attribute of player1 based on the random number generated
player1.src = "images/dice"+choice1+".png";
player2.src = "images/dice"+choice2+".png";
if(choice1==choice2){
    announce.innerHTML="Draw"
}else if(choice1>choice2){
    announce.innerHTML="Player 1 Wins"
}else announce.innerHTML="Player 2 Wins"

let button = document.querySelector("#button");
button.addEventListener("click", function(){
    let audio= new Audio('dice.mp3')
    audio.play()
    setTimeout(function(){
        location.reload();
    },700) 
   

} )

