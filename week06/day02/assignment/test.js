
var input = `V
Nrupul 10 20 30
Prateek 20 30 40
VI
Aman 10 20 30
Albert 20 30 40
VII
Yogesh 10 20 30
Sandhya 20 30 40`

var input_arr = input.trim().split("\n")

var array = []
for (var i = 0; i < input_arr.length; i += 3) {
    var grade = input_arr[i]
    var student1 = input_arr[i + 1].trim().split(" ")
    var student2 = input_arr[i + 2].trim().split(" ")

    var name1 = student1.splice(0, 1)
    var name2 = student2.splice(0, 1)
    student1 = student1.map(Number)
    student2 = student2.map(Number)

    var stud1_object = {}
    var stud2_object = {}
    stud1_object.name = name1[0]
    stud1_object.marks = student1
    stud2_object.name = name2[0]
    stud2_object.marks = student2

    var students = []
    students.push(stud1_object)
    students.push(stud2_object)

    var obj = {}
    obj.grade = grade
    obj.students = students

    array.push(obj)
}
console.log(array)