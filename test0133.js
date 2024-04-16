//이터러블 (iterable)
//for of할 때 나왔었음.
//배열.. 다음, 다음, 다음, 다음 것이 있다는 점에서 이터러블.

//그냥 객체 써도 되지만, 이런식으로 객체 쓸 수도 있다.


let mapStudent = new Map([
    ["name", "이용복"],
    ["조","8조"],
    ["상태", "몹시 배고픔"]
]);
mapStudent.set("major", "design"); //set으로 key와 value값을 더함
console.log(mapStudent);

console.log(mapStudent.keys() );
console.log(mapStudent.values() );
console.log(mapStudent.entries() ); //key와 value 다 보기


for(let key of mapStudent.keys()){
    console.log(key);
}


//set(세트) : 중복X
let array = [1, 2, 3, 2, 1];
let set1 = new Set(array);
console.log(set1); //Set를 통해 중복 없이 나옴.
set1.add(10);
console.log(set1);
console.log(set1.has(10)); //set1에 10이 있니?
//-
set1.delete(2);
console.log(set1);
set1.clear();
console.log(set1);

let student1 = ["HTML", "CSS"];
let student2 = ["HTML", "JS"];
let student3 = ["JS", "React"];
let teamAvail = [...student1, ...student2, ...student3];
console.log(teamAvail);

let teamSet = new Set(teamAvail);
console.log(teamSet);


//사람들의 입력값을 취합해서, 중복 없이 전송하려할 때 
//찰떡인 기능


// next() => for of그냥 사용하자.
let arr = [1,2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//값이 끝날 때까지 계속 false값을 주다, 값이 끝나면 true를 주기.
//flase일 때만!



//제너레이터: 일반 객체를 이터러블하게 만드는 것.
// function -> function*
//return -> yield (함수랑 비슷하게 쓰임)
function* gen1(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let g1 = gen1(); //g1에 gen1 등록.
console.log(g1.next());//g1을 이터레이터로 변경
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());



let g2 = gen1();
for (let i of g2){ //for of자체가 next, next, next,에서 가져온 것임.
    console.log(i);
}