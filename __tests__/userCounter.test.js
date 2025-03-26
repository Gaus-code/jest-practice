const { useCounter, React } = require('../src/hooks/userCounter');

jest.mock('react', () => ({
  useState: jest.fn()
}));

test('Хук возвращает правильные методы', () => {
  const mockSetState = jest.fn();
  React.useState.mockImplementation(init => [init, mockSetState]);
  
  const counter = useCounter(5);
  
  expect(counter.count).toBe(5);
  expect(typeof counter.increment).toBe('function');
  expect(typeof counter.decrement).toBe('function');
  
  counter.increment();
  expect(mockSetState).toHaveBeenCalledWith(expect.any(Function));
  
  counter.decrement();
  expect(mockSetState).toHaveBeenCalledTimes(2);
});