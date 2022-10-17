// Stored a main section button, form section and close icon in a variable

var starBtn=  document.querySelector("#main-section-button")

var formSection= document.querySelector("#form-section");

var icon= document.querySelector("#close-icon")
// console.log(icon);

// Created a click event listener on start btn with a if statemnet.
starBtn.addEventListener("click", function(){
    if(formSection.style.display === "flex"){
        form.Section.style.display="none";
    }else{
        formSection.style.display="flex";
    }
})

//Create an empty array
var muscleArr=[];

//created a function in which we are storing checked checkbox or checkboxes value into the muscleArr array. 
function ap(chest){
var chest= document.querySelectorAll(".checkbox-value:checked");

for(var i=0; i<chest.length; i++){

    muscleArr.push(chest[i].value);
}
console.log(chest);
console.log(muscleArr);
}

//Created an click event listener for closing the form
icon.addEventListener("click", function(){
    formSection.setAttribute("style","display:none;");
})

//Storing form submit btn in a variable
var formBtn= document.querySelector("#form-btn");

//created an click event listener for storing input value in local storage
formBtn.addEventListener("click", function(event){
    // event.preventDefault();

    var nameInput= document.querySelector("#name-input")
    localStorage.setItem("Full Name",nameInput.value);
    var localGetName= localStorage.getItem("full Name")
    var emailInput= document.querySelector("#email-input")
    localStorage.setItem("Email",emailInput.value);

    var localGetEmail= localStorage.getItem("email");

    //calling function
    ap(chest);

    localStorage.setItem("Muscle Group", JSON.stringify(muscleArr));
    var localGetCheckbox= JSON.parse(localStorage.getItem("Muscle Group"));


//    function error(){
//     if(nameInput.value= " "){

//         var nameInputDiv = document.getElementById("name-input-div")
//         var nameError= document.createElement("p");
//         nameError.innerHTML="Please Fill you full name";
    
//         nameInputDiv.appendChild(nameError);
//         console.log(nameError);
    
//     }else{
//         nameError.setAttribute("style", "display:none;");
//     }

//     if(emailInput.value= " " || emailInput.value == !includes("@") ){

//         var emailInputDiv= document.getElementById("email-input-div");

//         var emailError=  document.createElement("p");

//         emailError.innerHTML="Please fill your proper email Address"

//         emailInputDiv.appendChild(emailError);
//     }else{
//         emailError.setAttribute("style","display:none;");
//     }
//    }

//    error();

//    function redirect(){

//     location.replace("https://www.google.com");
//    }

//    redirect();


})


