//How do you find all permutations of a string

export let allPermutations = (string: string) => {

    
        if (!string || typeof string !== "string"){
          return "Please enter a string"
        } else if (string.length < 2 ){
          return string
        }
      
        let permutationsArray = [] 
         
        for (let i = 0; i < string.length; i++){
          let char = string[i]
      
          if (string.indexOf(char) != i)
          continue
      
          let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
      
          for (let permutation of allPermutations(remainingChars)){
            permutationsArray.push(char + permutation) }
        }
        return permutationsArray
      
  
};