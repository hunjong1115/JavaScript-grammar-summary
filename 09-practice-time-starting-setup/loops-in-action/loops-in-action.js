//첫번재 예: 숫자 더하기
const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 1; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber; 
    outputResultElement.style.display = 'block';
}   

calculateSumButtonElement.addEventListener('click', calculateSum);

//두번째 예:링크 강조하기
const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

//세번째 예:유저 데이터 보여주기
const dummyUserData = {
    firstName: 'Jung',
    lastName: 'HunJong',
    age: '22'
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outPutText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserDataListItemElement.textContent = outPutText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

//네번째 예: 주사위 굴리기
const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6 )+1; //Math.floor(): 5.64 -> 5
} //자바스크립트에서 random은 0~1사이에 수를 반환함

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enterNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';  //클릭 할때마다 기존에 있던 리스트의 내용들을 지움
    
    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();

        // if(rolledNumber == enterNumber){
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListElement = document.createElement('li'); //리스트에 내용추가하기
        const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber; //리스트에 내용추가하기
        newRollListElement.textContent = outputText; //리스트에 내용추가하기
        diceRollsListElement.append(newRollListElement) //리스트에 내용추가하기

        hasRolledTargetNumber = rolledNumber == enterNumber; //이렇게도 쓸 수 있음
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTotalRollsElement.textContent = numberOfRolls;
    outputTargetNumberElement.textContent = enterNumber;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);