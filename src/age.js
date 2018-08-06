export class Person {
  constructor(birthDate) {
    this.birthDate = birthDate;
    this.lifeExpectancy = 79;
    this.nowTime = new Date();
    this.divider = 3.1709792e-11;
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

//   LifeExpectancy() {
//   const earthAge = this.getEarthYearsAge();
//   let yearsLeft = this.lifeExpectancy - earthAge;
//   if (yearsLeft >= 0) {
//     return "we have to put up with you for ${Math.round(yearsLeft)} on Earth, ${Math.round(yearsLeft/.24)} on Mercury, ${Math.round(yearsLeft/.62)} years on Venus, ${Math.round(yearsLeft/1.88)} years on Mars and ${Math.round(yearsLeft/11.86)} years on Jupiter.";
//   } else if (yearsLeft = 0) {
//     return "your grave is ${Math.round(yearsLeft)} year(s) cold on Earth, ${Math.round(yearsLeft/.24)} year(s) cold on Mercury, ${Math.round(yearsLeft/.62)} year(s) cold on Venus (despite venus being ), ${Math.round(yearsLeft/1.88)} year(s) cold on Mars and ${Math.round(yearsLeft/11.86)} year(s) cold on Jupiter.";
//   }
// }

  //   LifeExpectancy() {
  //   const earthAge = this.getEarthYearsAge();
  //   let yearsLeft = this.lifeExpectancy - earthAge;
  //   if (yearsLeft >= 0) {
  //     return "we have to put up with you for ${Math.round(yearsLeft)} on earth, ${Math.round(yearsLeft/.24)} on Mercury, ${Math.round(yearsLeft/.62)} years on Venus, ${Math.round(yearsLeft/1.88)} years on Mars and ${Math.round(yearsLeft/11.86)} years on Jupiter.";
  //   } else {
  //     return false;
  //   }
  // }

}
