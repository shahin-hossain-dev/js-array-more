
// console.log(a);
const a = [8, 1, 3, 2, 5];

for (let i = 0; i < a.length; i++) {

    for (let j = 1; j < a.length; j++) {

        if (a[i] < a[j]) {
            a[i] = a[j];
            a[j] = a[i]
        }
        else {

        }

    }
}
console.log(a);