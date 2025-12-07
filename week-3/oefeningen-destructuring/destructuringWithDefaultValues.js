const book = { title: "JavaScript Basics", author: "John Doe" };

// schrijf hier je code om de waarden toe te kennen aan variabelen
const {title = "JavaScript Basics", author = "John Doe", pages = 300} = book

console.log(title, author, pages);