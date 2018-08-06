export class Person {
  constructor(birthDate) {
    this.birthDate = birthDate;
    this.lifeExpectancy = 79;
    this.mercuryLifeExpectancy = 329;
    this.venusianLifeExpectancy = 127;
    this.marsLifeExpectancy = 42;
    this.jovianLifeExpectancy = 7;
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

  LifeExpectancy() {
    const earthAge = this.getEarthYearsAge();
    let earthYearsLeft = this.lifeExpectancy - earthAge;
    let earthYearsOverdue = earthAge - this.lifeExpectancy;
    if (this.stillKicking() = true) {
      return earthYearsLeft;
    } else {
      return earthYearsOverdue;
    }
  }

//   mercuryLifeExpectancy() {
//   const mercurianAge = this.getMercurianYearsAge();
//   let yearsLeft = this.lifeExpectancy/.24 - mercurianAge;
//   if (yearsLeft >= 0) {
//     return "we have to put up with you for ${Math.round(yearsLeft)} on earth, ${Math.round(yearsLeft/.24)} on Mercury, ${Math.round(yearsLeft/.62)} years on Venus, ${Math.round(yearsLeft/1.88)} years on Mars and ${Math.round(yearsLeft/11.86)} years on Jupiter.";
//   } else {
//     return false;
//   }
// }

  // LifeExpectancy() {
  //   const earthAge = this.getEarthYearsAge();
  //   let yearsLeft = this.lifeExpectancy - earthAge;
  //   let yearsOverdue = earthAge - this.lifeExpectancy;
  //   if (stillKicking = true) {
  //     return "we have to put up with you for ${Math.round(yearsLeft)} year(s) on Earth, ${Math.round(yearsLeft/.24)} year(s) on Mercury, ${Math.round(yearsLeft/.62)} year(s) on Venus, ${Math.round(yearsLeft/1.88)} year(s) on Mars and ${Math.round(yearsLeft/11.86)} year(s) on Jupiter.";
  //   } else if (yearsLeft = 0) {
  //     return "your grave is ${Math.round(yearsOverdue)} year(s) cold on Earth, ${Math.round(yearsOverdue/.24)} year(s) cold on Mercury, ${Math.round(yearsOverdue/.62)} year(s) cold on Venus, ${Math.round(yearsOverdue/1.88)} year(s) cold on Mars and ${Math.round(yearsOverdue/11.86)} year(s) cold on Jupiter.";
  //   }
  // }



}
