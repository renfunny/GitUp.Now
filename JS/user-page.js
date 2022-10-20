// Variables for all the data stored in local storage
var musclesChosen = JSON.parse(localStorage.getItem(`Muscle Group`));
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f00967f704mshcdc1a904b456533p1d9212jsn0bb094eab6a5",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

function displayexercises() {
  document.getElementById(`card-root`).innerHTML = ``;
  musclesChosen = JSON.parse(localStorage.getItem(`Muscle Group`));
  for (let i = 0; i < musclesChosen.length; i++) {
    fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${musclesChosen[i]}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        for (let x = 0; x < 10; x++) {
          var rootEl = document.getElementById(`card-root`);
          var colEl = document.createElement(`div`);
          colEl.classList.add(
            `col-xs-12`,
            `col-sm-12`,
            `col-md-6`,
            `col-lg-4`,
            `col-xl-3`
          );
          var cardEl = document.createElement(`div`);
          cardEl.classList.add(`card`, `h-100`, `card-custm`);
          var gifEl = document.createElement(`img`);
          gifEl.classList.add(`card-img-top`);
          gifEl.src = data[x][`gifUrl`];
          var cardbodEl = document.createElement(`div`);
          cardbodEl.classList.add(`card-body`);
          var cardTitleEl = document.createElement(`h4`);
          cardTitleEl.classList.add(`card-title`);
          cardTitleEl.innerText =
            data[x][`name`].charAt(0).toUpperCase() + data[x][`name`].slice(1);
          var cardTextEl = document.createElement(`h5`);
          cardTextEl.classList.add(`card-text`);
          cardTextEl.innerText = `Body Part: ${
            data[x][`bodyPart`].charAt(0).toUpperCase() +
            data[x][`bodyPart`].slice(1)
          }`;
          var cardText2El = document.createElement(`h5`);
          cardText2El.classList.add(`card-text`);
          cardText2El.innerText = `Equipment: ${
            data[x][`equipment`].charAt(0).toUpperCase() +
            data[x][`equipment`].slice(1)
          }`;
          //Append
          rootEl.appendChild(colEl);
          colEl.appendChild(cardEl);
          cardEl.appendChild(gifEl);
          cardEl.appendChild(cardbodEl);
          cardbodEl.appendChild(cardTitleEl);
          cardbodEl.appendChild(cardTextEl);
          cardbodEl.appendChild(cardText2El);
        }
      })
      .catch((err) => console.error(err));
  }
}
displayexercises();

var dropdownEl = document.querySelectorAll(`.dropdown-body-part`);
for (let i = 0; i < dropdownEl.length; i++) {
  dropdownEl[i].addEventListener(`click`, function () {
    var muscle = [`${this.innerText.toLowerCase()}`];
    musclesChosen = localStorage.setItem(
      `Muscle Group`,
      JSON.stringify(muscle)
    );
    displayexercises();
  });
}
