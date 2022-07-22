import {getURLdata} from "./index.js"

const dt = await getURLdata(somekey);
let ids = [];
for(let i =0; i< dt.data.length;i++){
    ids.push(dt.data[i].id);
}
console.log(ids.reduce((a,b) => a+b));