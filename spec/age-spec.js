import {Person} from '../src/age';

  describe ('Person', function() {
    let newPerson;

  beforeEach(function() {
    newPerson = new Person("1975-10-23");
  });

  it ('should determine seconds age: ~1.3x10e9 seconds for ~43 years', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor(nowTime - birthDate) /1000;
    let actual = newPerson.getSecondsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Earth years age ~42.8 for someone born in 10/75 as of 08/18', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor(nowTime - birthDate)/365/24/60/60/1000;
    let actual = newPerson.getEarthYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Mercurian years age ~175', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/.24;
    let actual = newPerson.getMercurianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Venusian years age ~64', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/.62;
    let actual = newPerson.getVenusianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Martian years age ~22', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/1.88;
    let actual = newPerson.getMartianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Jovian years age ~3.6', function() {
    let nowTime = new Date ();
    let birthDate = new Date(newPerson.birthDate);
    let expected = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/11.86;
    let actual = newPerson.getJovianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it('should return notDead true if earth age < 78', function() {
    let birthDate = new Date(newPerson.birthDate);
    let notDead = newPerson.stillKicking();
    expect(notDead).toEqual(true);
  });

  it('should return the difference between a persons age and their expected death on earth', function() {
    let actual = newPerson.earthLifeExpectancy();
    let expected = newPerson.lifeExpectancy - newPerson.getEarthYearsAge();
    expect(Math.floor(actual)).toEqual(Math.floor(expected));
  });

  it('should return the difference between a persons age and their expected death on mercury', function() {
    let actual = newPerson.mercuryLifeExpectancy();
    let expected = (newPerson.lifeExpectancy/.24) - newPerson.getMercurianYearsAge();
    expect(Math.floor(actual)).toEqual(Math.floor(expected));
  });

  it('should return the difference between a persons age and their expected death on venus', function() {
    let actual = newPerson.venusLifeExpectancy();
    let expected = (newPerson.lifeExpectancy/.62) - newPerson.getVenusianYearsAge();
    expect(Math.floor(actual)).toEqual(Math.floor(expected));
  });

  it('should return the difference between a persons age and their expected death on mars', function() {
    let actual = newPerson.marsLifeExpectancy();
    let expected = (newPerson.lifeExpectancy/1.88) - newPerson.getMartianYearsAge();
    expect(Math.floor(actual)).toEqual(Math.floor(expected));
  });

  it('should return the difference between a persons age and their expected death on jupiter', function() {
    let actual = newPerson.jupiterLifeExpectancy();
    let expected = (newPerson.lifeExpectancy/11.86) - newPerson.getJovianYearsAge();
    expect(Math.floor(actual)).toEqual(Math.floor(expected));
  });
});
