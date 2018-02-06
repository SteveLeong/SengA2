//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    let words = arrayFilter(txt.split(/\W+/));
    let lines = txt.split(/\n/);
    let nNElines = arrayFilter(txt.split(/\n+/));
    return {
        nChars: txt.length,
        // Split at all non-word characters (including repeating non-word characters)
        nWords: words.length, 
        nLines: lines.length,
        nNonEmptyLines: nNElines.length,
        averageWordLength: averageLength(words),
        maxLineLength: maxLine(lines),
        palindromes: checkPalin(words),
        longestWords: findLongest(words),
        mostFrequentWords: findMostFreq(words)
    };
}

// Removes all empty strings and blank (" ") strings from an array
function arrayFilter(array){
    // if a string only contains a space(" ") return false - don't add the element to the array
    // else filter returns true - adds the element to the array - if the string is not empty
    // https://www.wikitechy.com/tutorials/javascript/remove-empty-elements-from-an-array-in
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return array.filter(function(element){if(element === " "){return false}return element})
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
        if(line.length > max){
            max = line.length
        }
    }
    return max;
}

function checkPalin(words){
    let palindromes = [];
    for(let w of words){
        // split each word into letters, reverse the array of letters and combine them
        if( w.length > 2 && w === w.split("").reverse().join("")){
            palindromes.push(w);
        }
    }
    return palindromes;
}

function findLongest(words){
    let max = 0;
    let longWords = [];
    for(let w of words){
        if(w.length > max){
            max = w.length;
            longWords = [];
            longWords.push(w);
        }
        else if(w.length === max){
            longWords.push(w);
        }
    }
    return longWords;
}

function findMostFreq(words){
    var dictionary = {};
    // put all words and frequencies in a dictionary
    for(let word of words){
        let low = word.toLowerCase();
        if(dictionary.hasOwnProperty(low)){
            dictionary[low] += 1;
        }
        else{
            dictionary[low] = 1;
        }
    }

    // trim down dictionary to top 10
    let smallest;
    while(Object.keys(dictionary).length > 10){
    let smallFreq = 10000;
    for(var item in dictionary){
        if(dictionary[item] < smallFreq){
        smallFreq = dictionary[item];
        smallest = item;
        }
    }
    delete dictionary[smallest]
    }

    // put dictionary into array with word(frequency)
    let freq = [];
    let string;
    for(var obj in dictionary){
        string = obj + "(" + dictionary[obj] + ")"
        freq.push(string);
    }

    return freq
}
