//How do you check if a given string is a palindrome

export let palindrome = (str: string): boolean => {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
};

// ==============OR=================


// export let palindrome = (str: string): boolean => {
//     const re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     const len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };