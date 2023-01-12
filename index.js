const { count } = require('console');
const { get } = require('http');

// CommonJS Modules FS
// 제출할 때는 example.txt -> /dev/stdin 로 변경할 것!
// 1. 하나의 값을 입력받을 때
// const input = require("fs").readFileSync("example.txt").toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("example.txt").toString().trim().split(" ");

// 3. 여러 줄의 값들을 입력받을 때
// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
// const [n, ...arr] = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
// const input = require('fs').readFileSync('example.txt').toString().trim().split(/\s/);
// const n = input[0];
// const n_arr = input.slice(1, n+1);
// const [m, ...m_arr] = input.slice(n+1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가

// 코딩 스타트 ! ---------------------------------------------------------- 
