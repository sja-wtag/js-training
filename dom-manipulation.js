// Change background color
const colorBtn = document.getElementById('changeColorBtn');
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Toggle paragraph visibility
const toggleBtn = document.getElementById('toggleTextBtn');
const description = document.getElementById('description');

toggleBtn.addEventListener('click', () => {
  description.style.display = (description.style.display === 'none') ? 'block' : 'none';
});

// Add new list items
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
const newItemInput = document.getElementById('newItemInput');

addItemBtn.addEventListener('click', () => {
  const value = newItemInput.value.trim();
  if (value !== '') {
    const li = document.createElement('li');
    li.textContent = value;
    itemList.appendChild(li);
    newItemInput.value = '';
  }
});

// Utility function to get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Increase font size
const increaseFontBtn = document.getElementById('increaseFontBtn');
let currentFontSize = 16; // default base size in px

increaseFontBtn.addEventListener('click', () => {
  currentFontSize += 2;
  
  // Apply new font size to content elements
  document.getElementById('title').style.fontSize = `${currentFontSize + 8}px`;
  document.getElementById('description').style.fontSize = `${currentFontSize}px`;
  
  const items = document.querySelectorAll('#itemList li');
  items.forEach(item => {
    item.style.fontSize = `${currentFontSize}px`;
  });
});

// Decrease font size
const decreaseFontBtn = document.getElementById('decreaseFontBtn');

decreaseFontBtn.addEventListener('click', () => {
  if (currentFontSize > 10) { // prevent font size from becoming too small
    currentFontSize -= 2;

    document.getElementById('title').style.fontSize = `${currentFontSize + 8}px`;
    document.getElementById('description').style.fontSize = `${currentFontSize}px`;

    const items = document.querySelectorAll('#itemList li');
    items.forEach(item => {
      item.style.fontSize = `${currentFontSize}px`;
    });
  }
});


