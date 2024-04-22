//js 객체 - 생성자 함수 정의
//기본 객체 만들기랑 다르다. 이렇게 하면 new()를 사용할 수 있음.(인스턴스 생성)
//좀 더 객체 지향에 가까움


function Book(title, totalPages, nowPage=1){
    this.title = title;
    this.totalPages = totalPages;
    this.nowPage = nowPage; 
    this.read = function (){
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

let book1 = new Book("프론트 기술", 200);
let book2 = new Book("백엔드", 10, 2);
let book3 = new Book("참을 수 없는 존재의 가벼움", 600 ,600);
book1.read();
book2.read();
book3.read();