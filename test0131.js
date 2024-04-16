//구조, 분해, 할당 , 디스트럭팅(distructing)


let fruits = ["사과", "바나나"];//원래 할당하는 법
let apple = fruits[0];
let banana = fruits[1];

console.log(apple, banana);

//

let [apple2, banana2] = ["사과", "바나나"]; //할당

console.log(apple2, banana2);

//

let [a,b] = [];
console.log(a);//undefined
console.log(b);//undefined

//

let seasons = ["봄","여름", "가을", "겨울"];
let spring = seasons[0];
let summer = seasons[1];
let fall = seasons[2];

//디스트럭팅, 이거는 배열의 구조 분해 할당.

let [spring2, , fall2, ] = ["봄","여름", "가을", "겨울"]; //빈칸은 걍 재끼고 가는 것.
console.log(spring2, fall2);

let [teacher, ...students] = ["서호준", "신수민", "조민성", "김용훈", "조찬증", "최윤정"];
//지금 구조 분해 할당과 전개 구문을 섞어 쓰는것.
//하나의 데이터가 넘어올 때, 대표적인 것을 젤 앞에, 별도의 변수로 설정하고
//나머지를 묶을 수 0
console.log(teacher);
console.log(students);


let frontendClass={ //객체 생성
    className : "front(react)",
    gisu : 8,
}

let{className, gisu} = frontendClass;
console.log(className,gisu);
//배열 구조분해할당과는 사뭇 다르다.
let{className:cName, gisu:gitgit} = frontendClass;//이름을 바꿔서 구조분해할당
console.log(cName,gitgit);
