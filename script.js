// create variables
var start = document.querySelector("#start")
var container = document.querySelector("#centeredContent")
var question0 = document.querySelector("#question0")
var question1 = document.querySelector("#question1")
var question2 = document.querySelector("#question2")
var question3 = document.querySelector("#question3")
var question4 = document.querySelector("#question4")
var finalScore = document.querySelector("#finalScore")
// var nickname = document.querySelector("#name")
var counter = 0;
var score = 0;
var timer = 40;
var outputNum = document.getElementById("timeLeft")
var save = document.querySelector("#save")
var savedNickname = document.querySelector("#savedNickname")
var savedScore = document.querySelector("#savedScore")



// create code quiz
var oldNickname = localStorage.getItem("Nickname");
var oldScore = localStorage.getItem("Score");
savedNickname.textContent = oldNickname;
savedScore.textContent = oldScore;

// user can click the start button

start.addEventListener("click", function () {
    // when clicked, prompt the first question
    container.setAttribute("style", "display: none;")
    question0.setAttribute("style", "display: block; text-align: center;")

    // start the timer for the game
    function ticker() {

        var oneSecond = setInterval(function () {
            if (counter < 4) {
                timer--;
                outputNum.textContent = timer;
            } else {
                outputNum.textContent = "";
            }

            // timer 0 means game over
            if (timer <= 0) {
                clearInterval(oneSecond)
                finalScore.textContent = `Your final results were ${score} points with a whopping ${timer} second(s)!`
                question0.setAttribute("style", "display: none;");
                question1.setAttribute("style", "display: none;");
                question2.setAttribute("style", "display: none;");
                question3.setAttribute("style", "display: none;");
                question4.setAttribute("style", "display: block; text-align: center;");

            }

        }, 1000)

    }
    ticker();
})
var correct = document.querySelectorAll(".correct")

function showNext() {
    document.querySelector(`#question${counter}`).setAttribute("style", "display: none;")
    document.querySelector(`#question${counter + 1}`).setAttribute("style", "display: block; text-align: center;")
}

// user can answer the question
var pTags = document.querySelectorAll("p")
// create a function for a click on answer
pTags.forEach(function (pTag) {
    // create an event listener to watch the document for clicking on answers
    pTag.addEventListener("click", function () {
        // tracks right and wrong
        if (this.classList.contains("correct")) {
            // scores go up if there is a right answer
            score += 25;
            showNext();
            counter++;
        } else {
            // user time is subtracted for a wrong answer
            timer -= 10;
            showNext();
            counter++;
        }
        // showNext() makes the next question appear
        console.log(counter)
        finalScore.textContent = `Your final results were ${score} points with a whopping ${timer} second(s) left!`
    })
})

// user can save nickname and score to local storage
save.addEventListener("click", function () {
    // use a prompt to ask for their name
    var nickname = prompt("What's your nickname?")
    // set that as the new preset name
    savedNickname.textContent = `${nickname}:`
    savedScore.textContent = score
    // save that name and score to local storage
    localStorage.setItem("Score", savedScore.textContent)
    localStorage.setItem("Nickname", savedNickname.textContent)

})






