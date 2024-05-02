let hs=0;
let cs=0;
const p = document.createElement("p");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");


function computerChoice(){
    let i= Math.random()*100;
    if(i<33)
    return "rock";
    else if(i<67)
    return "paper";
     else
     return "scissors";
}
function playRound(hc,cc){
     hc=hc.toLowerCase();
     cc=cc.toLowerCase();

    if(hc===cc){
       
     p.innerText="tie";
     outcomeDiv.appendChild(p);
    }
   if(hc==="scissors" && cc==="rock"){
    
    p.innerText= "you lost";
    outcomeDiv.appendChild(p);
   cs++;
   }
   if(hc==="scissors" && cc==="paper"){
   
    p.innerText= "you won";
    outcomeDiv.appendChild(p);
    hs++;
   }
   if(hc==="rock" && cc==="paper"){
    
    p.innerText= "you lost";
    outcomeDiv.appendChild(p);
    cs++;

   }
   if(hc==="rock" && cc==="scissors"){
    
    p.innerText= "you won";
    outcomeDiv.appendChild(p);
    hs++;
   }
   if(hc==="paper" && cc==="rock"){
    
    p.innerText= "you won";
    outcomeDiv.appendChild(p);
    hs++;
   }
   if(hc==="paper" && cc==="scissors"){
    
    p.innerText= "you lost";
    outcomeDiv.appendChild(p);
    cs++;
   }
}
function checkForWinner(hs,cs){
    if(hs===5){
        const h2 = document.createElement("h2");
        h2.classList.add("player-won");
        h2.innerText = `you won ${hs} to ${cs}`;
        outcomeDiv.appendChild(h2);
    }
    if(cs===5){
        const h2 = document.createElement("h2");
        h2.classList.add("computer-won");
        h2.innerText = `the computer won ${cs} to ${hs}`;
        outcomeDiv.appendChild(h2);

    }

}

rockButton.addEventListener("click",() =>{
    const computerSelection = computerChoice();
    const playerSelection = "rock";
    playRound(playerSelection,computerSelection);
    playerScoreSpan.innerText=`player score = ${hs}`;
    computerScoreSpan.innerText=`computer score =${cs}`;
    checkForWinner(hs,cs);

})
paperButton.addEventListener("click",() =>{
    const computerSelection = computerChoice();
    const playerSelection = "paper";
    playRound(playerSelection,computerSelection);
    playerScoreSpan.innerText=`player score = ${hs}`;
    computerScoreSpan.innerText=`computer score =${cs}`;
    checkForWinner(hs,cs);

})
scissorsButton.addEventListener("click",() =>{
    const computerSelection = computerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection,computerSelection);
    playerScoreSpan.innerText=`player score = ${hs}`;
    computerScoreSpan.innerText=`computer score =${cs}`;
    checkForWinner(hs,cs);

})


