let book = {
  title: 'JavaScript: The Good Parts',
  publisher: 'JB',
  price: 395
};

let { title, ...rest } = book;
console.log(title, rest);