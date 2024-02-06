class Country {
    constructor(country) {
        this.country = country;
        this.reponsesPossibles = [];
        this.flagCountry = {
            get flag() {
                return country.flag
            }
        };
    }

    toutesReponsesPossibles() {
        this.reponsesPossibles = Object.values(this.country.translations.common);
        this.reponsesPossibles.forEach((mot) => {
            return mot.toLowerCase();
        });
    }

    verificationReponse(string) {
        const reponse = this.reponsesPossibles.includes(string) ? true : false;
        return reponse;
    }

    renderFlag() {
        const flag = document.createElement("h1");
        flag.textContent = this.flagCountry;
        document.querySelector("#flag").appendChild(flag);
    }
}

export default Country;