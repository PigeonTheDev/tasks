const sent = "siz de bizim çekoslavakyalılaştıramadıklarımızdan mısınız";
const sentArr = sent.split("");
const cntrArr = [];



for(let i =0; i< sentArr.length; i++){//finding the frequencies and storing them in an array
    let counter = 0;
    
    for(let j = 0; j<sentArr.length;j++){
        if (sentArr[i] == sentArr [j]){
            counter++;
            
        }
    }
      cntrArr[i] = counter;
     }
     

for(let k =0;k<sentArr.length;k++){//printing the arrays while skipping the same values
    let check =0;
    for(let r =0; r<k;r++){
        if(sentArr[k] == sentArr[r]){
            check++;
        }
    }
    if(check > 0){
        continue;
    }
    else{
        console.log(sentArr[k].concat(cntrArr[k]));
    }
}