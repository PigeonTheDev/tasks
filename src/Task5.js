import { getURLdata } from "./index.js";

const dt = await getURLdata(somekey);
let names = [];
for(let i =0; i< dt.data.length;i++){
    names.push(dt.data[i].name);
}
names.sort();
console.log(names[10]);
names.reverse();
console.log(names[10]);