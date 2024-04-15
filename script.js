const btnPosts = document.getElementById('btn-posts');
const btnComments = document.getElementById('btn-comments');
const btnAlbums = document.getElementById('btn-albums');
const btnPhotos = document.getElementById('btn-photos');

const postsSection = document.getElementById('posts-section');
const commentsSection = document.getElementById('comments-section');
const albumsSection = document.getElementById('albums-section');
const photosSection = document.getElementById('photos-section');

const postsTable = document.getElementById('posts-table');
const commentsTable = document.getElementById('comments-table');
const albumsTable = document.getElementById('albums-table');
const photosTable = document.getElementById('photos-table');

// Funkcja do pobierania i wyświetlania postów
async function fetchAndDisplayPosts() {
    // Pobierz dane z API JSONPlaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await response.json();

    // Wyświetl posty w tabeli
    postsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
                <th>Użytkownik</th>
            </tr>
        </thead>
        <tbody>`;
    for (const post of postsData) {
        postsTable.innerHTML += `<tr>
                <td><span class="math-inline">\{post\.id\}</td\>
<td\></span>${post.title}</td>
                <td><span class="math-inline">\{post\.body\}</td\>
<td\></span>${post.userId}</td>
            </tr>`;
    }
    postsTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania komentarzy
async function fetchAndDisplayComments() {
    // Pobierz dane z API JSONPlaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const commentsData = await response.json();

    // Wyświetl komentarze w tabeli
    commentsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Post ID</th>
                <th>Imię</th>
                <th>Treść</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>`;
    for (const comment of commentsData) {
        commentsTable.innerHTML += `<tr>
                <td><span class="math-inline">\{comment\.id\}</td\>
<td\></span>${comment.postId}</td>
                <td><span class="math-inline">\{comment\.name\}</td\>
<td\></span>${comment.body}</td>
                <td>${comment.email}</td>
            </tr>`;
    }
    commentsTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania albumów
async function fetchAndDisplayAlbums() {
    // Pobierz dane z API JSONPlaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albumsData = await response.json();

    // Wyświetl albumy w tabeli
    albumsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Użytkownik ID</th>
                <th>Tytuł</th>
            </tr>
        </thead>
        <tbody>`;
    for (const album of albumsData) {
        albumsTable.innerHTML += `<tr>
                <td><span class="math-inline">\{album\.id\}</td\>
<td\></span>${album.userId}</td>
                <td>${album.title}</td>
            </tr>`;
    }
    albumsTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania zdjęć z limitem
async function fetchAndDisplayPhotos() {
    // Pobierz dane z API JSONPlaceholder z limitem
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photosData = await response.json();

    // Wyświetl zdjęcia w tabeli
    photosTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Album ID</th>
                <th>Tytuł</th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody>`;
    for (const photo of photosData) {
        photosTable.innerHTML += `<tr>
                <td><span class="math-inline">${photo.id}</td\>
<td\></span>${photo.albumId}</td>
                <td><span class="math-inline">${photo.title}</td\>
<td\><a href\="</span>${photo.url}">Zdjęcie</a></td>
            </tr>`;
    }
    photosTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania postów z limitem
async function fetchAndDisplayPostsWithLimit(limit) {
    // Pobierz dane z API JSONPlaceholder z limitem
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=${limit}`);
    const postsData = await response.json();

    // Wyświetl posty w tabeli
    postsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
                <th>Użytkownik</th>
            </tr>
        </thead>
        <tbody>`;
    for (const post of postsData) {
        postsTable.innerHTML += `<tr>
                <td><span class="math-inline">${post.id}</td\>
<td\></span>${post.title}</td>
                <td><span class="math-inline">${post.body.slice(0, 50)}</td\>
<td\></span>${post.userId}</td>
            </tr>`;
    }
    postsTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania komentarzy z limitem
async function fetchAndDisplayCommentsWithLimit(limit) {
    // Pobierz dane z API JSONPlaceholder z limitem
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?limit=${limit}`);
    const commentsData = await response.json();

    // Wyświetl komentarze w tabeli
    commentsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Post ID</th>
                <th>Imię</th>
                <th>Treść</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>`;
    for (const comment of commentsData) {
        commentsTable.innerHTML += `<tr>
                <td><span class="math-inline">${comment.id}</td\>
<td\></span>${comment.postId}</td>
                <td><span class="math-inline">${comment.name}</td\>
<td\></span>${comment.body}</td>
                <td>${comment.email}</td>
            </tr>`;
    }
    commentsTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania albumów z limitem
async function fetchAndDisplayAlbumsWithLimit(limit) {
    // Pobierz dane z API JSONPlaceholder z limitem
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?limit=${limit}`);
    const albumsData = await response.json();

    // Wyświetl albumy w tabeli
    albumsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Użytkownik ID</th>
                <th>Tytuł</th>
            </tr>
        </thead>
        <tbody>`;
    for (const album of albumsData) {
        albumsTable.innerHTML += `<tr>
                <td><span class="math-inline">${album.id}</td\>
<td\></span>${album.userId}</td>
                <td>${album.title}</td>
            </tr>`;
    }
    albumsTable.innerHTML += `</tbody>`;
}

// Funkcja do pobierania i wyświetlania zdjęć z limitem
async function fetchAndDisplayPhotosWithLimit(limit) {
  // Pobierz dane z API JSONPlaceholder z limitem
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?limit=${limit}`);
  const photosData = await response.json();

  // Zaktualizuj tabelę zdjęć pobranymi danymi
  photosTable.innerHTML = `<thead>
    <tr>
      <th>ID</th>
      <th>ID albumu</th>
      <th>Tytuł</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>`;
  for (const photo of photosData) {
    photosTable.innerHTML += `<tr>
      <td><span class="math-inline">${photo.id}</td\>
      </td>
      <td>${photo.albumId}</td>
      <td><span class="math-inline">${photo.title}</td\>
      </td>
      <td><a href="${photo.url}">Zdjęcie</a></td>
    </tr>`;
  }
  photosTable.innerHTML += `</tbody>`;
}

// Dodaj funkcjonalność do przycisków limitu
btnPosts.addEventListener('click', () => {
    fetchAndDisplayPostsWithLimit(10); // Zmień domyślną wartość limitu
});

btnComments.addEventListener('click', () => {
    fetchAndDisplayCommentsWithLimit(5); // Zmień domyślną wartość limitu
});

btnAlbums.addEventListener('click', () => {
    fetchAndDisplayAlbumsWithLimit(3); // Zmień domyślną wartość limitu
});
btnPhotos.addEventListener('click', () => {
  fetchAndDisplayPhotosWithLimit(2); // Zmień domyślną wartość limitu według potrzeb
});

// Funkcja do filtrowania postów po liczbie znaków
function filterPostsByCharCount(minCharCount, maxCharCount) {
    const postsTable = document.getElementById('posts-table');
    const rows = postsTable.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const postContentCell = row.querySelector('td:nth-child(3)');
        const postContentText = postContentCell.textContent.trim();
        const contentLength = postContentText.length;

        if (contentLength >= minCharCount && contentLength <= maxCharCount) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

// Dodaj zdarzenie do pola wyszukiwania
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', () => {
    const minCharCount = parseInt(searchInput.value.split(' ')[0]) || 0;
    const maxCharCount = parseInt(searchInput.value.split(' ')[1]) || Infinity;

    filterPostsByCharCount(minCharCount, maxCharCount);
});

// Dodaj HTML dla pola wyszukiwania
const searchSection = document.createElement('div');
searchSection.innerHTML = `
    <label for="search-input">Szukaj po liczbie znaków (od ... do ...):</label>
    <input type="text" id="search-input" placeholder="Np. 100 250">
`;
postsSection.insertBefore(searchSection, postsTable);
