let book = {
  title: 'JavaScript: The Good Parts',
  publisher: 'JB',
  price: 395
};

let price, title, memo;
({ price, title, memo = 'X' } = book);

console.log(price, title, memo);