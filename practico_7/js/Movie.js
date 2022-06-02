class Movie {
    
    constructor(name, year, gender, votesNumber, score) {
        this.name = name;
        this.year = Number(year);
        this.gender = gender;
        this.votesNumber = Number(votesNumber);
        this.score = Number(score);
    }

    getName() { return this.name; }
    getYear() { return this.year; }
    getGender() { return this.gender; }
    getVotesNumber() { return this.votesNumber; }
    getScore() { return this.score; }

    found(moviesList, name) {
        if (!moviesList.length > 0) {
            return false;
        }
        else {
            for (let i = 0; i < moviesList.length; i++) {
                if (moviesList[i].name === name) return true;
            }
        }
    }
}