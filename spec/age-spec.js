import {Person} from '../src/age';

  describe ('Person', function() {
    let newPerson;

  beforeEach(function() {
    newPerson = new Person("1975,10,23");
    //oldPerson = new Person("1930,12,25");
  });

  it ('should determine seconds age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor(nowTime - birthTime) /1000;
    let actual = newPerson.getSecondsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Earth years age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor(nowTime - birthTime)/365/24/60/60;
    let actual = newPerson.getEarthYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Mercurian years age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor((nowTime - birthTime)/365/24/60/60)*.24;
    let actual = newPerson.getMercurianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Venusian years age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor((nowTime - birthTime)/365/24/60/60)*.62;
    let actual = newPerson.getVenusianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Martian years age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor((nowTime - birthTime)/365/24/60/60)*1.88;
    let actual = newPerson.getMartianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should determine Jovian years age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor((nowTime - birthTime)/365/24/60/60)*11.86;
    let actual = newPerson.getJovianYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

  it ('should tell you if you should not be dead'), function() {
    getEarthYearsAge();
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor(nowTime - birthTime)/365/24/60/60;
    let actual = newPerson.getEarthYearsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let actual = newPerson.shouldBeDead();
    expect(actual).toEqual(false);
  }

});
