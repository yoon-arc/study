// < 프로그래밍 패러다임 >




    //선언형 프로그래밍(결과 묘사)
    <img></img>
    const numbers = [1,2,3,4];
    const evenNumber = numbers.filter(num=>num%2==0);
    //넘버가 있으면 나 evenNum이라는 필터로 걸러낼거야~
    //일반 for문 쓰지도 않음.




    //명령형, 절차 지향 프로그래밍
    //경우의 수, 절차 하나하나를 전부 깐깐하게 다 따지는 것.
    const evenNumbers = []
    for(let i = 0; i<numbers.length; i++){
        const num = numbers[i];
        if(num%2==0) evenNumbers.push(num);
    } // 과정 하나하나를 전부 따지는 것. 함수, 제어문을 자주 사용함.
    //이는 과정을 설명하는 거라 어쩔 수 없음.
    //논리형, 수리형 중요



    //객체 지향 프로그래밍
    // Java 개발자 모집(객체 지향 프로그래머 모집 + 스피링, 부트 개발자 등.)
    // 앞으로 서비스 로직을 만들 때는, 사회 과학적, 인문학적임.
    //관계적, 조직적인 성질이 크다.
    //조직화,
    //객체 = 프로퍼티(변수 값) + 메소드(함수의 형태)
    //주변의 모습을 묘사

    //자판기 설계(음료수 캔 자판기)
    //      절차 지향적 사고
    //      1. 돈을 받는다. 얼마인지 검출한다.
    //      2. 구매 가능한 음료를 표시한다, 움직임을 기다린다.
    //      3. 사용자 제품 선택을 받는다.
    //      4. 음료를 제공한다.
    //      5. 잔돈을 반환한다.
    //막막: 돈을 누가 어떻게 검출해? 관리 누가해? =>Money 객체
    //      움료 표시/사용자 선택은 누가 관리해? =>User 객체
    //      캔은 누가 줘?(실질적 문제에 봉착) => Goods
    // 제품: 만들면, 상품 :팔 수 있으면(내가 만들어도 되고, 가져와서 팔아도 됨) 


    //객체 지향적 설계 (클래스 다이어그램)
    //money 객체
    //프로퍼티 : moneyType, goodsPrice, card, jangum
    //메소드 : AuthCard(usercard), jangum_up(money), jangum_down(money)

    //serving 객체
    //프로퍼티 :  GoodsAvailavle(goods, Money 객체와 연결), UserSelection(사용자가 선택한 값을 저장해서 지니고 있어야)
    //메소드 : WhatIsAvailable(goods, Money -> 뭐뭐 있어요? 금액은 얼마 있어요? 그럼 이만큼만 가능하다~) 

    const card = {
        CardCompanyURL : "samsung.com",

    }

    //돈 종류 묶기
    const moneyType = {
        BAEKWON : 100,
        OBAEKWON : 500,
        CHEONWWON : 1000,
        OCHEONWON : 5000,
        MANWON : 10000
    }

    
    const goodsPrice = {
        MILKIS : 800,
        FANTAORANGE : 1500,
        ZEROCOKE : 3000
    }
    //필요한 금애그전돈,현재금액(상품별 가격, 현재 잔액)
