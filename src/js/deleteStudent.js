function trashStudent(firstName, lastName, national, students, item, select) {
  if (Array.isArray(students)) {
    for (let index = 0; index < students.length; index++) {
      const student = students[index];
      if (
        student.firstName == firstName &&
        student.lastName == lastName &&
        student.nationalCode == national
      ) {
        for (let i = 0; i < item.length; i++) {
          const elemment = item[i];
          let studentName = elemment.children[1].innerText;
          if (
            `${student.firstName} ${student.lastName} (${student.nationalCode})` ==
            studentName
          ) {
            elemment.remove();
          }
        }
        for (let f = 0; f < select.children.length; f++) {
          const option = select.children[f];
          if (
            `${student.firstName} ${student.lastName} (${student.nationalCode})` ==
            option.innerText
          ) {
            option.remove();
          }
        }
        students.splice(index, 1);
      }
    }
  }
}
export { trashStudent };
