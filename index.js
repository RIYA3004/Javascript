console.log("Hello World");
class Name{
constructor(name,age)
{

    this.name=name;
    this.age=age;
}
getPersonName()
{
    return this.name;
}
}
let person =new Name("riya",20);
console.log(person.name);
console.log(person);
console.log(person.getPersonName());