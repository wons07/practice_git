const calsulator = {
    //더하기
    add:function(a,b){
        console.log(a + b);
    },
    //빼기
    minus:function(a,b){
        console.log(a-b);
    },
    //곱하기
    multiply:function(a,b){
        console.log(a*b);
    },
    //나누기
    divide:function(a,b){
        console.log(parseInt(a/b))//소수점 제외
    },
    //나머지
    reaminder:function(a,b){
        console.log(a%b);
    },
    power:function(a,b){
        console.log(a**b);
    }
}
calsulator.add(5,2);
calsulator.minus(5,2);
calsulator.multiply(5,2);
calsulator.divide(5,2);
calsulator.reaminder(5,2);
calsulator.power(5,2);
