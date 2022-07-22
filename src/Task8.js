import {getURLdata} from "./index.js";

const dt = await getURLdata(somekey);

let ids = [];
for(let i =0; i< dt.data.length;i++){
    ids.push(dt.data[i].id);
}

   ids.sort((a,b) => a-b);
   console.log(ids[10]);
   ids.reverse();
   console.log(ids[10]);

   
    
  
