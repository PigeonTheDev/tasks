
import {getURLdata} from "./index.js"



    const dat = await getURLdata(somekey);
    let odd = 0;
    let even = 0;
     for (let i = 0; i < dat.data.length; i++) {
      if (dat.data[i].id % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
    console.log("even", even);
    console.log("odd", odd); 
  
  

  
  


