$(document).ready(function() {
   console.log('loaded');
   var buttons = $('.buttons span[id!="equals"]');
   var calcScreen = $('#screen');
   var myClear = $('#clear');
   var equals = $('#equals');

   if ((calcScreen).text() !== 'Error') {
      $(buttons).click(function() {
         $(calcScreen).append($(this).text());
      });
   }

   myClear.click(function() {
      $(calcScreen).empty();
   });

   equals.click(function() {
      var myExpression = calcScreen.text();
      console.log(myExpression);

      if (/\d+[+/*-]\d/.test(myExpression)) {
         console.log('expression is valid');
         var solution = eval(myExpression);
         if (isFinite(solution)) {
            $(calcScreen).empty();
            $(calcScreen).append(solution);
         } else {
            console.error("don't divide by 0!");
            $(calcScreen).empty();
            $(calcScreen).append("Error");
         }
      } else {
         console.error('invalid input');
         $(calcScreen).empty();
         $(calcScreen).append("Error");
      }

   });

});



// - Click an operand or operator button to append its corresponding text to the screen. X
//   - If the screen displays the message `Error`, don't append anything. X
// - Click the `clear` button to remove all the text from the screen. X
// - Click the `equals` button to evaluate the arithmetic expression shown in the screen. X
//   - If the expression is in format `operand(+|-|x|÷)operand`, evaluate the expression and update the screen with the result. X
//   - If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message `Error`. X
