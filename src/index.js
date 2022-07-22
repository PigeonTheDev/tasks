import axios from "axios" ;


const  getURLdata =  async (apiKey) => {
    let url = `https://i3btr8wa1k.execute-api.eu-west-1.amazonaws.com/api/city`
    let response =  await axios.get(url, {headers: {"X-Api-Key":`${apiKey}`}});
    return response.data;
    
   }
    
  



export {getURLdata};

