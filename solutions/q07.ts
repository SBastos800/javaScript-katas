// How do you reverse an array in place in Javascript

export let reverseWordsInSentence = (s: string): string => {
    return s.split(" ").reverse().join(" ");
};