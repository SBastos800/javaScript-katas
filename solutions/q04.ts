//How do you remove duplicate numbers from an array

export const removeDuplicates = (function(arr: number []){
    const m = {}, removeDuplicates: number [] = []
    for (let i = 0; i <arr.length; i++) {
      const v = arr[i];
      if (!m[v]) {
        removeDuplicates.push(v);
        m[v]=true;
      }
    }
    return removeDuplicates;
  });