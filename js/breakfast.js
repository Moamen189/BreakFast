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


document.getElementById('addDeliveryButton').addEventListener('click', function() {
  var deliveryCost = document.getElementById('deliveryCostInput').value;
  var developers = document.getElementById('developersInput').value;

  if (deliveryCost.trim() !== "" && developers.trim() !== "" && !isNaN(deliveryCost) && !isNaN(developers)) {
    addDeliveryRow(deliveryCost, developers);
    document.getElementById('deliveryCostInput').value = "";
    document.getElementById('developersInput').value = "";
  } else {
    alert("Please enter valid values for Delivery Cost and Number of Developers.");
  }
});

function addDeliveryRow(deliveryCost, developers) {
  var deliveryTable = document.getElementById('deliveryTable').getElementsByTagName('tbody')[0];
  var row = deliveryTable.insertRow(deliveryTable.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = deliveryCost;
  cell2.innerHTML = developers;
  var price = (deliveryCost / developers).toFixed(2);
  cell3.innerHTML = price;
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "button editButton";
  editButton.onclick = function() {
    editDeliveryRow(row);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "button deleteButton";
  deleteButton.onclick = function() {
    deleteDeliveryRow(row);
  };

  cell4.appendChild(editButton);
  cell4.appendChild(deleteButton);
}

function editDeliveryRow(row) {
  var deliveryCost = prompt("Enter new delivery cost:");
  var developers = prompt("Enter new number of developers:");

  if (deliveryCost !== null && developers !== null && !isNaN(deliveryCost) && !isNaN(developers)) {
    row.cells[0].innerHTML = deliveryCost;
    row.cells[1].innerHTML = developers;
  }
}

function deleteDeliveryRow(row) {
  
    row.remove();

}



document.getElementById('addFoodButton').addEventListener('click', function() {
  var foodName = document.getElementById('foodNameInput').value;
  var foodPrice = document.getElementById('foodPriceInput').value;

  if (foodName.trim() !== "" && foodPrice.trim() !== "" && !isNaN(foodPrice)) {
    addRowFood(foodName, foodPrice);
    document.getElementById('foodNameInput').value = "";
    document.getElementById('foodPriceInput').value = "";
  } else {
    alert("Please enter valid values for Food Name and Food Price.");
  }
});

function addRowFood(foodName, foodPrice) {
  var table = document.getElementById('foodTable').getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = foodName;
  cell2.innerHTML = foodPrice;

  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "button editButton";
  editButton.onclick = function() {
    editRowFood(row);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "button deleteButton";
  deleteButton.onclick = function() {
    deleteRowFood(row);
  };

  cell3.appendChild(editButton);
  cell3.appendChild(deleteButton);
}

function editRowFood(row) {
  var foodName = prompt("Enter new food name:");
  var foodPrice = prompt("Enter new food price:");

  if (foodName !== null && foodPrice !== null && !isNaN(foodPrice)) {
    row.cells[0].innerHTML = foodName;
    row.cells[1].innerHTML = foodPrice;
  }
}

function deleteRowFood(row) {

    row.remove();

}


