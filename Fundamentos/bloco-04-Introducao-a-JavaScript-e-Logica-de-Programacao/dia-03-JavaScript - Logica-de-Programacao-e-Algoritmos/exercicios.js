// 1.

// let x = 10
// for(let i=9; i>0; i--) {
//     x = x * i    
// }

// 2.

// console.log(x);

let word = 'subinoonibus';
let result = '';
for(i=word.length; i>=0; i--) {
    result += word[i]
}

console.log(result);

// 3.1

// let array = ['java', 'C#', 'javascript', 'python', 'C', 'html', 'css'];

// let wordMaior = '';
// for(let i=0; i<array.length; i++) {
//   if(array[i].length > wordMaior.length) {
//       wordMaior = array[i];
//   }
// }

// console.log(wordMaior);

// 3.2

// let wordMenor = array[0];

//     for(let r=0; r<array.length; r++) {
//        if(array[r].length < wordMenor.length) {
//            wordMenor = array[r];
//        }
//     }

// console.log(wordMenor);

// 4

// let maior = 0
// for(let i=0; i<=50; i++){
//     for(let o=2; o<=50; o++)
//     if(i % o === 0 && i % i === 0 && i % 1 === 0 && i > maior) {
//         console.log(i)
//     }
// }
