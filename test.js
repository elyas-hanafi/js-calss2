// const data = [
//   { text: "hello", color: "red" },
//   { text: "hello2", color: "yellow" },
//   { text: "hello3", color: "pink" },
// ];
// const initial_div = document.getElementById("initial_div");
// const div_container = document.createElement("div");

// // data.forEach((item) => {
// //   const p = document.createElement("p");
// //   p.innerText = item.text;
// //   p.style.color = item.color;
// //   div_container.append(p);
// // });

// // initial_div.append(div_container);

// const orders = [
//   {
//     isAccepted: true,
//     address: { country: "TRY" },
//     user: {
//       active: false,
//       profile: { address: "iran", city: "birjand", street: "test 1" },
//     },
//     purchase_price: 10000,
//     seller: {
//       name: "elyas",
//       age: 23,
//     },
//     buyer: {
//       name: "mehdi",
//       age: 24,
//     },
//   },
//   {
//     isAccepted: true,
//     address: { country: "TRY" },
//     user: {
//       active: false,
//       profile: { address: "iran", city: "birjand", street: "test 1" },
//     },
//     purchase_price: 10000,
//     seller: {
//       name: "elyas",
//       age: 23,
//     },
//     buyer: {
//       name: "mehdi",
//       age: 24,
//     },
//   },
//   {
//     isAccepted: false,
//     address: { country: "TRY" },
//     user: {
//       active: false,
//       profile: { address: "iran", city: "birjand", street: "test 1" },
//     },
//     purchase_price: 10000,
//     seller: {
//       name: "elyas",
//       age: 23,
//     },
//     buyer: {
//       name: "mehdi",
//       age: 24,
//     },
//   },
// ];

// orders.forEach((item) => {
//   const div = document.createElement("div");
//   console.log(item.isAccepted);
//   div.innerHTML = `
//   <div class="card">
//         <div class="card-header">
// ${
//   item.isAccepted
//     ? `<div class="status-2">Accept</div>`
//     : `<div class="status-1">Deny</div>`
// }

//         </div>
//         <div class="card-body">

//         </div>
//         <div class="card-footer"></div>
//       </div>
//     </div>`;
//   div_container.append(div);
// });

// initial_div.append(div_container);

const spread = (...x) => {
  console.log(x);
};
spread(100, 500, 200, 400, { name: "test" });
