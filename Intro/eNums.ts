// Suppose that you want to restrict values to a varibale
// A student should be pursuing SSC, HSC, DEGREE, DIPLOMA

// You can assign numbers, strings , functions and its really Cool way of making complex stuff easier
enum studentEducation {
  SSC = "10th PassOut" ,
  HSC = "12 PassOut",
  DEGREE = "Graduated",
  DIPLOMA ="Faltu Engineer",
};

const studentInfo: [string, studentEducation, number] = ["Swayam", studentEducation.DEGREE, 15];

console.log(studentInfo);