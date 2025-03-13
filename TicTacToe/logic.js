let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newGame");
let reset = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true;
let count = 0;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

const showWinner = (winner) => {
    msg.innerText = `Congratulaions Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box was clicked");
            if (turnX) {
                box.innerText = "X";
                turnX = false;  
            } else{
                box.innerText = "O";
                turnX = true;
            }
            box.disabled = true;
            count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
      gameDraw();
    }
   });
});

 const resetGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();
        msgContainer.classList.add("hide");
};

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const checkWinner = () => {
    for(let pattern of winningPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != ""  && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);

            }
        }
    }
    
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);