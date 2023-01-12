// fixedCost(고정비용) = fixed
// variableCost(가변비용) = variable
// productPrice(상품판매가격) = price
// sales(판매량)

const [fixed,variable,price] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const margin = price - variable;
// 손익분기점 = 고정비용 / (상품가격 - 변동비용) + 1
const breakEvenPoint = Math.floor(fixed / margin) + 1;
// margin이 0보다 작으면 절대로 고정비용을 커버할 수 없어서 손익분기점을 못넘음
// 따라서 margin이 0보다 클 때만 손익분기점을 구한다.
const result = margin <= 0 ? -1 : breakEvenPoint;
console.log(result);