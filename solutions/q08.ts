// How do you print duplicate characters from a string

export let findDuplicates = (text: string) => {
    const arr = text.split("");
    for(var i = 0; i < arr.length; i++){
      const letterToCompare = arr[i];
      const j= i+1;
      if(letterToCompare === arr[j]){
        console.log('duplicate found');
        console.log(letterToCompare);
      }    
    } 
   
 
};