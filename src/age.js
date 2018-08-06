export class Person {
  constructor(birthDate) {
    this.birthDate = birthDate;
  }

  getSecondsAge() {
    const birthDate = new Date(this.birthDate);
    const nowTime= new Date();
    const secondsAge = Math.floor(nowTime - birthDate)/1000;
    return secondsAge;
  }

  getEarthYearsAge() {
    const birthDate = new Date(this.birthDate);
    const nowTime= new Date();
    const earthAge = Math.floor(nowTime - birthDate)/365/24/60/60/1000;
    return earthAge;
  }

  getMercurianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const nowTime= new Date();
    const mercurianAge = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/.24;
    return mercurianAge;
  }

  getVenusianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const nowTime= new Date();
    const venusianAge = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/.62;
    return venusianAge;
  }

  getMartianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const nowTime= new Date();
    const martianAge = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/1.88;
    return martianAge;
  }

  getJovianYearsAge() {
    const birthDate = new Date(this.birthDate);
    const nowTime= new Date();
    const jovianAge = Math.floor((nowTime - birthDate)/365/24/60/60/1000)/11.86;
    return jovianAge;
  }

  stillKicking() {
    const earthAge = this.getEarthYearsAge();
    const lifeExpectancy = 79;
    let yearsLeft = lifeExpectancy - earthAge;
    if (yearsLeft >= 0) {
      return true;
    } else {
      return false;
    }
  }


}
