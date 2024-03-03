//  // 1) Print odd numbers in an array

// //Anonymous function

// const odd_number = function (arr)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i]%2 !=0)
//         {
//             console.log(arr[i])
//         }
//     }
// }
// odd_number([1,2,3,4,5,6,7,8,9])


// // Arrow Function

// let odd_number_in_arrow = (arr)=>
// {
//     for(let i = 0; i<arr.length;i++)
//     {
//         if(arr[i]%2!=0)
//         {
//             console.log(arr[i]);
//         }
//     }
// };
// odd_number_in_arrow([1,2,3,4,5,6,7,8,9])


// //IIFE

// (function () {
//     for (let i = 1; i <= 20; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// })();




// // 2)Convert all the strings to title caps in a string array


// //Anonymous function


//   const caps =  function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   }

// // Arrow

// titleCase = (str) => {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   } 

//   // IIFE 

//   (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   })("HI I'M ARAVIND FROM PY");





// // 3) Sum of all numbers in an array

// // anonymous

// let num = [1,2,3,4,5];
// const sum = function(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length;i++)
//     {
//         total=total+arr[i]
//     }
//     return total;
// };
// console.log(sum(num));


// // Arrow function

// const number = [1,2,3,4,5];
// let sums = 0;
// number.forEach(num=>
//     {
//         sums = sums + num;
//     });
//     console.log(sums);


// //IIFE


//     (function(array){
//         var sum = 0;
//              for(var i = 0 ; i< array.length ; i++){
//                 sum = sum + array[i];
//               }
//               console.log(sum);
//               return sum;
//         })([1,2,3,4,5])


// //4) Return all prime number in an array

// // anonymous finction

// const prime = function(number)
// {
//   if(number<=1)
//   {
//     return false;
//   }
//   for(let i = 2 ; i<number;i++)
//   {
//     if(number%i===0)
//     {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(prime(7));
// console.log(prime(10));

// // // Arrow function


// let prime_number = (num) =>
// {
//   if(num<=1)
//   {
//     return false;
//   }
//   for(let i = 2; i<num; i++)
//   {
//     if(num%i===0)
//     {
//       return false; 
//     }
//   }
//   return true;
// };
// console.log(prime_number(7));
// console.log(prime_number(10));

// // // IIFE

// (function prime_number(numbers)
// {
//   if(numbers<=1)
//   {
//     return false;
//   }
//   for(let i = 2; i<numbers; i++)
//   {
//     if(num%i===0)
//     {
//       return false; 
//     }
//   }
//   return true;
// });
// console.log(prime_number(7));
// console.log(prime_number(10));



// //5) Return all the palindrome in the array


// //Anonymous

// const palindrome = function(string)
// {
//     let len = string.length;
//     for(let i = 0; i<len/2;i++)
//     {
//         if(string[i]!==string[len-i-1])
//         {
//             return "It is not a palindrome"
//         }
//     }
//     return "It is a palindrome"
// }
// const string = prompt("Enter the string: ")
// const ans = palindrome(string);
// console.log(ans);


// // Arrow


// let palindrome = (string)=>
// {
//         let len = string.length;
//         for(let i = 0; i<len/2;i++)
//         {
//             if(string[i]!==string[len-i-1])
//             {
//                 return "It is not a palindrome"
//             }
//         }
//         return "It is a palindrome"
// }
// const string = prompt("Enter the string: ")
// const ans = palindrome(string);
// console.log(ans);


// // IIFE

// (function palindromes(string)
// {
//     let len = string.length;
//             for(let i = 0; i<len/2;i++)
//             {
//                 if(string[i]!==string[len-i-1])
//                 {
//                     return "It is not a palindrome"
//                 }
//             }
//             return "It is a palindrome"
// })
// const string = prompt("Enter the string: ")
// const ans = palindromes(string);
// console.log(ans);




// // 6)  Remove duplicates from an array

// //Anonymous


// const array = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];
// const uniqueArray = function(arr)
//  {

//     return arr.filter((value, index) => arr.indexOf(value) === index);


// }(array);
// console.log(uniqueArray); 


// // Arrow

// const array = [1,2,3,4,4,5,5,6,7];
// let duplicate_array = function(arr)
// {
//     return arr.filter((value,index) => arr.indexOf(value)===index);
// }
// let values = duplicate_array(array);
// console.log(values);

// //IIFE

// const array = [1, 2, 3, 3, 4, 4, 5];
// const uniqueArray = (function(arr)
// {

//     return arr.filter((value, index) => arr.indexOf(value) === index);


// }) (array);
// console.log(uniqueArray); 



// // 7) Rotate a array by k times

// // Anonymous 

// const Rotate = function(arr,k)
// {
//     for(let i = 0; i<k; i++)
//     {
//         const last_element = arr.pop();
//         arr.unshift(last_element);
//     }
//     return arr;
// }

// const array = [1,2,3,4,5];
// const rotation = 2;
// const rotated = Rotate(array,rotation);
// console.log(rotated);

// //Arrow


// let rotate = (arr,k)=>
// {
//     for(let i=0; i<k;i++)
//     {
//         let last_element = arr.pop();
//         arr.unshift(last_element);
//     }
//     return arr;
// }

// const array = [1,2,3,4,5];
// const rotation = 3;
// const rotated = rotate(array,rotation);
// console.log(rotated);


// // IIFE

// const rotateArray = (function() {
//     return function(arr, k) {
//         for (let i = 0; i < k; i++) {
            
//             const lastElement = arr.pop();
//             arr.unshift(lastElement);
//         }
//         return arr;
//     };
// })();


// const array = [1, 2, 3, 4, 5];
// const rotations = 4;
// const rotatedArray = rotateArray(array, rotations);
// console.log(rotatedArray);



