const booksBox = document.getElementById('booksBox');
const data = JSON.parse(localStorage.getItem('booksData')) || [];

class Books {
  constructor(name, autor) {
    this.title = name;
    this.autor = autor;
  }

  static addNewBook(booksData) {
    return booksData.map((book, index) => {
      const { title, autor } = book;
      return `
        <div id="book-${index}">
            <h2 class="bookTitle">Title: ${title}</h2>
            <h3 class="bookAutor">Autor: ${autor}</h3>
            <button class="bookButton" data-index="${index}">Delete</button>
        </div>
      `;
    });
  }

  // Creating functionality to remove books
  static removeBook(index) {
    const bookDiv = document.getElementById(`book-${index}`);
    if (bookDiv) {
      bookDiv.remove();
      data.splice(index, 1);
      localStorage.setItem('booksData', JSON.stringify(data));
    }
  }
}

document.getElementById('booksForm').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const autor = document.getElementById('autor').value;

  const book = new Books(name, autor);
  data.push(book);

  localStorage.setItem('booksData', JSON.stringify(data));

  const booksHTML = Books.addNewBook(data);
  booksBox.innerHTML = booksHTML.join('');

  e.preventDefault();
});

const booksHTML = Books.addNewBook(data);
booksBox.innerHTML = booksHTML.join('');

// Creating addEventListener functionality

booksBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('bookButton')) {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    Books.removeBook(index);
  }
});
