// class user {
//     constructor(name , age) {
//         this.name = name;
//         this.age = age;
//     }
//     getInfo(){
//         return "my name is " + this.name + " and age is " + this.age;
// }}
//
// class Admin extends user {
//     constructor(name, age, role){
//         super(name, age);
//         this.role = role;
//     }
//     sayHi(){
//         console.log("hi", this.name);
//     }
// }
// let admin1 = new Admin('rick', 20 , 'manager');
// const user2 = new user('abebe' , 34)
// console.log(admin1.sayHi());

class student {
    constructor(name, age, department, id){
        this.name = name;
        this.age = age;
        this.department = department;
        this.id = id;
    }
    getInfo(){
        return "my name is " + this.name + " and age is " + this.age + " and department is " + this.department + " and my id" + this.id;
    }
}
class teacher extends student{
    constructor(name, age , department) {
        super(name, age );
        this.department = department;
    }
    getInfo() {
        return super.getInfo().
    }
}
let teacher1 = new teacher('abebe', 34, 'mathematics');
console.log(teacher1);