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

    
     console.log(ids.reduce((a,b) => a+b));
}

getURLdata(4, somekey);