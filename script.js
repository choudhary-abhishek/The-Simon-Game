let gameSeq = [];
let userSeq = [];



let btns = ["yellow", "red" , "purpal" , "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector('h3');
document.addEventListener("keyup",function (){
   if(started == false){
    // console.log("Game start");
    started = true;

    levelup();
   }
});



function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },350);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
    // console.log("current level : " , level);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game over ! your score was <b>${level} </b> <br>press any key to restart the Game `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    highscore();
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
let max = 0;
function highscore(){
    
    let maxs = Math.max(level,max)
    max = maxs;
    h3.innerText =`High score is ${max}`;
}