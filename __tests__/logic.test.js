const { sum, divide } = require('../src/logic/math');

test('Сумма 2+3=5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Деление на ноль вызывает ошибку', () => {
  expect(() => divide(5, 0)).toThrow("Делить на ноль нельзя!");
});