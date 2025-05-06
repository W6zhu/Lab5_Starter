// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('isPhoneNumber: "123-456-7890" → true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: "(123) 456-7890" → true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: "123-45-678" → false', () => {
  expect(isPhoneNumber('123-45-678')).toBe(false);
});
test('isPhoneNumber: "abc-def-ghij" → false', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('isEmail: "user@example.com" → true', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('isEmail: "first_last@mail.co" → true', () => {
  expect(isEmail('first_last@mail.co')).toBe(true);
});
test('isEmail: "userexample.com" → false', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('isEmail: "user@domain.c" → false', () => {
  expect(isEmail('user@domain.c')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword: "Abc1" → true', () => {
  expect(isStrongPassword('Abc1')).toBe(true);
});
test('isStrongPassword: "A1234567890123" → true', () => {
  expect(isStrongPassword('A1234567890123')).toBe(true);
});
test('isStrongPassword: "A1" → false', () => {
  expect(isStrongPassword('A1')).toBe(false);
});
test('isStrongPassword: "A1234567890123456" → false', () => {
  expect(isStrongPassword('A1234567890123456')).toBe(false);
});

// isDate tests
test('isDate: "12/31/2020" → true', () => {
  expect(isDate('12/31/2020')).toBe(true);
});
test('isDate: "1/1/2025" → true', () => {
  expect(isDate('1/1/2025')).toBe(true);
});
test('isDate: "12/31/20" → false', () => {
  expect(isDate('12/31/20')).toBe(false);
});
test('isDate: "2020-12-31" → false', () => {
  expect(isDate('2020-12-31')).toBe(false);
});

// isHexColor tests
test('isHexColor: "#abc" → true', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('isHexColor: "#A1B2C3" → true', () => {
  expect(isHexColor('#A1B2C3')).toBe(true);
});
test('isHexColor: "#1234" → false', () => {
  expect(isHexColor('#1234')).toBe(false);
});
test('isHexColor: "#GGG" → false', () => {
  expect(isHexColor('#GGG')).toBe(false);
});