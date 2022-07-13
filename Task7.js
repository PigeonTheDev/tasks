import fetch from "node-fetch"

async function getURLdata(pagecount, apiKey){
    let dt = [];
   for(let i =1; i< pagecount + 1; i++){
    let url = `https://i3btr8wa1k.execute-api.eu-west-1.amazonaws.com/api/city?page=${i}`
    let response = await fetch(url, {headers: {"X-Api-Key":`${apiKey}`}});
    let gotdt = await response.json();
    dt = dt.concat(gotdt.data);
   }

   console.log(dt.map(a =>a.coordinate.lat).filter(a => a>0));
   
  
}

getURLdata(4, somekey);