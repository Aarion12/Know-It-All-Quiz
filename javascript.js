const questions = [
    {
        question: "What is the name of the fighting style used by giraffes?",
        choices: ["Bashing", "Necking", "Swinging", "Clashing"],
        answer: 1,
    },

    {
        question: "What are the three primary colors?",
        choices: ["Magenta, Yellow, Blue", "Red, Green, Blue", "Red, Yellow, Blue", "Cyan, Magenta, Yellow, Black"],
        answer: 2,
    },

    {
        question: "What are the three primary colors?",
        choices: ["Magenta, Yellow, Blue", "Red, Green, Blue", "Red, Yellow, Blue", "Cyan, Magenta, Yellow, Black"],
        answer: 2,
    },

    {
        question: "Who is the main character in the 'Twilight Saga' series?",
        choices: ["Isabella Swann", "Edward Cullen", "Carlise Cullen", "Jacob Black"],
        answer: 0,
    },

    {
        question: "What is the latest game released in 'The Elder Scrolls' game series?",
        choices: ["The Elder Scrolls: Morrowind", "The Elder Scrolls: Skyrim", "The Elder Scrolls: Oblivion", "The Elder Scrolls: Daggerfall"],
        answer: 1,
    },

    {
        question: "Who is the character also known as the 'Mother of Dragons' in Game of 'thrones'?",
        choices: ["Kalissi", "Kulicci", "Chaleesi", "khaleesi"],
        answer: 3,
    },

    {
        question: "Who is the main character in 'The Witcher' series?",
        choices: ["Cirilla", "Yennefer", "Geralt", "Dandelion"],
        answer: 0,
    },

    {
        question: "This book features a dystopian world experiencing the erasure of information and manipulation of thought by the government written by George Orwell.",
        choices: ["Animal Farm", "1984", "1964", "Homage to Catalonia"],
        answer: 1,
    },

    {
        question: "This animal is very similar to an elephant but with fur, and lived long ago.",
        choices: ["Rhino", "African Elephant", "Ant Eater", "Wooly Mammoth"],
        answer: 3,
    },

    {
        question: "The child of your aunt is called your?",
        choices: ["Great Sibling", "No Relation", "Sibling", "Cousin"],
        answer: 3,
    },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        $('#question').text(questionData.question);
        $('#choices').empty();

        questionData.choices.forEach((choice, index) => {
            $('#choices').append(`<li data-index="${index}">${choice}</li>`);
        });
    } else {
        showResult();
    }
}

function showResult() {
    $('#questions').hide();
    $('#scores').show();
    $('#score').text(`You scored ${score} out of ${questions.length}!`);
}

$(document).on('click', '#choices li', function() {
    const selectedChoice = $(this).data('index');
    const correctChoice = questions[currentQuestion].answer;

    if (selectedChoice === correctChoice) {
        score++;
    }

    currentQuestion++;
    showQuestion();
});

$(document).ready(function() {
    showQuestion();
});
