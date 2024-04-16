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
//60점 이상만 걸러내자
let filtered60 = [];
for(let i = 0; i < num50to100_2.length; i++){
    if(num50to100_2[i] >= 60){
        filtered60.push(num50to100_2[i]);
    }
}
console.log(filtered60);

let filtered60_2 = [];
filtered60_2 = num50to100_2.filter(score => score >= 60);
console.log(filtered60_2);



//reduce: 누적 계산
let data = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < data.length; i++){
    sum += data[i];
}
console.log(sum);//기존 방식


//reduce 누적계산 방식
let sum2 = data.reduce( (total, now)=> total + now, 0 );//0부터 sum(reduce)할 것 입니다.
console.log(sum2);