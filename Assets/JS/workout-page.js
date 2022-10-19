var musclesChosen = JSON.parse(localStorage.getItem('Muscle Group'));

//muscle variables for api calls
var apiMuscleList = {
  Chest: [`pectoralis%20major`],
  Back: [`latissimus%20dorsi`],
  Shoulders: [`deltoid`],
  Biceps: [`biceps`],
  Triceps: [`triceps`],
  Legs: [`quadriceps`, `hamstrings`, `gluteus%20maximus`],
};

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
