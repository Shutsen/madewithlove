/**
 * 
 * @param { Number | String } celsius 
 * @returns { Number } fahrenheit - rounded to one decimal
 */
export const convertCtoFahr = (celsius) => {
  const cTemp = parseInt(celsius, 10);
  const cToFahr = cTemp * 9 / 5 + 32;
  const rounded = Math.round(cToFahr * 10) / 10;
  return rounded;
}

/**
 * 
 * @param { Number | String } fahrenheit 
 * @returns { Number } celsius - rounded to one decimal
 */
export const convertFtoCel = (fahrenheit) => {
  const fTemp = parseInt(fahrenheit, 10);
  const fToCel = (fTemp - 32) * 5 / 9;
  const rounded = Math.round(fToCel * 10) / 10;
  return rounded;
} 