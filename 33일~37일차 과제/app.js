const maxLength = 60;
let text = document.querySelector('input');
let labeled = document.querySelector('label');

function inputKey(event) {
    let currentLength = event.target.value.length;
    let remaining = 60;

    if (currentLength > maxLength) {
        event.target.value = event.target.value.slice(0, maxLength); // 60자로 자르기
        currentLength = maxLength; // 길이를 60으로 강제 설정
    }
    remaining = maxLength - currentLength;

    // 3. 콘솔 출력
    console.log(remaining + "/" + maxLength);

    labeled.innerHTML = remaining + '/' + maxLength;

}

text.addEventListener('input', inputKey);

