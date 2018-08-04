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

    this.totalSeconds = 0;
    this.yearSpan = [];
  };

  function countYears() {
    for(let i = (parseInt(this.birthYear))+1; i < parseInt(this.nowYear); i += 1) {
        this.yearSpan.push(i);
      }
    };

  // RUN WHEN DETERMINING YEARS BETWEEN BIRTH DATE & PRESENT
    function leapYear(year) {
      for each (var item in this.yearSpan) {
        if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
        return true; //add 31622400 seconds
      } else {
        return false; //add 31536000 seconds
      }
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
    } else (this.nowMonth === "Dec") {
      this.totalSeconds+=28857600;
    }
  };
// works in console.  Implement properly and test

  function secondsThisMonth(); {
    let this.thisMonth = (this.nowDay+this.nowHours+this.nowMinutes+this.nowSeconds);
    this.totalSeconds += this.thisMonth;
  };

  function secondsBirthYear(); {
    let this.birthMonthSeconds = (this.birthDay+this.birthHours+this.birthMinutes+this.birthSeconds);
      if (this.birthMonth === "Dec") {
        this.totalSeconds += (2678400 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Nov") {
        this.totalSeconds += (5097600 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Oct") {
        this.totalSeconds += (7776000 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Sep") {
        this.totalSeconds += (10368000 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Aug") {
        this.totalSeconds += (13046400 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Jul") {
        this.totalSeconds += (15638400 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Jun") {
        this.totalSeconds += (18316800 - this.birthMonthSeconds);
      } else if (this.birthMonth === "May") {
        this.totalSeconds += (20995200 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Apr") {
        this.totalSeconds += (23587200 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Mar") {
        this.totalSeconds += (26265600 - this.birthMonthSeconds);
      } else if (this.birthMonth === "Feb") {
        this.totalSeconds += (28857600 - this.birthMonthSeconds);
      } else (this.birthMonth === "Jan") {
        this.totalSeconds += (31536000 - this.birthMonthSeconds);
      }
  };

















}
