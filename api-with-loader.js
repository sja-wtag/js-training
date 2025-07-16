const container = document.getElementById('dataContainer');
const loader = document.getElementById('loader');
const message = document.getElementById('message');

function clearUI() {
  container.innerHTML = '';
  message.textContent = '';
  loader.innerHTML = '';
}

// Loaders
function showSkeletons(count = 6) {
  loader.innerHTML = '';
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';
    container.appendChild(skeleton);
  }
}

function showSpinner() {
  container.innerHTML = '';
  loader.innerHTML = '<div class="spinner"></div>';
}

function showDots() {
  container.innerHTML = '';
  loader.innerHTML = `
    <div class="dots">
      <div></div><div></div><div></div>
    </div>
  `;
}

function showError() {
  container.innerHTML = '';
  loader.innerHTML = '';
  message.textContent = 'Something went wrong. Please try again.';
}

// Renderers
function renderUsers(users) {
  loader.innerHTML = '';
  container.innerHTML = '';
  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h4>${user.name}</h4><p>${user.email}</p>`;
    container.appendChild(card);
  });
}

function renderPosts(posts) {
  loader.innerHTML = '';
  container.innerHTML = '';
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h4>${post.title}</h4><p>${post.body.substring(0, 80)}...</p>`;
    container.appendChild(card);
  });
}

function renderComments(comments) {
  loader.innerHTML = '';
  container.innerHTML = '';
  comments.forEach(comment => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h4>${comment.name}</h4><p>${comment.body.substring(0, 100)}...</p>`;
    container.appendChild(card);
  });
}

// API Calls
async function loadUsers() {
  clearUI();
  showSkeletons();

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setTimeout(() => renderUsers(data), 1000); // simulate delay
  } catch {
    showError();
  }
}

async function loadPosts() {
  clearUI();
  showSpinner();

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();
    setTimeout(() => renderPosts(data), 1000);
  } catch {
    showError();
  }
}

async function loadComments() {
  clearUI();
  showDots();

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const data = await res.json();
    setTimeout(() => renderComments(data), 1000);
  } catch {
    showError();
  }
}
