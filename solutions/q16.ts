// 16: How do you check if a string contains only digits?

export let onlyDigits = (text: string) => {
        return !/\D/.test(text);
    };


    //======================OR===========================

    // export let onlyDigits = (text: string) => {
    //     return parseFloat(text).toString() === text.toString();
    // };

    //======================OR=============================

    // export let onlyDigits = (text: string) => {
    //     for (let i = text.length - 1; i >= 0; i--) {
    //         const d = text.charCodeAt(i);
    //         if (d < 48 || d > 57) return false
    //       }
    //       return true
    // };

    //where 48 and 57 are the char codes for "0" and "9", respectively.

   