var muscleChosen = JSON.parse(localStorage.getItem('Muscle Group'));
var userName = localStorage.getItem('Full Name');
var userEmail = localStorage.getItem('Email');
console.log(muscleChosen);
console.log(userName);
console.log(userEmail);

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
    for (let i - 0; i < muscleChosen.length; i++) {
        if (apiMuscleList.muscleChosen[i].length > 0) {
             })
    }
  }

  fetch(
    `https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${apiMuscleList[muscleChosen[i]][0]}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  }
}

grabExercises(muscleChosen);
console.log(muscleChosen[0]);
console.log(apiMuscleList[muscleChosen[0]]);
