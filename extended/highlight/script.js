'use strict';

function highlight(table) {
    console.log(table);

    let tbody = table.getElementsByTagName('tbody')[0];
    let trs = tbody.getElementsByTagName('tr');

    for (let item of trs) {
        console.log(item);
        let ageCell = item.cells[1];
        let genderCell = item.cells[2];
        let statusCell = item.cells[3];

        let age = Number(ageCell.innerHTML.trim());
        let gender = genderCell.innerHTML.trim() === 'm' ? "male" : "female";
        let bool = statusCell.dataset.available === "true" ? "available" : "unavailable";

        if (statusCell.dataset.available === undefined){
            statusCell.setAttribute("hidden", "true");
        }

        if (age < 18){
            statusCell.setAttribute("style", "text-decoration: line-through");
        }

        statusCell.classList.add(bool);
        statusCell.classList.add(gender);
    }

    console.log(trs);
}

highlight(document.querySelector('.js-teachers')); 

