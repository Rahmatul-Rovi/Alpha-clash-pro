// function play(){
//   //Hide the home screen.. hide the home screen to add the class  hidden to the home section
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
  
//   //show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
// }


function continueGame(){
//step-1 generate a random alphabet
const alphabet = getRandomAlphabet();
console.log('Your Random alphabet', alphabet);

//randomly generated alphabet to the screen(show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color
setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}