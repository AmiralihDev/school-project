//create Student class
class Student {
  //get data and create student
  constructor(firstName, lastName, select,nationalCode) {
    //show that with create option and placement that
    select.innerHTML += `<option value="${firstName} ${lastName} ${nationalCode}">${firstName} ${lastName} (${nationalCode})</option>`;
    //return Created data
    return {
      firstName: firstName,
      lastName: lastName,
      nationalCode : nationalCode,
      rate: {
        js: "none",
        html: "none",
        css: "none",
      },
    };
  }
}
//export Student class
export { Student };
