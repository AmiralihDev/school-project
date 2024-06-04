import { showStudents } from "./showData";
import { showEditScore } from "./showData";
//create score class
class Score {
  constructor(Name, course, score, students, nationalCode) {
    //check students is array or no
    if (Array.isArray(students)) {
      for (let index = 0; index < students.length; index++) {
        const student = students[index];
        //check names
        if (
          `${student.firstName} ${student.lastName} (${student.nationalCode})` ==
          Name
        ) {
          //check which one is course
          switch (course) {
            //placement score
            case "JS":
              student.rate.js = parseFloat(score);
              silverBox({
                position: "top-right",
                alertIcon: "info",
                text: "Score Is Added!",
                centerContent: true,
                showCloseButton: true,
              });
              break;
            case "HTML":
              student.rate.html = parseFloat(score);
              silverBox({
                position: "top-right",
                alertIcon: "info",
                text: "Score Is Added!",
                centerContent: true,
                showCloseButton: true,
              });
              break;
            case "CSS":
              student.rate.css = parseFloat(score);
              silverBox({
                position: "top-right",
                alertIcon: "info",
                text: "Score Is Added!",
                centerContent: true,
                showCloseButton: true,
              });
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
              student.rate.js,
              nationalCode
            );
            break;
          }
        }
      }
    }
  }
}
//create edit score prototype
Score.prototype.editScore = (Name, course, score, students, nationalCode) => {
  //check students is array or no
  if (Array.isArray(students)) {
    students.forEach((student) => {
      //check student names
      if (
        `${student.firstName} ${student.lastName} (${student.nationalCode})` ==
        Name
      ) {
        //check which courses is selected and placement thats
        switch (course) {
          case "JS":
            student.rate.js = parseFloat(score);
            break;
          case "HTML":
            student.rate.html = parseFloat(score);
            break;
          case "CSS":
            student.rate.css = parseFloat(score);
            break;
        }

        silverBox({
          position: "top-right",
          alertIcon: "info",
          text: "Score Is Edited!",
          centerContent: true,
          showCloseButton: true
   })
        //send data to showData file
        showEditScore(
          `${student.firstName} ${student.lastName} (${student.nationalCode})`,
          student.rate.html,
          student.rate.css,
          student.rate.js,
          nationalCode
        );
      }
    });
  }
};
//exports Score class
export { Score };
