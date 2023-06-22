const quizData = [
    {
        question: "Which Language runs in a web browser?",
        a: "Java",
        b: "Python",
        c: "C#",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "Who invinted Javascript?",
        a: "David",
        b: "Ecah",
        c: "Brendan Eich",
        d: "Van Russom",
        correct: "c",
    
    },
    {
        question: "What is a .NET application?",
        a: "Pain-Source",
        b: "cross-platform, open source developer platform",
        c: "Free, But not for everyone",
        d: "Non of the above",
        correct: "b",  
    },
    {
        question: "HTML Stands For",
        a: "Hyperbola",
        b: "Hypertext marks languages",
        c: "Hyper Text Markup Language",
        d: "Non of the above",
        correct: "c",
    },
    {
        question: "What are some of the common components of .NET?",
        a: ".NET Class Library",
        b: ".NET Framework",
        c: "Language Runtime",
        d: "All of the above",
        correct: "d",  
    }
]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
        
    })
    return answer
}
submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()

        }
        else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} question correctely</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})