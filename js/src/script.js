var perA = prompt("Для решения этого уравнениея введите значение \"а\"", 0);
var perB = prompt("Введите значение \"b\"", 0);
var perC = prompt("Введите значение \"c\"", 0);

var discrimenant = (perB * perB) - 4 * perA * perC;
if (discrimenant > 0) {
    var x1 = ((-perB) + Math.sqrt(discrimenant)) / 2 * perA;
    var x2 = ((-perB) - Math.sqrt(discrimenant)) / 2 * perA;
    alert("Х1= " + x1 + "\nХ2= " + x2);
} else if (discrimenant == 0) {
    var x = (-perB) / 2 * perA;
    alert("Корень Х равен: " + x);
} else {
    alert("Нет решения уравнения");
}


