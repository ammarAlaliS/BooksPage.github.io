const navComponent = document.querySelector('.NavComponent');

class Navbar {
  constructor(logo, bookList, addBox, contact) {
    this.logo = logo;
    this.bookList = bookList;
    this.addBox = addBox;
    this.contact = contact;
  }

  // METHODS
}

const newObj = [
  new Navbar('Awesome Books', 'List', 'Add new', 'Contact'),
];

function navBarComponent(newObj) {
  return newObj.map((info) => {
    const {
      logo, bookList, addBox, contact,
    } = info;
    return `
      <div class="navPageContainer">
        <a href="">${logo}</a>
        <ul class="links">
          <li class= "bookList">${bookList}</li>
          <li class="addNewBookWindow">${addBox}</li>
          <li class="contactLink">${contact}</li>
        </ul>
      </div>
    `;
  }).join('');
}

navComponent.innerHTML = navBarComponent(newObj);
