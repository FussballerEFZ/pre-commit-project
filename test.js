// Schlecht formatierte JavaScript-Datei zum Testen von Prettier

const users = [
  { name: "John", age: 25, city: "Berlin" },
  { name: "Jane", age: 30, city: "München" },
];

function getUserInfo(userId) {
  if (userId < 0 || userId >= users.length) return null;
  const user = users[userId];
  return `User: ${user.name}, Age: ${user.age}, City: ${user.city}`;
}

// Lange Zeile die umgebrochen werden sollte
const longVariableName =
  "This is a very long string that should be broken into multiple lines by prettier when it exceeds the line length limit";

// Uneinheitliche Anführungszeichen
const mixedQuotes =
  "Single quotes" + "and double quotes" + `and template literals`;

// Schlechte Array-Formatierung
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// Unformatierte Funktion
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

// Schlecht formatiertes Objekt
const config = {
  host: "localhost",
  port: 3000,
  database: { name: "myapp", user: "admin", password: "secret" },
  features: ["auth", "logging", "monitoring"],
};

// Unformatierte async/await
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { getUserInfo, calculateTotal, fetchData };
