const student = {
    name: "Ayush",
    course: "B.Tech",
    branch: "CS",
    section: "C",
    phoneNo: {
        phoneNo1: 4564787,
        phoneNo2: 23243567
    },
    address: {
        hno: 23,
        street: "abs",
        city: "ghaziabad",
        state: "UP"
    }


}
const newStudent = Object.assign({}, student);
console.log(newStudent);
console.log(student.name);


newStudent.section = 'A';
console.log(newStudent.section);
newStudent.address.city = "mainpuri";
console.log(newStudent.address.city);