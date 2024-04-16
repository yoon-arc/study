//JSON


//서버로 바로 값을 보낼 수 없을 떄, Json형태로 먼저 바꿔줌.
const student = {
    name:"이현경",
    career: "publisher"
}

//JSON
// const studentJson = {
//     "name":"이현경",
//     "career": "publisher"
// } 내가 보내려고하는 모든 값이 문자열이 됨.


const studentJson = JSON.stringify(student); // studentJson은 더 이상 js 객체가 X
console.log(student);
console.log(studentJson); //내가 손으로 직접 입력해주냐, 아니면 시스템이 바꿔주냐의 차이


console.log(studentJson.name); // 객체가 아니라서 name을 불러올 수 X
//다시 객체로 되돌리기

const studentAgian = JSON.parse(studentJson);
console.log(studentAgian.name);
console.log(studentAgian);

