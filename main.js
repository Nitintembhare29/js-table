
let nextId = 1;

const createRowBtn = document.getElementById("create-row-btn");
const table = document.getElementById("table").getElementsByTagName("tbody")[0];
const saveBtn = document.getElementById("save-btn");

createRowBtn.addEventListener("click", addRow);
saveBtn.addEventListener("click", saveData);

function addRow() {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nextId}</td>
    <td><input style="border: none; text-align: center;" type="text"></td>
    <td><input style="border: none; text-align: center;" type="text"></td>
    <td><input style="border: none; text-align: center;" type="text"></td>
    <td><input style="border: none; text-align: center;" type="text"></td>
    <td><input style="border: none; text-align: center;" type="text"></td>
    <td><button  style="color: white; background-color: black; padding: 3px 20px;" id="save-btn">Save</button></td>
  `;
  table.appendChild(row);
  nextId++;
}

function saveData() {
  let tableData = [];
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const inputs = rows[i].getElementsByTagName("input");
    const rowData = {};
    for (let j = 0; j < inputs.length; j++) {
      const input = inputs[j];
      const inputName = input.parentElement.previousElementSibling.textContent.toLowerCase().replace(" ", "_");
      const inputValue = input.value.trim();
      if (!inputValue || (inputName === "marks" && isNaN(inputValue)) || (inputName === "marked_by" && !isEmailValid(inputValue))) {
        alert("Please fill all the fields correctly!");
        return;
      }
      rowData[inputName] = inputName === "id" ? Number(inputValue) : inputValue;
    }
    tableData.push(rowData);
  }
  console.log(tableData);
  console.log(nextId);
}

function isEmailValid(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


