
//create functions to cycle through questions once one is answered


//build a set or map to collect and store data from answers
//findResults.map(answersArray[1,2,3,4,5,6])




const questionElement = document.getElementById('question');
const imageElement = document.querySelector('mc-img');
const answerElement = document.querySelector('aswr');

const userAnswers = ['0', '0', '0', '0', '0', '0']; //creating answer index

let currentQuestionIndex = 0; //keeps track of users place in quiz
let quizActive = true; //true until last question is answered
let storedAnswers = userAnswers; //Holds answers relating to user selection

document.querySelector('aswr-btn').addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= 6) {
    showQuestion(currentQuestionIndex);
  }    else {
      showResult(userAnswers);
    } 
} );

//function setNextQuestion() {
  //  resetState()
//    showQuestion(currentQuestionIndex)
//    };

//function resetState() {
//  clearStatusClass(document.body)
//  while (answerButtonsElement.fisrtChild) {
//    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//  }
//};

function showQuestion(question) {
  questionElement.innerHTML = question.question
  question.answers.forEach(answers => {
    answerElement.innerHTML = answers.text
    imageElement.innerHTML = answers.Image
  })
};

//find mode of collected data

//use an if, else if, else loop to determine result based on found mode

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
    };

//print name, picture, and breif description based on result

function showResult(){

};

//-----------------Questions & Answer blocks------------------------------------------------

const quizContent = [
    {
     question: 'To get attention you...?',
      answers: [
        { Image: './quiz-imgs/cat-swinging', text: 'Swing from chandalier' }, //(slayer)
        { Image: './quiz-imgs/cat-speaking-directly', text: 'Speak directly' }, //(Mance)
        { Image: './quiz-imgs/cat-sitting-on-target', text: 'Sit directly on target' }, //(Walter)
        { Image: './quiz-imgs/cat-nudging-target', text: 'Poke and nudge target' }, //(Axl)
      ]
    },
    {
        question: 'How would you rather spend your day?',
         answers: [
           { Image: './quiz-imgs/cat-in-own-bubble', text: 'Staying in your happy little bubble' }, //(Slayer)
           { Image: './quiz-imgs/cat-taking-care-of-others', text: 'Making sure others are taken care of' }, //(Mance)
           { Image: './quiz-imgs/cat-lounging-cuddling', text: 'Lounging around receiving cuddles' }, //(Walter)
           { Image: './quiz-imgs/cat-playing-games', text: 'Playing games/doing activities' }, //(Axl)
         ]
       },
       {
        question: 'You identify as an...?',
         answers: [
           { Image: './quiz-imgs/cat-introvert', text: 'Introvert' }, //(Slayer)
           { Image: './quiz-imgs/cat-extrovert', text: 'Extrovert' }, //(Walter)
           { Image: './quiz-imgs/cat-ambiavert', text: 'Ambiavert' }, //(Mance)
           { Image: './quiz-imgs/cat-omnivert', text: 'Omnivert' }, //(Axl)
         ]
       },
       {
        question: 'What is your love language?',
         answers: [
           { Image: './quiz-imgs/cat-act-of-service', text: 'Acts of service' }, //(Slayer)
           { Image: './quiz-imgs/cat-giving-gifts', text: 'Giving/Receiving gifts' }, //(Mance)
           { Image: './quiz-imgs/cat-physical-touch', text: 'Pysical touch' }, //(walter)
           { Image: './quiz-imgs/cat-quality-time', text: 'Quality time/Words of affrimation' }, //(Axl)
         ]
       },
       {
        question: 'What is your favorite genre of music?',
         answers: [
           { Image: './quiz-imgs/punk-rock-cat', text: 'Rock/Punk/Metal' }, //(Slayer)
           { Image: './quiz-imgs/classic-music-cat', text: 'Classical/Instrumental/Jazz' }, //(Mance)
           { Image: './quiz-imgs/rnb-rap-cat', text: 'R&B/Hiphop/Pop' }, //(Walter)
           { Image: './quiz-imgs/country-cat', text: 'Country' }, //(Axl)
         ]
       }
                   
  ];
