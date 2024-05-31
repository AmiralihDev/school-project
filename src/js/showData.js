//import dom-generator library
import domGenerator from "dom-generator";
//Selector
let studentResult = document.getElementById("studentResult");
let select = document.getElementById("student");

//get name and courses value and show thats 
function showStudents(name, html, css, js) {
  //check corses is none or has value
  if (html == "none" || css == "none" || js == "none") {
    return;
  }
  //create item template with dom-generator library
  let template = domGenerator({
    tag: "div",
    attributes: { class: "item" },
    children: [
      {
        tag: "span",
        properties: { textContent: "studentName : " },
      },
      {
        tag: "span",
        attributes: { class: "studentName" },
        properties: { textContent: `${name}` },
      },
      {
        tag: "div",
        attributes: { class: "courses" },
        children: [
          {
            tag: "div",
            attributes: { class: "html" },
            children: [
              {
                tag: "span",
                properties: { textContent: "html : " },
              },
              {
                tag: "span",
                properties: { textContent: `${html}` },
              },
            ],
          },
          {
            tag: "div",
            attributes: { class: "css" },
            children: [
              {
                tag: "span",
                properties: { textContent: "css : " },
              },
              {
                tag: "span",
                properties: { textContent: `${css}` },
              },
            ],
          },
          {
            tag: "div",
            attributes: { class: "js" },
            children: [
              {
                tag: "span",
                properties: { textContent: "js : " },
              },
              {
                tag: "span",
                properties: { textContent: `${js}` },
              },
            ],
          },
        ],
      },
    ],
  });
  //add template to html
  studentResult.append(template);
}
// get array data and show data children
function showLsData(data = []) {
  data.forEach((student) => {
    //show data value with create option and send that
    select.innerHTML += `<option value="${student.firstName} ${student.lastName}">${student.firstName} ${student.lastName}</option>`;
    //create data tempelate
    showStudents(
      `${student.firstName} ${student.lastName}`,
      student.rate.html,
      student.rate.css,
      student.rate.js
    );
  });
}

//show edited score
function showEditScore(name, html, css, js) {
  let item = document.getElementsByClassName("item");

  for (let index = 0; index < item.length; index++) {
    let studentName = item[index].children[1].innerText;
    if (studentName == name) {
      item[index].children[2].children[0].children[1].innerText = html;
      item[index].children[2].children[1].children[1].innerText = css;
      item[index].children[2].children[2].children[1].innerText = js;
    }
  }
}
// exports functions
export { showStudents, showLsData, showEditScore };
