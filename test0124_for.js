//기본 for문

let arr1 = ["a", "b", "c"];
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}


//forEach문 : 배열에 적합함(배열 탐색)
arr1.forEach( (char) => {
    console.log(char);
}); //위에 기본 for문과 같은 것을 해줌. 장점은, index가 안보여서 좋음


//for in문 : 객체와 잘어울림. 객체(key:value)
const student = {
    name : "이용복",
    age : "23세",
    etc : "귀여움"
}
for(key in student){ // for, in만 유의하고 나머지 값은 내맘.
    console.log(key + ":" + student[key]); 
    //key가 있어야만 student의 value값을 이용할 수 있음.
    //key는 고정된 값이 아님, key와 value의 순서만 지켜주면 됨.
    //객체의 key를 둘러봄.
}

console.log(student[0]);
//undefined, 데이터에 순서가 없음. key를 무조건 알아야해서 for, in이 꼭 필요.



//for of: iterable에 적합(generator, Map, Set, 배열에 적합)
//(배열도 iterable에 속함)
for(let char of arr1){
    console.log(char);
}