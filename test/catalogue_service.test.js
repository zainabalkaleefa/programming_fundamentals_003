const catalogueService = require("../app/catalogue_service");



describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});

describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
    expect(catalogueService.checkBookByTitle("The Chronicles of Narnia")).toBe(false);
  });
});

describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("return the total number of books that begin with this letter", () => {
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.getQuantity", () => {
    test("return the quantity of this item which is in stock.", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.getBooksByAuthor", () => {
    test("return an array of books for an author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([{ title: "2666", author: "Robert Bolaño", quantity: 17 },
      { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }]);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.checkQuantity", () => {
    test("return true if there are at least as many books in stock as the given quantity, and false otherwise", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    });
  });
});

