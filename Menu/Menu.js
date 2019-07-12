/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/
 
const header = document.querySelector('.header')
console.log(header);
// Create function
function createMenu (array) {
//Define elements
console.log(array)
const menuContainer = document.createElement('div');
const list = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const listItem4 = document.createElement('li');
const listItem5 = document.createElement('li');
const listItem6 = document.createElement('li');

// console.log(menuContainer, list);

// Create class lists
menuContainer.classList.add('menu');

// Add text content
list.textContent = array.menuItems
listItem1.textContent = menuItems[0]
listItem2.textContent = menuItems[1]
listItem3.textContent = menuItems[2]
listItem4.textContent = menuItems[3]
listItem5.textContent = menuItems[4]
listItem6.textContent = menuItems[5]
// Append children
menuContainer.appendChild(list);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);
list.appendChild(listItem5);
list.appendChild(listItem6);


const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', (event) => {
  menuContainer.classList.toggle('menu--open')
})

return menuContainer
}


header.appendChild(createMenu(menuItems));

// menuContainer.appendChild(list)

// menuItems.forEach( item => {
//   console.log(createMenu(menuItems));
//   header.appendChild(createMenu(menuItems))

// });










// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
// menu.classList.toggle('menu--open');
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// console.log(menu);

// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');

// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', () => {
//   toggleMenu()
// });
// console.log(menuButton);