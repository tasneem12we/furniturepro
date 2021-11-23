//Types of exports
//1.Named Export
//import { add, sub, mul } from calc;
//2.Default Export
//import calc from calc;
//calc.add(10,10);
//calc.sub(30,30);
export function add(x, y) {
    return x + y;
}
export function sub(x, y) {
    return x - y;
}
export function mul(x, y) {
    return x * y;
}

//export default calc;