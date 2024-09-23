const library = [
    {
        title: "It ends with us",
        author: "Collen Hoover",
        status: {
            own: false,
            reading: true,
            read: false
        }
    },
    {
        title: "Think like a monk",
        author: "Jay Shetty",
        status: {
            own: false,
            reading: false,
            read: true
        }
    },
    {
        title: "The monk who sold his ferrari",
        author: "Robin Sharma",
        status: {
            own: false,
            reading: true,
            read: false
        }
    }
];

// Step 2: Set all read values to true
library.forEach(book => {
    book.status.read = true;
});


// Step 3: Destructure title from the first book
const { title: firstBook } = library[0];

// Step 4: Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);

console.log(firstBook); // "It ends with us"
console.log(libraryJSON);