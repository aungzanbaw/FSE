// Function as return value
// Also known as currying

const addEmojis = fixed => dynamic => `${fixed} ${dynamic}`

const react = addEmojis("⚛")
const ramda = addEmojis("λ")

console.log(react("today"))
console.log(ramda("tomorrow"))