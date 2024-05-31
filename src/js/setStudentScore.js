import { showStudents } from "./showData";
import { showEditScore } from "./showData";
//create score class
class Score {
  constructor(Name, course, score, students) {
    //check students is array or no
    if (Array.isArray(students)) {
      for (let index = 0; index < students.length; index++) {
        const student = students[index];
        //check names 
        if (`${student.firstName} ${student.lastName}` == Name) {
          //check which one is course 
          switch (course) {
            //placement score
            case "js":
              student.rate.js = parseFloat(score);
              alert("course is add");
              break;
            case "html":
              student.rate.html = parseFloat(score);
              alert("course is add");
              break;
            case "css":
              alert("course is add");
              student.rate.css = parseFloat(score);
              break;
          }
          //check corses is has score or no
          if (
            student.rate.html !== "none" &&
            student.rate.css !== "none" &&
            student.rate.js !== "none"
          ) {
            //send data to show students function
            showStudents(
              `${student.firstName} ${student.lastName}`,
              student.rate.html,
              student.rate.css,
              student.rate.js
            );
            break;
          }
        }
      }
    }
  }
}
//create edit score prototype 
Score.prototype.editScore = (Name, course, score, students) => {
  //check students is array or no
  if (Array.isArray(students)) {
    students.forEach((student) => {
      //check student names
      if (`${student.firstName} ${student.lastName}` == Name) {
        //check which courses is selected and placement thats
        switch (course) {
          case "js":
            student.rate.js = parseFloat(score);
            break;
          case "html":
            student.rate.html = parseFloat(score);
            break;
          case "css":
            student.rate.css = parseFloat(score);
            break;
        }

        alert("course is edit");
        //send data to showData file 
        showEditScore(
          `${student.firstName} ${student.lastName}`,
          student.rate.html,
          student.rate.css,
          student.rate.js
        );
      }
    });
  }
};
//exports Score class
export { Score };
