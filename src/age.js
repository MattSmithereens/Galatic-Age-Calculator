export class Person {
  constructor(birthTime) {
    this.birthTime = birthTime;
    //this.lifeExpectancy = lifeExpectancy
    // this.yearAge = yearAge;
  }

  getSecondsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const secondsAge = Math.floor(nowTime - birthTime)/1000;
    return secondsAge;
  }

  getEarthYearsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const terranAge = Math.floor(nowTime - birthTime)/365/24/60/60;
    return terranAge;
  }

  getMercurianYearsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const mercurianAge = Math.floor((nowTime - birthTime)/365/24/60/60)*.24;
    return mercurianAge;
  }

  getVenusianYearsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const VenusianAge = Math.floor((nowTime - birthTime)/365/24/60/60)*.62;
    return VenusianAge;
  }

  getMartianYearsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const martianAge = Math.floor((nowTime - birthTime)/365/24/60/60)*1.88;
    return martianAge;
  }

  getJovianYearsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const jovianAge = Math.floor((nowTime - birthTime)/365/24/60/60)*11.86;
    return jovianAge;
  }

  shouldBeDead() {
    const lifeExpectancy = 79;
    const birthTime = new Date(terranAge);
    const nowTime= new Date();
    const yearsAge = Math.floor(nowTime - birthTime)/365/24/60/60;
    if (yearsAge > lifeExpectancy) {
      return true;
    } else if (yearsAge <= lifeExpectancy) {
      return false;
    }
  };

}
