//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    
  let words = arrayFilter(txt.split(/\W+/));
  let lines = arrayFilter(txt.split(/\n+/));
  let nNElines = arrayFilter(txt.split(/\W+|\n/));
  return {
      nChars: txt.length,
      // Split at all non-word characters (including repeating non-word characters)
      nWords: words.length, 
      nLines: lines.length,
      nNonEmptyLines: nNElines.length,
      averageWordLength: averageLength(words),
      maxLineLength: maxLine(lines),
      palindromes: ["12321", "kayak", "mom"],
      longestWords: ["xxxxxxxxx", "123444444"],
      mostFrequentWords: ["hello(7)", "world(1)"]
  };
}

// Removes all empty strings from an array
function arrayFilter(array){
  return array.filter(function(e){return e})
}

function averageLength(words){
  let num = words.length;
  let sum = 0;
  for(let w of words){
    sum += w.length
  }
  return (sum/num);
}


function maxLine(lines){
    let max = 0;
    for(let line of lines){
      alert(line)
      if(line.length > max){
        max = line.length
      }
    }
    return max;
  }