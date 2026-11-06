function calc(){
let a=prompt("Enter a value : ");
let b=prompt("Enter b value : ");
let symbol=prompt("Enter the operator (+ , - , * , / , %): ");
switch(symbol){
    case '+':
        let c=Number(a)+Number(b);
        alert(c);
        break;
    case '-':
         let d=Number(a)-Number(b);
         alert(d);
         break;
        case '*':
         let e=Number(a)*Number(b);
         alert(e);
         break;
            case '/':
         let f=Number(a)/Number(b);
         alert(f);
         break;
            case '%':
         let g=Number(a)%Number(b);
         alert(g);
         break;
         default :
         alert("Invalid Operator");
         break;
}
}
