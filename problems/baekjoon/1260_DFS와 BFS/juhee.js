const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,M,V] = input[0].split(' ').map((x)=>+x);
let graph = new Array(N+1);

for (let i = 0; i < graph.length; i++){
  graph[i] = [];
}

// 인접 리스트 생성 및 오름차순 정렬
for (let j = 0; j < M; j++){
  let [from,to] = input[j+1].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((element) => {
  element.sort((a,b)=>a-b);
});

const DFS_visited = Array.from({ length: N + 1 }, () => 0);
const DFS_stack = [];

const BFS_visited = Array.from({ length: N + 1 }, () => 0);
const BFS_queue = [];

const DFS = (v) => {
  DFS_visited[v] = 1;
  DFS_stack.push(v);

  for (let i = 0; i < graph[v].length; i++) {
    if (DFS_visited[graph[v][i]] === 0) {
      DFS(graph[v][i]);
    }
  }
};

const BFS = (v) => {
  BFS_visited[v] = 1;

  let queue = [];
  queue.push(v);

  while (queue.length) {
    let v = queue.shift();
    BFS_queue.push(v);

    graph[v].forEach((v) => {
      if (BFS_visited[v] === 0) {
        BFS_visited[v] = 1;
        queue.push(v);
      }
    });
  }
};

DFS(V);
BFS(V);
console.log(DFS_stack.join(" "));
console.log(BFS_queue.join(" "));


// 처음 풀었던 풀이
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N,M,V] = input[0].split(' ').map((x)=>+x);
// let graph = new Array(N+1);
// for (let i = 0; i < graph.length; i++){
//   graph[i] = [];
// }
// for (let j = 0; j < M; j++){
//   let [from,to] = input[j+1].split(' ').map(Number);
//   graph[from].push(to);
//   graph[to].push(from);
// }

// graph.forEach((element) => {
//   element.sort((a,b)=>a-b);
// });

// const DFS = (graph, startNode) => {
//   const visited = [];
//   let needVisit = []; 

//   needVisit.push(startNode); 

//   while (needVisit.length !== 0) {
//     const node = needVisit.shift();
//     if (!visited.includes(node)) {
//       visited.push(node); 
//       needVisit = [...graph[node], ...needVisit];
//     }
//   }
//   return visited;
// };

// const BFS = (graph, startNode) => {
//   const visited = [];
//   let needVisit = [];

//   needVisit.push(startNode);

//   while (needVisit.length !== 0) { 
//     const node = needVisit.shift() 
//     if (!visited.includes(node)) {
//       visited.push(node); 
//       needVisit = [...needVisit, ...graph[node]];
//     } 
//   }
//   return visited;
// };


// console.log(DFS(graph,V).join(" "));
// console.log(BFS(graph,V).join(" "));