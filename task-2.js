// Zadanie 2. Formatowanie wiadomości

// Zadeklaruj funkcję formatMessage(message, maxLength),
// która przyjmuje ciąg znaków (parametr message)
//  i sprawdza jego długość w stosunku do określonej maksymalnej długości (parametr maxLength).

// Uzupełnij kod funkcji w taki sposób, że:

// Jeśli długość ciągu znaków jest równa lub mniejsza niż maxLength,
// funkcja zwraca początkowy ciąg znaków bez zmian.
// Jeśli długość przekracza maxLength,
// funkcja skraca ciąg znaków do maxLength znaków,
// dodaje trzy kropki "..." na końcu i zwraca skróconą wersję.

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + "...";
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
