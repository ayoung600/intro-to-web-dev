// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 60) {
    alert("That's correct!");
    hide('question-one');
    show('question-two');
  } else if(answerOne < 60) {
    alert('Just about, but higher.');
  } else {
    alert('Longest minute in history! Lower')
  }

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 3600) {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo < 3600) {
    alert('think of 60.');
  } else {
    alert('multiply 60 and 60 trust me.')
  }

  // When this function is called, it takes the user's answer to the second
  // question and uses if statements to check whether it's correct.
  function submitAnswerThree() {
    // Get answer two's input element
    const answerThreeInput = document.getElementById('answer-three-input');
    // Get the number from answer two's input element
    const answerThree = answerThreeInput.value;

    if(answerThree == 86400) {
      alert("Amazing!");
      hide('question-three');
      show('question-four');
    } else if(answerThree < 86400) {
      alert('The answer is higher! Think Big!.');
    } else {
      alert('The answer is lower.')
    }

    // When this function is called, it takes the user's answer to the first
    // question and uses if statements to check whether it's correct.
    function submitAnswerFour() {
      // Get answer one's input element
      const answerFourInput = document.getElementById('answer-four-input');
      // Get the text from answer one's input element
      const answerFour = answerFourInput.value;

      if(answerFour == 604800) {
        alert("Fantastic!");
        hide('question-four');
        show('question-five');
      } else if(answerFour < 604800) {
        alert('Much Higher.');
      } else {
        alert('Thinking Big but lower.')
      }

      // When this function is called, it takes the user's answer to the first
      // question and uses if statements to check whether it's correct.
      function submitAnswerFive() {
        // Get answer one's input element
        const answerFiveInput = document.getElementById('answer-five-input');
        // Get the text from answer one's input element
        const answerFive = answerFiveInput.value;

        if(answerFive == 2628002) {
          alert("No way you got that without looking it up!");
          hide('question-five');
          show('question-six');
        } else if(answerFive < 2628002) {
          alert('it is much much higher!');
        } else {
          alert('Thinking a little too big but lower.')
        }
        // When this function is called, it takes the user's answer to the first
        // question and uses if statements to check whether it's correct.
        function submitAnswerSix() {
          // Get answer one's input element
          const answerSixInput = document.getElementById('answer-six-input');
          // Get the text from answer one's input element
          const answerSix = answerSixInput.value;

          if(answerSix == 31536000) {
            alert("Amazing! This is the largest answer you will have throughout the quiz.");
            hide('question-six');
            show('question-seven');
          } else if(answerSix < 31536000) {
            alert('it is extremely higher!');
          } else {
            alert('Now you are guessing, which is fair.')
          }

          // When this function is called, it takes the user's answer to the first
          // question and uses if statements to check whether it's correct.
          function submitAnswerSeven() {
            // Get answer one's input element
            const answerSevenInput = document.getElementById('answer-seven-input');
            // Get the text from answer one's input element
            const answerSeven = answerSevenInput.value;

            if(answerSeven == 1440) {
              alert("Seconds and Minutes!? You are unstoppable!");
              hide('question-seven');
              show('question-eight');
            } else if(answerSeven < 1440) {
              alert('Higher, think of the 15th century');
            } else {
              alert('15th century!!')
            }

            // When this function is called, it takes the user's answer to the first
            // question and uses if statements to check whether it's correct.
            function submitAnswerEight() {
              // Get answer one's input element
              const answerEightInput = document.getElementById('answer-eight-input');
              // Get the text from answer one's input element
              const answerEight = answerEightInput.value;

              if(answerEight == 10080) {
                alert("Right! Those 45 minute episodes do not seem so long now.");
                hide('question-Eight');
                show('question-Nine');
              } else if(answerEight < 10080) {
                alert('Larger, over 10k');
              } else {
                alert('Only a little over 10k')
              }

              // When this function is called, it takes the user's answer to the first
              // question and uses if statements to check whether it's correct.
              function submitAnswerNine() {
                // Get answer one's input element
                const answerNineInput = document.getElementById('answer-nine-input');
                // Get the text from answer one's input element
                const answerNine = answerNineInput.value;

                if(answerNine == 43800) {
                  alert("Correct! Yet months still fly by!");
                  hide('question-Nine');
                  show('question-Ten');
                } else if(answerNine < 43800) {
                  alert('Higher!');
                } else {
                  alert('think of four weeks and some change.')
                }

                // When this function is called, it takes the user's answer to the first
                // question and uses if statements to check whether it's correct.
                function submitAnswerTen() {
                  // Get answer one's input element
                  const answerTenInput = document.getElementById('answer-ten-input');
                  // Get the text from answer one's input element
                  const answerTen = answerTenInput.value;

                  if(answerTen == 525600) {
                    alert("You did it! You aged so many seconds just from this quiz.");
                    hide('question-Ten');
                    show('done');
                  } else if(answerTen < 525600) {
                    alert('Way higher');
                  } else {
                    alert('just a little over half a million.')
                  }
// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}
// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
};
