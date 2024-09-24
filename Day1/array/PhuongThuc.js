console.log(`Mảng`);

//khai báo theo ES6

// khai báo mảng users

// console.log(users);

// khai báo kiểu khác
// let users2 = new Array(`Hảo`, `Văn`, `Tuy`);
// console.log(users2[1]););

// // 1. Làm thế nào để ktra 1 biến có phải mảng hay ko
// console.log(typeof users);
// console.log(typeof null);

// if (Array.isArray(users)) {
//   console.log(`Mảng`);
// } else {
//   console.log(`Không phải mảng`);
// }

// // 2. Duyệt mảng
// for (let index in users) {
//   console.log(users[index], index);
// }

// for (let user in users) {
//   console.log(user);
// }

// 3. xóa mảng
// let indexDelete = 1;
// let result = [];
// for (let index in users) {
//   if (index === indexDelete) {
//     continue;
//   }
//   result(result.length) = users[index];
// }

// console.log(result);

// 4. splice(index, count) xóa count phần tử từ index
let users = [`Hảo`, `Văn`, `Tuyến`, `Hãng`];
// users.splice(0, 1);
// users.splice(0, 1, `Hảo thay`, `Văn thay`);
// console.log(users);

// 5. concat(arr1, arr2, ...) nối các mảng với nhau
// console.log(users.concat([1, 2, 3, 4], [`x`, `y`, `z`]));
let setMang = users.concat([1, 2, 3, 4], [1, 2, 3]);
let mangLoaiBo = [...new Set(setMang)];
console.log(mangLoaiBo);

// => trải mảng có các gtrị trùng nhau => loại bỏ các gtrị trùng nhau
// Set loại bỏ các gtrị trùng nhau

// 6. indexOf(value) trả về vtrí đầu tiền của mảng
console.log(users.indexOf(`Hảo`));
console.log(users.indexOf(`Hảo`));
// => trả về -1 khi ko tìm thấy
// => trả về ! == -1 khi tìm thấy

// 7. Tìm phần tử trong mảng (chỉ trả về true/false)
console.log(users.includes(`Hảo`));

// 8. slice(start, end) cắt mảng từ vtrí start -> end => trả về 1 mnảg
console.log(users.slice(0, 2));
console.log(users.slice(-2)); // lấy từ đít

// 9. join() nối các phần tử trg mảng thành 1 chuỗi
console.log(users.join(` - `));

// 10. push() thêm phtử vào cuối mảng, làm thay đổi mảng bđầu và trả về số lượng phần tử sau khi thêm
let count = users.push(`Anh`, `Hòa`, `Vanh`);
console.log(count);
console.log(users);

// 11. xóa phẩn tử cuối mảg, trả về gtrị của phần tử vừa xóa
let value = users.pop();
console.log(value);
console.log(users);

// 12. shift() xóa phần tử đầu mảng, trả về gtrị của phần tử vừa xóa
let value2 = users.shift();
console.log(value2);
console.log(users);
