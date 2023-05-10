const people = [
    { name: 'Paul', year: 2 },
    { name: 'George', year: 2 },
    { name: 'Lucas', year: 2 },
    { name: 'Marco', year: 2 },
    { name: 'Peter', year: 2 },
    { name: 'Carl', year: 2 },
    { name: 'Simon', year: 2 },
    { name: 'Mark', year: 2 },
    { name: 'Sandra', year: 2 },
    { name: 'Alice', year: 2 }
];

// returns a random number betweem min and max
// for example, getRandomNumber(1, 3) will return either 1, 2 or 3, randomly.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person {
    constructor(_name){
        _name = this.name;
    }

    get name(){
        return this._name;
    }

    set name(arg1){
        this._name = arg1
    }
}

class Student extends Person{
    constructor(_name, _year, _grade){
        super(_name);
        _year=this.year;
        _grade=this.grade;
    }

    

    get year(){
        return this._year;
    }

    set year(arg2){
        this._year = arg2;
    }

    get grade(){
        return this._grade
    }

    set grade(arg3){
        this._grade = 0;
        arg3 = this._grade;
    }
}
const students = people.map(person => new Student(Person.name,Student.year))

class Academy{
    static exam(students){
        students.forEach( student =>
            student.grade = getRandomNumber(1,10)
        )
    }

    static graduate(students){
        return students.filter(student => student.grade > 5)
    }

    static studentLevels(students){
        students.map( student => {
            if(student.grade < 5){
                return "Failed";
            }
            else if (student.grade >= 6  && student.grade <=7){
                return "Average";
            }
            else if (student.grade >= 7  && student.grade <=8){
                return "Above Average";
            }
            else if (student.grade > 8){
                return "Great";
            }
        })
    }
}

