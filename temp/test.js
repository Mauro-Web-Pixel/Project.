// test.js - Mostra a versão real do Jest
const jestVersion = require('jest/package.json').version;

test('Mostrar versão do Jest', () => {
  console.log(` Jest versão: ${jestVersion}`);
  expect(true).toBe(true);
});

test('Matemática básica', () => {
  expect(1 + 1).toBe(2);
});