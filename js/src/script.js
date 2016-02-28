
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



/*var list = [2,6,8,7,9,8,22,11,44,55,9,5,477,1,5446];
list.sort(function(e1,e2){
    return e2-e1;
});
alert(list);*/