import { arr1 } from "./data.js";

const root = document.getElementById("root");
const title = document.getElementById("title");
const content = document.getElementById("content");
const original = document.getElementById("original");
const filter = document.getElementById("filter");
const map = document.getElementById("map");
const find = document.getElementById("find");
const some = document.getElementById("some");
const every = document.getElementById("every");

title.innerHTML = '<h1>Array Methods</h1>';

document.title = title.innerText;

console.log(`Salam ${title.innerText}`);



function displayArray(data, elem, para1 = 'name', para2 = 'price') {
  
  const result = data.map(d => {

    let myStr = ``;

    for (let key in d) {
      console.log(`key ${key}`);
      myStr.concat(key);
    }

    return `<p>${d.name} = \$${d.price}</p>`;
  });
  console.log(`Result: ${result}`);
  const rs = String(result);
  elem.innerHTML = rs.replace(/,/g,"");
}

displayArray(arr1, original);

// filtered array
const filteredArr = arr1.filter(d => d.price <= 100);
displayArray(filteredArr, filter);

// mapped array
const mappedArr = arr1.map(({name, price }) => {
  price *= 0.90;
  return { name, price};
}
  );
displayArray(mappedArr, map);

// find in array
const foundValue = arr1.find(d => d.price === 50);
console.log(`foundvalue ${foundValue.name}`);
displayArray([foundValue], find);


// Some in array
const hasSome = arr1.some(d => d.price > 10000);
console.log(`hasSome ${hasSome}`);
displayArray([{ name: 'has it', price: hasSome }], some);


// every in array
const hasEvery = arr1.every(d => d.price < 20000);
console.log(`hasEvery ${hasEvery}`);
displayArray([{ name: 'has it', price: hasEvery }], every);
