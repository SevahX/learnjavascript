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

createCalendar(calendar, 2019, 8);