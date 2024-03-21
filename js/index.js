//-----------1---------------

// let arr = [ 6, 2, 1, 8, 10 ]

// function minMax(arr) {

//     let maxNum = arr[0]

//     let minNum = arr[0]

//     let sum = 0

//     let numO = []
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i]
//         }else if (arr[i] < minNum) {
//             minNum = arr[i]
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != maxNum && arr[i] != minNum) {
//             numO.push(arr[i])
//             sum += arr[i]
//         }
//     }
//     console.log(maxNum);
//     console.log(minNum);
//     console.log(numO);
//     console.log(sum);
// }

// minMax(arr);

//-----------2---------------

// var arr = ["Eldost", "Mirzeyev"]

// let name = arr.join(' ')

// console.log(arr);
// console.log(name);

//----------3---------------

// let arr = [3, 1 , 4, 5, 7 ,8 , 23132, -323, 3432, 434243423, 22,-2222233, 433]

// let max = Math.max(...arr)

// let min = Math.min(...arr)

// console.log(arr);
// console.log(max);
// console.log(min);

//-----------32---------------

// function sortfilter() {
    
//     let arr = [`salam`, `necesen`, `ne-var-ne-yox`, `evdekiler-necedi`, `hello`, `privet`, `sagol`, `dosvidaniya`]
    
//     let wor = arr.filter((word) => word.length < 12);

//     return wor;
// }

// let result = sortfilter()

// console.log(result);

//-----------23-----------

let arr = `qwertyuiopasdfghjklzxcvbnm`

arr.split(``)

console.log(arr);