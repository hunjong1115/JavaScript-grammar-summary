//for문
for (let i = 0; i<10 ; i++){
    console.log(i);
}

//for of문 (최근에 생김)
const users = ['hun', 'jong', 'jung'];

for(const user of users) {
    console.log(user);
}

//for in 반복문
const loggedInUser = {
    name: 'jong',
    age: 32,
    isAdmin:true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

//while문
let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');