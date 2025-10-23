let paragrapElement = document.querySelector('p');

function changeParagraphText() {
    paragrapElement.textContent = 'Clicked';
    console.log('');
}

paragrapElement.addEventListener('click', changeParagraphText); //함수 호출 시 괄호 사용 x 

let putKey = document.querySelector('input');

//내가 만든 함수
// function reactPutKey(event){  
//     console.log('눌린 키:', event.key);
// } 

function retrieveUserInput(event) {  //강의버전
    // let enteredText = putKey.value;
    let enteredText = event.target.value;
    // let enteredText = event.data; -->This is different
    console.log(enteredText);
    // console.log(event.key);
}

putKey.addEventListener('input', retrieveUserInput);
