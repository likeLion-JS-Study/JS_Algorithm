const score=parseInt(input);

if (score>=90){
    console.log('A');
}
else if (score>=80){
    console.log('B');
}
else if (score>=70){
    console.log('C');
}
else if (score>=60){
    console.log('D');
}
else{
    console.log('F');
}

// A = 90~100
// B = 80~89
// C = 70~79
// D = 60~69
// 나머지 점수는 F
// Example input -> 100
// 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.