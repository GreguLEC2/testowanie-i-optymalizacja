test('fetchAndDisplayPosts wypełnia tabelę danymi', async () => {
  // Symulowanie odpowiedzi API fetch, aby zwrócić prawidłową odpowiedź z przykładowymi danymi
  const mockResponse = {
    ok: true,
    json: () => Promise.resolve([
      { id: 1, title: 'Tytuł posta 1', body: 'Treść posta 1' },
      { id: 2, title: 'Tytuł posta 2', body: 'Treść posta 2' },
    ]),
  };
  global.fetch = jest.fn().mockResolvedValue(mockResponse);

  // Wywołanie funkcji
  await fetchAndDisplayPosts();

  // Sprawdzenie, czy komórki tabeli zawierają oczekiwane dane
  const wiersze = document.getElementById('posts-table').querySelectorAll('tbody tr');
  expect(wiersze.length).toBe(2);

  const pierwszyWiersz = wiersze[0];
  const komorkiPierwszegoWiersza = pierwszyWiersz.querySelectorAll('td');
  expect(komorkiPierwszegoWiersza[0].textContent).toBe('1');
  expect(komorkiPierwszegoWiersza[1].textContent).toBe('Tytuł posta 1');
  expect(komorkiPierwszegoWiersza[2].textContent).toBe('Treść posta 1');
});

test('fetchAndDisplayPosts obsługuje błędy', async () => {
  // Symulowanie odpowiedzi API fetch, aby zwrócić odrzuconą obietnicę
  global.fetch = jest.fn().mockRejectedValue(new Error('Błąd sieci'));

  // Wywołanie funkcji
  await expect(fetchAndDisplayPosts()).rejects.toThrow('Błąd sieci');
});






test('fetchAndDisplayPostsWithLimit pobiera dane z limitem', async () => {
  // Symulowanie odpowiedzi API fetch, aby zwrócić prawidłową odpowiedź z przykładowymi danymi
  const mockResponse = {
    ok: true,
    json: () => Promise.resolve([
      { id: 1, title: 'Tytuł posta 1', body: 'Treść posta 1' },
      { id: 2, title: 'Tytuł posta 2', body: 'Treść posta 2' },
    ]),
  };
  global.fetch = jest.fn().mockResolvedValue(mockResponse);

  // Wywołaj funkcję z limitem
  await fetchAndDisplayPostsWithLimit(1);

  // Sprawdź, czy fetch zostało wywołane z parametrem limit
  expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?limit=1');
});






test('filterPostsByCharCount filtruje posty po długości treści', () => {
  const tabela = document.createElement('table');
  const tbody = document.createElement('tbody');
  tabela.appendChild(tbody);

  const wiersz1 = document.createElement('tr');
  const wiersz2 = document.createElement('tr');
  const wiersz3 = document.createElement('tr');

  const komórka1 = document.createElement('td');
  komórka1.textContent = 'Krótka treść';
  wiersz1.appendChild(komórka1);

  const komórka2 = document.createElement('td');
  komórka2.textContent = 'Ta treść ma dokładnie 20 znaków';
  wiersz2.appendChild(komórka2);

  const komórka3 = document.createElement('td');
  komórka3.textContent = 'Długa treść, która przekracza limit';
  wiersz3.appendChild(komórka3);

  tbody.appendChild(wiersz1);
  tbody.appendChild(wiersz2);
  tbody.appendChild(wiersz3);

  document.body.appendChild(tabela);

  filterPostsByCharCount(10, 20);

  expect(wiersz1.style.display).toBe('none');
  expect(wiersz2.style.display).toBe('table-row');
  expect(wiersz3.style.display).toBe('none');

  document.body.removeChild(tabela);
});
