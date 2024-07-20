const num1 = parseInt(prompt('enter the first number: '))
const num2 = parseInt(prompt('enter the second number: '))

function calculategcf(x, y) {
    let gcf = 1
    for (let i = 0; i <= x && i <= y; i++) {
        if(x % i == 0 && y % i == 0) {
            gcf = i;
        }
    }
    return gcf;
}
let result = calculategcf(num1, num2);
console.log(result);
function euclidgcf(num1, num2) {
    if (num1 > num2){
        let c = math.floor(num1/num2)
        let r =  num1 % num2
        for ()
    }
}