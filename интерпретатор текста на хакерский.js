var input = "loh ina";
var output = "";
var i = 0;
while ( i < input.length)
{
   output += input[i];
   i++;
   if (input[i] === "a") {
      output += "4";
    }
   else if (input[i] === "e") {
      output += "3";
   }
   else if (input[i] === "o") {
      output += "0";
   }
   else if (input[i] === "i") {
      output += "1";
   }
   console.log(output);
}
