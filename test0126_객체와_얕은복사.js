//js 객체

let book = {
    title:"front tech",
    totalPages: 300,
    nowPage:1, //여기까지 프로퍼티
    read: function (){ //여기부터 메소드
        if(this.nowPage >= this.totalPages){
            console.log("다 읽었어요");
        }else{
            console.log(`${this.title}을 읽습니다. 
        지금 ${this.nowPage}page를 읽고 있습니다.`);
        }
        this.nowPage++;
        //this = 지금 내 내부에 있는 이거~를 의마하는 것.
        
    }
}

book.read();
book.read();

//객체는 관리의 코드다! 이렇게 하면 함수와 변수가 꼬이지 않는다는 장점이 있음.



//복사 (말 그대로 값을 복사한 것), 독립된 두개의 값이 발생
let number1 = 100;
let number2 = number1;
console.log("number1: ", number1);
console.log("number2: ", number2);


number2 = 200;
console.log("number1: ", number1);
console.log("number2: ", number2);


//객체 복사 (참조reference 복사) : 얕은 복사 
//객체 복사는 독립된 것이 아닌, 한 몸임.
//참조 복사라 부름.(자동차 열쇠만 복사하고, 자동차는 똑같은 자동차라 한쪽에 영향을
//주면 다른 쪽에도 영향을 줌.)

let car1 = { name: "Avante", color: "blue", engineSize: 1.6 }
let car2 = car1; //이떄 car1, car2 객체 두개를 만든게 아닌, 열쇠를 복사한 느낌.
console.log("car1: ", car1);
console.log("car2: ", car2);


car2.color = "red";
console.log("car1: ", car1);
console.log("car2: ", car2);


//배열 복사 - 얕은 복사
const arr1 = [10,20,30];
const arr2 = arr1.reverse();
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);

//전개 구문을 통한 해결 -  배열 깊은 복사
//한몸이 아닌, 전개 구문을 통해 독립적인 한개의 객체를 더 만드는 것.
const array1 = [10,20,30];
const array2 = [...array1].reverse();
console.log("array1: ", array1);
console.log("array2: ", array2);


let sedan1 = { name: "Avante", color: "blue", engineSize: 1.6 }
let sedan2 = {...sedan1}; //앞으로는 배열 다룰 때 이런 식으로?한다..
//원본 객체에 영향을 주지 않고 복사본을 만들고 싶을때. 이건 깊은 복사임!
sedan2.color = "red";
console.log("sedan1: ", sedan1);
console.log("sedan2: ", sedan2);
// ...의 약점: 더 깊은 레벨은 안 됨(객체 안에 객체를 넣어서 레벨이 깊어지면 안됨)
//재귀를 통한(재귀 함수), Lodash 등의 외부 라이브러리를 통해 해결함.