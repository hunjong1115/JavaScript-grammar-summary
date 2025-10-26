const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLenght = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLenght;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10 && remainingCharacters>0) {
        productNameInputElement.classList = 'warning';
        remainingCharsElement.classList = 'warning';
    }else if(remainingCharacters == 0){
        productNameInputElement.classList = 'error';
        remainingCharsElement.classList = 'error';
    }else {
        remainingCharsElement.classList.remove('warning'); // 'warning' 클래스 제거
        productNameInputElement.classList.remove('warning'); // input에서도 제거
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);