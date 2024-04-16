//async await 문
//promise  : ~~.then().then() => 이것도 동기에서는 불편함.

//일반 함수 형태
function generalFunc(){
    console.log("일반 함수네요");
}

//async 함수 형태
async function asyncFunc(){ //function 앞에 붙일 수 있음
    console.log("async 함수네요");
}

//일반 방식
function whatIsYourOrder(){
    let myOrder = "한솥도시락";
    return new Promise((resolve,reject)=>resolve(myOrder));//성공하든,, 실패하든..나는 성공하면 위 정보를 넘겨주겠다.
}
function showYourOrder(mes){
    return new Promise(
        (resolve,reject)=>resolve(`promise로부터 ${mes}를 주문 받았습니다.`)
    )
}
whatIsYourOrder().then(showYourOrder).then(console.log);



//async를 쓴 방식

async function asyncwhatIsYourOrder(){
    let myOrder = "한솥도시락";
    return myOrder;
}
async function asyncshowYourOrder(mes){
 return `promise로부터 ${mes}를 주문 받았습니다.`;

}
asyncwhatIsYourOrder().then(asyncshowYourOrder).then(console.log);



//async, await 방식(제일 간단하고 동기화 프로그램이랑 닮음.)
async function order(){
    const res = await asyncwhatIsYourOrder();
    const res2 = await asyncshowYourOrder(res);
    console.log(res2);
    
}
order();