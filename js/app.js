class Books {
  constructor(name, autor) {
    this.title = name;
    this.autor = autor;
  }

  addNewBook(books) {
    const booksBox = document.getElementById('booksBox');
    const element = document.createElement('div');
    element.innerHTML = `
        <h2 class="bookTitle">Title: ${books.title}</h2>
        <h3 class="bookAutor">Autor: ${books.autor}</h3>
        <button class="bookButton">Delete</button>
      `;
    booksBox.appendChild(element);
    
  }

//   removeBook() {
//     // Lógica para eliminar un libro
//   }

//   showMessage() {
//     // Lógica para mostrar un mensaje
//   }
}

// DOM MANIPULATION

document.getElementById('booksForm').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const autor = document.getElementById('autor').value;

  console.log(name, autor);

  const book = new Books(name, autor); // Cambiar el nombre de la variable a book

  book.addNewBook(book); // Agregar el nuevo libro al DOM

  e.preventDefault();
});
