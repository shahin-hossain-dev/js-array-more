const numbers = [10, 20, 30, 40, 50, 60];

// System: 1

// const reversed = numbers.reverse();

// System: 2
const newNumber = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    newNumber.push(num);
}

// console.log(newNumber)

// System: 3
const rev_array = [];
for (let n of numbers) {
    rev_array.unshift(n);
}
// console.log(rev_array); 

// System: 4
const reversed_num = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_num.unshift(num);
}
console.log(reversed_num);