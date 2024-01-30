let book = {
  title: 'JavaScript本格入門',
  author: {
    name: '山田裕寛',
    age: 20,
  },
  price: '2980',
};

console.log(book.author.name);
console.log(book['author']['name']);