//splice

var num = [1, 2, 3, 4, 5];
var newNum = num.splice(2); //2번 이후의 요소들을 전부 꺼내서 저장.
console.log(newNum); //num에서 꺼내온 2 이후의 숫자를 저장
console.log(num);//남은 건 splice가 꺼내가지 않은 1,2


//splice, 특정 값부터 꺼내가기

var num = [1, 2, 3, 4, 5];
var newNum = num.splice(2, 2); //2부터 시작해서 2개만 꺼냄
console.log(newNum); //
console.log(num);//남은 건 splice가 꺼내가지 않은 1,2,5



//splice, 특정 값을 꺼내가고 그 자리에 대신 새로운 값을 추가
var num = [1, 2, 3, 4, 5];
var newNum = num.splice(2, 2, 30); //2부터 시작해서 2개만 꺼냄
console.log(newNum); //
console.log(num);//남은 건 splice가 꺼내가지 않은 1,2,5


//slice, 원래의 값에 영향을 주지 않음
var num = [1, 2, 3, 4, 5];
var newNum = num.slice(2, 4); //splice는 2번부터 2개~로 꺼내갔다면, slice는 2번부터 4번까지~ 이런 느낌.
console.log(newNum); //
console.log(num); //그치만 splice와 달리 원래 값에 영향을 주지 x

