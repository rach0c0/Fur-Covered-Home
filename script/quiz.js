//identify elements to change per click/answer selection
const questionElement = document.querySelector('.question'); //identify queston element
const imageElement = [...document.querySelectorAll('.Image')]; //identify visual answer elements
const answerElement = [...document.querySelectorAll('.text')]; //identify writtern answer element
const buttonElement =[...document.querySelectorAll('.aswr-btn')]; 

const userAnswers = [0, 0, 0, 0, 0]; //create answer index

let currentQuestionIndex = 0; //keeps track of users place in quiz
let quizActive = true; //true until last question is answered
let storedAnswers = userAnswers; //Holds answers relating to user selection

//========================Navigation upon user interaction==================================
document.querySelector('.aswr-container1').addEventListener("click", () => {
//  console.log(currentQuestionIndex) //test
    if (currentQuestionIndex <= 4) {
      showQuestion();
//      console.log('1'); //test
      storedAnswers[currentQuestionIndex] = 1;
      currentQuestionIndex++;
}    else {
//          console.log(`done: ${storedAnswers}`); //test
      findResult(storedAnswers);
    }
});

document.querySelector('.aswr-container2').addEventListener("click", () => {
//  console.log(currentQuestionIndex) //test
    if (currentQuestionIndex <= 4) {
      showQuestion();
//      console.log('2'); //test
      storedAnswers[currentQuestionIndex] = 2;
      currentQuestionIndex++;
}    else {
//      console.log(`done: ${storedAnswers}`); //test
      findResult(storedAnswers);
  }
});

document.querySelector('.aswr-container3').addEventListener("click", () => {
//  console.log(currentQuestionIndex) //test
    if (currentQuestionIndex <= 4) {
      showQuestion();
//      console.log('3'); //test
      storedAnswers[currentQuestionIndex] = 3;
      currentQuestionIndex++;
}    else {
//      console.log(`done: ${storedAnswers}`); //test
      findResult(storedAnswers);
  }
});

document.querySelector('.aswr-container4').addEventListener("click", () => {
//  console.log(currentQuestionIndex) //test
    if (currentQuestionIndex <= 4) {
      showQuestion();
//      console.log('4'); //test
      storedAnswers[currentQuestionIndex] = 4;
      currentQuestionIndex++;
}    else {
//      console.log(`done: ${storedAnswers}`); //test
      findResult(storedAnswers);
  }
});

//==============================Innerworkings?====================================
function showQuestion() {
  questionElement.innerHTML = quizContent[currentQuestionIndex].question;
  let textIndex = 0;
  let imgIndex = 0;
  answerElement.forEach(answerElement => {
    answerElement.innerHTML = quizContent[currentQuestionIndex].answers[textIndex].text;
    textIndex++
  }); 
 imageElement.forEach(imageElement => {
      imageElement.setAttribute('src', quizContent[currentQuestionIndex].answers[imgIndex].Image);
  imgIndex++
  }); 
    
};

function findResult(aswrs) {
//  let aString = result.toString();
  const mode = a => 
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
;
const result = mode([...aswrs]);
let cat = 'This is your cat';

if (result === 1) {
    cat = 'Slayer';
} else if (result === 2) {
        cat = 'Mance';
    } else if (result === 3) {
        cat = 'Walter';
    } else if (result === 4) {
        cat = 'Axl';
    };

//    console.log(cat); //test
    showResult(cat); 
  };

function showResult(result) {
  questionElement.innerHTML =`${result}!`;
  //hide all parts of quiz
  document.querySelector(".aswr-grid").classList.toggle("hide");
  buttonElement.forEach(buttonElement => {
    buttonElement.classList.toggle("hide") });
  imageElement.forEach(imageElement => {
    imageElement.classList.toggle("hide") });
  answerElement.forEach(answerElement => {
    answerElement.classList.toggle("hide") });
  //reveal result
  document.querySelector(".result-grid").classList.toggle("hide");
  document.querySelector(".catImage").classList.toggle("hide");
  document.querySelector(".description").classList.toggle("hide");

  document.querySelector('.catImage').setAttribute('src', `quiz-imgs/${result}.jpg`);
  document.querySelector('.description').innerHTML = `You are most like ${result}!`;
};

function resetState() {
//create a function that resets quiz without having to refres web page

//  clearStatusClass(document.body)
//  while (answerButtonsElement.fisrtChild) {
//    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//  }
};

//-----------------Questions & Answer blocks-----------------------------------------------

const quizContent = [
    {
     question: 'To get attention you...?',
      answers: [
        { Image: 'quiz-imgs/cat-swinging.jpg', text: 'Swing from chandalier' }, //(slayer)
        { Image: 'quiz-imgs/cat-speaking-directly.jpg', text: 'Speak directly' }, //(Mance)
        { Image: 'quiz-imgs/cat-sitting-on-target.jpg', text: 'Sit directly on target' }, //(Walter)
        { Image: 'quiz-imgs/cat-nudging-target.jpg', text: 'Poke and nudge target' } //(Axl)
      ]},
      
    {
      question: 'How would you rather spend your day?',
        answers: [
         { Image: 'quiz-imgs/cat-in-own-bubble.jpg', text: 'Staying in your happy little bubble' }, //(Slayer)
         { Image: 'quiz-imgs/cat-taking-care-of-others.jpg', text: 'Making sure others are taken care of' }, //(Mance)
         { Image: 'quiz-imgs/cat-lounging-cuddling.jpg', text: 'Lounging around receiving cuddles' }, //(Walter)
         { Image: 'quiz-imgs/cat-playing-games.jpg', text: 'Playing games/doing activities' } //(Axl)
       ]},

    {
      question: 'You identify as an...?',
       answers: [
         { Image: 'quiz-imgs/cat-introvert.jpg', text: 'Introvert' }, //(Slayer)
         { Image: 'quiz-imgs/cat-extrovert.jpg', text: 'Extrovert' }, //(Walter)
         { Image: 'quiz-imgs/cat-ambiavert.png', text: 'Ambiavert' }, //(Mance)
         { Image: 'quiz-imgs/cat-omnivert.jpg', text: 'Omnivert' } //(Axl)
       ]},

    {
      question: 'What is your love language?',
       answers: [
         { Image: 'quiz-imgs/cat-act-of-service.jpg', text: 'Acts of service' }, //(Slayer)
         { Image: 'quiz-imgs/cat-giving-gifts.jpg', text: 'Giving/Receiving gifts' }, //(Mance)
         { Image: 'quiz-imgs/cat-physical-touch.jpg', text: 'Pysical touch' }, //(walter)
         { Image: 'quiz-imgs/cat-quality-time.jpg', text: 'Quality time/Words of affrimation' } //(Axl)
       ]},

       {
        question: 'What is your favorite genre of music?',
         answers: [
           { Image: 'quiz-imgs/punk-rock-cat.jpg', text: 'Rock/Punk/Metal' }, //(Slayer)
           { Image: 'quiz-imgs/classic-music-cat.jpg', text: 'Classical/Instrumental/Jazz' }, //(Mance)
           { Image: 'quiz-imgs/rnb-rap-cat.jpg', text: 'R&B/Hiphop/Pop' }, //(Walter)
           { Image: 'quiz-imgs/country-cat.jpg', text: 'Country' } //(Axl)
         ]}
                   
  ];
