function solution(n) {
    let answer = 1;
    for (let i = 1; i <= n; i++){
        answer *= i;
    }
    
    return answer;
}