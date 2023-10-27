import * as funcTest from "./functionsRefac/funcfac.js";

console.log("test refactor #1");

//test route for db connection >> getAll route >> names table
document.addEventListener('DOMContentLoaded', function() {
    console.log("test refactor #2");
    funcTest.testFunc();
})

console.log("test refactor #3");

//test route for inserting to db >> insertingData route >> colors table
document.addEventListener('DOMContentLoaded', function() {
    funcTest.func3(); 
})

const myForm = document.getElementById("quizForm"); //bleach-1 is form id
//testing inserting ui formdata >> bleach route (post)
// console.log("quiz form input: " + myForm);
myForm.addEventListener('submit', (e) => {
    funcTest.quizSubmitHelper(e, myForm);
});

//test route for logging in >> user input form data to db >> users route >> login table
//upon dom load >> connect to users route >> login model (w/predetermined info)
document.addEventListener('DOMContentLoaded', function() {
    funcTest.usersHelper();   
})

//testing inserting ui formdata >> bleach route (post)
const form = document.getElementById("bleach-1"); //bleach-1 is form 

console.log("bleach" + form);
form.addEventListener('submit', (e) => {
    funcTest.formSubmit2Helper(e);
})


