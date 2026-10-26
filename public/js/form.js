document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-form');
  if (!form) return;

  const errorMsg = document.getElementById('error-msg');
  const previewContainer = document.getElementById('preview-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Отменяем перезагрузку страницы

    errorMsg.style.display = 'none';
    previewContainer.style.display = 'none';

    const title = document.getElementById('title').value.trim();
    const categoryId = parseInt(document.getElementById('category').value);
    const year = parseInt(document.getElementById('year').value);
    const rating = parseFloat(document.getElementById('rating').value) || 0;
    const description = document.getElementById('description').value.trim();

    // Валидация
    if (!title || title.length < 2) {
      return showError('Введите название фильма (минимум 2 символа).');
    }
    if (!categoryId) {
      return showError('Выберите жанр.');
    }
    if (!year || year < 1900 || year > 2026) {
      return showError('Введите корректный год (от 1900 до 2026).');
    }
    if (!description || description.length < 10) {
      return showError('Введите описание (минимум 10 символов).');
    }

    // Предпросмотр
    const category = categories.find(c => c.id === categoryId);
    const categoryName = category ? category.name : 'Без жанра';

    document.getElementById('preview-title').textContent = title;
    document.getElementById('preview-meta').textContent = `${categoryName} · ${year} · Рейтинг: ${rating}`;
    document.getElementById('preview-desc').textContent = description;
    
    previewContainer.style.display = 'block';
    previewContainer.scrollIntoView({ behavior: 'smooth' });
  });

  function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  }
});