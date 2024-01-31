let book = {
  title: 'JavaScript: The Good Parts',
  author: 'JB',
  isbn: '978-1-4919-1337-5',
  pages: 395
};

let {title, author, isbn, pages, ll = 'X'} = book;
console.log(title, author, isbn, pages, ll);