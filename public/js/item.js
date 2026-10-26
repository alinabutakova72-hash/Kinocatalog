document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('item-container');
  if (!container) return;

  // Получаем id из URL (item.html?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = parseInt(urlParams.get('id'));

  // Ищем фильм в массиве
  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 0;">
        <h1>Фильм не найден</h1>
        <p style="color: #94a3b8;">Возможно, он был удален или ссылка неверна.</p>
        <a href="catalog.html" class="btn btn-primary" style="margin-top: 20px;">← Вернуться в каталог</a>
      </div>
    `;
    return;
  }

  const category = categories.find(c => c.id === movie.categoryId);
  const categoryName = category ? category.name : 'Без жанра';
  const posterSrc = movie.poster ? movie.poster : 'https://via.placeholder.com/400x300?text=No+Poster';

  const article = document.createElement('article');
  article.className = 'movie-detail';

  article.innerHTML = `
    <div class="movie-detail-poster">
      <img src="${posterSrc}" alt="Постер фильма">
    </div>
    <div class="movie-detail-info">
      <h1></h1>
      <dl class="movie-info-list">
        <dt>Жанр</dt>
        <dd>${categoryName}</dd>
        <dt>Год выпуска</dt>
        <dd>${movie.year}</dd>
        <dt>Рейтинг</dt>
        <dd>${movie.rating} / 10</dd>
      </dl>
      <h2>Описание</h2>
      <p>${movie.description}</p>
      <a href="catalog.html" class="btn btn-primary">← Назад в каталог</a>
    </div>
  `;
  
  article.querySelector('h1').textContent = movie.title;
  container.appendChild(article);
});