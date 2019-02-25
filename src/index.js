// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency < 0){
        return {};
    }
    if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let coins = [50, 25, 10, 5, 1];
    let ret = [0, 0, 0, 0, 0]
    let sum = 0, i = 0;
    while(sum != currency){
        if((sum + coins[i]) > currency){
            i++; 
            continue;
        }
        sum += coins[i];
        ret[i]++;
    }
    var obj = new Object();
    if(ret[0] != 0)
        obj.H =ret[0];

    if(ret[1] != 0)
        obj.Q=ret[1];
    
    if(ret[2] != 0)
        obj.D=ret[2];

    if(ret[3] != 0)
        obj.N=ret[3];

    if(ret[4] != 0)
        obj.P=ret[4];

    return obj;
}
