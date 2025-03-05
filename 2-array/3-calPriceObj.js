const obj = [
  { name: "apple", price: 0.5, quntity: 10 },
  { name: "banana", price: 0.3, quntity: 20 },
  { name: "orange", price: 0.6, quntity: 15 },
];

//Merhod-1
function calPayPrice(arr, n) {
  let totalprice = 0;
  for (let index in arr) {
    let price = arr[index].price * arr[index].quntity;
    totalprice += price;
  }
  return parseFloat((totalprice + (totalprice * n) / 100).toFixed(2));
}

// Method-2

function calPayPrice1(arr, tex) {
  const totalPrice = arr.reduce(
    (sum, product) => (sum = sum + product.price * product.quntity),
    0
  );
  const totaltex = (totalPrice * tex) / 100;
  const total = totalPrice + totaltex;
  return parseFloat(total.toFixed(2));
}

console.log(calPayPrice1(obj, 8));
