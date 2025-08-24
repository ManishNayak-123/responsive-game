//js part 
let userScore = 0;
let compScore = 0;

let box1 = document.querySelectorAll(".box1");
let msg = document.querySelectorAll("#para");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

document.getElementById("btn").addEventListener("click",function()
    {
    userScore = 0;
    compScore = 0;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;
});


const getComBoxes = () =>{
    const options = ["rock", "paper", "scissor"];
    let ranIndx = Math.floor(Math.random()*3);
    return options[ranIndx];
}

const drawGame = () =>{
    console.log("game was draw");
    para.innerText = "Game was draw !";
    para.style.backgroundColor = "blue";
}
 
const showWinner = (userWin,userBoxes, compBoxes) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        para.innerText = `You Win! ${userBoxes} beats ${compBoxes}`;
        para.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        para.innerText =  `You lost! ${compBoxes} beats ${userBoxes}`;
        para.style.backgroundColor = "red";
    }
};

const playGame = (userBoxes) =>{
     console.log("boxes was clicked",userBoxes);
     const compBoxes = getComBoxes();
     console.log("boxes was clicked",compBoxes);
if(userBoxes === compBoxes){
   drawGame();
}
else{
    let userWin = true;
    if(userBoxes === "rock"){
        // paper, scissor
        userWin =  compBoxes === "paper"?false: true;
    }
    else if(userBoxes === "paper"){
        //rock, scissor
      userWin=  compBoxes === "rock"?true:false;
    }
    else{
        //rock, paper
       userWin =  compBoxes === "rock"?true:false;
    }
    showWinner(userWin,userBoxes, compBoxes);
   
}
}

box1.forEach(boxes =>{
    boxes.addEventListener("click", (e) =>{
        const userBoxes = boxes.getAttribute("id");
         playGame(userBoxes);
         
    });
});