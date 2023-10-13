function condicion_compleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicion_compleja(10);
condicion_compleja(6);
condicion_compleja(3);
condicion_compleja(5);