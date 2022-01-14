const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern')

test('Create intern object', () => {
  const intern = new Intern('Peter', 33, 'Javascript@Code.com');

  expect(intern.name).toBe('Peter')
  expect(intern.id).toBe(33)
  expect(intern.email).toBe('Javascript@Code.com')
});

test ('Retrieve intern information', () => {
  const intern = new Intern('Peter', 33, 'Javascript@Code.com', 'Amazing University');
  
  expect(intern.getName()).toBe('Peter')
  expect(intern.getId()).toBe('33')
  expect(intern.getEmail()).toBe('Javascript@Code.com');
  expect(intern.getRole()).toBe('Intern')
  expect(intern.getSchool()).toBe('School: Amazing University')
});