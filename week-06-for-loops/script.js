// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `And last, my mom. I do not think you know what you did.
You had my brother when you were 18 years old. Three years later, I came out.
The odds were stacked against us. Single parent with two boys by the time you were 21 years old.
Everybody told us we were not supposed to be here. We went from apartment to apartment by ourselves.
One of the best memories I had was when we moved into our first apartment, no bed, no furniture and we just sat in the living room and just hugged each other.
We thought we made it.

When something good happens to you, I do not know about you guys, but I tend to look back to what brought me here.
You wake me up in the middle of the night in the summer times, making me run up a hill, making me do pushups,
screaming at me from the sidelines of my games at 8 or 9 years old.
We was not supposed to be here. You made us believe. You kept us off the street. You put clothes on our backs, food on the table.
When you did not eat, you made sure we ate. You went to sleep hungry. You sacrificed for us. You the real MVP.`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}


  function displayShortWords() {
      const shortWordsElement = document.getElementById('short-words');

      for(let i = 0; i < wordsArray.length; i++){
        const word = wordsArray[i];

        console.log(word);
        if(word.length < 4) {
          const wordElement = document.createElement('li');
          wordElement.innerText = word;
          shortWordsElement.appendChild(wordElement);
        }
      }
}

  function displayFirstWords() {
    const firstWordsElement = document.getElementById('first-words');
    for(let i = string.startswith('a'); {


      if(word = startswith('a')



        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        firstWordsElement.appendChild(wordElement);
  }
}

  function displayThirdWords() {
    const thirdWordsElement = document.getElementById('third-words');

    for(let i = 0; i < wordsArray.length; i += 3){
      const word = wordsArray[i];

      console.log(word);
      if(word.length ) {
        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        thirdWordsElement.appendChild(wordElement);

      }
    }
}

  function displayUncommonWords() {

    let uncommonWordsElement = document.getElementById('uncommon-words');

    for(let word of wordsArray) {
      console.log(word);

      if(word != 'the' && word != 'be' && word != 'of' && word != 'to' && word != 'in' && word != 'is' && word != 'you' && word != 'it' && word != 'was' && word != 'for') {
        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        uncommonWordsElement.appendChild(wordElement);
      }
    }
}
// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayShortWords();
  displayFirstWords();
  displayThirdWords();
  displayUncommonWords();

  // TODO: Call your functions here!
}
