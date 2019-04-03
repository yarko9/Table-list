const mainTable = document.getElementById('main-table-root');
const totalNum = document.getElementById('total-num');
const playButton = document.getElementById('btn-start-simulation');
const clearButton = document.getElementById('btn-clear-table');
let rowNum = 1;
let dhoCurrent = 371;
let tripCurrent = 420;

function startLiveTableSimulation(){
    playButton.setAttribute('disabled',true);
    playButton.setAttribute('title', 'Simulation already started');
    const newRow = setInterval(function() {
        let content = rowContentGenerate();
        mainTable.innerHTML += `<tr id="live-table-row-${rowNum}"></tr>`;
        for (let key in content){
            let objectKeyArray = content[key];
            let elem = objectKeyArray[Math.floor(Math.random()*objectKeyArray.length)];
            let currentRow = document.getElementById(`live-table-row-${rowNum}`);
            currentRow.innerHTML += `<td>${elem}</td>`;
        }
        totalNum.innerHTML = rowNum;
        rowNum++;
    }, 3000);
}
 
function clearLiveTable() {
    mainTable.innerHTML = '';
    rowNum = 1;
    totalNum.innerHTML = '0';
}

function rowContentGenerate(){
    let date = new Date();
    let content = {
        rate: [Math.floor(1000 + Math.random() * 9000)],
        f: ['Yes','No'],
        source: ['DAT', 'CAT', 'LAT', 'WAT'],
        age: [date.getMinutes() + ':' + date.getSeconds()],
        avail: [date.getMonth() + '/' + date.getDate() ],
        truck: ['V','VR'],
        truck_o: ['Belwood, IL'],
        dho: [dhoCurrent],
        fp: ['F','P'],
        origin: ['Erie, PA','St Clair, MI','Chayenne, WY','LoveLand, CO','Charlotte, NC'],
        trip: [tripCurrent],
        destination: ['Sealy, TX','Orlando, FL','Reno, NE','Visalia, CA','Seattle, WA','Clovis, NM'],
        dh_d: [''],
        truck_d: [''],
        length: [Math.floor(10 + Math.random() * 90) + ' ft'],
        weigth: [Math.floor(10 + Math.random() * 90) + ' klbs'],
        company: ['Coyote','R & R Express', 'UPS', 'FedEx', 'DHL'],
        phone: [`(${Math.floor(100 + Math.random() * 900)}) ${Math.floor(100000 + Math.random() * 900000)}`]
    }
    dhoCurrent++;
    tripCurrent++;
    return content;
}

playButton.addEventListener('click', startLiveTableSimulation);
clearButton.addEventListener('click', clearLiveTable);
