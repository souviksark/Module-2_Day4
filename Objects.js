//array as one of the advance data type
// [] => it can hold multiple items

var myArray = ["Akshay","Male",98,"Gujarat",false]
//if i want insert an element
// push => insert
// pop => delete
// update my name AkshayRamnani

//Object => which allows you to store data like key-value pairs

//object inside object
// object inside array
// object inside object inside array

var student = {
    s_rollno : 9997,
    age : 15,
    s_name: "John Smith",
    address: {
        address_line_1: "ABC street",
        landmark: "ABC is landmark",
        city: "New Your city"
    },
    course: ["HTML&CSS","JavaScript","Python"],
    hobby: ["writting","coding","learning"],
    isStudent: true
    //null object
}
//some rules to make object correct 
/*
-> object should start from {}
-> to enter the pair value use ':'
-> after every object/line make sure you use ','
-> keep meaningful name of object items
*/

//printing elements


//console.log(student.s_name);
//console.log(student.address.city);
//console.log(student.course[1]);

//update any element value
student.age=16
console.log(student);



//you have to create one object of Product
//price, p_name
// p_desc => mfg_date, exp_date, p_type
// ratings
// p_id 