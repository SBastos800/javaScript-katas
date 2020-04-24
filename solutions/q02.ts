// How do you find the duplicate number on a given integer array?
export function findDuplicate(myArray: number[]) {
    const notUnique: number[] = [];
    for (const num of myArray) {
      if (notUnique.indexOf(num) === -1) { notUnique.push(num); } else { return num; }
    }
    return undefined;
  }

