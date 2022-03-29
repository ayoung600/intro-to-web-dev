// Array of objects representing a todo list.
// Modify this array to contain your own list.
const songsArray = [
  {label: 'Crack Music', time: "4:30", rating: "9.5/10"},
  {label: 'Heartless', time: "3:31", rating: "9.3/10"},
  {label: 'Touch the Sky', time: "3:56", rating: "9.2/10"},
  {label: 'All Falls Down', time: "3:43", rating: "9.4/10"},
  {label: 'Through The Wire', time: "3:41", rating: "8.9/10"},
  {label: 'Touch the Sky', time: "3:56", rating: "9.2/10"},
  {label: 'Flashing Lights', time: "3:57", rating: "9.0/10"},
  {label: 'Dark Fantasy', time: "4:40", rating: "9.7/10"},
  {label: 'Heard Em Say', time: "3:23", rating: "8.8/10"},
  {label: 'Good Morning', time: "3:15", rating: "9.1/10"},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  songsArray.sort((a, b) => compare(a.time, b.time));

  loadTable();
  loadShortestSong();
}

// Adds a task to the array and reloads the page content.
function addNewSong() {
  const newSongLabel = document.getElementById('label-input').value;
  const newSongTime = document.getElementById('time-input').value;
  const newSongRating = document.getElementById('rating-input').value;
  const newSong = {label: newSongLabel, time: newSongTime, rating: newSongRating };
  songsArray.push(newSong);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Label'));
  headerRowElement.appendChild(createElement('th', 'Time'));
  headerRowElement.appendChild(createElement('th', 'Rating'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < songsArray.length; i++) {
    const song = songsArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', song.label));
    rowElement.appendChild(createElement('td', song.time));
    rowElement.appendChild(createElement('td', song.rating));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestSong(){
  // Assume the first task is shortest
  let shortestSong = songsArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < songsArray.length; i++) {
    const song = songsArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(song.time < shortestSong.time) {
      shortestSong = song;
    }
  }
  document.getElementById('shortest-song').innerText = shortestSong.label;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
