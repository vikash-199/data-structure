const obj = [
  { name: "apple", price: 0.5, quntity: 10 },
  { name: "banana", price: 0.3, quntity: 20 },
  { name: "orange", price: 0.6, quntity: 15 },
];
const totalProductPrice = (obj, tax) => {
  let totalPrice = 0;
  for (let o of obj) {
    totalPrice += o.price * o.quntity;
  }
  let taxValue = (totalPrice * tax) / 100;
  return (totalPrice + taxValue).toFixed(2);
};

console.log(totalProductPrice(obj, 10));
function totalPrice(obj, tax) {
  const price = obj.reduce(
    (sum, product) => (sum += product.quntity * product.price),
    0
  );
  const totalTax = (price * tax) / 100;
  const total = price + totalTax;
  return parseInt(total.toFixed(2));
}
console.log(totalPrice(obj, 10));

// //Merhod-1
// function calPayPrice(arr, n) {
//   let totalprice = 0;
//   for (let index in arr) {
//     let price = arr[index].price * arr[index].quntity;
//     totalprice += price;
//   }
//   return parseFloat((totalprice + (totalprice * n) / 100).toFixed(2));
// }

// // Method-2

// function calPayPrice1(arr, tex) {
//   const totalPrice = arr.reduce(
//     (sum, product) => (sum = sum + product.price * product.quntity),
//     0
//   );
//   const totaltex = (totalPrice * tex) / 100;
//   const total = totalPrice + totaltex;
//   return parseFloat(total.toFixed(2));
// }

// console.log(calPayPrice1(obj, 8));
