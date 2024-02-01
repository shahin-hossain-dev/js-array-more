// infinity

const num = 100;
// এখানে যদি i value 0 দেই তাহলে 100 / 0 => infinity output show করবে।
for (let i = 1; i <= 10; i++) {
    console.log(`${num} / ${i} =`, num / i)
}
// তাই ভাগের ক্ষেত্রে  কখনও 0 দিয়ে ভাগ করা উচিৎ নয়।
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} / ${i} =`, num / i)
// }