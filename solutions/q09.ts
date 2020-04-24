// How do you check if two strings are anagrams of each other


 export const compareAnagrams  = function(s1: string, s2: string) {
    // if length is not the same the words can't be anagrams
    if (s1.length != s2.length) return false;
    // make words comparable
    s1 = s1.toLowerCase().split("").sort().join("");
    s2 = s2.toLowerCase().split("").sort().join("");
    // check if each character match before proceeding
    for (let i = 0; i < s1.length; i++) {
        if ((s1.charAt(i)) != (s2.charAt(i))) {
            return false;
        }
    }
    // all characters match!
    return true;
};
