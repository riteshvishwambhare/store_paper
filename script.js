let userScore = 0;
let compScore = 0;

  let choices = document.querySelectorAll(".choice"); 
  let msg = document.querySelector("#msg");

  const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");



  const  genCompChoice = () => {
            const options = ["rock","paper", "scissors"];
          const randIdx = Math.floor(Math.random()*3);
            return options[randIdx];

  }

     const drawGame =() => {
        msg.innerText= "Game was Draw. Play";
        msg.style.backgroundColor = "black";
     }


     const showWinner = (userWin , userChoice , comChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win! your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText= `You Lose. ${comChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }

     };

    const playGame = (userChoice) => {
       
        // generate computer choice
        const comChoice = genCompChoice();

        if (userChoice  === comChoice ){
                drawGame();

            } else {
                let userWin = true;
                //all thise property applied on UserWin
                if( userChoice === "rock"){
                    //scissors, paper
                    userWin = comChoice === "paper"? false : true;
                }
                else if( userChoice === "paper"){
                    //rock, scissors
                    userWin = comChoice === "scissors"? false : true;
                }
                else{
                    //rock, paper
                    // users have "scissors"
                   userWin = comChoice === "rock"? false : true;
                }
                showWinner(userWin , userChoice, comChoice);
            }

    };



    choices.forEach((choice) => {
    choice.addEventListener("click", () =>  {
        const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
  });
