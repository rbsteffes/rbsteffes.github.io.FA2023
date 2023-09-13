function person(name, age, phonenumber){
    this.name=name;
    this.age =age;
    this.phonenumber = phonenumber;

    //methods
    this.sayMyName = function(){
        alert(this.name);
    }

}

class person2{
    constructor(name, age, phonenumber)
    {
        this.name=name;
        this.age =age;
        this.phonenumber = phonenumber;
    }
    
    sayMyName(){
        alert(this.name);
    }
}

//
var myObject = { "doSomething":function(){alert("I did something");}};

teacher = new person("Ryan", "44", "912392193");


person.prototype.citizenship = "United States";

student1 = new person("John Doe", "23", "12321123");

student2 = new person2("Jane", "23", "12321321");

teacher.sayMyName();
alert(teacher.citizenship);
student1.citizenship = "China";

student2.sayMyName();
//student1.sayMyName();
//myObject.doSomething();