const book = {
    id : 1,
    title : 'JavaScript',
    author : 'John Doe',
}

// const id = book.id;
// const title = book.title;
// const author = book.author;

// const { id, title, author } = book;
const {id:myId, title:myTitle, author:myAuthor} = book;

// console.log(myId, myTitle, myAuthor);

const anotherBook = {
    id: 2,
    title: "The old man and the sea",
    pubDate: "08/09/1952",
    author: {
        firstName: "Ernest",
        lastName: "Hemingway",
    },
};

// const {id, title, pubDate, author} = anotherBook;

// console.log(id, title, pubDate, author);

const {id, title, pubDate, author: {firstName, lastName}} = anotherBook;

console.log(id, title, pubDate, firstName, lastName);