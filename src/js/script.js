import { Score } from "./setStudentScore";
import { Student } from "./studentCreateor";
import { setDataToLs } from "./setDataToLs";
import { getDataToLs } from "./getDataFromLs";
import { showLsData } from "./showData";


let students = [];
getData();

//Selector
let clearStudents = document.getElementById("clearStudents");
let setScoreBtn = document.getElementById("set");
let addStudentBtn = document.getElementById("add");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let score = document.getElementById("score");
let studentSelect = document.getElementById("student");
let courseSelect = document.getElementById("course");
let studentResult = document.getElementById("studentResult");


//varables

//student option
let selectOption = "";
//course option
let selectOptionCourse = "";

// EventLestiners
function EventLestiner() {
  addStudentBtn.addEventListener("click", validationAddStudent);
  setScoreBtn.addEventListener("click", validationSetScore);
  studentSelect.addEventListener("change", findStudentOption);
  courseSelect.addEventListener("change", findCourseOption);
  clearStudents.addEventListener("click", clearLs);
}
EventLestiner();

//check input value / is ok : create new student
function validationAddStudent(e) {
  e.preventDefault();
  if (firstName.value.length > 0 && lastName.value.length > 0) {
    //create new student
    let st = new Student(firstName.value, lastName.value, studentSelect);
    //add new student to studentsList
    students.push(st);
    //set studentsList data to Ls
    setDataToLs("studentsList", JSON.stringify(students));
  }
}
//check input value / is ok : create set score for x student
function validationSetScore() {
  if (
    selectOption !== "" &&
    score.value.length > 0 &&
    selectOptionCourse !== ""
  ) {
    //check studentsList is array or no
    if (Array.isArray(students)) {
      students.forEach((student) => {
        if (`${student.firstName} ${student.lastName}` == selectOption) {
          //check student courses value
          if (
            student.rate.js != "none" &&
            student.rate.html != "none" &&
            student.rate.css != "none"
          ) {
            //edit score
            let sc = new Score();
            //use score prototype
            sc.editScore(
              selectOption,
              selectOptionCourse,
              score.value,
              students
            );
          } else {
            //set new score
            let sc = new Score(
              selectOption,
              selectOptionCourse,
              score.value,
              students
            );
          }
        }
      });
    }
    //set studentsList to Ls
    setDataToLs("studentsList", JSON.stringify(students));
  }
}

//if student select(list) is change : find how option is selected
function findStudentOption(e) {
  let i = e.target.selectedIndex;
  selectOption = e.target.options[i].text;
}

//if course select(list) is change : find how option is selected
function findCourseOption(e) {
  let i = e.target.selectedIndex;
  selectOptionCourse = e.target.options[i].text;
}
function clearLs() {
  //show alert ta continue
  let validation = confirmValidation()
  if (validation == true) {
    //remove studentsList from Ls
    localStorage.removeItem("studentsList");
    //refresh page
    location.reload();
  }
}

//check Ls has data or no if yes send data to showLsData from showData file
function getData() {
  let data = getDataToLs("studentsList");
  if (data != "none") {
    students = data;
    showLsData(students);
  }
  
}

// show confrim validation
function confirmValidation(){
  let validation = confirm("Are you sure about doing this ?")
  //if user click on ok 
  if (validation == true) {
    return true
  }//else
  return false
}