<a name="readme-top"></a>

  <h3><b>Portafolio</b></h3>


# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - 🚀 [Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)


# 📖 [Books App] <a name="about-project"></a>


Welcome to **Boooks App** introduces new book management functionality to the Books App, enhancing the user experience with the following features:

Add Book: Users can now add new books to the list using the provided form. The form includes input fields for the book's title and author. When the "Add Book" button is clicked, the new book is added to the list and displayed in the UI.

Remove Book: A "Delete" button is added next to each book displayed in the UI. When the user clicks the "Delete" button for a specific book, that book is removed from the list, and the corresponding <div> representing the book is removed from the UI. The data is also updated in the local storage to ensure persistence between sessions.

Display Book List: Upon loading the page, the script retrieves existing book data from the local storage and displays the list of books in the UI. Each book is presented in a separate <div> element with its title, author, and "Delete" button.

Event Delegation: To efficiently handle the "Delete" button clicks, the code employs event delegation. A single event listener is attached to the booksBox container. When a click occurs inside the container, the listener checks if the clicked element has the class "bookButton" (the class assigned to the "Delete" buttons). If true, it retrieves the data-index attribute from the button to get the index of the book to be removed. The corresponding book is then removed from the list and the UI. 


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack">HTML, CSS, JS</a>

<details>
<summary>Github</summary>
  <ul>
    <li><a href="https://github.com/">Github</a></li>
  </ul>
</details>

<details>
<summary>Html</summary>
  <ul>
    <li><a href="https://html.com/">Html</a></li>
  </ul>
</details>

<details>
<summary>Css</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">Css</a></li>
  </ul>
</details>
<details>
<summary>JavaScript</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
</details>



### Key Features <a name="key-features"></a>

- **Add linter to resolve some hmtl and css issue**
- **Add the html**
- **Add Css to styles**
- **SPA**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [See Live Demo](https://ammaralalis.github.io/BooksPage.github.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

1. Web Browser.
2. Code Editor.
3. Git - SCM
4. NodeJS
5. NPM

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/ammarAlaliS/Portafolio-codehand-solution.github.io.git
```

### Install

To install this project:

Run this command:

```sh
  cd my-project
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Run tests

To run tests, run the following command:

Run npx stylelint "**/*.{css,scss}" on the root of your directory of your project.

Run npx eslint . on the root of your directory of your project.

### Deployment

Github page deployment. live vertion: https://ammaralalis.github.io/BooksPage.github.io/
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>


👤 **Author1**

- GitHub: [@WalidAmmarAli](https://github.com/WalidAmmarAli)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ammar-ali-384625262/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

**Add javascript functionality**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

thank you Cindy Shin in Behance by Original design idea.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>


If you like this project you can download it from https://github.com/WalidAmmarAli/Microverse-Project-module1

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>
    Thank Microverse team for the opportunity to be a professional coder.
    Original design idea by Cindy Shin in Behance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
