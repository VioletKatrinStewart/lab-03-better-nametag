const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const pinkButton = document.getElementById('pink');
const pronounInput = document.getElementById('pronouns');
const pronounButton = document.getElementById('pronoun-button');
const newPronounInput = document.getElementById('my-pronouns');
const blueButton = document.getElementById('blue');
//const buttonTwo = document.body.style.backgroundColor
//document.body.style.backgroundColor('pink');

button.addEventListener('click', ()=>{
    //console.log('I am clicking');
    let newName = nameInput.value;
    firstName.textContent = newName;
});

pronounButton.addEventListener('click', ()=>{
    let newPronouns = pronounInput.value;
    newPronounInput.textContent = newPronouns;
});

pinkButton.addEventListener('click', ()=>{
    //console.log('click');
    document.body.style.color = 'hotpink';

});

blueButton.addEventListener('click', ()=>{
    document.body.style.color = 'aqua';

});