// Creating an object
var student = [{

    name: "Ahmed",
    class: 12,
    rollNo: "Am001",


}, {

    name: "Umer",
    class: 10,
    rollNo: "Um002",



}, {
    name: "Hashim",
    class: 9,
    rollNo: "Ha003",

}, {

    name: "Mubashir",
    class: 8,
    rollNo: "Mu004",


}, ]

var p = document.getElementById("para")
var input = document.getElementById("inp")

function disp() {

    // p.innerHTML = student.name;
    for (i = 0; i < student.length; i++) {

        if (input.value == student[0].name.toLowerCase()) {

            p.innerHTML = student[0].name + " is At index 0 "

        } else if (input.value == student[1].name.toLowerCase()) {

            p.innerHTML = student[1].name + " is At index 1 "
        } else if (input.value == student[2].name.toLowerCase()) {

            p.innerHTML = student[2].name + " is At index 2 "
        } else if (input.value == student[0].class) {

            p.innerHTML = student[0].class + " is At index 0 "
        } else if (input.value == student[1].class) {

            p.innerHTML = student[1].class + " is At index 1 "
        } else if (input.value == student[2].class) {

            p.innerHTML = student[2].class + " is At index 2 "
        } else if (input.value == student[0].rollNo.toLowerCase()) {

            p.innerHTML = student[0].rollNo + " is At index 0 "
        } else if (input.value == student[1].rollNo.toLowerCase()) {

            p.innerHTML = student[1].rollNo + " is At index 1 "
        } else if (input.value == student[2].rollNo.toLowerCase()) {

            p.innerHTML = student[2].rollNo + " is At index 2 "
        } else {
            p.innerHTML = "Sorry"
        }

    }
}

function searchBy() {
    p.innerHTML = "You Can" + "<br>" + " Search By Object name: Student" + "<br>" + "Search By Names: Ahmed,Umer,Mubashir,Hashim" + "<br>" + "Search By Classes: 8,9,10,12" + "<br>" + "Search By Roll no.s: Ah001, Um002, Ha003, Mu004"
}