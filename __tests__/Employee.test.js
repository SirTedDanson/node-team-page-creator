const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('Create employee object', () => {
  const employee = new Employee('employee', 33, 'Javascript@Code.com');

  expect(employee.name).toBe('employee')
  expect(employee.id).toBe(33)
  expect(employee.email).toBe('Javascript@Code.com')
});

test ('Retrieve employee information', () => {
  const employee = new Employee('employee', 33, 'Javascript@Code.com');
  
  expect(employee.getName()).toBe('employee')
  expect(employee.getId()).toBe('33')
  expect(employee.getEmail()).toBe('Javascript@Code.com');
  expect(employee.getRole()).toBe('Employee')
});