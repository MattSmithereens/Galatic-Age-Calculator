export class AgeCalculator {
  constructor() {
    this.nowDate = Date().toString();
    this.birthDate = new Date("--- Oct 23 1975 10:42:30"); // bring in via form.  Not building a front end, so it's hardcoded for now

    this.nowArray = nowDate.split(" "); //date inport format: "Fri Aug 03 2018 14:18:20 GMT-0700 (Pacific Daylight Time)"
    this.nowMonth = this.nowArray[1];
    this.nowDays = parseInt(((this.nowArray[2])-1)*86400);
    this.nowYear = this.nowArray[3];
    this.nowTime = this.nowArray[4];
    this.splitTime = nowTime.split(":");
    this.nowHours = parseInt((this.splitTime[0])*3600);
    this.nowMinutes = parseInt((this.splitTime[1])*60);
    this.nowSeconds = parseInt(this.splitTime[2]);
    // all good above

    this.birthArray = this.nowArray.split(" ");
    this.birthMonth = this.birthArray[1];
    this.birthDays = parseInt(((this.birthArray[2])-1)*86400);
    this.birthYear = this.birthArray[3];
    this.birthTime = this.birthArray[4];
    this.splitBirthTime = nowTime.split(":");
    this.birthHours = parseInt((this.splitBirthTime[0])*3600);
    this.birthMinutes = parseInt((this.splitBirthTime[1])*60);
    this.birthSeconds = parseInt(this.splitBirthTime[2]);
    this.totalSeconds = 0;
    this.yearSpan = [];
  }

  function countYears() {
    for(let i = (parseInt(this.birthYear))+1; i < parseInt(this.nowYear); i += 1) {
        this.yearSpan.push(i);
      }
    }

  function monthsThisYear() {
    if (this.nowMonth === "Jan") {
      this.totalSeconds+=0;
    } else if (this.nowMonth === "Feb") {
      this.totalSeconds+=2678400;
    } else if (this.nowMonth === "Mar") {
      this.totalSeconds+=5097600;
    } else if (this.nowMonth === "Apr") {
      this.totalSeconds+=7776000;
    } else if (this.nowMonth === "May") {
      this.totalSeconds+=10368000;
    } else if (this.nowMonth === "Jun") {
      this.totalSeconds+=13046400;
    } else if (this.nowMonth === "Jul") {
      this.totalSeconds+=15638400;
    } else if (this.nowMonth === "Aug") {
      this.totalSeconds+=18316800;
    } else if (this.nowMonth === "Sep") {
      this.totalSeconds+=20995200;
    } else if (this.nowMonth === "Oct") {
      this.totalSeconds+=23587200;
    } else if (this.nowMonth === "Nov") {
      this.totalSeconds+=26265600;
    } else if (this.nowMonth === "Dec") {
      this.totalSeconds+=28857600;
    }
  }
// works in console.  Implement properly and test

  function secondsThisYear() {
    totalSeconds+=(nowSeconds+nowMinutes+nowHours+nowDays);
  }




  // RUN WHEN DETERMINING YEARS BETWEEN BIRTH DATE & PRESENT
    function leapYear(year) {
      if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
        return true; //add 31622400 seconds
      } else {
        return false; //add 31536000 seconds
      }
    };



    function secondsThisMonth(); {
      let thisMonth = (nowDay+nowHours+nowMinutes+nowSeconds);
      totalSeconds += thisMonth;
    }











}
