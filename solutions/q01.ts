// 01 How do you find the missing numbers in a given integer array?

export function missingNumberInSequence(arr: number[]) {
        return arr
            .sort((a, b) => a - b)
            .reduce((r, v, i, a) =>
                (l => r.concat(Array.from({ length: v - l - 1 }, _ => ++l)))(a[i - 1]),
                []
            )        
  }
//   console.log(missingNumberInSequence([1,2,3,4,10]));

  