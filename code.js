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
		maxLineLength: maxLine(lines),
		averageWordLength: averageLength(words),
		palindromes: checkPalin(lowerCase),
		longestWords: findLongest(lowerCase),
		mostFrequentWords: findMostFreq(words)
	};
}

// Removes all empty strings from an array
function arrayFilter(array){
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	return array.filter(function(e){if(!e.trim()){return false}return e})
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

function findMostFreq(words){
	let lower = toLower(words);
	lower.sort();
	
	var dict = {};
	// put all words and frequencies in a dict
	for(let word of lower){
	  	if(dict.hasOwnProperty(word)){
			dict[word] += 1;
	  	}else{
			dict[word] = 1;
	  	}
	}

	// trim down dict to top 10
	let smallest;
	let smallFreq;
	while(Object.keys(dict).length > 10){
	  	smallFreq = 10000;
	  	for(var item in dict){
			if(dict[item] < smallFreq){
		  	smallFreq = dict[item];
		  	smallest = item;
			}
	  	}
		delete dict[smallest]
	}
	// put the dictionary in an array of (word, freq)
	let toSort = [];
	for(var word in dict){
	  	toSort.push([word, dict[word]]);
	}
	// sort by frequency
	toSort.sort(function(a, b) {
	  	return b[1] - a[1];
	});
	
	// change format
	let freq = [];
	let string;
	for(var item of toSort){
	  	string = item[0] + "(" + item[1] + ")"
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
  
  function toLower(array){
	let lowerCase = []
	for(let w of array){
	  // convert word to lower case characters
	  let lowWord = w.toLowerCase();
	  lowerCase.push(lowWord)
  
	}
	return lowerCase;
  }
