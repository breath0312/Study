// let person = {
//     fullname: '이수민',
//     age: 22,
//     printThis: function(){
//         console.log(this);
//         console.log(this === person);
//     }
// }
// person.printThis();

function print() {
    console.log('this: ', this);
    console.log('this.fullname: ', this.fullname);
  }
  
  let person1 = {
    fullname: '홍길동',
  };
  let person2 = {
    fullname: '김길동',
  };
  let bindPrint = print.bind(person1); // person1 객체로 바인딩
  bindPrint(); // person1
  let bindPrint2 = bindPrint.bind(person2);
  bindPrint2(); // person1! bind는 단 한번만 할 수 있다.