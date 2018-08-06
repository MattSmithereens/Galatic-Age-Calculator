import {Person} from '../src/age';

  describe ('Person', function() {
    let newPerson;

  beforeEach(function() {
    newPerson = new Person("1975-10-23"); //42 years
  });

  // expect ~1.3x10e9 seconds for ~43 years
  it ('should determine seconds age', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor(nowTime - birthDate) /1000;
    let actual = newPerson.getSecondsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  // expect ~42.8 for someone born in 10/75 as of 08/18
  it ('should determine Earth years age', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor(nowTime - birthDate)/365/24/60/60/1000;
    let actual = newPerson.getEarthYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  // expect ~175
  it ('should determine Mercurian years age', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/.24;
    let actual = newPerson.getMercurianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  // expect ~64
  it ('should determine Venusian years age', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/.62;
    let actual = newPerson.getVenusianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  // expect ~22
  it ('should determine Martian years age', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/1.88;
    let actual = newPerson.getMartianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  // expect ~3.6
  it ('should determine Jovian years age', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/11.86;
    let actual = newPerson.getJovianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it('should return return true if earth age > 78', function() {
    let birthDate = new Date(newPerson.birthDate);
    let notDead = newPerson.stillKicking();
    expect(notDead).toEqual(true);
  });


});
