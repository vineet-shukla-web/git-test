let str = "vineet"
// let rev = ''
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];

// }
// console.log(rev);


//using reduce=====
const result = str.split('');
console.log(result[0])
const res = str.split('').reduce((revs, char) => char + revs, '');
console.log(res);
