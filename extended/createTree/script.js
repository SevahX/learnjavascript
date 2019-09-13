let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    },

    "Вода": "Ehf",
};

function createTree(container, data) {
    let mainUl = createTreeRec(data);
    mainUl.classList.add('tree');
    container.append(mainUl);
}

function createTreeRec(data){
    let ul = document.createElement("ul");

    for(key in data){
        let li = document.createElement("li");
        li.textContent = key;
        if (typeof data[key] === 'object'){
            li.append(createTreeRec(data[key]));
        }

        ul.append(li);
    }

    return ul;
}

createTree(document.getElementById('tree'), data);

document.querySelector('.tree').addEventListener("click", (event) =>{
    let li = event.target;

    if (li.tagName !=='LI') return;

    console.log(li);
    let ul = li.querySelector('ul');
    console.log(ul);

    if (ul){
        ul.hidden = !ul.hidden;
    }
});