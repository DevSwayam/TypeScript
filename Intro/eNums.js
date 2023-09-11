// Suppose that you want to restrict values to a varibale
// A student should be pursuing SSC, HSC, DEGREE, DIPLOMA
var studentEducation;
(function (studentEducation) {
    studentEducation["SSC"] = "10th PassOut";
    studentEducation["HSC"] = "12 PassOut";
    studentEducation["DEGREE"] = "Graduated";
    studentEducation["DIPLOMA"] = "Faltu Engineer";
})(studentEducation || (studentEducation = {}));
;
var studentInfo = ["Swayam", studentEducation.DEGREE, 15];
console.log(studentInfo);
