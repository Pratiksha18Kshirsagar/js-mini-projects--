let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

//2D array format!!
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("Hii");
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });

});

const reset = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

const disabledBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
}
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations winner is ${winner}`;
    disabledBoxes();
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner " + pos1val);
                showWinner(pos1val);

            }
        }

    }


}

newBtn.addEventListener("click" , reset);
resetBtn.addEventListener("click" , reset);