var game = {
    q1: ["1. It is possible to sneeze while sleeping.", "true"],//true or False answer
    q2: ["2. Australia is a country as well as a continent.", "true"],
    q3: ["3. Herbivore animals consume meat.", "true"],
    q4: ["4. The national Flag of America has 50 stars.", "true"],
    q5: ["5. Jupiter is the smallest planet in the solar system.", "true"],
    q6: ["6. The Sahara desert is the biggest desert in the world.", "true"],
    q7: ["7. Crocodiles shed tears when they eat food.", "true"],
    q8: ["8. The US shares borders with three countries.", "true"],
    q9: ["9. Sharks are mammals.", "true"],
    q10: ["10. There are 365 days in a year.", "true"]
}

var currentQ = 1;
var score = 0;
var alertMessage = document.getElementById("alert");
var questionContainer = document.getElementById("question-container");
var gameContainer = document.getElementById("game-container");

function showGameQuestion() {
    questionContainer.textContent = game[`q${currentQ}`][0];
}
showGameQuestion()

function gameOver() {
    alertMessage.classList.add("alert-primary");
    alertMessage.textContent = ("You Scored " + score + "/10 Correct!")
    if (score === 10) {
        questionContainer.textContent = "Game Over! Congrats You're smarter than a 5th grader";
    }else {
        questionContainer.textContent = "Game Over! Fail you're NOT smarter than a 5th grader";
    }
}

function reset() {
    currentQ = 1;
    score = 0;
    showGameQuestion()
}

document.addEventListener("click", function (event) {
    if (event.target.className === "btn trueFalseBtn") {
        alertMessage.classList.remove("alert-success", "alert-danger");
        alertMessage.textContent = "";

        if (parseInt(currentQ) === 10) {
            gameOver();
        }
        else {
            if (event.target.id === game[`q${currentQ}`][1]) {
                score++;
                alertMessage.classList.add("alert-success");
                alertMessage.textContent = "Thats Correct!"
                console.log(score)

            }
            else {
                alertMessage.classList.add("alert-danger");
                alertMessage.textContent = "That's incorrect!"
            }

            currentQ++
            showGameQuestion();
        }
    }
    if (event.target.id === "reset") {
        alertMessage.textContent = "";
        alertMessage.classList.remove("alert-primary");
        reset()
    
    }
});
console.log(score);
