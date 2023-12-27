
//create functions to cycle through questions once one is answered
//back button?

//build a set or map to collect and store data from answers
//findResults.map(answersArray[1,2,3,4,5,6])

//find mode of collected data

//use an if, else if, else loop to determine result based on found mode

 //print name, picture, and breif description based on result


const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('aswr-btn')

const storedAnswers = ['0', '0', '0', '0', '0']

//let shuffledQuestions, currentQuestionIndex

answerButtonsElement.addEventListener('click', selectAnswer, () => {
    currentQuestionIndex++
    setNextQuestion()
  } )

  backButton.addEventListener('click', () => {
    currentQuestonIndex--
    setNextQuestion()
  } )


function answerSelected() {
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
    }

function setNextQuestion() {
    resetState()
    showQuestion(currentQuestionIndex)
    }

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.innerText
    button.classList.add('btn')
    button.dataset.aswr = answer.aswr
    button.addEventListener('click' , selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  backButton.classList.add('hide')
  while (answerButtonsElement.fisrtChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

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
        { Image: './quiz-imgs/cat-swinging', /*correct: true*/ },  //swing from chandalier(slayer)
        { Image: './quiz-imgs/cat-speaking-directly', /*correct: false*/ }, //speak directly(Mance)
        { Image: './quiz-imgs/cat-sitting-on-target', /*correct: false*/ }, //sit directly on target(Walter)
        { Image: './quiz-imgs/cat-nudging-target', /*correct: false*/ }  //poke and nudge target(Axl)
      ]
    },
    {
        question: 'How would you rather spend your day?',
         answers: [
           { Image: './quiz-imgs/cat-in-own-bubble', /*correct: true*/ },  //staying in your happy little bubble(Slayer)
           { Image: './quiz-imgs/cat-taking-care-of-others', /*correct: false*/ }, //Making sure others are taken care of(Mance)
           { Image: './quiz-imgs/cat-lounging-cuddling', /*correct: false*/ }, //lounging around receiving cuddles(Walter)
           { Image: './quiz-imgs/cat-playing-games', /*correct: false*/ }  //playing games/doing activities(Axl)
         ]
       },
       {
        question: 'You identify as an...?',
         answers: [
           { Image: './quiz-imgs/cat-introvert', /*correct: true*/ },  //introvert(Slayer)
           { Image: './quiz-imgs/cat-extrovert', /*correct: false*/ }, //extrovert(Walter)
           { Image: './quiz-imgs/cat-ambiavert', /*correct: false*/ }, //ambiavert(Mance)
           { Image: './quiz-imgs/cat-omnivert', /*correct: false*/ }  //omnivert(Axl)
         ]
       },
       {
        question: 'What is your love language?',
         answers: [
           { Image: './quiz-imgs/cat-act-of-service', /*correct: true*/ },  //Acts of Service(Slayer)
           { Image: './quiz-imgs/cat-giving-gifts', /*correct: false*/ }, //giving/receiving gifts(Mance)
           { Image: './quiz-imgs/cat-physical-touch', /*correct: false*/ }, //pysical touch(walter)
           { Image: './quiz-imgs/cat-quality-time', /*correct: false*/ }  //quality time/words of affrimation(Axl)
         ]
       },
       {
        question: 'What is your favorite genre of music?',
         answers: [
           { Image: './quiz-imgs/punk-rock-cat', /*correct: true*/ },  //rock/punk/metal(Slayer)
           { Image: './quiz-imgs/classic-music-cat', /*correct: false*/ }, //classical/instrumental/jazz(Mance)
           { Image: './quiz-imgs/rnb-rap-cat', /*correct: false*/ }, //R&B/Hip Hop/Pop(Walter)
           { Image: './quiz-imgs/country-cat', /*correct: false*/ }  //country(Axl)
         ]
       }
                   
  ]
