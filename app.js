import { shuffle } from "lodash";
import Country from "./Country.js";
import Game from "./Game.js";
const tableauCountries = [];
const url = 'https://restcountries.com/v3.1/all';


const getCountries = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        data.forEach((country) => {
            tableauCountries.push(new Country(country));
        });
        shuffle(tableauCountries);
        console.log(tableauCountries);
    }
    catch (error) {
        throw new Error("Il y a une erreur");
    }
}
getCountries();
const game1 = new Game(tableauCountries);

document
    .querySelector("form")
    .addEventListener("submit", (e) => {
        e.preventDefault();
        if (!game1.gameIsFinish()) {
            if (game1.currentCountry.verificationReponse(e.currentTarget)) {
                game1.addPoint++;
                game1.nextCountry;
                e.currentTarget.reset();
                document.querySelector("#score").querySelector("h1").textContent = `Score: ${game1.gameScore}`;
            } else {
                e.currentTarget.reset();
                game1.nextCountry;
                document.querySelector("#score").querySelector("h1").textContent = `Score: ${game1.gameScore}`;
            }


        } else {
            alert(game1.gameScore);
        }


    });

