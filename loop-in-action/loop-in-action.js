//first example: sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberElement = document.getElementById("user-number");
  const entereNumber = userNumberElement.value;

  let sumUpToNumber = 0;
  for (let i = 0; i <= entereNumber; i++) {
    sumUpToNumber += i;
  }
  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", calculateSum);

//highlight links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}
highlightLinksButtonElement.addEventListener("click", highlightLinks);

//display user data
const dummyUserData = {
  firstName: "Max",
  lastName: "Pun",
  age: 21,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');
    
    outputDataElement.innerHTML='';

    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': '+dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}
displayUserDataButtonElement.addEventListener("click", displayUserData);


//statistics /roll the dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice(){
    return Math.floor( Math.random()*6); //Math.floor(): 5.44 =>5

}
function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number')
    const diceRollsListElement =document.getElementById('dice-rolls');
    const enteredNumber =targetNumberInputElement.value;
    diceRollsListElement.innerHTML='';

    let hasRolledTargetNumber = false;
    let numberOfRolls =0;


    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
       // if(rolledNumber == enteredNumber){
       //     hasRolledTargetNumber=true
      //  }
      numberOfRolls = numberOfRolls +1;

      const newRollListElement = document.createElement('li');
      const outputText = 'Roll '+numberOfRolls+' :'+ rolledNumber;
      newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);

      hasRolledTargetNumber=rolledNumber==enteredNumber;
    }

    const outputTotalRollsElement =document.getElementById('output-total-rolls');
    const outputTargetNumberElement =document.getElementById('output-target-number')

    outputTargetNumberElement.textContent=enteredNumber;
    outputTotalRollsElement.textContent=numberOfRolls;
}
rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);