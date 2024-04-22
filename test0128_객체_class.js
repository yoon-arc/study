//현재 가장 대표적인 객체 생성 방법
//모든 곳에서 객체를 만들 때는 class를 사용하나, js만 class씀. 함수 지향적.



class Book{ //syntactic sugar (설탕을 살짝 바르다)
    constructor(title, totalPages, nowPage=1){//생성자
        this.title = title;
        this.totalPages = totalPages;
        this.nowPage = nowPage;
    }
    read(){
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

   //만약 여기서 value값을 가져오고 싶다면? 근데 직접 입력하는 거라 의미없나?


let book1 = new Book("프론트 기술", 200);
let book2 = new Book("백엔드", 10, 2);
book1.read();
book2.read();