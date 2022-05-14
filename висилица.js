var words = ["javascript", "cat", "name", "coding", "letherman", "candy", "boy" ];
var word = words[Math.floor(Math.random() * words.length)];
var active_word = [];
var tryes = 0;
for (var i = 0; i < word.length; i++) {
   active_word[i] = "_";
}
var remeining_letters = word.length;
var tryes = 10;
while (remeining_letters > 0 && tryes > 0) {
   alert(active_word.join(" "));
   var guess = prompt("take a guess,or stop plaing!");
   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      alert("pick only one,asshole")
   } else {
      tryes--
      for (var j = 0; j < word.length; j++) {
         if (word[j] === guess && active_word[j]==="_" ) {
            active_word[j] = guess;
            remeining_letters--;
         }
         if (tryes === 0) {
            alert("to bad,the word was: " + word);
            break
         }
      
      }
   }
}
alert(active_word.join(" "))
alert("good job.word was " + word);
