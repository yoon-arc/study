//Math 

//올림
var num = 1234.56789;
console.log("ceil:", Math.ceil(num));

// 1234.57 구하기
var num100 = num * 100;
num100 = Math.ceil(num100);
num100 /= 100;
console.log(num100);

//반올림
console.log("round: ", Math.round(num));
console.log("fixed: ", num.toFixed(2)); //많이 쓰는 것.(소수점 아래 두자리 까지라 fixed안에 2임)

// min, max
console.log("min: ", Math.min(1, 2, 3, 4));
console.log("max: ", Math.max(1, 2, 3, 4));


console.log("random: ", Math.random(1, 2, 3, 4));

console.log("주사위 값: ", Math.floor(Math.random()*5+1));//먼저 floor로 소수점 이하를 버림.
console.log("주사위 값: ", Math.floor(Math.random()*5+1));
console.log("주사위 값: ", Math.floor(Math.random()*5+1)); // 5로 하면  5미만 숫자라 6이 해당 x
console.log("주사위 값: ", Math.floor(Math.random()*6+1)); //따라서 곱하기 6을 해주고 0을 대비해서 1을 더해줌