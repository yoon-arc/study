// 프로미스 
//pizza 주문
const pizzaOrder = ()=> {
    return new Promise(
        (resolve, reject)=>{
            resolve("피자를 주문합니다.");
        }
    );
}
//resolve('피자 도우 준비'); 3000ms
const step1 = (mes)=>{
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                resolve("피자 도우 준비");
            },3000);
        }
    )
}
//resolve('토핑 준비'); 1000ms
const step2 = (mes)=>{
    console.log(mes);
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                resolve("토핑 준비");
            },1000);
        }
    )
}//resolve('굽기 완료'); 3000ms
const step3 = (mes)=>{
    console.log(mes);
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                resolve("굽기 완료");
            },2000);
        }
    )
}
pizzaOrder()
.then( (res)=> step1(res)) //promise return 덕에 .then, .then으로 가능.
.then( (res)=> step2(res))
.then( (res)=> step3(res))
.then( (res)=> console.log(res));