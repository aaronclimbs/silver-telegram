const faker = require("faker").commerce;

function rand(num) {
  return Math.floor(Math.random() * num) + 1;
}

function randomWord() {
  return faker.productName().split(" ")[rand(2)];
}

module.exports = { randomWord };
