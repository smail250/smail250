Data = new Date();
var sec = Data.getSeconds();
var minutes=Data.getMinutes()
var hours = Data.getHours();

function get_time() {
   sec++
   if (sec === 60) {
      minutes++;
      sec = 0;
   }
   if (minutes === 60) {
      hours++;
      minutes = 0;
   }
   console.log(hours + " " + minutes + " " + sec);

   
}
setInterval(get_time, 1000);