const myButton = document.querySelector('button'); 
const inputQuestion = document.querySelector('.question');
const mycontainer = document.querySelector('.mycontainer');

const newTag = document.createElement('p');
newTag.className = "mt-3 text-primary";

let myArray = ['hello']

myButton.addEventListener('click', funcQuestion);

function funcQuestion(){

    newTag.innerText = inputQuestion.value + '     ' + correctWord(3);
    mycontainer.appendChild(newTag);

    inputQuestion.value = '';

}

// methode 1:

function newWord(myLength){

    let word = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;

    for (let i = 0; i < myLength; i++) {
        
        word += characters.charAt(Math.floor(Math.random()*charactersLength));
    }

    return word;
}

// methode 2:

function correctWord(myNumber){

   let myWords = '';

    let words = 'Maybe not Not No no Yes yes My can could I Probably You you good bad ok bye are';
    let arrayWords = words.split(' ');
    let wordsNumber = arrayWords.length ;
    console.log(wordsNumber);

    for (let i = 0; i < myNumber; i++) {
        
        myWords += arrayWords[Math.floor(Math.random()*wordsNumber)] + ' ';
    }

    return myWords;
}
