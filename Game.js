import Country from "./Country.js"
class Game {
    #score = 0;
    constructor(countries) {
        this.countries = countries;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.countries[this.countryIndex]);
        this.gameScore = this.#score;
        this.currentCountry.renderFlag();
    }

    addPoint() {
        this.#score ++;
        return this;
    }

    gameIsFinish() {
        const reponse = this.countryIndex > this.countries.length ? true : false;
        return reponse;
    }

    nextCountry() {
        if (this.gameIsFinish()) {
            console.log("la partie est finie");
        } else {
            this.countryIndex++;
            const newCountry = new Country(this.countries[this.countryIndex]);
            this.currentCountry = newCountry;
            this.currentCountry.renderFlag();
        }
        return this;
    }

}
export default Game;