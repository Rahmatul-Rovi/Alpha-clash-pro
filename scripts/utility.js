function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
const element = document.getElementById(elementId);
element.classList.add('bg-orange-700');
}

function getRandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get  a random alphabet between 0-25
    const randomNumber = Math.random()* 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
   // console.log(index, alphabet);
    return alphabet;
}