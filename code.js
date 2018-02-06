
//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: txt.length,
        // Split at all non-word characters (including repeating non-word characters)
        // and remove all empty strings
        nWords: txt.split(/\W+/).filter(function(e){return e}).length, 
        nLines: txt.split(/\n/),
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

