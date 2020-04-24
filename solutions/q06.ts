//How do you find all pairs of an integer array whose sum is equal to a given number

export function findPairsWhichSum(arr: number[], target: number) { 
    let res = [];
    let indexes = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (target === arr[i] + arr[j] && !indexes.includes(i) && !indexes.includes(j)) {
                res.push([arr[i], arr[j]]);
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return res;
    }

  
  

    