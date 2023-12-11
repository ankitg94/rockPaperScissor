let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice')
const msg =document.querySelector('#msg')

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");


const showWinner = (userwin,userchoice,compChoice) =>{
if(userwin){
userScore++;
userScoreP.innerText=userScore;
msg.innerText=`you win! your ${userchoice} beat  ${ compChoice}`;
msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScoreP.innerText=compScore;
    msg.innerText=`You Lose! computer ${userchoice} beat ${  compChoice}`;
    msg.style.backgroundColor="red";
}
}
drawGame=()=>{
    console.log("Draw game")
}
const playGame=(userchoice)=>{
    const compChoice = gencomputerchoice()
    if(userchoice === compChoice){
        drawGame()
        msg.innerText="game Draw"
        msg.style.backgroundColor="yellow";
    }
    else{
        let userwin = true; 
        if(userchoice = "rock"){
            //scissors,paper
            userwin = compChoice === "paper" ?false:true;
        }
        else if(userchoice = "paper"){
            //rock scissors
            userwin = compChoice === "scisor" ?false:true;
        }
        else{
            userwin = compChoice === "rock" ?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
   
}
//computer choice
const gencomputerchoice = ()=>{
    let options=["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    return options[index]
}
//user choice
choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute('id');
       playGame(userchoice); 
    })
})
