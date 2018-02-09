//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
	
	let words = arrayFilter(txt.split(/\W+/));
	let lines = txt.split(/\n/);
	let nNElines = arrayFilter(lines);
	let lowerCase = toLowerWithoutRep(words);
	return {
		nChars: txt.length,
		// Split at all non-word characters (including repeating non-word characters)
		nWords: words.length, 
		nLines: lines.length,
		nNonEmptyLines: nNElines.length,
		averageWordLength: averageLength(words),
		maxLineLength: maxLine(lines),
		palindromes: checkPalin(lowerCase),
		longestWords: findLongest(lowerCase),
		mostFrequentWords: findMostFreq(words)
	};
}

// Removes all empty strings from an array
function arrayFilter(array){
	return array.filter(function(e){if(e === " "){return false}return e})
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
		if( w.length > 2 && w === w.split("").reverse().join("")){
			palindromes.push(w);
		} 
	}
	return palindromes;
}

function findLongest(words){
// sort by longest words
// function calculates b length - a length and sorts the array by the result
// https://www.w3schools.com/jsref/jsref_sort.asp
	words.sort(function(a,b){
		return b.length - a.length
	})

	longWords = words.slice(0,10);  // get the top 10 longest words

	return longWords
}

function findMostFreq(words){
	var dictionary = {};
	// put all words and frequencies in a dictionary
	for(let word of words){
  		let low = word.toLowerCase();
  		if(dictionary.hasOwnProperty(low)){
			dictionary[low] += 1;
  		}else{
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

function toLowerWithoutRep(array){
	let lowerCase = []
	for(let w of array){
		// convert word to lower case characters
  		let lowWord = w.toLowerCase();
  		// if the word is not in the array add it
  		if(lowerCase.indexOf(lowWord) === -1){
		lowerCase.push(lowWord)
  		}
	}
	return lowerCase;
}
