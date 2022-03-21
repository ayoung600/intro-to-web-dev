
// When this function is called, it takes the values from the inputs and adds
let name= prompt('What would you like to be called?');

let message= 'Welcome ' +  name;

alert("You Are About to Enter Madlib's Mad Libs");
console.log (message);
document.write(message);// them to the outputs.
function fillOutputs() {
  // Get the adjective input element
const adjectiveTwoInput= document.getElementById('adjective-two-input');

const adjectiveTwo = adjectiveTwoInput.value;

const nounOneInput= document.getElementById('noun-one-input');

const nounOne = nounOneInput.value;

const adjectiveThreeInput= document.getElementById('adjective-three-input');

const adjectiveThree = adjectiveThreeInput.value;

const nounTwoInput= document.getElementById('noun-two-input');

const nounTwo = nounTwoInput.value;

  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  const adjectiveTwoOutput = document.getElementById('adjective-two-output');

  adjectiveTwoOutput.innerText = adjectiveTwo;

const nounOneOutput= document.getElementById('noun-one-output');
  // Get the adjective output element
nounOneOutput.innerText = nounOne;

const adjectiveThreeOutput = document.getElementById('adjective-three-output');

adjectiveThreeOutput.innerText = adjectiveThree;

const nounTwoOutput= document.getElementById('noun-two-output');
  // Get the adjective output element
nounTwoOutput.innerText = nounTwo;

  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';

}
