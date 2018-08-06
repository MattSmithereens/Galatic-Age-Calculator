export class Calculator {
  constructor(birthDay, birthMonth, birthYear) {
    this.birthDay = birthDay;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.birthDate = new Date();
    this.birthDate.setFullYear(birthYear, birthMonth, birthDay);
    this.birthDate.setHours(0, 0, 0);
    this.printableBirthDate = this.birthDate.toDateString();
    this.today = new Date();
    this.today.setHours(0, 0, 0);
    this.printableToday = this.today.toDateString();
    this.lifeExpectancy = 79;
  }

  export class AgeCalculator {
    constructor() {
      this.nowDate = Date().toString();
      this.birthDate = new Date("--- Oct 23 1975 10:42:30"); // bring in via form.  Not building a front end, so it's hardcoded for now

      this.nowArray = nowDate.split(" "); //date inport format: "Fri Aug 03 2018 14:18:20 GMT-0700 (Pacific Daylight Time)"
      this.nowMonth = this.nowArray[1];
      this.nowDays = parseInt(((this.nowArray[2])-1)*86400);
      this.nowYear = parseInt(this.nowArray[3]);
      this.nowTime = this.nowArray[4];
      this.splitNowTime = nowTime.split(":");
      this.nowHours = parseInt((this.splitNowTime[0])*3600);
      this.nowMinutes = parseInt((this.splitNowTime[1])*60);
      this.nowSeconds = parseInt(this.splitNowTime[2]);

      this.birthArray = this.nowArray.split(" ");
      this.birthMonth = this.birthArray[1];
      this.birthDays = parseInt(((this.birthArray[2])-1)*86400);
      this.birthYear = parseInt(this.birthArray[3]);
      this.birthTime = this.birthArray[4];
      this.splitBirthTime = nowTime.split(":");
      this.birthHours = parseInt((this.splitBirthTime[0])*3600);
      this.birthMinutes = parseInt((this.splitBirthTime[1])*60);
      this.birthSeconds = parseInt(this.splitBirthTime[2]);

  convertToSeconds(date) {
    const seconds = Math.floor((date.getTime())/1000);
    return seconds;
  }

  findSecondsBetweenDates() {
    const birthDateSeconds = this.convertToSeconds(this.birthDate);
    const todaySeconds = this.convertToSeconds(this.today);
    const difference = todaySeconds - birthDateSeconds;
    return difference;
  }

  findEarthAge() {
    const earthAge = Math.floor(this.findSecondsBetweenDates()/31536000);
    return earthAge;
  }

  findMercuryAge() {
    const mercuryAge = Math.floor(this.findSecondsBetweenDates()/7568640);
    return mercuryAge;
  }

  findVenusAge() {
    const venusAge = Math.floor(this.findSecondsBetweenDates()/19552320);
    return venusAge;
  }

  findMarsAge() {
    const marsAge = Math.floor(this.findSecondsBetweenDates()/59287680);
    return marsAge;
  }

  findJupiterAge() {
    const jupiterAge = Math.floor(this.findSecondsBetweenDates()/374016960);
    return jupiterAge;
  }

  findEarthYearsLeft() {
    const age = this.findEarthAge();
    const yearsLeft = Math.abs(this.lifeExpectancy - age);
    return yearsLeft;
  }

  shouldBeDead() {
    let yearsLeft = this.lifeExpectancy - this.findEarthAge()
    if (yearsLeft < 0) {
      return "yes";
    } else if (yearsLeft > 0) {
      return "no";
    } else if (yearsLeft === 0) {
      return "will die this year";
    }
  }

  findMercuryYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const mercuryYearsLeft = Math.floor(earthYearsLeft/.24);
    return mercuryYearsLeft;
  }

  findVenusYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const venusYearsLeft = Math.floor(earthYearsLeft/.62);
    return venusYearsLeft;
  }

  findMarsYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const marsYearsLeft = Math.floor(earthYearsLeft/1.88);
    return marsYearsLeft;
  }

  findJupiterYearsLeft() {
    const earthYearsLeft = this.findEarthYearsLeft();
    const jupiterYearsLeft = Math.floor(earthYearsLeft/11.86);
    return jupiterYearsLeft;
  }
}
