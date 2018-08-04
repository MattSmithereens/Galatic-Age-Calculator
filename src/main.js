export class AgeCalculator {
  let nowDate = Date();
  let nowString = nowDate.toString();
  let nowArray = nowString.split(" "); //split date string into elements
  let nowMonth = nowArray[1];
  let nowDay = parseInt(((nowArray[2])-1)*86400);
  let nowYear = nowArray[3];
  let nowTime = nowArray[4];
  let splitTime = nowTime.split(":");
  let nowHours = parseInt((splitTime[0])*3600);
  let nowMinutes = parseInt((splitTime[1])*60);
  let nowSeconds = parseInt(splitTime[2]);
  let totalSeconds = 0;
  let yearSpan = [];

  // RUN WHEN DETERMINING YEARS BETWEEN BIRTH DATE & PRESENT
    const leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
        return true; //add 31622400 seconds
      } else {
        return false; //add 31536000 seconds
      }
    };

    function monthsThisYear(nowMonth) {
      if (nowMonth === "Jan") {
        totalSeconds+=0;
      } else if (nowMonth === "Feb") {
        totalSeconds+=2678400;
      } else if (nowMonth === "Mar") {
        totalSeconds+=5097600;
      } else if (nowMonth === "Apr") {
        totalSeconds+=7776000;
      } else if (nowMonth === "May") {
        totalSeconds+=10368000;
      } else if (nowMonth === "Jun") {
        totalSeconds+=13046400;
      } else if (nowMonth === "Jul") {
        totalSeconds+=15638400;
      } else if (nowMonth === "Aug") {
        totalSeconds+=18316800;
      } else if (nowMonth === "Sep") {
        totalSeconds+=20995200;
      } else if (nowMonth === "Oct") {
        totalSeconds+=23587200;
      } else if (nowMonth === "Nov") {
        totalSeconds+=26265600;
      } else if (nowMonth === "Dec") {
        totalSeconds+=28857600;
      }
    }

    function secondsThisMonth(); {
      let thisMonth = (nowDay+nowHours+nowMinutes+nowSeconds);
      totalSeconds += thisMonth;
    }

//   function countYears(birthYear, nowYear) {
//     for (var i = birthYear+1; i <= nowYear-1; i += 1) {
//       leapYear(i);
//     }
//   }









}
