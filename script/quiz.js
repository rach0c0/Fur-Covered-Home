
//create functions to cycle through questions once one is answered
//back button?

//build a set or map to collect and store data from answers
//findResults.map(answersArray[1,2,3,4,5,6])

//find mode of collected data

//use an if, else if, else loop to determine result based on found mode

 //print name, picture, and breif description based on result


//const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.querySelector('question')
const answerButtonsElement = document.querySelector('aswr-btn')
const answerElement = document.querySelector('aswr')

const storedAnswers = ['0', '0', '0', '0', '0', '0']

//let shuffledQuestions, currentQuestionIndex
let currentQuestionIndex

answerButtonsElement.addEventListener('click' () => {
    currentQuestionIndex++
    setNextQuestion()
  } )

//  backButton.addEventListener('click', () => {
//    currentQuestonIndex--
//    setNextQuestion()
//  } )


function answerSelected() {
  currentQuestionIndex = currentQuestionIndex++
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
    }

//function startGame() {
  //startButton.classList.add('hide')
  //shuffledQuestions = questions.sort(() => Math.random() - .5)
//  currentQuestionIndex = 0
//  questionContainerElement.classList.remove('hide')
//  setNextQuestion()
//}

function setNextQuestion() {
   // resetState()
    showQuestion(currentQuestionIndex)
    }

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answers => {
    const button = document.createElement('button')
    button.innerText = answers.innerText
    //button.classList.add('btn')
    button.dataset.aswr = answers.aswr
    button.addEventListener('click' , selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//function resetState() {
//  clearStatusClass(document.body)
//  backButton.classList.add('hide')
//  while (answerButtonsElement.fisrtChild) {
//    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//  }
//}

function SelectAnswer(e) {
  const selectedButton = e.target
  const aswr = selectedButton.dataset.aswr
  setStatusClass(document.body, aswr)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  } )
  if ( ________ > currentQuestionIndex + 1) {

  } else {
    
  }
}

function findResults() {
/*if mode = 1{
    return Slayer
}
    else if mode = 2{
        return Mance
    }
    else if mode = 3{
        return Walter
    }
    else mode = 4{
        return You are not a cat(Axl)
    }*/
    }

//print name, picture, and breif description based on result

const questions = [
    {
     question: 'To get attention you...?',
      answers: [
        { Image1: './quiz-imgs/cat-swinging', /*correct: true*/ },  //swing from chandalier(slayer)
        { Image2: './quiz-imgs/cat-speaking-directly', /*correct: false*/ }, //speak directly(Mance)
        { Image3: './quiz-imgs/cat-sitting-on-target', /*correct: false*/ }, //sit directly on target(Walter)
        { Image4: './quiz-imgs/cat-nudging-target', /*correct: false*/ }  //poke and nudge target(Axl)
      ]
    },
    {
        question: 'How would you rather spend your day?',
         answers: [
           { Image1: './quiz-imgs/cat-in-own-bubble', /*correct: true*/ },  //staying in your happy little bubble(Slayer)
           { Image2: './quiz-imgs/cat-taking-care-of-others', /*correct: false*/ }, //Making sure others are taken care of(Mance)
           { Image3: './quiz-imgs/cat-lounging-cuddling', /*correct: false*/ }, //lounging around receiving cuddles(Walter)
           { Image4: './quiz-imgs/cat-playing-games', /*correct: false*/ }  //playing games/doing activities(Axl)
         ]
       },
       {
        question: 'You identify as an...?',
         answers: [
           { Image1: './quiz-imgs/cat-introvert', /*correct: true*/ },  //introvert(Slayer)
           { Image2: './quiz-imgs/cat-extrovert', /*correct: false*/ }, //extrovert(Walter)
           { Image3: './quiz-imgs/cat-ambiavert', /*correct: false*/ }, //ambiavert(Mance)
           { Image4: './quiz-imgs/cat-omnivert', /*correct: false*/ }  //omnivert(Axl)
         ]
       },
       {
        question: 'What is your love language?',
         answers: [
           { Image1: './quiz-imgs/cat-act-of-service', /*correct: true*/ },  //Acts of Service(Slayer)
           { Image2: './quiz-imgs/cat-giving-gifts', /*correct: false*/ }, //giving/receiving gifts(Mance)
           { Image3: './quiz-imgs/cat-physical-touch', /*correct: false*/ }, //pysical touch(walter)
           { Image4: './quiz-imgs/cat-quality-time', /*correct: false*/ }  //quality time/words of affrimation(Axl)
         ]
       },
       {
        question: 'What is your favorite genre of music?',
         answers: [
           { Image1: './quiz-imgs/punk-rock-cat', /*correct: true*/ },  //rock/punk/metal(Slayer)
           { Image2: './quiz-imgs/classic-music-cat', /*correct: false*/ }, //classical/instrumental/jazz(Mance)
           { Image3: './quiz-imgs/rnb-rap-cat', /*correct: false*/ }, //R&B/Hip Hop/Pop(Walter)
           { Image4: './quiz-imgs/country-cat', /*correct: false*/ }  //country(Axl)
         ]
       }
                   
  ]
