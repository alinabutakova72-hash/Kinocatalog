const movies = [
  { id: 1, title: 'Начало', description: 'Профессиональный вор проникает в сны людей, чтобы украсть секреты.', categoryId: 1, year: 2010, rating: 8.8, poster: 'assets/poster1.jpg' },
  { id: 2, title: 'Интерстеллар', description: 'Команда исследователей отправляется через червоточину в поисках нового дома.', categoryId: 1, year: 2014, rating: 8.6, poster: 'assets/poster2.jpg' },
  { id: 3, title: 'Матрица', description: 'Хакер узнаёт, что окружающий мир — симуляция, и присоединяется к сопротивлению.', categoryId: 1, year: 1999, rating: 8.7, poster: 'assets/poster3.jpg' },
  
  // Вставляем пути для новых фильмов (обратите внимание на названия файлов):
  { id: 4, title: 'Зелёная миля', description: 'История о тюремном надзирателе и заключенном с даром исцеления.', categoryId: 2, year: 1999, rating: 9.1, poster: 'assets/poster4.jpg' },
  { id: 5, title: 'Побег из Шоушенка', description: 'Банкир приговорен к пожизненному сроку за преступление, которого не совершал.', categoryId: 2, year: 1994, rating: 9.3, poster: 'assets/poster5.jpg' },
  { id: 6, title: 'Мальчишник в Вегасе', description: 'Друзья просыпаются в отеле и не могут найти жениха.', categoryId: 3, year: 2009, rating: 7.7, poster: 'assets/poster6.jpg' },
  { id: 7, title: 'Иван Васильевич меняет профессию', description: 'Инженер перемещается во времени в эпоху Ивана Грозного.', categoryId: 3, year: 1973, rating: 8.8, poster: 'assets/poster7.jpg' }
];

const categories = [
  { id: 1, name: 'Фантастика' },
  { id: 2, name: 'Драма' },
  { id: 3, name: 'Комедия' }
];