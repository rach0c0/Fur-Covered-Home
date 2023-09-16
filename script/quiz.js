
//create functions to cycle through questions once one is answered
//back button?

//build a set or map to collect and store data from answers
//findResults.map(answersArray[1,2,3,4,5,6])

//find mode of collected data

//use an if, else if, else loop to determine result based on found mode
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

 //print name, picture, and breif description based on result


const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('aswr-btn')

let shuffledQuestions, currentQuestionIndex

answerButtonsElement.addEventListener('click', selectAnswer, () => {
    currentQuestionIndex++
    setNextQuestion()
  })


function answerSelected() {

    }

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    }

function findResults() {

    }



const questions = [
    {
     question: 'To get attention you...?',
      answers: [
        { Image: '', /*correct: true*/ },  //swing from chandalier(slayer)
        { Image: '', /*correct: false*/ }, //speak directly(Mance)
        { Image: '', /*correct: false*/ }, //sit directly on target(Walter)
        { Image: '', /*correct: false*/ }  //poke and nudge target(Axl)
      ]
    },
    {
        question: 'How would you rather spend your day?',
         answers: [
           { Image: '', /*correct: true*/ },  //staying in your happy little bubble(Slayer)
           { Image: '', /*correct: false*/ }, //Making sure others are taken care of(Mance)
           { Image: '', /*correct: false*/ }, //lounging around receiving cuddles(Walter)
           { Image: '', /*correct: false*/ }  //playing games/doing activities(Axl)
         ]
       },
       {
        question: 'You identify as an...?',
         answers: [
           { Image: '', /*correct: true*/ },  //introvert(Slayer)
           { Image: '', /*correct: false*/ }, //extrovert(Walter)
           { Image: '', /*correct: false*/ }, //ambiavert(Mance)
           { Image: '', /*correct: false*/ }  //omnivert(Axl)
         ]
       },
       {
        question: 'What is your love language?',
         answers: [
           { Image: '', /*correct: true*/ },  //Acts of Service(Slayer)
           { Image: '', /*correct: false*/ }, //giving/receiving gifts(Mance)
           { Image: '', /*correct: false*/ }, //pysical touch(walter)
           { Image: '', /*correct: false*/ }  //quality time/words of affrimation(Axl)
         ]
       },
       {
        question: 'What is your favorite genre of music?',
         answers: [
           { Image: '', /*correct: true*/ },  //rock/punk/metal(Slayer)
           { Image: '', /*correct: false*/ }, //classical/instrumental/jazz(Mance)
           { Image: '', /*correct: false*/ }, //R&B/Hip Hop/Pop(Walter)
           { Image: '', /*correct: false*/ }  //country(Axl)
         ]
       }
                   
  ]
