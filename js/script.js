// close - open - reduce chatbox

const chatReduceButton = document.querySelector('.top-bar_action-reduce');
const chatDownButton = document.querySelector('.top-bar_action-down');
const chatCloseButton = document.querySelector('.top-bar_action-close');
const chatBox = document.querySelector('.chatbox');
const chatOpenButton = document.querySelector('.open-chatbox');
const sendMessage = document.querySelector('.bottom-bar_send-icon');

function hideThatChatbox() { chatBox.style.display = 'none'; }
const addClass = () => chatBox.classList.add('hide');

chatReduceButton.addEventListener('click', (e) => {
  e.preventDefault();
  addClass();
  setTimeout(() => {
    hideThatChatbox();
  }, 300);
});

chatDownButton.addEventListener('click', (e) => {
  e.preventDefault();
  addClass();
  setTimeout(() => {
    hideThatChatbox();
  }, 300);
});

chatCloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  addClass();
  setTimeout(() => {
    hideThatChatbox();
  }, 300);
  chatOpenButton.style.display = 'none';
});

chatOpenButton.addEventListener('click', (e) => {
  e.preventDefault();
  chatBox.classList.remove('hide');
  chatBox.style.display = 'grid';
});


// add text to chatbox

const getUserInput = () => {
  const inputValue = document.querySelector('.bottom-bar_input').value;
  const newText = `<b>Vous</b> : <br> ${inputValue}`;
  return newText;
};

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const hoursChecked = hours < 10 ? hours = `0${hours}` : hours;
  const minutesChecked = minutes < 10 ? minutes = `0${minutes}` : minutes;
  const timeDisplay = `${hoursChecked}:${minutesChecked}`;
  return timeDisplay;
};

const addUserAnswer = () => {
  const userInput = getUserInput();
  const timeDisplay = getTime();

  // Select the parent div
  const dialogBoxUser = document.querySelector('.dialog-box');

  // create new child div
  const dialogBoxUserDiv = document.createElement('div');
  dialogBoxUserDiv.classList.add('dialog-box_user');
  dialogBoxUser.appendChild(dialogBoxUserDiv);

  const dialogBoxUserText = document.createElement('div');
  dialogBoxUserText.classList.add('dialog-box_user-text');
  dialogBoxUserDiv.appendChild(dialogBoxUserText);

  const dialogBoxUserTime = document.createElement('div');
  dialogBoxUserTime.classList.add('dialog-box_user-time');
  dialogBoxUserDiv.appendChild(dialogBoxUserTime);

  // insert p in child divs
  const insertUserText = document.createElement('p');
  dialogBoxUserText.appendChild(insertUserText);
  insertUserText.innerHTML = userInput;

  const insertuserTime = document.createElement('p');
  dialogBoxUserTime.appendChild(insertuserTime);
  insertuserTime.innerHTML = timeDisplay;
};


sendMessage.addEventListener('click', (e) => {
  e.preventDefault();
  addUserAnswer();
  const input = document.querySelector('.bottom-bar_input');
  input.value = '';
});

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addUserAnswer();
    const input = document.querySelector('.bottom-bar_input');
    input.value = '';
  }
});
