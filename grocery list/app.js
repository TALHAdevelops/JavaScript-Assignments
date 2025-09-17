// AGENDA: Make item list
document.write("<center><h1><u>Grocery Item List</u></h1></center>");
document.write("<center><h3>By talha</h3></center>");
let items = ["Rice", "Chicken", "Beef"];
let price = [350, 1000, 1200];
let quantity = [];

function itemList() {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        quantity.push(parseInt(prompt(`How much quantity you want for ${items[i]}, which price for 1kg is ${price[i]}`)));
        total += quantity[i] * price[i];
    }

    return total;
}

let item_total = itemList();

// start table
let table = "<center><table border='1' cellpadding='10'><tr><th>Items</th><th>Price</th><th>Quantity</th></tr>";

// loop rows
for (let i = 0; i < items.length; i++) {
    table += `<tr>
        <td>${items[i]}</td>
        <td>${price[i]}</td>
        <td>${quantity[i]}</td>
    </tr>`;
}

// close table
table += "</table></center>";

document.write(table);
document.write(`<center><h3>TOTAL BILL: Rs ${item_total}/-</h3></center>`);
