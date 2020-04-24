// How can a given string be reversed using recursion

// export let reverseWithRecursion = (str: string) => {
//     return str.split("").reverse().join("");
// };

//===================OR===================
//with recursion:

export let reverseWithRecursion = (str: string) => {
    if (str === "")
    return "";
  else
    return reverseWithRecursion(str.substr(1)) + str.charAt(0);
};

