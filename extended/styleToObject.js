'use strict'

let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
    let array = str.split(";");
    let resObject = {};
    for(let line of array){
        if (line.trim() === '') continue;

        let split = line.split(":");
        if (split.length === 2){
            Object.assign(resObject, {[split[0].trim()]: split[1].trim()});
        } else {
            console.log(`Не удалось разобрать линию: ${line}`);
        }
    }
    return resObject;
}

console.log("STYLE TO OBJECT");
console.log(styleToObject(style));
console.log(" --------------------- ");