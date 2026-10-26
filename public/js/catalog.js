document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return; 

  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const noResults = document.getElementById('no-results');

  // Заполняем select категориями
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = cat.name;
    categoryFilter.appendChild(option);
  });

  // Функция отрисовки карточек
  function renderCards(items) {
    catalogGrid.innerHTML = ''; 

    if (items.length === 0) {
      noResults.style.display = 'block';
      return;
    }
    noResults.style.display = 'none';

    items.forEach(movie => {
      const category = categories.find(c => c.id === movie.categoryId);
      const categoryName = category ? category.name : 'Без жанра';
      const posterSrc = movie.poster ? movie.poster : 'https://via.placeholder.com/300x200?text=No+Poster';

      const article = document.createElement('article');
      article.className = 'movie-card';

      // Используем шаблонные строки (обратные кавычки `) для вставки данных
      article.innerHTML = `
        <img src="${posterSrc}" alt="Постер фильма" class="movie-poster">
        <div class="movie-card-body">
          <h2></h2>
          <p class="movie-meta">${categoryName} · ${movie.year} · ${movie.rating}</p>
          <p>${movie.description}</p>
          <a href="item.html?id=${movie.id}" class="btn btn-secondary">Подробнее</a>
        </div>
      `;
      
      // Безопасно вставляем название
      article.querySelector('h2').textContent = movie.title;
      
      catalogGrid.appendChild(article);
    });
  }

  // Функция фильтрации (поиск + категория)
  function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filtered = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || movie.categoryId === parseInt(selectedCategory);
      return matchesSearch && matchesCategory;
    });

    renderCards(filtered);
  }

  // Слушатели событий
  searchInput.addEventListener('input', filterMovies);
  categoryFilter.addEventListener('change', filterMovies);

  // Первая отрисовка при загрузке страницы
  renderCards(movies);
});