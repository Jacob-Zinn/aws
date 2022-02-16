

 
const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

let table = document.createElement(`table`);
let firstObject = true;
MOUNTAINS.forEach(mountain => {

  if (firstObject) {
    const newRow = document.createElement(`tr`);
    for (const attr in mountain) {
        let child = document.createElement(`th`);
        child.innerText = attr;
        newRow.appendChild(child);
        table.appendChild(newRow);
    }
    firstObject = false;
  }


  const newRow = document.createElement(`tr`);
  for (const attr in mountain) {
    child = document.createElement(`td`);
    child.innerText = mountain[attr];

    newRow.appendChild(child);
  }
  table.appendChild(newRow);
});

const mountains = document.querySelector('#mountains');
mountains.appendChild(table);
