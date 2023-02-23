const getFactorial = (i) => { // 입력은 i로 받는다.
    let result = 1;
    for(let v= 1; v<=i; v++){
        result *= v;  // 모든 값을 누적해서 곱.
    }
    // result => 값.
    return result;
}

function solution(n) {
    
    for(let i = 1; ; i++){
        const result = getFactorial(i);
        if(n < result){
            return i - 1;
        }
    }
}