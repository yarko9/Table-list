const modalCompleteButton = document.getElementById('modal-complete');
const modalDeleteButton = document.getElementById('btn-modal-table-clear');
const modalTable = document.getElementById('modal-table-root');
let modalTableRow = 1;

function addNewRow(){
    const modalInput = document.getElementsByClassName('modal-input');
    let modalContentArr = [];
    for (let i=0; i < modalInput.length; i++) {
        modalContentArr[i] = modalInput[i].value;
        modalInput[i].value = '';
    }
    modalTable.innerHTML += `<tr id="modal-table-row-${modalTableRow}"></tr>`;
    modalContentArr.forEach(function(item, i, modalContentArr) {
        let modalTableCurrentRow = document.getElementById(`modal-table-row-${modalTableRow}`);
        modalTableCurrentRow.innerHTML += `<td>${item}</td>`;
    });
    modalTableRow++;
}

function clearModalTable() {
    modalTable.innerHTML = '';
    modalTableRow = 1;
}

modalCompleteButton.addEventListener('click', addNewRow);
modalDeleteButton.addEventListener('click', clearModalTable);
    