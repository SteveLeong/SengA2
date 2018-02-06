
//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: txt.split(/\W+/).filter(function(e){return e}).length, //Split at all non-word characters (including repeating non-word characters)
        nLines: 10,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

