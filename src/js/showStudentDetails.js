
function showStudentDetails(name,students){
    let counter = ""
    if (Array.isArray(students)) {
        for (let index = 0; index < students.length; index++) {
            const student = students[index]
            if (`${student.firstName} ${student.lastName} (${student.nationalCode})` == name) {
                if (student.rate.html == "none") {
                    counter += "'HTML' "
                }
                if (student.rate.css == "none") {
                    counter += "'CSS' "
                }
                if (student.rate.js == "none") {
                    counter += "'JS' "
                }
                if (counter == "") {
                    return "all courses is ok"
                }
                return `The ${counter} course is empty`
            }
        }
    }
}

export {showStudentDetails}