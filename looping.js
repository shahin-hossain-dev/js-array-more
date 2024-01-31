/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop
 * 5. for in ---> Object loop
 */


const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for (let friend of friends) {
    // console.log(friend)
}

// যদি array length এর চেয়ে বেশি বড় সংখ্যা দিয়ে index এর জন্য condition  দেই তাহলে, প্রথমে index অনুযায়ী মান গুলো দিয়ে, বাকি index গুলোকে undefined হিসাবে শো করবে।
/* for (let i = 0; i < 10; i++) {
    console.log(i)
    console.log(friends[i])
} */
for (let i = 0; i < friends.length; i++) {
    console.log(i)
    console.log(friends[i])
}

let i = 0;
while (i < friends.length) {
    console.log(friends[i])
    i++;
}


const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let n = 0;

while (n < numbers.length) {
    console.log(numbers[n])
    n++;
}