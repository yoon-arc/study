//js의 핵심!!! 비동기 처리 방식
//동기 처리(주류) VS 비동기 처리

//멀티 스레드(java) vs 싱글 스레드(js)
// 멀티 스레드 : ex.소 회의실 5개(1조 ~ 5조), 시간 별로 쪼개서 가는 방식
    //장점: 한 명의 선생님이 독점.
//싱글 스레드 : ex.전체 회의실(오류 수정중) 전체 학생 중 1명 선생님. 상황 인식(양보)
    // 양보 : 급한 일 먼저,,,(대신 우선순위 밀릴 수도)
    //장점, 약점: 일처리가 빠를 수 있으나, 나중에 섞이면 전부 망할 수도 있음. 

//양보를 하느냐, 안하느냐에 따라 일처리 방식이 매우 달라짐!!


// function dispA(){console.log("A");}
// function dispB(){console.log("B");}
// function dispB_Delay(){setTimeout(() => console.log("B_dedlay"),2000);}
// //원래라면 dispB_delay에 2초를 늦춰도 B가 늦게 나오고 C나 나올거라 생각하지
// //C부터 나오고 B가 올 거라고는 생각 못함.
// function dispC(){console.log("C");}
// function proc1(){
//     dispA();
//     dispB();
//     dispC();
// }
// proc1();

// function proc2(){
//     dispA();
//     dispB_Delay(); //빨리 되는 애들에게 양보함!
//     dispC();
// }
// proc2();

//callback 개념
// function dispA(){console.log("A");}
// function dispC(){console.log("C");}
// function dispB_callback(callback){ //비동기에서 순서를 지키고 싶을 때 쓴다. 지 멋대로 순서 되는 거 방지.
//     setTimeout( () => 
//     {console.log("B"); 
//     callback();}, //아직 ()안에 뭐가 들어올지 모름. 나중에 실행. B,C의 순서가 여기서 결정
//     2000);
//             //나 2초 걸리는 일이니까 2초 뒤에는 화살표 함수대로 해줘..
//             //근데 나 B만 오래걸리는 게 아니라 callback도 2초 걸려..
//             //그래서 너가 밑에 callback 함수안에 dispC넣은 것도 2초 뒤에 할 거야..
// }

//     function proc3(){
//         dispA();
//         dispB_callback(dispC);
//     }
//     console.log("proc3()");
//     proc3();

    
    // 햄버거 주문 과정
    // 1. 고객이 주문을 한다. 1000ms
    // 2. 결제를 한다.        500ms
    // 3. 조리 측에 주문 전달  300ms
    // 4. 햄버거를 조리 한다  3000ms
    // 5. 햄버거 포장을 한다   100ms
    // 6. 고객에게 전달한다    500ms
    // 7. 고객이 내용물을 확인하고 먹는다. 100ms

    // function order(){setTimeout(() => {
    //     console.log("1. 고객이 주문을 한다. 1000ms")
    // }, 1000);}

    // function pay(){setTimeout(() => {
    //     console.log("2. 결제를 한다.        500ms")
    // }, 500);}
    // function orderTx(){setTimeout(() => {
    //     console.log("3. 조리 측에 주문 전달  300ms")
    // }, 300);}
    // function cook(){setTimeout(() => {
    //     console.log("4. 햄버거를 조리 한다  3000ms")
    // }, 3000);}
    // function pack(){setTimeout(() => {
    //     console.log("5. 햄버거 포장을 한다   100ms")
    // }, 100);}
    // function out(){setTimeout(() => {
    //     console.log("6. 고객에게 전달한다    500ms")
    // }, 500);}
    // function eat(){setTimeout(() => {
    //     console.log("7. 고객이 내용물을 확인하고 먹는다. 100ms")
    // }, 100);}

    // function getBurger(){
    //     order(); pay(); orderTx(); cook(); pack(); out(); eat();
    // }
    // getBurger();


    function getBurgerByCallback(){
        setTimeout(
            () => {
                console.log("1. 고객이 주문을 한다. 1000ms");
                setTimeout(()=>{
                    console.log("2. 결제");
                    setTimeout(()=>{
                        console.log("3. 조리 측에 주문 전달  300ms");
                        setTimeout(()=>{
                            console.log("4. 햄버거를 조리 한다  3000ms");
                            setTimeout(()=>{
                                console.log("5. 햄버거 포장을 한다   100ms");
                                setTimeout(()=>{
                                    console.log("6. 고객에게 전달한다    500ms");
                                    setTimeout(()=>{
                                        console.log("7. 고객이 내용물을 확인하고 먹는다. 100ms");
                                    },100);
                                },500);
                            }, 100);
                        },3000);
                    },300);
                }, 500);
            },1000);
    }
    getBurgerByCallback();