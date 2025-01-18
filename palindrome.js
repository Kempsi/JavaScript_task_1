let input = require("readline-sync");

// Kysytään käyttäjältä merkkijono
let word = input.question("Syötä merkkijono: ").toLowerCase();
let isPalindrome = false;

// Kutsutaan funktiota, joka tarkistaa että onko merkkijono palindromi
isPalindrome = CheckForPalindrome(word);

// Tulostetaan vastaus käyttäjälle
if (isPalindrome) {
  console.log("Merkkijono on palindromi");
} else {
  console.log("Merkkijono ei ole palindromi");
}

// Funktio, joka tarkistaa onko merkkijono palindromi
// Palauttaa true, jos on ja false, jos ei ole
function CheckForPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return (isPalindrome = false);
    }
  }
  return (isPalindrome = true);
}
