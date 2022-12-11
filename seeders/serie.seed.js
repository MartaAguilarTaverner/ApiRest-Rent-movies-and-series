module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("serie", [
            {
                title: "Breaking Bad",
                description:
                    "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
                director: "Vince Gilligan",
                year: 2008,
                genreId: 9,
                rating: 9.5,
                minAge: 14,
                seasons: 5,
                episodes: 62,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg",
            },
            {
                title: "Chernobyl",
                description:
                    "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
                director: "Craig Mazin",
                year: 2019,
                genreId: 3,
                rating: 8,
                minAge: 14,
                seasons: 1,
                episodes: 5,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
            },
            {
                title: "Game of Thrones",
                description:
                    "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
                director: "David Benioff, D.B. Weiss",
                year: 2011,
                genreId: 5,
                rating: 9,
                minAge: 14,
                seasons: 8.5,
                episodes: 73,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            },
            {
                title: "Rick and Morty",
                description:
                    "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
                director: "Dan Harmon, Justin Roiland",
                year: 2013,
                genreId: 10,
                rating: 9.7,
                minAge: 14,
                seasons: 6,
                episodes: 61,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
            },
            {
                title: "Fullmetal Alchemist: Brotherhood",
                description:
                    "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
                director: "Hiromu Arakawa",
                year: 2009,
                genreId: 10,
                rating: 10,
                minAge: 3,
                seasons: 1,
                episodes: 68,
                nextEpisodeDate: null,
                cinemaPasses: true,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BNTM4MzMxMWItYzc3NC00ODY0LTg0M2MtYjg4NDg0ZjM0MjdiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
            },
            {
                title: "Sherlock",
                description:
                    "A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.",
                director: "Mark Gatiss, Steven Moffat",
                year: 2010,
                genreId: 3,
                rating: 7,
                minAge: 14,
                seasons: 4,
                episodes: 15,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_.jpg",
            },
            {
                title: "Cowboy Bebop",
                description:
                    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                director: "Frank Darabont",
                year: 1998,
                genreId: 10,
                rating: 8,
                minAge: 3,
                seasons: 1,
                episodes: 26,
                nextEpisodeDate: null,
                cinemaPasses: true,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg",
            },
            {
                title: "Black Mirror",
                description:
                    "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
                director: "Charlie Brooker",
                year: 2011,
                genreId: 11,
                rating: 8.5,
                minAge: 18,
                seasons: 5,
                episodes: 23,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            },
            {
                title: "South Park",
                description:
                    "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
                director: "Trey Parker, Matt Stone, Brian Graden",
                year: 1997,
                genreId: 10,
                rating: 8.8,
                minAge: 14,
                seasons: 25,
                episodes: 320,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_.jpg",
            },
            {
                title: "Dark",
                description:
                    "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
                director: "Baran bo Odar, Jantje Friese",
                year: 2017,
                genreId: 9,
                rating: 10,
                minAge: 16,
                seasons: 3,
                episodes: 26,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
            },
            {
                title: "The Boys",
                description:
                    "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
                director: "Eric Kripke",
                year: 2019,
                genreId: 8,
                rating: 9.5,
                minAge: 16,
                seasons: 4,
                episodes: 25,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BNDIxMGZjNGMtNjg2Yi00NzNhLTk2MTEtZTFiMWY5NjQ3NmJlXkEyXkFqcGdeQXVyMzEyMjE2NzA@._V1_.jpg",
            },
            {
                title: "Doctor Who",
                description:
                    "The further adventures in time and space of the alien adventurer known as the Doctor and their companions from planet Earth.",
                director: "Sydney Newman",
                year: 2005,
                genreId: 11,
                rating: 9.8,
                minAge: 3,
                seasons: 14,
                episodes: 201,
                nextEpisodeDate: new Date(),
                cinemaPasses: true,
                theaterPasses: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BNDE0ZjljOGItYTQ5Ny00YjBiLThhNGUtOWZkMWQ0MGRkZGJjXkEyXkFqcGdeQXVyODg3OTU5Nzg@._V1_.jpg",
            },
            {
                title: "The Office",
                description:
                    "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
                director: "Greg Daniels, Ricky Gervais, Stephen Merchant",
                year: 2005,
                genreId: 8,
                rating: 8.9,
                minAge: 3,
                seasons: 9,
                episodes: 188,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
            },
            {
                title: "Silicon Valley",
                description:
                    "Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper.",
                director: "John Altschuler, Mike Judge, Dave Krinsky",
                year: 2014,
                genreId: 8,
                rating: 8.5,
                minAge: 3,
                seasons: 10,
                episodes: 53,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BM2Q5YjNjZWMtYThmYy00N2ZjLWE2NDctNmZjMmZjYWE2NjEwXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg",
            },
            {
                title: "The IT Crowd",
                description:
                    "The comedic misadventures of Roy, Moss and their grifting supervisor Jen, a rag-tag team of IT support workers at a large corporation headed by a hotheaded yuppie.",
                director: "Chris O'Dowd",
                year: 2006,
                genreId: 8,
                rating: 8.5,
                minAge: 3,
                seasons: 5,
                episodes: 25,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BMjE5MThjMzAtNWVmNC00YThkLTlmNzktMTM3Yzk4YTZhMTgwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
            },
            {
                title: "Inside Job",
                description:
                    "For employees of the Deep State, conspiracies aren't just theories, they're fact. And keeping them a secret is a full-time job.",
                director: "Alex Hirsch, Shion Takeuchi",
                year: 2021,
                genreId: 10,
                rating: 9.8,
                minAge: 4,
                seasons: 2,
                episodes: 19,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BZTg5YjE1YzktYjRmZC00Y2VjLThiMDItOTcwODRhMjRjZDQ1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
            },
            {
                title: "Arcane",
                description:
                    "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
                director: "Pascal Charrue, Arnaud Delord",
                year: 2021,
                genreId: 10,
                rating: 8,
                minAge: 6,
                seasons: 1,
                episodes: 10,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BMzFkMGIyMWUtOWQ4Mi00ZTUzLWIxZDItMjM0YjJkN2FjY2Q4XkEyXkFqcGdeQXVyMTQ0OTA3OTY4._V1_.jpg",
            },
            {
                title: "How I Met Your Mother",
                description:
                    "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
                director: "Carter Bays, Craig Thomas",
                year: 2005,
                genreId: 8,
                rating: 8.5,
                minAge: 14,
                seasons: 9,
                episodes: 208,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_.jpg",
            },
            {
                title: "Steins;Gate",
                description:
                    "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
                director: "Kazuhiro Ozawa, Kanji Wakabayashi",
                year: 2011,
                genreId: 10,
                rating: 8.2,
                minAge: 10,
                seasons: 1,
                episodes: 26,
                nextEpisodeDate: null,
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
            },
            {
                title: "The Simpson",
                description:
                    "The satiric adventures of a working-class family in the misfit city of Springfield.",
                director: "James L. Brooks, Matt Groening, Sam Simon",
                year: 1989,
                genreId: 10,
                rating: 8.7,
                minAge: 6,
                seasons: 34,
                episodes: 738,
                nextEpisodeDate: new Date(),
                cinemaPasses: false,
                theaterPasses: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                imgURL: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
            },
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("serie", null, {});
    },
};
