
for(let i =1; i<=1000;i++){
  for(let j =1; j<i;j++){
    
    if(i%j ==0 && j!==1){
        break;
    }
    if(i -1 == j || i ==2){
       console.log(i);
    }
  }

}