const process = require("process")
const pathModule = require("path")
const filesystemModule = require("fs")


// const studentsPath = "./students.json"
const studentsPath = pathModule.join(__dirname, "students.json")

// Filesystem kan om bestanden te lezen!
const fileContent = filesystemModule.readFileSync(studentsPath, "utf8")
const fileContentArray = JSON.parse(fileContent)
fileContentArray.push({
    name: "student3",
    age: 19
})
console.log(fileContentArray);

filesystemModule.writeFileSync(studentsPath, JSON.stringify(fileContentArray))


// const pathToFunctionsCourse = "../../week-1/les-1/functions.json"
const pathToFunctionsCourse = pathModule.join("..", "..", "week-1", "les-1", "functions.js")

// console.log(process.env);
// console.log(path);
console.log(__dirname);


