// Variables for all the data stored in local storage
var musclesChosen = JSON.parse(localStorage.getItem(`Muscle Group`));
var userName = localStorage.getItem(`Full Name`);
var userEmail = localStorage.getItem(`Email`);
console.log(musclesChosen);
console.log(userName);
console.log(userEmail);

// // Variables for the DOM elements
// var nameEl = document.querySelector(`.username`);
// var emailEl = document.querySelector(`.user-email`);
// var goalEl = document.querySelector(`.goal`);

// //Function to capitalize first and last name
// function capitalizeString(str) {
//   var splitStr = str.toLowerCase().split(" ");
//   for (var i = 0; i < splitStr.length; i++) {
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   // Directly return the joined string
//   return splitStr.join(" ");
// }
// // Display DOM variables
// nameEl.innerText = capitalizeString(userName);

//muscle variables for api calls
var apiMuscleList = {
  Chest: [`pectoralis%20major`],
  Back: [`latissimus%20dorsi`],
  Shoulders: [`deltoid`],
  Biceps: [`biceps`],
  Triceps: [`triceps`],
  Legs: [`quadriceps`, `hamstrings`, `gluteus%20maximus`],
};
console.log(apiMuscleList.Chest);
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a2e2218b81msh172204e911c7de7p1a8ea0jsnc46101fc6953",
    "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
  },
};

function grabExercises() {
  for (let i = 0; i < musclesChosen.length; i++) {
    if (musclesChosen[i] === `Legs`) {
      for (let x = 0; x < 3; x++) {
        fetch(
          `https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${apiMuscleList.Legs[x]}`,
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
      }
    } else {
      fetch(
        `https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${
          apiMuscleList[musclesChosen[i]][0]
        }`,
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }
  }
}
grabExercises(musclesChosen);
console.log(musclesChosen[0]);
console.log(apiMuscleList.Legs[0]);
