class Student {
    constructor(rollno, name, course, branch) {
        this.rollno = rollno,
            this.name = name,
            this.course = course,
            this.branch = branch
    }
}
const student1 = new Student(1, "a", "b.tech", "cse");
const student2 = new Student(2, "b", "b.tech", "cse");

console.log(student1);

console.log(student2);