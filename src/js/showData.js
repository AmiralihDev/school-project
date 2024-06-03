//import dom-generator library
import domGenerator from "dom-generator";
//Selector
let studentResult = document.getElementById("studentResult");
let select = document.getElementById("student");

//get name and courses value and show thats 
function showStudents(name, html, css, js,nationalCode) {
  //check corses is none or has value
  if (html == "none" || css == "none" || js == "none") {
    return;
  }
  let result = (html + css + js) / 3
  if (result >= 18 && result <= 20) {
    result = "great 👏"
  }else if (result >= 15 && result <=18){
    result = "vary good 👌"
  }
  else if (result >= 10 && result <=15){
    result = "nice"
  }else if (result >= 5 && result <= 10){
    result = "bad"
  }else{
    result = ":/"
  }
  //create item template with dom-generator library
  studentResult.classList.add("studentResult")
  let template = domGenerator({
    tag: "div",
    attributes: { class: "item" },
    children: [
      {
        tag: "span",
        properties: { textContent: "Student Name : " },
      },
      {
        tag: "span",
        attributes: { class: "studentName" },
        properties: { textContent: `${name} (${nationalCode})` },
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
                properties: { textContent: "HTML: " },
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
                properties: { textContent: "CSS: " },
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
                properties: { textContent: "JS: " },
              },
              {
                tag: "span",
                properties: { textContent: `${js}` },
              },
            ],
          },
        ],
      },
      {
        tag : "p",
        properties : {textContent : result},
        attributes : {class : "detail"}
      }
    ],
  });
  //add template to html
  studentResult.append(template);
}
// get array data and show data children
function showLsData(data = []) {
  data.forEach((student) => {
    //show data value with create option and send that
    select.innerHTML += `<option value="${student.firstName} ${student.lastName}">${student.firstName} ${student.lastName} (${student.nationalCode})</option>`;
    //create data tempelate
    showStudents(
      `${student.firstName} ${student.lastName}`,
      student.rate.html,
      student.rate.css,
      student.rate.js,student.nationalCode
    );
  });
}

//show edited score
function showEditScore(name, html, css, js,nationalCode) {
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
