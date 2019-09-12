'use strict'

function createCalendar(elem, year, month) {
    let div = document.querySelector("#calendar");
    let table = document.createElement("table");
    table.append(createHeader());

    month -= 1;
    let firstDate = new Date(year, month);
    let lastDate = new Date(year, month+1, 0);
    let daysInMonth = lastDate.getDate();

    let currentTr = document.createElement("tr");
    console.log(firstDate.getDay() + " " + lastDate.getDay());
    let firstEmptyCount = firstDate.getDay() === 0
        ? 6
        : firstDate.getDay() - 1;
    let endEmptyCount = lastDate.getDay() === 0
        ? 0
        : 7 - lastDate.getDay();

    let count = 1;
    for (let i = -firstEmptyCount + 1; i <= daysInMonth + endEmptyCount; i++) {
        let td = document.createElement("td");
        if (i > 0 && i <= daysInMonth){
            td.innerHTML = String(i);
        }
        currentTr.append(td);

        if (count++ % 7 === 0){
            table.append(currentTr);
            currentTr = document.createElement("tr");
        }
    }

    div.append(table);
}

let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

function createHeader() {
    const thead = document.createElement('thead')
    for(let day of days){
        const th = document.createElement('th');
        th.innerHTML = day;
        thead.append(th);
    }

    return thead;
}

const createTBody = () => {
    let div = document.querySelector("#calendar");
    let table = document.createElement("table");
    table.append(createHeader());
    let firstDay = 1;
    let lastMonthDay = 30;

    let tbody = document.createElement("table");
        for (let day = 1; day <= lastMonthDay;) {
            const tr = document.createElement("tr");
            for (let index = 1; index <= 7; index++) {
                const td = document.createElement("td");
                if (day > lastMonthDay) {
                    break;
                }
                if (index === firstDay) {
                    td.innerHTML = day++;
                    tr.append(td);
                    continue;
                }
                td.innerHTML = day++;
                tr.append(td);
            }
            tbody.append(tr);
        }
    div.append(tbody);
};

// createCalendar(calendar, 2019, 8);

createTBody();