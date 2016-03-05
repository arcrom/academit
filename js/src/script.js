/*
 var perA = prompt("Для решения этого уравнениея введите значение \"а\"", 0);
 var perB = prompt("Введите значение \"b\"", 0);
 var perC = prompt("Введите значение \"c\"", 0);

 var discrimenant = (perB * perB) - 4 * perA * perC;
 if (discrimenant > 0) {
 var x1 = ((-perB) + Math.sqrt(discrimenant)) / 2 * perA;
 var x2 = ((-perB) - Math.sqrt(discrimenant)) / 2 * perA;
 console.log("Х1= " + x1 + "\nХ2= " + x2);
 } else if (discrimenant == 0) {
 var x = (-perB) / 2 * perA;
 console.log("Корень Х равен: " + x);
 } else {
 console.log("Нет решения уравнения");
 }
 */


var list = [2, 6, 8, 7, 9, 8, 22, 11, 44, 55, 9, 5, 47, 1, 46];
list.sort(function (e1, e2) {
    return e2 - e1;
});
/*var list2 = [55, 88, 99, 77, 44, 11];  //первая
 var list3 = list.concat(list2);
 console.log(list3.slice(1, 53));*/

/*console.log(list.slice(0,5));   вторая
 console.log(list.slice(-5));*/

/*var sum = 0;
 for (var i = 0; i <= list.length; ++i) {        //третья
 if (list[i] % 2 == 0){
 sum = sum + list[i];
 }else continue;
 }
 console.log(sum);*/


var listNum = new Array(100);
for (var i = 0; i < listNum.length; i++) {
    listNum[i] = i + 1;
}
console.log(listNum);