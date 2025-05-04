let books = [];

function addBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;

  if (title && author) {
    books.push({ title, author, isIssued: false });
    displayBooks();
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
  }
}

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${book.title} by ${book.author} - 
      <button onclick="toggleIssue(${index})">${book.isIssued ? 'Return' : 'Issue'}</button>`;
    bookList.appendChild(li);
  });
}

function toggleIssue(index) {
  books[index].isIssued = !books[index].isIssued;
  displayBooks();
}
