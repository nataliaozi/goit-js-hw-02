// Zadanie 3. Sprawdzanie spamu

// Funkcja checkForSpam(message) przyjmuje ciąg znaków (parametr message),
//  sprawdza go pod kątem zawartości zabronionych słów spam i sale,
//   i zwraca wynik sprawdzenia.
//    Słowa w ciągu znaków parametru message mogą być w dowolnym przypadku,
//     na przykład SPAM lub sAlE.

// Uzupełnij kod funkcji tak, aby:

// Jeśli zostanie znalezione zabronione słowo (spam lub sale), funkcja zwraca wartość logiczną true
// Jeśli w ciągu znaków nie ma zabronionych słów, funkcja zwraca wartość logiczną false

function checkForSpam(message) {
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
