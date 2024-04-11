//전개 구문: 배열

let fruits = ["banana", "watermelon", "apple"];
console.log(fruits); //전체 출력

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
} // 인덱스로 접근할 때는 하나씩 출력


console.log(...fruits); //배열의 장식을 벗고 하나씩 내보냄,,

const addNums = (...nums)=>{ //배열에 몇개의 숫자가들어오든 상관 없음
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

console.log(addNums(1,2,3));
console.log(addNums(1,2,3,4,5));


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];
//우리가 데이터를 가지고 와서 하나로 합칠 때 많이 쓰는 방식.
const arr4 = [0, ...arr1, ...arr2, 7,8,9]
