import { getURLdata } from "./index.js";

const dt = await getURLdata(somekey);

let lats = [];
for(let i =0; i< dt.data.length;i++){
    lats.push(dt.data[i].coordinate.lat);
}
console.log(lats.filter(a => a>0));