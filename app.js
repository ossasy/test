//クイズの内容の配列を定義
const quiz = [
  {
  question: "複数の胃を持つ動物は次の内どれ",
  answers: [
    "羊",
    "豚",
    "犬",
    "馬"
  ],
  correct: "羊"
 
},{
  question: "ヒトの次に全ゲノムが公開されたほ乳類は次のうちどれ",
  answers: [
    "犬",
    "牛",
    "マウス",
    "猫"
  ],
  correct: "マウス"

},{
  question: "椎間板ヘルニアになりやすい犬種は次のうちどれ",
  answers: [
    "ウェルシュコーギーペンブローク",
    "ミニチュアダックスフンド",
    "キャバリアキングチャールズスパニエル",
    "チワワ"
  ],
  correct: "ミニチュアダックスフンド"

}];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズを出題する関数
const setupQuiz = ()=> {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


//クリックしたときのイベントについて記述する関数
const clickHandler = (e)=> {
  if(quiz[quizIndex].correct===e.target.textContent){
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert("終了!　あなたの正解数は" + score + "/" + quizLength + "です");
  }
}

//実際クリックしたときの挙動
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e)=>{
    clickHandler(e);
  })
  handlerIndex++;
}


// $button[0].addEventListener("click", (e)=>{
//   clickHandler(e);
// })

// $button[1].addEventListener("click", (e)=>{
//   clickHandler(e);
// })

// $button[2].addEventListener("click", (e)=>{
//   clickHandler(e);
// })

// $button[3].addEventListener("click", (e)=>{
//   clickHandler(e);
// })