// modulo operator 

const chocolate = 12;
const boxNumber = chocolate / 5;
const outOfBox = chocolate % 5;

// যদি আমার ৫  এর থেকে বড় সংখ্যা print করতে না চাই।

for (i = 0; i < 100; i++) {
    // এখানে যখন i এর মান ৬ দিয়ে ভাগ যাবে যেগুলোর ভাগ শেষ 5 এর বেশী হবে না।
    // console.log(i, i / 6, i % 6);
    console.log(i % 6);
}