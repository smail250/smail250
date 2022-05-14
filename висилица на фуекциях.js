

  "use strict"
  var canvas=document.getElementById("canvas")
  var ctx=canvas.getContext("2d")
  ctx.fillRect(0,0,10,10);
var pickWord = function () {
  var words = ["javascript", "cat", "name", "coding", "letherman", "candy", "boy"];
  return words[Math.floor(Math.random() * words.length)];
}
var get_ansver_array = function (word) {
  var ansver_array = [];
  for (var i = 0; i < word.length; i++){
     ansver_array[i] = "_";
  }
  return ansver_array;
}

var drawSegment = function (incorrectGuesses) {
     ctx.lineWidth = 4;

     if (incorrectGuesses === 0) {
       ctx.strokeRect(20, 20, 20, 20);
     } else if (incorrectGuesses === 1) {
       ctx.beginPath();
       ctx.moveTo(30, 40);
       ctx.lineTo(30, 80);
       ctx.stroke();
     } else if (incorrectGuesses === 2) {
       ctx.beginPath();
       ctx.moveTo(30, 80);
       ctx.lineTo(10, 110);
       ctx.stroke();
     } else if (incorrectGuesses === 3) {
       ctx.beginPath();
       ctx.moveTo(30, 80);
       ctx.lineTo(50, 110);
       ctx.stroke();
     } else if (incorrectGuesses === 4) {
       ctx.beginPath();
       ctx.moveTo(30, 60);
       ctx.lineTo(10, 50);
       ctx.stroke();
     } else if (incorrectGuesses === 5) {
       ctx.beginPath();
       ctx.moveTo(30, 60);
       ctx.lineTo(50, 50);
       ctx.stroke();
     }
   };

var show_player_progress = function (ansver_array) {
  alert(ansver_array.join(" "));
}
var get_guess = function () {
  return prompt("take guess or leave");
}


var update_game_state = function (guess, word, ansver_array) {
     var remein = 0;
     for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
        ansver_array[j] = guess;
        remein++;
     }
    
  }
     return remein

  
}


var congrats = function (word) {
  show_player_progress(ansver_array)
  alert("congrats!the word was: " + word);
}
var incorrectGuesses=0;
var word = pickWord();
var ansver_array=get_ansver_array(word)
var remeining_letters = word.length;
while (remeining_letters > 0) {
  show_player_progress(ansver_array);
  var guess = get_guess();
  if (guess === null) {
     break;
   }
   else if (guess.length !== 1) {
     alert("pick only one");
  } else {
     var correct_guess = update_game_state(guess, word, ansver_array);
     remeining_letters -= correct_guess;
     if (correct_guess==0){
        drawSegment(incorrectGuesses);
        incorrectGuesses++
     }
    
  }
}

congrats(word);
