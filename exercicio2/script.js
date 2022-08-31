const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringTrim = minhaString.trim()

console.log(minhaString);
console.log(minhaString.length);

console.log(minhaStringTrim);
console.log(minhaStringTrim.length);

const minhaStringNova = minhaString.replaceAll("________", "sticioso")
console.log(minhaStringNova);