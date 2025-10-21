let age = 32;
console.log(age);
let greetingText = 'Hi i\m jong!' +
    'really!'; //역따옴표를 사용하면 문자열 안 줄바꿈을 할 수 있음 
console.log(greetingText);

let hobbies = ['Sports', 'Cooking', 'Reading']; /*자바스크립트 배열 선언*/
console.log(hobbies[0]);



let job = {
    title: 'Developer',
    place: 'New york',
    salary: 50000
}; /*자바스크립트 객체 선언*/

console.log(job.title);
// let JobTitle = 'Developer';
// let jobPlace = 'Newyork';
// let jobSalary = 50000; 위 객체 선언이랑 똑같은 의미


age = 32;
let adultYears = age - 18;
console.log(adultYears);



// function calculateAdultYears() {
//     adultYears = age + 18;  //함수 안에서 변수를 선언하면 함수 밖에서는 변수 사용 x
// }
// calculateAdultYears();
// alert(adultYears);


let totalAdultYears;
function calculateAdultYears(userAge) {  //선언시 let을 사용하지 않음
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
    name: 'hunjong', //Porperty(속성)
    greet() { //Method
        console.log('hello');
    }
};

person.greet();

console.log('jong' + ' hun');

console.log(hobbies.length);