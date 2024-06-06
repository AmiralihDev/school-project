import { Score } from "./setStudentScore";
import { Student } from "./studentCreateor";
import { setDataToLs } from "./setDataToLs";
import { getDataToLs } from "./getDataFromLs";
import { showLsData } from "./showData";
import { showStudentDetails } from "./showStudentDetails";
import { trashStudent } from "./deleteStudent";
import { silverBox } from "./silverBox";
import domGenerator from "dom-generator";

let students = [];
getData();

//Selector
let loginCard = document.querySelector(".login-card");
let error = document.getElementById("error");
let deleteStudent = document.getElementById("deleteStudent");
let clearStudents = document.getElementById("clearStudents");
let setScoreBtn = document.getElementById("set");
let addStudentBtn = document.getElementById("add");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let score = document.getElementById("score");
let studentSelect = document.getElementById("student");
let courseSelect = document.getElementById("course");
let studentResult = document.getElementById("studentResult");
let nationalCode = document.getElementById("national-code");
let loginCardInput = document.querySelectorAll(".login-card input");
//varables
//student option
let selectOption = "";
//course option
let selectOptionCourse = "";
let selectNationalDeleter = "";

window.onload = () => {
  let column = document.querySelector(".column:nth-child(2)");
  let cl2 = column;
  if (document.body.offsetWidth < 400) {
    // column.remove();
  } else {
  }
};

// EventLestiners
function EventLestiner() {
  addStudentBtn.addEventListener("click", validationAddStudent);
  setScoreBtn.addEventListener("click", validationSetScore);
  studentSelect.addEventListener("change", findStudentOption);
  courseSelect.addEventListener("change", findCourseOption);
  clearStudents.addEventListener("click", clearLs);
  deleteStudent.addEventListener("click", validationDeleteStudent);
}
EventLestiner();

//check input value / is ok : create new student
function validationAddStudent(e) {
  e.preventDefault();
  if (firstName.value.length > 0 && lastName.value.length > 0) {
    if (nationalCode.value.length == 10) {
      let isnational = validationNational(nationalCode.value);
      if (isnational == false) {
        silverBox({
          alertIcon: "error",
          text: "Your Natioanl Code is Duplicate.",
          centerContent: true,
          cancelButton: {
            text: "OK",
          },
        });
      } else {
        //create new student
        let st = new Student(
          firstName.value,
          lastName.value,
          studentSelect,
          nationalCode.value
        );
        //add new student to studentsList
        students.push(st);
        //set studentsList data to Ls
        setDataToLs("studentsList", JSON.stringify(students));
        clearInputValue();
        silverBox({
          title: {
            text: "Success",
            alertIcon: "success",
          },
          text: "Student Is Add",
        });
      }
    } else if (nationalCode.value.length > 10) {
      silverBox({
        alertIcon: "error",
        text: "The Digits of Your Code are Greater Than 10, Try Again.",
        centerContent: true,
        cancelButton: {
          text: "OK",
        },
      });
    } else if (nationalCode.value.length < 10) {
      silverBox({
        alertIcon: "error",
        text: "The Digits of Your Code are Less Than 10, Try Again.",
        centerContent: true,
        cancelButton: {
          text: "OK",
        },
      });
    }
  }
}
//check input value / is ok : create set score for x student
function validationSetScore() {
  if (
    selectOption !== "" &&
    score.value.length > 0 &&
    selectOptionCourse !== ""
  ) {
    if (score.value > 20) {
      silverBox({
        alertIcon: "error",
        text: "Score Value Is Less Than 100.",
        centerContent: true,
        cancelButton: {
          text: "OK",
        },
      });
    } else {
      //check studentsList is array or no
      if (Array.isArray(students)) {
        students.forEach((student) => {
          if (
            `${student.firstName} ${student.lastName} (${student.nationalCode})` ==
            selectOption
          ) {
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
                students,
                nationalCode
              );
            } else {
              //set new score
              let sc = new Score(
                selectOption,
                selectOptionCourse,
                score.value,
                students,
                nationalCode.value
              );
            }
            error.style.visibility = "visible";
            error.innerText = showStudentDetails(selectOption, students);
          }
        });
      }
    }
    //set studentsList to Ls
    setDataToLs("studentsList", JSON.stringify(students));
    clearInputValue();
  } else {
  }
}

function validationNational(national) {
  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    if (student.nationalCode == national) {
      return false;
    }
  }
}
//if student select(list) is change : find how option is selected
function findStudentOption(e) {
  let i = e.target.selectedIndex;
  selectOption = e.target.options[i].text;
  error.innerText = showStudentDetails(selectOption, students);
  error.style.visibility = "visible";
}

//if course select(list) is change : find how option is selected
function findCourseOption(e) {
  let i = e.target.selectedIndex;
  selectOptionCourse = e.target.options[i].text;
}
function findNationalCode(e) {
  let i = e.target.selectedIndex;
  selectNationalDeleter = e.target.options[i].text;
}
function clearLs(e) {
  //show alert ta continue
  //remove studentsList from Ls

  if (e == true) {
    clearInputValue();
    localStorage.removeItem("studentsList");
    //refresh page
    let item = document.getElementsByClassName("item");
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      element.remove();
    }
    studentResult.classList.remove("studentResult");
    for (let i = 0; i < studentSelect.children.length; i++) {
      const children = studentSelect.children[i];
      if (children == studentSelect.children[0]) {
      } else {
        children.remove();
      }
    }
    students = [];
    silverBox({
      position: "top-right",
      alertIcon: "info",
      text: "All Student is Deleted!",
      centerContent: true,
      showCloseButton: true,
      timer : {
        duration : '3000ms',
        pauseOnHover : false
      }
    });
  } else {
    confirmValidation(
      "Delete",
      "Are You Sure To Delete All Students",
      "Confrim",
      "There Are No Students",
      students,
      clearLs
    );
  }
}
function clearInputValue() {
  for (let index = 0; index < loginCardInput.length; index++) {
    const input = loginCardInput[index];
    input.value = "";
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
function confirmValidation(
  isSubmitBtnText = "",
  description = "",
  title = "",
  errorText = "",
  array = [],
  submitFunction
) {
  if (array.length == 0) {
    silverBox({
      alertIcon: "error",
      text: errorText,
      centerContent: true,
      cancelButton: {
        text: "OK",
      },
    });
  } else {
    silverBox({
      title: {
        text: title,
      },
      centerContent: true,
      text: description,
      showCloseButton: true,
      confirmButton: {
        closeOnClick: true,
        text: isSubmitBtnText,
        id: "deleteBtn",
      },
      cancelButton: {},
    });
    let deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
      if (submitFunction) {
        submitFunction(true);
      }
      return true;
    });
  }
}
function validationDeleteStudent(e) {
  if (students.length == 0) {
    silverBox({
      alertIcon: "error",
      text: "There are no students.",
      centerContent: true,
      cancelButton: {
        text: "OK",
      },
    });
    return;
  }
  let selectDeleter = document.createElement("select")
  selectDeleter.id = "deleteNational"
  let optionDeleter = document.createElement("option")
  optionDeleter.innerText = "Choese National Code"
  selectDeleter.append(optionDeleter)



  nationalCreateor(selectDeleter);
  silverBox({
    title: {
      text: "Delete Student",
    },
    centerContent: true,
    text: "Enter Student Information",
    showCloseButton: true,
    confirmButton: {
      text: "Delete",
      closeOnClick: true,
      id: "deleteBtn",
    },
    cancelButton: {},
    html: selectDeleter,
  });
  let deleteNatioanl = document.getElementById("deleteNational");
  let deleteBtn = document.getElementById("deleteBtn");
  let item = document.getElementsByClassName("item");
  deleteNatioanl.addEventListener("change", findNationalCode);
  deleteBtn.addEventListener("click", () => {
    // let validation = validationNational(selectNationalDeleter);
    let trash = trashStudent(selectNationalDeleter, students, item, studentSelect);
    if (trash == true) {
      silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "Student is Deleted!",
        centerContent: true,
        showCloseButton: true,
        timer: { duration: "3000ms", pauseOnHover: false },
      });
    }
    setDataToLs("studentsList", JSON.stringify(students));
    if (item.length == 0) {
      studentResult.classList.remove("studentResult");
    }
  });
}

function nationalCreateor(select) {
  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    let option = document.createElement("option")
    option.innerText = `${student.firstName} ${student.lastName} (${student.nationalCode})`
    select.append(option)
  }
}
