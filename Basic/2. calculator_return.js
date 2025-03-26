const calsulator = {
    //더하기
    add:function(a,b){
        return a+b;
    },
    //빼기
    minus:function(a,b){
        return a-b;
    },
    //곱하기
    multiply:function(a,b){
        return a*b;
    },
    //나누기
    divide:function(a,b){
        return parseInt(a/b)//소수점 제외
    },
    //나머지
    reaminder:function(a,b){
        return a%b;
    },
    power:function(a,b){
        return a**b;
    }
}
console.log(calsulator.add(5,2));
console.log(calsulator.minus(5,2));
console.log(calsulator.multiply(5,2));
console.log(calsulator.divide(5,2));
console.log(calsulator.power(5,2));