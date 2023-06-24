const events = require("events");

const myEvents = new events();

function placeOrder(food) {
  myEvents.emit("order", `Your order has been placed for ${food}`);
  myEvents.emit("foodPreparation", `Your order is being prepared for ${food}`);
  myEvents.emit("foodDispatch", `Your order has been dispatched for ${food}`);
  myEvents.emit(
    "foodOutDorDelivery",
    `Your order is out for delivery for ${food}`
  );
  myEvents.emit("foodDelivered", `your order has been delivered for ${food}`);
}

myEvents.on("order", (data) => {
  console.log(data);
});

myEvents.on("foodPreparation", (data) => {
  console.log(data);
});
myEvents.on("foodDispatch", (data) => {
  console.log(data);
});
myEvents.on("foodOutDorDelivery", (data) => {
  console.log(data);
});
myEvents.on("foodDelivered", (data) => {
  console.log(data);
});

placeOrder("Burger");
