var myObject = new Object();

document.write("<h1>First object</h1>");
for( index in myObject)
{
    document.write("Object Property " + index + " : " + myObject[index] + "<BR>");
}
myObject.name = "Pretty Object";
myObject.value = "Expensive Object";
document.write("<h1>Second object</h1>");
for( index in myObject)
{
    document.write("Object Property " + index + " : " + myObject[index] + "<BR>");
}



// JSON
var person = {
    "First Name": "Ryan",
    "Last Name": "Steffes",
    "First Class": "June 15",
    "First": "Second"
};
for( index in person)
{
    document.write("Object Property " + index + " : " + person[index] + "<BR>");
}
alert(person.First);
alert(person["First Name"]);


