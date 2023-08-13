const booksBox = document.querySelector('.books');
const lists = document.querySelector('.list');
const booksForm = document.getElementById('booksForm');
let data = JSON.parse(localStorage.getItem('booksData')) || [];

class Books {
  constructor(name, autor) {
    this.title = name;
    this.autor = autor;
  }

  static addNewBook(booksData) {
    return booksData.map((book, index) => {
      const { title, autor } = book;
      return `
                <div class="booksContainers" id="book-${index}">
                    <div class="bookInfoContainer">
                      <h2 class="bookTitle">${title}</h2>
                      <h3 class="bookAutor"><spam class="spamAutor">by autor:</spam> ${autor}</h3>
                    </div>
                    <button class="bookButton" data-index="${index}">Delete</button>
                </div>
            `;
    });
  }

  static removeBook(index) {
    const bookDiv = document.getElementById(`book-${index}`);
    if (bookDiv) {
      bookDiv.remove();
      data.splice(index, 1);
      if (data.length === 0) {
        lists.style.display = 'none';
      }
      localStorage.setItem('booksData', JSON.stringify(data));
    }
  }

  static showMessage(message) {
    const messageContainer = document.querySelector('.messegeBox');
    messageContainer.innerHTML = `<h2>${message}</h2>`;
    messageContainer.style.display = 'block';
    setTimeout(() => {
      messageContainer.style.display = 'none';
    }, 2000);
  }

  static resetForm() {
    booksForm.reset();
  }
}

document.getElementById('booksForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const autor = document.getElementById('autor').value;
  const book = new Books(name, autor);
  data.push(book);
  localStorage.setItem('booksData', JSON.stringify(data));

  const booksHTML = Books.addNewBook(data);
  booksBox.innerHTML = booksHTML.join('');

  Books.showMessage('Book added successfully');
  Books.resetForm();
});

function loadAndDisplayBooks() {
  const booksHTML = Books.addNewBook(data);
  booksBox.innerHTML = booksHTML.join('');
}

function loadBooksData() {
  const savedData = localStorage.getItem('booksData');
  if (savedData) {
    data = JSON.parse(savedData);
  }
}

loadBooksData();
loadAndDisplayBooks();

booksBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('bookButton')) {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    Books.removeBook(index);
  }
});

// Navbar funtionality.

const bookLists = document.querySelector('.bookList');
const addBoook = document.querySelector('.mainBox');
const list = document.querySelector('.list');
const addNewBookWindow = document.querySelector('.addNewBookWindow');
const contactLink = document.querySelector('.contactLink');
const contact = document.querySelector('.contact');

function openList() {
  addBoook.style.display = 'none';
  contact.style.display = 'none';
  if (data.length > 0) {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}

function openAddBook() {
  list.style.display = 'none';
  addBoook.style.display = 'block';
  contact.style.display = 'none';
}

function openContactSection() {
  addBoook.style.display = 'none';
  list.style.display = 'none';
  contactLink.style.display = 'block';
  contactLink.style.display = 'flex';
  contact.style.display = 'block';
}

contactLink.addEventListener('click', openContactSection);
addNewBookWindow.addEventListener('click', openAddBook);
bookLists.addEventListener('click', openList);
