// =========================
// Birthday Surprise Website
// =========================

// Background music
const music = document.getElementById("bgMusic");

// Function to show only one screen
function showScreen(id) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

// Start surprise
function startSurprise() {
    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

    showScreen("letter");
}

// Show gallery
function showGallery() {
    showScreen("gallery");
}

// Show puzzle
function showPuzzle() {
    showScreen("puzzle");
    createPuzzle();
}

// Show cake
function showCake() {
    showScreen("cake");
}

// Blow Candles
function blowCandles(){
document.getElementById("flame1").style.display="none";

document.getElementById("micStatus").innerHTML = "🎉 Candles Blown!";

document.getElementById("wish").classList.remove("hidden");

}


// Show gift
function showGift() {
    showScreen("gift");
}

// Open gift
function openGift() {

    document.querySelector(".gift-box").innerHTML = "💖";

    setTimeout(() => {
        showScreen("final");
    }, 1500);
}

// =========================
// Puzzle Game
// =========================

let tiles = [];

function createPuzzle(){

const board = document.getElementById("puzzle-board");

board.innerHTML="";

tiles=[1,2,3,4,5,6,7,8,0];

shuffle();

tiles.forEach(value=>{

const tile=document.createElement("div");

tile.classList.add("tile");

if(value===0){

tile.classList.add("empty");

}else{

const row=Math.floor((value-1)/3);

const col=(value-1)%3;

tile.style.backgroundPosition=`-${col*100}px -${row*100}px`;

}

tile.onclick=()=>moveTile(value);

board.appendChild(tile);

});

}

function shuffle(){

for(let i=tiles.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1));

[tiles[i],tiles[j]]=[tiles[j],tiles[i]];

}

}

function moveTile(value){

const empty=tiles.indexOf(0);

const index=tiles.indexOf(value);

const allowed=[
empty-1,
empty+1,
empty-3,
empty+3
];

if(allowed.includes(index)){

[tiles[index],tiles[empty]]=[tiles[empty],tiles[index]];

createPuzzle();

checkSolved();

}

}

function checkSolved(){

const solved=[1,2,3,4,5,6,7,8,0];

if(JSON.stringify(tiles)==JSON.stringify(solved)){

alert("🎉 Puzzle Solved!");

document.getElementById("puzzleNext").classList.remove("hidden");

}

}
// =========================
// Floating Hearts
// =========================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.bottom = "110%";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 5200);

}, 500);

// =========================
// Firework Effect (Simple)
// =========================

setInterval(() => {

    if (!document.getElementById("final").classList.contains("hidden")) {

        const firework = document.createElement("div");

        firework.innerHTML = "🎆";

        firework.style.position = "fixed";
        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * window.innerHeight + "px";
        firework.style.fontSize = "50px";

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

}, 400);
