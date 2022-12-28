const score = +input[0];
let result = "";

if (score >= 90) {
  result = "A";
} else if (score >= 80) {
  result = "B";
} else if (score >= 70) {
  result = "C";
} else if (score >= 60) {
  result = "D";
} else {
  result = "F";
}

console.log(result);

/**
 * 풀이
 * 점수에 따라서 if - else문을 사용해 나눠준다.
 * 또는 이렇게 풀 수 있다.
 *
  if (100>=a && a>=90){
    console.log('A')
}
else if(89>=a && a>=80){
     console.log('B')
}
else if(79>=a && a>=70){
     console.log('C')
}
else if(69>=a && a>=60){
     console.log('D')
}
else{
     console.log('F')

}
 */
