function solution(cipher, code) {
    let answer = '';
    for (let i = 0; i < cipher.length; i++){
        (i + 1) % code === 0 ? answer = answer + cipher[i] : ""
    }
    return answer;
}

// 첫풀이

// 배수인 인덱스를 찾아 배열로 출력하는 함수
// function findMultiple(str, num) {
//     let result = [];
//     str.forEach((s,idx) => (idx+1)%num === 0 ? result.push(idx) : "")
//     return result;
// }

// 배수인 인덱스를 넣어 문자열 합치기
// function solution(cipher, code) {
//     let realCodeIdx = findMultiple(cipher.split(''), code)
//     let answer = '';
//     for (let element of realCodeIdx) {
//         answer = answer + cipher[element]
//     }
//     return answer;
// }

// 전형적인 과일 깎는데 식칼 꺼낸 코드이길래 새로 짰다..!