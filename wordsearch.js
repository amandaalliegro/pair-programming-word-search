/*For this challenge, you'll be implementing a word search solver, 
as a function that receives a 2D array of letters and a word. The function must:

Check to find the word horizontally and vertically
Return true if the word is found, and return false if the word is not found
 */


 
const wordSearch = (letters, word) => { 
    if(letters.length === 0) {
        return undefined;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) { 
            return true;
        }
        
    }
    let transposed = transpose(letters)
    const verticalJoin = transposed.map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) { 
            return true;
        }
    }
    return false;

}

const transpose = function(matrix) {
    const newArray = [];
    for (let i = 0; i < matrix.length; i++) {
      newArray[i] = [];
      comp = 0;
      for (let j = 0; j < matrix[i].length; j++) {
          newArray[i].push(matrix[j][i]);
      }
    
  }

  return newArray;
  }

module.exports = wordSearch