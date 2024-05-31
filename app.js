// Load saved data
window.onload = function() {
    var savedData = JSON.parse(localStorage.getItem('attendanceData'));
    if (savedData) {
        document.getElementById('attendanceTable').innerHTML = savedData;
    }
}

function addRow() {
    var table = document.getElementById("attendanceTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.contentEditable = "true";
    cell2.contentEditable = "true";
    cell3.contentEditable = "true";
    cell1.innerHTML = "Name";
    cell2.innerHTML = "Date";
    cell3.innerHTML = "Days Worked";
    cell4.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function saveData() {
    var tableData = document.getElementById('attendanceTable').innerHTML;
    localStorage.setItem('attendanceData', JSON.stringify(tableData));
    alert('Data saved!');
}

function clearData() {
    localStorage.removeItem('attendanceData');
    location.reload();
    alert('Data cleared!');
}
