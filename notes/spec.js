it ('should find year in seconds', function() {
  let sample = 883008000;
  let result = scott.findYearInSeconds();
  expect(result).toEqual(sample);
});

it ('should find exact age in seconds', function() {
  let now = new Date ();
  let birthday = new Date(scott.birthday);
  let sample = Math.floor(now - birthday) * 0.001;
  let result = scott.getExactAge();
  expect(Math.trunc(result)).toEqual(Math.trunc(sample));
});

// it ('should find age on other planets', function() {
//   const exactAge = 911832473.47;
//   let sample = ["120.48", "46.64", "28.91", "15.38", "2.44"];
//   let result = scott.getPlanetAges(exactAge);
//   expect(result).toEqual(sample);
// });

it('should test that the users age is converted to age in Mercury years', function() {
const expectedResult = 7.68;
expect(calculator.getMercuryAge()).toEqual(expectedResult);
});

it('should test that the users age is converted to age in Venus years', function() {
const expectedResult = 19.84;
expect(calculator.getVenusAge()).toEqual(expectedResult);
});

it('should test that the users age is converted to age in Mars years', function() {
const expectedResult = 60.16;
expect(calculator.getMarsAge()).toEqual(expectedResult);
});

it('should test that the users age is converted to age in Jupiter years', function() {
const expectedResult = 379.52;
expect(calculator.getJupiterAge()).toEqual(expectedResult);
});

----

it ('should find years of life remaining on other planets', function() {
  let sample = ["216.67", "83.87", "52.00", "27.66", "4.38"];
  let result = scott.lifeRemaining(80);
  expect(result).toEqual(sample);
});

it ('should find years of life past expected death', function() {
  let sample = 8;
  let result = oldScott.lifeRemaining(80);
  expect(result).toEqual(sample);
});
