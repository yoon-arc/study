var now = new Date();

var now = new Date("2024-04-09");

var now = new Date("2024-04-09T09:43:00");


var date1 = new Date("2024-04-09");
var time1 = date1.getTime();
console.log(time1);

var date2 = new Date("2024-04-09T10:05:00");
var date3 = new Date("2024-04-09T10:06:00");
var time2 = date2.getTime();
var time3 = date3.getTime();
console.log(time2);
console.log(time3);

console.log(1712624760000/(1000*60*60*24*365));


var start = new Date("2024-03-20").getTime();
var now = new Date("2024-04-09").getTime();
var end = new Date("2024-08-06").getTime();

var timePassed = now - start;
var dayPassed = parseInt(timePassed/(1000*60*60*24));
console.log(`우리 과정 ${dayPassed}일만큼 지났습니다.`);

var timeleft = end - now;
var dayleft = parseInt(timeleft/(1000*60*60*24));
console.log(`우리 과정 ${dayleft}일만큼 남았습니다.`);
console.log(`우리 과정 ${dayPassed/(dayPassed+dayleft)}일만큼 남았습니다.`);