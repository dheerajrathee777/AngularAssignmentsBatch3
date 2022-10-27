var Student = /** @class */ (function () {
    function Student(rollNo, name, eng, maths, science) {
        this.rollNo = rollNo;
        this.name = name;
        this.eng = eng;
        this.maths = maths;
        this.science = science;
    }
    Student.prototype.calculate = function () {
        var total = this.eng + this.maths + this.science;
        var per = total / 3;
        console.log("Total Marks : " + total);
        console.log("Percentage : " + per + "%");
    };
    return Student;
}());
var stu1 = new Student("1", "Sunny", 78, 80, 89);
stu1.calculate();
