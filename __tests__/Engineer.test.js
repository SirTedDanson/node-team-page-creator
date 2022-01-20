const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Create engineer object', () => {
  const engineer = new Engineer('Peter', 33, 'Javascript@Code.com');

  expect(engineer.name).toBe('Peter');
  expect(engineer.id).toBe(33);
  expect(engineer.email).toBe('Javascript@Code.com');
});

test ('Retrieve engineer information', () => {
  const engineer = new Engineer('Peter', 33, 'Javascript@Code.com', 'GitHubName');
  
  expect(engineer.getName()).toBe('Peter');
  expect(engineer.getId()).toBe('33');
  expect(engineer.getEmail()).toBe('Javascript@Code.com');
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getGithub()).toBe('https://github.com/GitHubName');
});