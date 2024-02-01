/* 
    IS NaN 
*/

const numbers = [20, 10, "30", 5, "40", "price: 500"];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {

    // string গুলোকে parseInt করে number এ convert করে নেয়া হয়েছে।
    let number = parseInt(numbers[i]);
    // letter string কে তো ‍string এর convert করা যায় না।
    // console.log(typeof NaN) // 'number' তাই typeof NaN দিয়ে condition দেয়া যায় না।
    // যদি number isNan() অর্থাৎ number না এটা সত্য হয়। তাহলে ! (not) দিয়ে মিথ্যা করে আমার condition এ ঢুকবো।

    if (!isNaN(number)) {
        sum = sum + number;
    }

}
console.log(sum)

// console.log(typeof NaN)