// type BookInfo = { id: string; title: string; author: string };

// export class LibraryCollection {
//   books: BookInfo[];

//   constructor(booksExternal: BookInfo[] = []) {
//     this.books = booksExternal;
//   }

//   addBook(title: string, author: string) {
//     const exists = this.books.some(
//       (book: BookInfo) => book.title === title && book.author === author
//     );
//     if (!exists) {
//       const id = title + author;
//       this.books.push({ title, author, id });
//       return id;
//     } else {
//       return new Error("Ошибка");
//     }
//   }
//   removeBook(id: string) {
//     const index = this.books.findIndex((book: BookInfo) => book.id === id);
//     if (index !== -1) {
//       this.books.splice(index, 1);
//     }
//   }

//   getBookInfo(id: string) {
//     return console.log(
//       this.books.find((element: BookInfo) => element.id === id)
//     );
//   }
//   getAllBooks() {
//     return this.books;
//   }
//   getBooksCount() {
//     return this.books.length;
//   }
// }
