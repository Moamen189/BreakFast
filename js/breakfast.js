document.getElementById('addButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var price = document.getElementById('priceInput').value;
  
    if (name.trim() !== "" && price.trim() !== "" && !isNaN(price)) {
      addRow(name, price);
      document.getElementById('nameInput').value = "";
      document.getElementById('priceInput').value = "";
    } else {
      alert("Please enter valid values for Name and Price.");
    }
  });
  
  function addRow(name, price) {
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
  
    cell1.innerHTML = name;
    cell2.innerHTML = price;
  
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "button editButton";
    editButton.onclick = function() {
      editRow(row);
    };
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "button deleteButton";
    deleteButton.onclick = function() {
      deleteRow(row);
    };
  
    cell3.appendChild(editButton);
    cell3.appendChild(deleteButton);
  }
  
  function editRow(row) {
    var name = prompt("Enter new name:");
    var price = prompt("Enter new price:");
  
    if (name !== null && price !== null) {
      row.cells[0].innerHTML = name;
      row.cells[1].innerHTML = price;
    }
  }
  
  function deleteRow(row) {
      row.remove();
  }
  