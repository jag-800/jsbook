let book = {
  title: 'JavaScript: The Good Parts',
  author: 'JB',
  pages: 395,
  other : { keywd: 'Java SE 18', logo: 'logo.jpg'}
};

let {title, other, other: { keywd } } = book;
console.log(title, other, keywd);