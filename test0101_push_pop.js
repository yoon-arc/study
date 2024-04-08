let num1 = [10, 20, 30];
console.log(num1.pop()); //30이 배열 가장 뒤에 있는 숫자라 30이 나옴
console.log(num1);//앞 명령에서 이미30을 꺼내썼기 때문에 10,20만 출력 됨.

// let work = ["인터넷", "카톡", "유투브 클립"];
// console.log(work.pop()); //가장 마지막으로 한 게 유투브 클럽이라 출력
// console.log(work);//pop이 stack에서 유투브를 빼갔기에 남은 할 일이 인터넷, 카톡임.


// 스택 push() / pop() 이해하기
//push 와 pop을 이해하기.
let work = Array();
console.log(work);
work.push("인터넷");
console.log(work);
work.push("카톡");
console.log(work);
work.push("유투브");
console.log(work);
console.log(work.pop());
console.log(work);
console.log(work.pop());
console.log(work);
console.log(work.pop());



