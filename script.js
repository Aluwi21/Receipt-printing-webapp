/* Element variables */
const tableForm = document.querySelector("#tableForm");
const tItem = document.querySelector("#tItem");

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
  grandTotal.textContent = `Rp ${parseFloat(grandTotal.textContent) + total}`;

  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
});
