// //Timer (동기, Js외 타언어)
// while(true){
//     setGreenLight();
//     Sleep(30);
//     setGreenLight();
//     Sleep(30);
// } //원래 방식. 일하고, 기다리고, 일하고의 반복.

//Timer 관련(비동기)

// function hello(){console.log("용복!");}
// setInterval(hello, 1000);



var count = 0;

let timer = setInterval(()=>{
    console.log("용복!"); count++;
    if (count > 5) clearInterval(timer)
}, 1000); //어느정도 조건이(위 구문에서는 5번) 되면 그만 둠.

//여기서 1000은 1초를 의미함(단위가 밀리세컨드라 그럼.)


//TimeOut!!!!

setTimeout(()=>{console.log("고구마");}, 3000);
//서버에서 전체 요소를 받아보기 전까지 3초 정도 기다렸다가(딴 거 하다가)
//ex.결제 요청 후, 결제 허가까지 걸리는 시간이 setTimeOut에 해당함.