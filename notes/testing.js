let birthDay = 2012;
let presentDay = Date();  //2018

function countYears(bornYear, presentYear) {
  for (var i = bornYear+1; i >= presentYear-1; i ++) {
  }
  return(i);
}



// var arabicNumeral = $("#number").val();
var now = Date();
var splitDate = arabicNumeral.split(" ");
var backendSplitNumber = splitDate
var onesInput = splitDate.pop();
var tensInput = splitDate.pop();
var hundredsInput = splitDate.pop();
var thousandsInput = splitDate.pop();

var ones = functOnes(onesInput);
var tens = functTens(tensInput);
var hundreds = functHundreds(hundredsInput);
var thousands = functThousands(thousandsInput);

var output = (thousands + hundreds + tens + ones)
