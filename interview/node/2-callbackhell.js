// Callback hell example
getUser((err, user) => {
  getOrders(user.id, (err, orders) => {
    getTotal(orders, (err, total) => {
      console.log(total);
    });
  });
});

// Fixed using async/await
async function getUserTotal() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  const total = await getTotal(orders);
  console.log(total);
}
