// inludes() function of string
let sentence="Hi how are you?\nMy name is Ihsan Saif.";
let a=prompt("Enter word or character to find wheater sentence incudes or not.");
console.log(`The ${a.length==1?"character":"word"} ${a} ${sentence.includes(a)?"is":"is not"} included`);

//startsWith() and endsWith() function of string 
console.log(`You entered the ${a.length==1? 'character': 'word'} starts with ${a.startsWith('a')||a.startsWith('e')||a.startsWith('i')||a.startsWith('o')||a.startsWith('u')||a.startsWith('A')||a.startsWith('E')||a.startsWith('I')||a.startsWith('O')||a.startsWith('U')? "vowels": "consonants"} and ends with ${a.endsWith('a')||a.endsWith('e')||a.endsWith('i')||a.endsWith('o')||a.endsWith('u')||a.endsWith('A')||a.endsWith('E')||a.endsWith('I')||a.endsWith('O')||a.endsWith('U')? "vowels": "consonants"}`);