/*For this challenge, you'll be implementing a word search solver, 
as a function that receives a 2D array of letters and a word. The function must:

Check to find the word horizontally and vertically
Return true if the word is found, and return false if the word is not found
 */

const transpose = function(matrix) {
  // defining the variables
    const rows = matrix.length; 
    const columns = matrix[0].length;
    const newArray = [];
    //looping through the columns
    for (let i = 0; i < columns; i++) {
      //fill up the 'grid' array, with the rows
      newArray[i] = new Array(rows);
    }
    // looping through the rows
      for (let i = 0; i < rows; i++) {
        //looping through each column of the rows
      for (let j = 0; j < columns; j++) {
        newArray[j][i] = matrix[i][j];
      }
    }
    return newArray;
  };

const finding = function (string, word) {
  for (let ele of string) {
      if(ele.includes(word)) {
          return true;
      }
  }

}    

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose.map(ls => ls.join(''))

      if (finding(verticalJoin, word) || finding(horizontalJoin, word)) { 
          return true;

}   else {
  return false;
}
}

module.exports = wordSearch


const transpose = function(matrix) {
  const newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    newArray[i] = []
    comp = 0
    while(comp !== matrix.length) {
        newArray[i].push(matrix[comp][i])
    }

  
}
return newArray;
}
const finding = function (string, word) {
for (let ele of string) {
    if (ele.includes(word)) {
        return true;
    }
}

}    



const wordSearch = (letters, word) => {
  if(!letters || !word) {
      return false;
  } 
const horizontalJoin = letters.map(ls => ls.join(''))
const verticalJoin = transpose(letters.map)(ls => ls.join(''))

    if (finding(verticalJoin, word) || finding(horizontalJoin, word)) { 
        return true;

}   else {
return false;
}
}


// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     const verticalJoin = transpose.map(ls => ls.join(''))
//     for (let l of horizontalJoin) {
//         if (l.includes(word)){ 
//             return true;
//     } else {
//         return false;
//     }
// } 
//     for (let z of verticalJoin) {
//         if (z.includes(word)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }