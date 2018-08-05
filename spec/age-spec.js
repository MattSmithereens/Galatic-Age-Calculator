import {Person} from '../src/age';

  describe ('Person', function() {
    let newPerson;

  beforeEach(function() {
    newPerson = new Person("1975,10,23");
  });

  it ('should determine seconds age', function() {
    let nowTime = new Date ();
    let birthTime = new Date(newPerson.birthTime);
    let expected = Math.floor(nowTime - birthTime) /1000;
    let actual = newPerson.getSecondsAge();
    expect(Math.trunc(actual)).toEqual(Math.trunc(expected));
  });

});
