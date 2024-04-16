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