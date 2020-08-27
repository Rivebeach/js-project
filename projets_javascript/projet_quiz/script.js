class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questions = [
    new Question(
        "Dans quel film John Travolta incarne-t-il un ange tombé du ciel ?",
        ["Michael", "Johnny", "Jerry", "Sam"],
        "Michael"),
    new Question(
        "Dans quel film un couple en croisière va-t-il recueillir un naufragé qui va les terrifier ?",
        ["Calme blanc", "Tempête en mer", "Le naufragé", "Les disparus"],
        "Calme blanc"),
    new Question(
        "Quel acteur français avait le premier rôle dans le film de Luchino Visconti \"Le Guépard\" ?",
        ["Jean-Paul Belmondo", "Claude Brasseur", "Jean Gabin", "Alain Delon"],
        "Alain Delon"),
    new Question(
        "Quel film à succès a réuni sur les écrans Sean Connery et Christophe Lambert ?",
        ["Highlander", "Greystoke", "Subway", "Mad Xax"],
        "Highlander"),
];

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

// Regroupement des fonctions liées à l'affichage

const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function() {
        let endQuizHTML = `<h1>Quiz terminé !</h1><h3>Votre score est de : ${quiz.score} sur ${quiz.questions.length}`;
        this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;
        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
                quiz.guess(guess);
                quizApp();
            }
        }
        for(let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i,choices[i]);
            guessHandler("guess" + i, choices[i]);
        }
    },
    progress: function(){
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    }
}

// Logique du jeu

quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}

// création d'un objet quiz

let quiz = new Quiz(questions);
quizApp();

console.log(quiz);