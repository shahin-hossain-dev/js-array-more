/* 
Sort 
sort() হলো সাজানো এটা array method, এটা ছোট থেকে বড় ও বড় থেকে ছোট আকারে সাজানো হয়।
১. ascending 
2. descending 
*/

const names = ['shain', 'ahsan', 'faysal', 'mohiuddin', 'hasan'];

console.log(names.sort())


/* 
Ascending -- Smaller to Larger 
Descending ---> Larger to Smaller
*/

// JS sort() method string এর মতো ধরে sort করে এর জন্য সে প্রথম letter ধরে sort করে। নাম্বারের ক্ষেত্রে প্রথম letter ধরে sort() করলে সেটা ভালো কাজ করবে না।

// const numbers = [4, 7, 12, 8, 38, 9, 6, 1];

// const number_asc = numbers.sort(); //sort() সরাসরি number এর ক্ষেত্রে  ভালো করে কাজ করবে না।


/* 
এখানে একটা ফাংশন দেয়া হয়েছে parameter ‍a & b একটা index এর সম্পূর্ন ভ্যালু ধরবে 
এবং b কে a থেকে বিয়োগ করে দিলে প্রথম বার index[0] - index[1] / index[0] - index[2] 
এভাবে বিয়োগ করে যাবে। যেটা ছোট item গুলোকে সামনে রেখে এগিয়ে যাবে। সেক্ষেত্রে  ঠিক মতো নাম্বার গুলো sort হবে।

Descending এর জন্য শুধু b - a করে দিতে হবে।
*/

const numbers = [4, 7, 12, 8, 38, 9, 6, 1];
// Ascending sort
/* const number_asc = numbers.sort(function (a, b) {
    return a - b;
});
 */
// sort() method original arary কে চেন্জ করে দেয়। তা copy করার জন্য [...] use করতে হবে।
const number_asc = [...numbers].sort(function (a, b) {
    return a - b;
});

// console.log(number_asc)

// descending sort
const number_dsc = [...numbers].sort((a, b) => {
    return b - a;
})

console.log(number_dsc);



/* 
const a = [8, 1, 2, 3, 5, 20, 10];


a.sort(function comp(a, b) {
    if (a < b) return 1;
    else return -1;
})

console.log(a)
 */