const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formQuery = document.getElementById('form-query');
const formButton = document.getElementById('form-button');
const wrongEmail = document.getElementById('wrong-email');
const wrongName = document.getElementById('wrong-name');

formButton.onclick = function(e) {
  e.preventDefault();
  const valitationEmail = validateEmail(formEmail) ? isCorrect(wrongEmail) : isWrong(wrongEmail);
  const valitationName = validateName(formName) ? isCorrect(wrongName) : isWrong(wrongName);
  const generalValidation = (valitationEmail && valitationName);
  console.log(generalValidation);
}

function validateEmail(email) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) ? true : false
}

function validateName(name) {
  return (name.value != "") ? true : false
}

function isWrong(p) {
  p.style.display = "inline-block";
  return false
}

function isCorrect(p) {
  p.style.display = "none";
  return true
}
