export function testFunc() {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    // .then(data => document.getElementById("testing").innerText = data.recievedData[0].name)
    .then(data => console.log("TEST REFACTOR OUTSIDE #2(testFunc): " + data)); 
    console.log("TEST REFACTOR OUTSIDE END");
}



export function func2 () {
    console.log();
}

export function func3 () {
    console.log("testing outside funtion: func 3");
    const myData = document.querySelector('#quizModalData_2'); //quizModalData_2 == p tag
    console.log("myData" , myData);
    fetch('http://localhost:5000/insertingData', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({myData, purple: 'pink'}) //myTagData not loading before
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}



let userInput_quiz = [];
export function quizSubmitHelper (e, myForm) {
    
    e.preventDefault();
    const formData = new FormData(myForm); 

    //check contents of formdata obj through iterator >> data stored in array of arrays
    //loop through & submit all >> *change to  using obj later*
    console.log("trying to console quiz form data: " + formData);
    for (let item of formData) {
        //1 >> form key, 2 >> user input (loop for every user input)
        console.log(item[0], item[1]);
        userInput_quiz.push(item[1]);
    }
    
    //make array loop through, put items in array
    console.log("SKATTER SENBONE ZAKURA")

    fetch('http://localhost:5000/quizsubmission', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: 
            JSON.stringify({
                "label": "question label", 
                "userInput": userInput_quiz
        }),
    })
        .then(res => res.json())
        .then(res => console.log(res));

        userInput_quiz = [];

}

export function usersHelper() {
    
    const myTagData = document.querySelector('#un');
    console.log("mytagData" , myTagData);
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({myTagData}) //myTagData not loading before
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
 
}

let rukia = [];

export function formSubmit2Helper(e) {
    e.preventDefault();
    const formData = new FormData(form); 

    //check contents of formdata obj through iterator >> data stored in array of arrays
    //loop through & submit all
    console.log("trying to console formdata: " + formData);
    for (item of formData) {
        //1 >> form key, 2 >> user input (loop for every user input)
        console.log(item[0], item[1]);
        rukia.push(item[1]);
    }
    //make array loop through, put items in array
    console.log("SHIKAI: " + rukia)

    fetch('http://localhost:5000/bleach', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: 
            JSON.stringify({
                "test": "mykeyy", 
                "userInput": rukia
        }),
    })
        .then(res => res.json())
        .then(res => console.log(res));
}

console.log("test refactor outside #1");

//update: started getting server error

