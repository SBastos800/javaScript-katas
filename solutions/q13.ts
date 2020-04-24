// How do you check if two strings are a rotation of each other?

export let areRotations = (str1: string, str2: string): boolean => {
    const str = str1 + str1;
    return str.includes(str2);
};

//=======================OR==========================

// export let areRotations = (str1: string, str2: string): boolean => {
//     if (str1.length != str2.length) return false;
//     return (str1 + str1).indexOf(str2) != -1;
// };
