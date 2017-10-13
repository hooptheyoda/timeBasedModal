/* ======= Modal ======== */
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
var thanks = document.querySelector('.thanks');
var tAgain = document.querySelector('.tAgain');
var form = document.forms[0];

var hideModal = function (){
  modal.classList.add('hidden');
}
var showModal = function () {
  modal.classList.remove('hidden');
}

var toggleModal = function () {
  modal.classList.toggle('hidden');
}

window.onload = setTimeout(showModal, 3000);

close.addEventListener('click', hideModal);

/* ======= Form ======== */
function isFName(input){
  return input.length < 14;
}
function isLName(input){
  return input.length < 14;
}
function isEmail(input){
  if (input.val().indexOf('@') >= 0) {
         return true;
    } else {
        return false;
    }
}

function validateForm(event){
  event.preventDefault();

  let firstName = event.target.firstName.value;
  let lastName = event.target.lastName.value;
  let email = event.target.email.value;

  form.classList.add('hidden');

  if(isFName(firstName) && isLName(lastName) && isEmail(email)){
    thanks.classList.remove('hidden');
  } else {
    tAgain.classList.remove('hidden');
  }
  form.reset();
}

form.addEventListener('submit', validateForm);
modal.reset();
/*Note: how to hack Pandora*/
/*
var audio = document.querySelector('audio');
window.open(audio.src);

function closeX () {
}
*/
