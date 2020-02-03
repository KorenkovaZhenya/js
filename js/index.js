// alert('Hello JavaSCript!');

// const greeting = 'Nice to see you!';
// alert(greeting);

// let name = 'John';
// alert(name);

// name = 'Isabel';
// alert(name);

// const userName = prompt('Ener your name');
// const userGreeting = 'Nice to see you' + userName;
// aler(uuserGreeting);

const userAge = parseFloat(prompt('Enter your age'));
const nextAge = add(userAge, 1);
const ageMessage = 'Next year you will be' + nextAge;
alert(ageMessage);

if (userAge >=18) {// > <= <= === == !mm !m || &&
    alert('You are adult')
} else {
    alert('You are minor!')
}

function add(a, b) {
    const result = a + b;
    return result;
}
function relAdd(a)