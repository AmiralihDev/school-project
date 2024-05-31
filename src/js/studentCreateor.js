//create Student class
class Student {
  //get data and create student
  constructor(firstName, lastName, select) {
    //show that with create option and placement that
    select.innerHTML += `<option value="${firstName} ${lastName}">${firstName} ${lastName}</option>`;
    //return Created data
    return {
      firstName: firstName,
      lastName: lastName,
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
