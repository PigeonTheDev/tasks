import fetch from "node-fetch"

async function getURLdata(pagecount, apiKey){
    let dt = [];
    let ids = [];
   for(let i =1; i< pagecount + 1; i++){
    let url = `https://i3btr8wa1k.execute-api.eu-west-1.amazonaws.com/api/city?page=${i}`
    let response = await fetch(url, {headers: {"X-Api-Key":`${apiKey}`}});
    let gotdt = await response.json();
    dt = dt.concat(gotdt.data);
   }
   ids = dt.map(a =>a.id);
    
   let odd = 0;
let even = 0;
   for(let i =0; i< ids.length;i++){
    if(ids[i] % 2 ==0){
        even++;
        
    }
    else{
        odd++;
    }
}
console.log(even);
console.log(odd);
}

getURLdata(4 ,somekey);

