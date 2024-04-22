//객체를 만들면 비슷한 종류의 것들을 싸잡아서 볼 수 있다.
//밖에선 보이지 않고, 안에서만 볼 수 있음.
//설계도만 공유했을 뿐, 인스턴스끼리는 하나하나 분리되어있어서 서로 영향 X.
//객체의 캡슐화라 함.

//프로토타입, 상속
function Book(title, price){
    this.title = title;
    this.price = price;
}

//chrome console에서 Book.prototype 확인. Object 상속(객체 상속)

Book.prototype.buy = function(){ //Book.prototype에 buy를 추가 설계.
    console.log(`${this.title}책을 ${this.price}원에 구매했어요`);

}//book 객체에 뒤늦게 buy라는 함수 추가


const book1 = new Book("프론트 기술","3000");
book1.buy();


function TextBook(title, price, major){
    Book.call(this, title, price);//Book을 먼저 여기로 call한 뒤, this = 나에게, title과 price를 주세요.
    this.major = major;
}

TextBook.prototype.buyTextBook = function(){
    console.log(`${this.major}전공 책을 ${this.title}책을 ${this.price}원에 구매했어요`);}

Object.setPrototypeOf(TextBook.prototype, Book.prototype); //prototype 연결, 상속


const textbook1 = new TextBook('프론','20','디자인');
textbook1.buy();
textbook1.buyTextBook();