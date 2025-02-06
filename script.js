var user_score=0;
var computer_score=0;

let choices = document.querySelectorAll(".choice");
let resultMessage = document.querySelector(".result_messg");
let user_scr = document.querySelector(".user_score");
let computer_scr = document.querySelector(".computer_score");

choices.forEach((element)=>{
    element.addEventListener("click",()=>{
    let choiceId = element.getAttribute("id");
    playGame(choiceId);
   })
});

const generate_computer_choice=()=>{
    let options=["rock","paper","scissor"];
    let random_Idx=Math.floor(Math.random()*3);
    return options[random_Idx];
}

const playGame=(user_choice)=>{
    let computer_choice=generate_computer_choice();
    let winner ;

    if (user_choice===computer_choice){
        console.log("draw");
        resultMessage.innerText="Game Draw . Play Again !!";
        resultMessage.style.backgroundColor="blue"
        return;
    }
    else if(user_choice==="rock" && computer_choice==="scissor" || 
            user_choice==="scissor" && computer_choice==="paper"|| 
            user_choice==="paper" && computer_choice==="rock"
           )
    {
        winner=true;
        user_score++;
        user_scr.innerText=user_score;

    }
    else 
    {
        winner=false;
        computer_score++;
        computer_scr.innerText=computer_score;
    }
     show_Winner(winner,user_choice,computer_choice);    
};

const show_Winner = (result,user_choice,computer_choice) => {

    let message = result ? `You Win ! ${user_choice} beat ${computer_choice}` : `You Lose ! ${computer_choice} beat ${user_choice}`;
    resultMessage.innerText = message;

    if (result) {
        resultMessage.style.backgroundColor = "green"; 
    } else {
        resultMessage.style.backgroundColor = "red";  
    }
};
