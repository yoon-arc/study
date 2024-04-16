// 배열 //관련 함수 3형제(map, filter, reduce)

//map: 일괄 계산할 때
//기존의 방식(명령형으로 하나씩 다 하기)
let num50MAX = [10, 20, 30, 40, 50];
let num100MAX = [10, 20, 40, 50 ,70];
let num50to100 = [];
for(let i = 0; i < 5; i++){
    num50to100[i] = num50MAX[i]*2;
}
console.log(num50to100);

//map을 통한 선언형으로 하기
let num50to100_2 = num50MAX.map(num=>num*2);
console.log(num50to100_2);


//filter: 조건으로 걸러냄
//reduce: 누적 계산
