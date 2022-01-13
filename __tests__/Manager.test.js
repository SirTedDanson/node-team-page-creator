const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('Create manager object', () => {
  const manager = new Manager('manager', 33, 'Javascript@Code.com', 415);

  expect(manager.name).toBe('manager')
  expect(manager.id).toBe(33)
  expect(manager.email).toBe('Javascript@Code.com')
  expect(manager.officeNumber).toBe(415)
});

test ('Retrieve manager information', () => {
  const manager = new Manager('manager', 33, 'Javascript@Code.com', 415);
  
  expect(manager.getName()).toBe('manager')
  expect(manager.getId()).toBe('33')
  expect(manager.getEmail()).toBe('Javascript@Code.com');
  expect(manager.getRole()).toBe('Manager')
});