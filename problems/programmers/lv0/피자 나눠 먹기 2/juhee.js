let getLCM = (num1, num2) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}

function solution(n) {
    let pizza = getLCM(n, 6) / 6
    
    return pizza;
}