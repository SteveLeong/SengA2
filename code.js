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
		nWords: words.length, 
		nLines: lines.length,
		nNonEmptyLines: nNElines.length,
		maxLineLength: maxLine(lines),
		averageWordLength: averageLength(words),
		palindromes: checkPalin(lowerCase),
		longestWords: findLongest(lowerCase),
		mostFrequentWords: findMostFreq(words)
	};
}

// Calculates the average word length
function averageLength(words){
	let num = words.length;
	let sum = 0;
	for(let w of words){
		sum += w.length
	}
	return (sum/num);
}

// Find the length of the longest line
function maxLine(lines){
	let max = 0;
	for(let line of lines){
		if(line.length > max){
			max = line.length
		}
	}
	return max;
}

// Finds the palindromes in the provided text
function checkPalin(words){
	let palindromes = [];
	// split each word into its characters
	// reverse the order of the characters
	// join them back, if the word stayed the same then it is a palindrome
	for(let w of words){
		if( w.length > 2 && w === w.split("").reverse().join("")){
			palindromes.push(w);
		} 
	}
	return palindromes;
}

// Finds the 10 longest words in the provided text
function findLongest(words){
	// sort by longest words
	// function calculates b length - a length and sorts the array by the result
	// https://www.w3schools.com/jsref/jsref_sort.asp
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
	words.sort(function(a,b){
		return b.length - a.length || a.localeCompare(b);
	})
	
	longWords = words.slice(0,10);  // get the top 10 longest words
	
	return longWords
}

// Finds the 10 most frequent words in the provided text
function findMostFreq(words){
	let lower = toLower(words);
	lower.sort();
	
	let dict = {};
	// put all words and corresponding frequencies in a dictionary
	for(let word of lower){
	  	if(dict.hasOwnProperty(word)){
			dict[word] += 1;
	  	}else{
			dict[word] = 1;
	  	}
	}
	
	// put the dictionary in an array of (word, freq)
	let toSort = [];
	for(var word in dict){
	  	toSort.push([word, dict[word]]);
	}
	// sort by frequency and alphabetically
	toSort.sort(function(a, b) {
	  	return b[1] - a[1] || a[0].localeCompare(b[0]);;
	});
	
	// trim down to top 10
	let top10 = toSort.slice(0, 10);
	// change format
	let freq = [];
	let string;
	for(var item of top10){
	  	string = item[0] + "(" + item[1] + ")"
	  	freq.push(string);
	}
  
	return freq
}
  
// Converts an array to lower case, removing any repeating words
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

// Converts an array to lower case
function toLower(array){
	let lowerCase = []
	for(let w of array){
		// convert word to lower case characters
		let lowWord = w.toLowerCase();
		lowerCase.push(lowWord)
  
	}
	return lowerCase;
}

// Removes all empty strings from an array
function arrayFilter(array){
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	return array.filter(function(e){if(!e.trim()){return false}return e})
}