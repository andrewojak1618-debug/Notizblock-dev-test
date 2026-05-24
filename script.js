let myData = ['Banana', 'not Banana', 'Apple'];

function init() {
  localStorage.setItem('myCat', 'Tom');
  getFromLocalStorage();
  render();
}

function saveData() {
  let inputRef = document.getElementById('data_input');

  if (inputRef.value != '') {
    myData.push(inputRef.value);
  }

  saveToLocalStorage();

  render();
  inputRef.value = '';
}

function saveToLocalStorage() {
  localStorage.setItem('myData', JSON.stringify(myData));
}

function getFromLocalStorage() {
  let myArray = JSON.parse(localStorage.getItem('myData'));

  if (myArray != null) {
    myData = myArray;
  }
}
//myData soll nicht überschrieben werden. Sonst wäre das Array weg und render() könnte Probleme bekommen.
//Then myData should not be overwritten. Otherwise, your array would be gone and render() might have problems.
//Nur wenn wirklich gespeicherte Daten vorhanden sind, überschreibe myData
//Only if there is really stored data, overwrite myData

function render() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let index = 0; index < myData.length; index++) {
    contentRef.innerHTML += `<p>${myData[index]}</p>`;
  }
}
