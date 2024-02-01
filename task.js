/* 
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const reverse_color = [];
/* for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    reverse_color.unshift(color);
} */

for (let i = colors.length - 1; i >= 0; i--) {
    const color = colors[i];
    reverse_color.push(color);
}
// console.log(reverse_color)


/* 
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (n % 2 === 0) {
        evenNumber.push(n)
    }
}
// console.log(evenNumber);

/* 
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

const strings = ['Tom', 'Tim', 'Tin', 'Tik'];

let string = '';
for (let str of strings) {
    string = string + str;
}
// console.log(string)

/* 
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person';

const words = statement.split(' ');

let revStatement = [];
for (let word of words) {
    revStatement.unshift(word);
}
console.log(revStatement.join(' '));