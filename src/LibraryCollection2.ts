// import { describe, it, expect, beforeEach } from "vitest";
// import { LibraryCollection } from "./LibraryCollection";

// describe("LibraryCollection", () => {
//   let library: LibraryCollection;
//   let library1: LibraryCollection;

//   beforeEach(() => {
//     library = new LibraryCollection();
//   });

//   const books1 = [
//     { title: "Bibliya", author: "God", id: "BibliyaGod" },
//     { title: "TriMushketera", author: "Duma", id: "TriMushketeraDuma" },
//     { title: "Krasota", author: "God", id: "KrasotaGod" },
//   ];

//   it("expect return id book by library.addBook", () => {
//     // const books = [{title:"Bibliya",author:"God",id:"BibliyaGod"},{title:"TriMushketera",author:"Duma",id:"TriMushketeraDuma"},{title:"Krasota",author:"God",id:"KrasotaGod"}]
//     expect(library.addBook("Bibliya", "God")).toBe("BibliyaGod");
//   });

//   it("expect return avoid after remove book", () => {
//     expect(library1.removeBook("BibliyaGod")).toBe("");
//   });

//   it("expect return Array of objects", () => {
//     library1 = new LibraryCollection(books1);
//     expect(library1.getAllBooks()).toBe(books1);
//   });

// });
