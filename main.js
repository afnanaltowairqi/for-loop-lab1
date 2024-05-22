// // //1
// for (index=0; index>=-25;index-=2){
//     console.log(index);
// }
// // //2
// for (index=1; index<=10;index*=2){
//     console.log(index);
// }

// // //3
// for (i=1; i<=20;i+=2){
//     console.log(i);
// }

// // //4
// let number =0
// let num1 =0
// let num2=2
// for (i=0; i<=number;i++){
//     num1=+ num2
//     console.log(i);
// }
// //5

// //6
// for (i=1; i<=3;i++ ){
//     for (j=1;j<=10;j++){
//         console.log(i +'*'+j +'='+ i*j);
//     }
// }
/*------------------------------------Lab2----------------------------------------*/
function sum(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}
console.log(sum(5,5));
console.log(sub(5,4));
console.log(mul(5,5));
console.log(div(4,2));

function check(num){
    if (num % 3 == 0 && num % 5 == 0){
        return ("Buzz and fuzz")
    } else if ( num % 3 == 0){
        return("Buzz")
    } else if ( num % 5 == 0){
        return("Fuzz")
    } else {
        return("No Buzz and fuzz ")
    }
}
console.log(check(9));
console.log(check(15));
console.log(check(20));
console.log(check(1));
