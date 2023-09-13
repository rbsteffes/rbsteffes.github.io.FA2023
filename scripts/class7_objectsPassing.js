var a = 1;
var b = 2;

var arrayVar = [1, 2, 3];

person = { "name": "Ryan", "job": "Teacher"};


function changeStuff(varOne, varTwo, varThree, varFour){
    varOne = 2;
    varTwo = 3;
    varThree[0] = "One";
    varThree[2] = "Three";
    varFour["name"] = "Not Mr. Steffes";
}

document.write(a + " " + b + " " + arrayVar + " " + person.name ); // 1 2 1,2,3

changeStuff(a, b, arrayVar, person);
changeStuff(1, 2, [3], {"name":"Ryan"});

document.write(a + " " + b + " " + arrayVar + " " + person["name"]); // 1 2 "One",2,"Three"
