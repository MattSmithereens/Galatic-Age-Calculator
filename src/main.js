export class AgeCalculator {
  let nowDate = Date();
  let nowString = nowDate.toString();
  let nowArray = nowString.split(" "); //split date string into elements
  let nowMonth = nowArray[1];
  let nowDay = nowArray[2];
  let nowYear = nowArray[3];
  let nowTime = nowArray[4];
  let splitTime = nowTime.split(":");
  let nowHours = parseInt((splitTime[0])*3600);
  let nowMinutes = parseInt((splitTime[1])*60);
  let nowSeconds = parseInt(splitTime[2]);
  let totalSeconds = [];
  let yearSpan = [];
  
  // RUN WHEN DETERMINING YEARS BETWEEN BIRTH DATE & PRESENT
    const leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
        return true; //add 366 days
      } else {
        return false; //add 365 days
      }
    };

    function secondsThisYear();

// // dummy values for testing;
//   let birthYear = 2012;
//   let birthMonth = "Oct";
//   let birthDay = 23;
//
//   function countYears(birthYear, nowYear) {
//     for (var i = birthYear+1; i <= nowYear-1; i += 1) {
//       leapYear(i);
//     }
//   }









}
