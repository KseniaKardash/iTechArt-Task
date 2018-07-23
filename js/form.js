const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formQuery = document.getElementById('form-query');
const formButton = document.getElementById('form-button');
const wrongEmail = document.getElementById('wrong-email');
const wrongName = document.getElementById('wrong-name');
const columnContainer = document.getElementById('columns-1-container');

function validateEmail(email) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))  ? true : false
}

function validateName(name) {
  return (name.value != "")  ? true : false
}

function isWrong(p) {
  p.style.display = "inline-block";
  return false
}

function isCorrect(p) {
  p.style.display = "none";
  return true
}

const newPost = post => {
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({'Content-Type': 'application/json'})
  }
  return fetch(' http://localhost:3000/posts', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.log(`Error ${error}`))
}

// formEmail.onkeyup = function(e){
//   const valitationEmail = validateEmail(formEmail) ? isCorrect(wrongEmail) : isWrong(wrongEmail);
//   if(formEmail.value == "")   wrongEmail.style.display = "none";
// }

const addPerson = (name, email, query) => {
  query = query || "-";
  const newArticle = document.createElement("article");
  newArticle.className = "columns-1-article";
  columnContainer.appendChild(newArticle);
  const personImg = document.createElement("img");
  personImg.src = 'img/subscribe__testimonial__person.png';
  personImg.className = ".columns-1-article img";
  const userContainer = document.createElement('div');

  const userName = document.createElement('p');
  userName.style.color = "#ca4d40";
  userName.appendChild(document.createTextNode(`Name: ${name}`));
  const userMail = document.createElement('p');
  userMail.appendChild(document.createTextNode(`Email: ${email}`));
  const userQuery = document.createElement('p');
  userQuery.appendChild(document.createTextNode(`Query: ${query}`));
  userMail.className = ".columns-1-article p";
  newArticle.appendChild(personImg);
  newArticle.appendChild(userContainer);
  userContainer.appendChild(userName);
  userContainer.appendChild(userMail);
  userContainer.appendChild(userQuery);

}


formButton.onclick = function(e) {
  e.preventDefault();

  const valitationName = validateName(formName) ? isCorrect(wrongName) : isWrong(wrongName);
  const valitationEmail = validateEmail(formEmail) ? isCorrect(wrongEmail) : isWrong(wrongEmail);
  const generalValidation = (valitationEmail && valitationName);

  console.log(formEmail.value);
  if (generalValidation) {
      addPerson(formName.value, formEmail.value,formQuery.value);
      columnContainer.className = "columns-1-scroll";
    const post = {
      name: formName.value,
      email: formEmail.value,
      query: formQuery.value
    }
    newPost(post);
    formName.value = "";
    formEmail.value = "";
    formQuery.value = "";
  }
}
