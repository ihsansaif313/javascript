const meaning = {
    apple: "🍎سیب",
    banana: "🍌 کیلا",
    carrot: "گاجر 🥕 ",
    orange: "مالٹا 🍊 ",
    manachena: "ہمارہ گاؤں "
};
let word = prompt("Enter fruit name to find meaning in urdu");

if(word == "apple")
  console.log(meaning.apple);
else if(word == "banana")
  console.log(meaning["banana"]);
else if(word == "carrot")
  console.log(meaning["carrot"]);
else if(word == "manachena")
  console.log(meaning["manachena"]);
else
  console.log("couldn't find this word in dictionary. our team will add this word to dictionary soon");
