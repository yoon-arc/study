//async await 문
//promise  : ~~.then().then() => 이것도 동기에서는 불편함.

//일반 함수 형태
function generalFunc(){
    console.log("일반 함수네요");
}

//async
async function asyncFunc(){ //function 앞에 붙일 수 있음
    console.log("async 함수네요");
}

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