class Formatter {
  //add static methods here
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  static sanitize(word) {
    return word.replace(/[^A-Za-z-' ]+/g, "");
  }
  static titleize(word) {
    let wordArray = word.split(" ");
    let exceptionWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    wordArray[0] = wordArray[0].charAt(0).toUpperCase() + wordArray[0].slice(1);
    for (let i = 1; i < wordArray.length; i++) {
      if (exceptionWords.includes(wordArray[i])) {
        continue;
      }
      else {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
      }
    }
    return wordArray.join(" ");
  }
}