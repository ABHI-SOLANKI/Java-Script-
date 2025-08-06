let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Changed variable name to 'turnO' for clarity
let gameActive = true; // To track if the game is still active

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

// Add event listeners to each box
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameActive || box.innerText !== "") return; // Prevent action if game is over or box is already filled

    box.innerText = turnO ? "O" : "X"; // Set the box text based on the current turn
    box.disabled = true; // Disable the box to prevent further clicks

    checkWinner(); // Check for a winner after each move
    turnO = !turnO; // Switch turns
  });
});

// Function to show the winner
const showWinner = (winner) => {
  msg.innerText = `Congrats, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  gameActive = false; // End the game
};

// Function to check for a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText; // Corrected to access innerText
    let pos2val = boxes[pattern[1]].innerText; // Corrected to access innerText
    let pos3val = boxes[pattern[2]].innerText; // Corrected to access innerText

    if (pos1val !== "" && pos1val === pos2val && pos1val === pos3val) {
      showWinner(pos1val); // Show winner if a winning pattern is found
      return; // Exit the function after finding a winner
    }
  }

  // Check for a draw
  if ([...boxes].every(box => box.innerText !== "")) {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    gameActive = false; // End the game
  }
};

// Reset game functionality
resetBtn.addEventListener("click", () => {
  boxes.forEach(box => {
    box.innerText = ""; // Clear the text in each box
    box.disabled = false; // Enable the boxes for the new game
  });
  msgContainer.classList.add("hide"); // Hide the message container
  turnO = true; // Reset the turn to O
  gameActive = true; // Reset the game state
});

// New game functionality
newGameBtn.addEventListener("click", () => {
  resetBtn.click(); // Trigger reset functionality
});
