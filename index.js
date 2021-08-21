var readlineSync=require("readline-sync");
var userName=readlineSync.question("Please enter your name ");
var userScore=0;

console.log("Welcome "+userName+" let's play a quiz on Peaky Blinders");


//Play function

function play(question,answer){
  var userAnswer=readlineSync.question("Enter your answer from the given options: ");
  if(userAnswer==answer){
    console.log("Yay! right answer!");
    userScore=userScore+1;
  }else{
    console.log("Sorry! wrong answer!");
    //userScore=userScore-1;
  }

  console.log("current score: ",userScore);
  console.log("--------------------");

}

questionOne = {
  question: "In what British city was the Peaky Blinders series set in? ",
  option1: "1. Newcastle",
  option2: "2. Manchester",
  option3: "3. Birmingham",
  option4: "4. Oxford",
  answer: "Birmingham"
}

questionTwo = {
  question: "Who revealed the location of the guns hidden by Tommy to Inspector Campbell? ",
  option1: "1. Grace",
  option2: "2. Esme",
  option3: "3. John",
  option4: "4. Ada",
  answer: "Grace"
}

questionThree = {
  question: "Polly had a son do you know his name? ",
  option1: "1. Kennedy",
  option2: "2. Michael",
  option3: "3. James",
  option4: "4. Jude",
  answer: "Michael"
}

questionFour = {
  question: "Where was most part of the Peaky Blinders show actually filmed at? ",
  option1: "1. Birmingham",
  option2: "2. Bexley",
  option3: "3. Barnet",
  option4: "4. Liverpool",
  answer: "Liverpool"
}

questionFive = {
  question: "Who led the Peaky Blinders? ",
  option1: "1. Tommy",
  option2: "2. Polly",
  option3: "3. James",
  option4: "4. Michael",
  answer: "Tommy"
}

questionSix = {
  question: "Who did Tommy hire as his secretary first? ",
  option1: "1. Freddie",
  option2: "2. Danny",
  option3: "3. Lizzie",
  option4: "4. James",
  answer: "Lizzie"
}
//Array of objects

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];
//play(questionOne.question,questionOne.answer);

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i].question;
  console.log(currentQuestion)
  console.log(questions[i].option1);
  console.log(questions[i].option2);
  console.log(questions[i].option3);
  console.log(questions[i].option4);
  play(currentQuestion,questions[i].answer)
  
}

console.log("Congrats "+userName+"! you scored: ",userScore);








