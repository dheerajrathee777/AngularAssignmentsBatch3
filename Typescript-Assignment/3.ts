class Student {
    private rollNo: string;
    private name: string;
    private eng: number;
    private maths: number;
    private science: number;

    constructor(rollNo: string, name: string, eng: number, maths: number, science: number) {
        this.rollNo = rollNo;
        this.name = name;
        this.eng = eng;
        this.maths = maths;
        this.science = science;
    }

    public calculate(): void {
        let total = this.eng + this.maths + this.science;
        let per = total / 3;

        console.log("Total Marks : " + total);
        console.log("Percentage : " + per + "%");
    }
}

let stu1: Student = new Student("1", "Sunny", 78, 80, 89);
stu1.calculate();