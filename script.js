/* Element variables */
const tableForm = document.querySelector("#tableForm");
const tItem = document.querySelector("#tItem");

function getDate() {
  date = new Date();
  y = date.getFullYear();
  m = date.getMonth();
  d = date.getDate();

  return `${d}-${m}-${y}`;
}
document.getElementById("d").innerHTML = getDate();

/* Event */

tableForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let item = document.getElementById("item").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let price = parseFloat(document.getElementById("price").value);
  var total = amount * price;

  // Create element and assign
  let row = document.createElement("tr");
  tItem.appendChild(row);

  let cellItem = document.createElement("td");
  cellItem.textContent = item;
  row.appendChild(cellItem);

  let cellAmt = document.createElement("td");
  cellAmt.textContent = amount;
  row.appendChild(cellAmt);

  let cellPrice = document.createElement("td");
  cellPrice.textContent = `Rp ${price.toFixed(3)}`;
  row.appendChild(cellPrice);

  // Total and GrandTotal
  let cellTotal = document.createElement("td");
  cellTotal.textContent = `Rp ${total.toFixed(3)}`;
  row.appendChild(cellTotal);

  let grandTotal = document.getElementById("grandTotal");
  grandTotalNum = parseFloat(grandTotal.textContent)+total;
  grandTotal.textContent = grandTotalNum.toFixed(3)

  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
});
