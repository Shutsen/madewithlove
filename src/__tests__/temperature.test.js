import { convertFtoCel, convertCtoFahr } from '../utils/temperature';

it('correctly converts fahrenheit to celsius', () => {
  const kind_of_chilly = convertFtoCel(-49);
  const sub_zero = convertFtoCel("23");
  const cool = convertFtoCel(60);
  const sauna = convertFtoCel(104);
  const fried = convertFtoCel("212");

  expect(kind_of_chilly).toBe(-45);
  expect(sub_zero).toBe(-5);
  expect(cool).toBe(15.6);
  expect(sauna).toBe(40);
  expect(fried).toBe(100);
});

it('correctly converts fahrenheit to celsius', () => {
  const kind_of_chilly = convertCtoFahr(-45);
  const sub_zero = convertCtoFahr(-5);
  const cool = convertCtoFahr("16");
  const sauna = convertCtoFahr(40);
  const fried = convertCtoFahr("100");

  expect(kind_of_chilly).toBe(-49);
  expect(sub_zero).toBe(23);
  expect(cool).toBe(60.8);
  expect(sauna).toBe(104);
  expect(fried).toBe(212);
});