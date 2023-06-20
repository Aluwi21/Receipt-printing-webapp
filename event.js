function numComa(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

document.getElementById("tableForm").addEventListener("submit", (event) => {
  event.preventDefault();

  let item = document.getElementById("item").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let price = parseFloat(document.getElementById("price").value);
  var total = amount * price;

  // Create element and assign
  let row = document.createElement("tr");
  document.querySelector('#tItem').appendChild(row);

  let cellItem = document.createElement("td");
  cellItem.textContent = item;
  row.appendChild(cellItem);

  let cellAmt = document.createElement("td");
  cellAmt.textContent = amount;
  row.appendChild(cellAmt);

  let cellPrice = document.createElement("td");
  cellPrice.textContent = price.toFixed(3);
  row.appendChild(cellPrice);

  // Total and GrandTotal
  let cellTotal = document.createElement("td");
  cellTotal.textContent = total.toFixed(3);
  row.appendChild(cellTotal);

  let grandTotal = document.getElementById("grandTotal");
  grandTotalNum = parseFloat(grandTotal.textContent.replace("Rp", "").replace(",", "")) + total;
  grandTotal.textContent = "Rp" + numComa(grandTotalNum);

  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
});
