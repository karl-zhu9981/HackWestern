function addReceipt() {
    // hardcoding lol
    var row = document.getElementById("receiptsTable").insertRow(9);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="checkbox" name="name1" />&nbsp';
    cell2.innerHTML = "9";
    cell3.innerHTML = "Dining Out";
    cell4.innerHTML = "$149.16";

    document.getElementById("dining-out-amt").innerHTML = "$449.16 / $100";
    document.getElementById("budget-spent").innerHTML = "$1,249.16";
    document.getElementById("under-budget").innerHTML = "$480.84";

}

function addPayment() {
    // hardcoding lol
    addData();
    var row = document.getElementById("dataTable").insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "12";
    cell2.innerHTML = "2020/11/23";
    cell3.innerHTML = "$850.00";
    cell4.innerHTML = "$24,050.00";

    document.getElementById("loan-paid").innerHTML = "$14,850.00";
    document.getElementById("loan-remaining").innerHTML = "$24,050.00";

}