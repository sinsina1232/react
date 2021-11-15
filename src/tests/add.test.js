const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  // const testJohnName = generateGreeting('John');

  expect(result).toBe(7);

});

test('should generate greeting for John', ()=>{
  expect(generateGreeting('John')).toBe('Hello John!');
});
test('should generate greeting for no name', ()=>{
  expect(generateGreeting()).toBe('Hello Anonymous!');
});
