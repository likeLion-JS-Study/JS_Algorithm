/* 
문제

<그림 1>과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.

예를 들어, 다음과 같이 81개의 수가 주어지면



 	 1열	2열	3열	4열	5열	6열	7열	8열	9열
1행	3	23	85	34	17	74	25	52	65
2행	10	7	39	42	88	52	14	72	63
3행	87	42	18	78	53	45	18	84	53
4행	34	28	64	85	12	16	75	36	55
5행	21	77	45	35	28	75	90	76	1
6행	25	87	65	15	28	11	37	28	74
7행	65	27	75	41	7	89	78	64	39
8행	47	47	70	45	23	65	3	41	44
9행	87	13	82	38	31	12	29	29	80


이들 중 최댓값은 90이고, 이 값은 5행 7열에 위치한다.
*/

/* 
입력

첫째 줄부터 아홉 번째 줄까지 한 줄에 아홉 개씩 수가 주어진다. 주어지는 수는 100보다 작은 자연수 또는 0이다.
*/

/*
출력

첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력한다. 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.
*/
const nums = require("fs").readFileSync("example.txt").toString().split("\n");

const arrayLike = [...nums];
// 유사배열로 만들어주기
// console.log(arrayLike);
let newArray = [];
for (let i = 0; i < 9; i++) {
  newArray.push(arrayLike[i].split(" ").map(Number));
}
// 유사배열을 split으로 읽고 정수형으로 만들어 newArray에 넣어 이차원배열을 만들어준다
// console.log(newArray);

let flatArr = newArray.flat();
// 이차원배열을 flat메서드로 잘라주어 하나의 배열로 만들어준다
// console.log(flatArr);

// 최댓값구하기
let maxValue = flatArr.slice().sort((a, b) => b - a)[0];
// 내림차순으로 정렬하고 slice 메서드를 이용하여 flatArr의 첫 번째 요소를 최댓값으로 설정한다
console.log(maxValue);

// 최댓값의 행렬 뽑기
const maxValueIndex = flatArr.indexOf(maxValue);
// 최대값을 정의한 maxValue의 index 위치를 flatArr 총 배열에서 찾아주어 maxValueIndex로 정의한다

// console.log(maxValueIndex);
// 최대값 90은 [42]번째에 위치한다(시작 기준[0])

const row = Math.floor(maxValueIndex / 9) + 1;
// 행은 최댓값의 index위치에 9개씩 나누어준 배열을 이차원배열로 만든 후 통합한 것이므로 9를 나누어주고 배열의 index번호는 0부터 시작하므로 +1을 더해준다

const column = (maxValueIndex % 9) + 1;
// 열은 최댓값의 index번호에 나머지 9를 구하여 1을 더해준다

console.log(row, column);
