class CBOOK{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    buy(){
        console.log(`${this.title}책을 ${this.price}원에 구매했어요`);
    }

}

const book1 = new CBOOK("프론트 기술","3000");
book1.buy();


class Ctext extends CBOOK{
    constructor(title, price, major){
        super(title,price);//여기선 call 대신 super
        this.major = major;
    }
    buyTextBook(){
        console.log(`${this.major}전공 책을 
        ${this.title}책을 ${this.price}원에 구매했어요`);
    }
}

const textbook1 = new Ctext('프론','20','디자인');
textbook1.buy();
textbook1.buyTextBook();