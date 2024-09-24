// console.log(`Vòng lặp`);

// let users = [`Hảo`, `Văn`, `Tuy`, `Vy`, `Anh`];
// console.log(users);

// 1. fill(), cập nhật tất cả các phtử của mảng thành 1 gtrị
// users2.fill(`Hello`);
// console.log(users2);

// 2. forEach( callback ), duyệt qua từng phần tử và trả về element, index trg callback
// ko thể dừng vòng lặp đc
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

// cú pháp es6 => chính là cú pháp của reactjs
// arrow function
// users.forEach((user, index) => {
//   console.log(user, index);
// });

// 3. map(callback), duyệt qua từng phần tử trg mảng, trả về element, index trg callback
// let newArray = users.map((user, index) => {
//   console.log(user, index);
//   return `<h2>${user} - ${index}</h2>`;
// });
// document.write(newArray.join(``));

// Baì tập: thực hành giao diện
// let array = [
//   {
//     imgSrc: `https://picsum.photos/200`,
//     content: `Hello ae`,
//   },

//   {
//     imgSrc: `https://picsum.photos/200`,
//     content: `Goodbye ae`,
//   },
// ];

// let content = `
// ${array.map((content, index) => {})}
// `;
// document.write(content);

// 4. Some(callback), gtrị của hàm some chỉ true/false
/*
- trả về true nếu có ít nhất 1 lần lặp return true
- ví dụ, tìm trg hàm có số lẻ ko [1,2,3,4,5,6,7,8,9,10]
    => trả về true, gặp 1 là số lẻ trả về true
 */
// let number = [1, 2, 3, 4, 5, 6, 7];
// let check = number.some((num, index) => {
//   if (num % 2 == 0) {
//     return true;
//   }
// });
// console.log(check);

// 5. every(callback), gtrị của hàm every chỉ true/false
/*
- trả về true nếu tất cả trả về true
- trả về false nếu 1 phtử ko trả về true
*/
// ktra xem tất cả có phải số lẻ ko
let number = [1, 3, 5, 7];
let check = number.every((num, index) => {
  if (num % 2 !== 0) {
    console.log(num);
    return true;
  }
});
console.log(check);
