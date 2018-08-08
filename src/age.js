export class Person {
  constructor(birthDate) {
    this.birthDate = birthDate;
    this.lifeExpectancy = 79;
    this.mercuryFactor = .24;
    this.venusianFactor = .62;
    this.marsFactor = 1.88;
    this.jovianFactor = 11.86;
    this.nowTime = new Date();
    //this.divider = 3.1709792e-11;
  }

  getSecondsAge() {
    const birthDate = new Date(this.birthDate);
    const secondsAge = Math.floor(this.nowTime - birthDate)/1000;
    return secondsAge;
  }

  getEarthYearsAge() {
    const birthDate = new Date(this.birthDate);
    const earthAge = Math.floor(this.nowTime - birthDate)/365/24/60/60/1000;
    return earthAge;
  }

  getMercurianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const mercurianAge = Math.floor((this.nowTime - birthDate)/365/24/60/60/1000)/.24;
    return mercurianAge;
  }

  getVenusianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const venusianAge = Math.floor((this.nowTime - birthDate)/365/24/60/60/1000)/.62;
    return venusianAge;
  }

  getMartianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const martianAge = Math.floor((this.nowTime - birthDate)/365/24/60/60/1000)/1.88;
    return martianAge;
  }

  getJovianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const jovianAge = Math.floor((this.nowTime - birthDate)/365/24/60/60/1000)/11.86;
    return jovianAge;
  }

  stillKicking() {
    const earthAge = this.getEarthYearsAge();
    let yearsLeft = this.lifeExpectancy - earthAge;
    if (yearsLeft >= 0) {
      return true;
    } else {
      return false;
    }
  }

  earthLifeExpectancy() {
    const age = this.getEarthYearsAge();
    let yearsLeft = this.lifeExpectancy;
    if (yearsLeft <= age) {
      return (age - yearsLeft);
    } else {
      return (yearsLeft - age);
    }
  }

  mercuryLifeExpectancy() {
    const age = this.getMercurianYearsAge();
    let yearsLeft = this.lifeExpectancy/this.mercuryFactor;
    if (yearsLeft <= age) {
      return (age - yearsLeft);
    } else {
      return (yearsLeft - age);
    }
  }

  venusLifeExpectancy() {
    const age = this.getVenusianYearsAge();
    let yearsLeft = this.lifeExpectancy/this.venusianFactor;
    if (yearsLeft <= age) {
      return (age - yearsLeft);
    } else {
      return (yearsLeft - age);
    }
  }

  marsLifeExpectancy() {
    const age = this.getMartianYearsAge();
    let yearsLeft = this.lifeExpectancy/this.marsFactor;
    if (yearsLeft <= age) {
      return (age - yearsLeft);
    } else {
      return (yearsLeft - age);
    }
  }

  jupiterLifeExpectancy() {
    const age = this.getJovianYearsAge();
    let yearsLeft = this.lifeExpectancy/this.jovianFactor;
    if (yearsLeft <= age) {
      return (age - yearsLeft);
    } else {
      return (yearsLeft - age);
    }
  }

}
