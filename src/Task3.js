const sent = "siz de bizim Çekoslavakyalılaştıramadıklarımızdan mısınız";
const sentArr = sent.split("");
let engArr = []; 

function transformer(k) {
    switch (k.toLowerCase()){
        case "ı":
            return "i";
        case "ç":
            return "c";
        case "ş":
            return "s";
        case "ğ":
            return "g";
        case "ö":
            return "o";
        case "ü":
            return "u";
        default:
            return k;
    }
}

for(let i = 0;i<sentArr.length;i++){
   engArr[i] = transformer(sentArr[i]);
}



console.log(engArr.join(""));

