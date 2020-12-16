# CodingQuizJCC

## My Task

As you proceed in your journey to becoming a full-stack web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. 

To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework will teach you all the skills you need to succeed in this assignment.

## This Assignment Meets This Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Psuedo-code 

```
// create code quiz

    // user can click the start button

        // when clicked, prompts the first question

        // and starts the timer for the game

            // timer 0 means game over

    // user can answer the question

        // create a function for a click on answer

        // create an event listener to watch the document for clicking on answers

            // tracks right and wrong

                // scores go up if there is a right answer

                // user time is subtracted for a wrong answer

            // showNext() makes the next question appear

    // user can save their nickname and score to local storage

        // use a prompt to ask for their name

        // set that as the new preset name

        // save that name and score to local storage