let questions = [
    {
        "question":"Wer hat HTML erfunden?",
        "answer_1": "Robbie Williamson",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },
    {
        "question":"Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1,
    },
    {
        "question":"Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attrribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a-title {...}",
        "right_answer": 1,
    },
    {
        "question":"Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4,
    },
    {
        "question":"Wie viele Planeten hat unser Sonnensystem?",
        "answer_1": "7",
        "answer_2": "8",
        "answer_3": "9",
        "answer_4": "10",
        "right_answer": 2,
    },
    {
        "question":"Welcher Planet ist der größte in unserem Sonnesystem?",
        "answer_1": "Jupiter",
        "answer_2": "Mars",
        "answer_3": "Saturn",
        "answer_4": "Merkur",
        "right_answer": 1,
    },
    {
        "question":"Wer hat den Apple 1 entwicklet?",
        "answer_1": "Steve Jobs",
        "answer_2": "Steve Wozniak",
        "answer_3": "Ronald Wayne",
        "answer_4": " Daniel Kottke",
        "right_answer": 2,
    }
];

let currentQuestion = 0;


function init(){
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    console.log(question['right_answer']);

    document.getElementById('Question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

/*Own Written Code for Wrong or Right Answers
function answer(num){
    let john = document.getElementById(`answer${num}`);
    let question =  questions[currentQuestion];
    john.style.transition = 'background-color 0.3s ease';
   if(num == question['right_answer']){
    john.style.backgroundColor = '#90ee90';
    console.log('richtig');
   }
   else{
    john.style.backgroundColor = '#FFCCCB';
    console.log('falsch')
   }
}
*/ 
function answer(selection){
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log("selectedQuestionNumber is ", selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']){
        console.log('hello');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else{
        console.log('yo');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
}
