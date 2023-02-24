const billamount = document.getElementsByClassName("billamount")[0];
const bill = document.getElementsByClassName("tip")[0];
const increase = document.getElementsByClassName("+")[0];
const decrease = document.getElementsByClassName("-")[0];
const totalbill = document.getElementsByClassName("totalbill")[0];
const people = document.getElementsByClassName("people")[0];
let amount,
  tip,
  inc = 1,
  res,
  billtotal;
let boo1 = false,
  boo2 = false;
billamount.addEventListener("keyup", () => {
  amount = Number(billamount.value);
  res = amount;
  calculateBill(res);
});
bill.addEventListener("keyup", () => {
  //   tip = Number(bill.value) * (amount / 100);
  tip = Number(bill.value);
  res = amount + tip;
  calculateBill(res);
});
increase.addEventListener("click", () => {
  inc += 1;
  people.innerText = inc;
  calculateBill(res / inc);
});
decrease.addEventListener("click", () => {
  if (inc > 1) {
    inc -= 1;
    people.innerText = inc;
    calculateBill(res / inc);
  }
});
const calculateBill = (res) => {
  totalbill.innerText = `$${res.toFixed(2)}`;
};
