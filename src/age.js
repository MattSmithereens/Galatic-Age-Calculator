export class Person {
  constructor(birthTime) {
    this.birthTime = birthTime;
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
    const MercurianAge = Math.floor((nowTime - birthTime)/365/24/60/60)*.24;
    return MercurianAge;
  }

  getVenusianYearsAge() {
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const VenusianAge = Math.floor((nowTime - birthTime)/365/24/60/60)*.62;
    return VenusianAge;
  }

}
