// How do you print the first non-repeated character from a string

export let printFirstNonRepeat = (str: string) => {
    let index = [];
    let count;
    str.split('').forEach(function(letter, i) {
    count = 0;
    str.split('').forEach(function(latter) {
      if (letter === latter) {
        count += 1;
      }
    });
    index.push(count);
  });
//   console.log(index.indexOf(1));
  return str[index.indexOf(1)];
};



