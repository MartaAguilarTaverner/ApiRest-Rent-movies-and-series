const { MovieModel } = require("../models");

module.exports = {
    create: async () => {
        await MovieModel.bulkCreate([
            {
                title: "The Shawshank Redemption",
                description:
                    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                director: "Frank Darabont",
                year: 1994,
                genreId: 3,
                rating: 8.9,
                minAge: 14,
            },
            {
                title: "Pulp Fiction",
                description:
                    "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                director: "Quentin Tarantino",
                year: 1994,
                genreId: 6,
                rating: 9.3,
                minAge: 16,
            },
            {
                title: "The Godfather",
                description:
                    "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                director: "Francis Ford Coppola",
                year: 1972,
                genreId: 6,
                rating: 9.6,
                minAge: 14,
            },
            {
                title: "Fight Club",
                description:
                    "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
                director: "David Fincher",
                year: 1999,
                genreId: 3,
                rating: 8.5,
                minAge: 14,
            },
            {
                title: "Inception",
                description:
                    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
                director: "Christopher Nolan",
                year: 2010,
                genreId: 11,
                rating: 9,
                minAge: 12,
            },
            {
                title: "Matrix",
                description:
                    "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
                director: "Francis Ford Coppola",
                year: 1999,
                genreId: 4,
                rating: 9.5,
                minAge: 12,
            },
            {
                title: "The Silence of the Lambs",
                description:
                    "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                director: "Jonathan Demme",
                year: 1991,
                genreId: 1,
                rating: 9.7,
                minAge: 14,
            },
            {
                title: "Spirited Away",
                description:
                    "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                director: "Hayao Miyazaki",
                year: 2001,
                genreId: 10,
                rating: 9.8,
                minAge: 3,
            },
            {
                title: "Psicosis",
                description:
                    "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
                director: "Alfred Hitchcock",
                year: 1960,
                genreId: 1,
                rating: 8.7,
                minAge: 13,
            },
            {
                title: "The Pianist",
                description:
                    "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
                director: "Roman Polanski",
                year: 2002,
                genreId: 3,
                rating: 9.5,
                minAge: 12,
            },
            {
                title: "The Great Dictator",
                description:
                    "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
                director: "Charles Chaplin",
                year: 1991,
                genreId: 8,
                rating: 9.9,
                minAge: 6,
            },
            {
                title: "Everything Everywhere All at Once",
                description:
                    "An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.",
                director: "Dan Kwan, Daniel Scheinert",
                year: 2022,
                genreId: 11,
                rating: 10,
                minAge: 4,
            },
            {
                title: "Old Boy",
                description:
                    "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
                director: "Park Chan-wook",
                year: 2003,
                genreId: 9,
                rating: 9.8,
                minAge: 16,
            },
            {
                title: "Joker",
                description:
                    "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
                director: "Jonathan Demme",
                year: 2019,
                genreId: 4,
                rating: 9.9,
                minAge: 12,
            },
            {
                title: "Inglorius Basterds",
                description:
                    "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
                director: "Quentin Tarantino",
                year: 2009,
                genreId: 2,
                rating: 9.6,
                minAge: 10,
            },
            {
                title: "Requiem for a Dream",
                description:
                    "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
                director: "Darren Aronofsky",
                year: 2000,
                genreId: 3,
                rating: 8.4,
                minAge: 6,
            },
            {
                title: "The Dark Knight",
                description:
                    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                director: "Roger Allers, Rob Minkoff",
                year: 2008,
                genreId: 4,
                rating: 9,
                minAge: 10,
            },
            {
                title: "The Lion King",
                description:
                    "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
                director: "Jonathan Demme",
                year: 1994,
                genreId: 1,
                rating: 8.9,
                minAge: 3,
            },
            {
                title: "American History X",
                description:
                    "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
                director: "Tony Kaye",
                year: 1998,
                genreId: 6,
                rating: 8.5,
                minAge: 12,
            },
            {
                title: "The Usal Suspects",
                description:
                    "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
                director: "Bryan Singer",
                year: 1995,
                genreId: 9,
                rating: 8.2,
                minAge: 6,
            },
            {
                title: "The Hunt",
                description:
                    "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
                director: "Jonathan Demme",
                year: 2012,
                genreId: 3,
                rating: 8,
                minAge: 10,
            },
            {
                title: "Die Hard",
                description:
                    "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
                director: "John McTiernan",
                year: 1988,
                genreId: 9,
                rating: 8.1,
                minAge: 12,
            },
            {
                title: "A Beautiful Mind",
                description:
                    "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
                director: "Ron Howard",
                year: 2001,
                genreId: 3,
                rating: 8.3,
                minAge: 3,
            },
            {
                title: "No Country for Old Men",
                description:
                    "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
                director: "Ethan Coen, Joel Coen",
                year: 2007,
                genreId: 6,
                rating: 9,
                minAge: 13,
            },
            {
                title: "V for Vendetta",
                description:
                    "In a future British dystopian society, a shadowy freedom fighter, known only by the alias of V, plots to overthrow the tyrannical government - with the help of a young woman.",
                director: "James McTeigue",
                year: 2005,
                genreId: 4,
                rating: 9,
                minAge: 12,
            },
            {
                title: "Howl's Moving Castle",
                description:
                    "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
                director: "Hayao Miyazaki",
                year: 2004,
                genreId: 10,
                rating: 9.9,
                minAge: 3,
            },
            {
                title: "12 Years a Slave",
                description:
                    "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
                director: "Steve McQueen",
                year: 2013,
                genreId: 3,
                rating: 7.5,
                minAge: 3,
            },
            {
                title: "Barbarian",
                description:
                    "A woman staying at an Airbnb discovers that the house she has rented is not what it seems.",
                director: "Zach Cregger",
                year: 2022,
                genreId: 1,
                rating: 8,
                minAge: 13,
            },
            {
                title: "The Nightmare Before Christmas",
                description:
                    "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.",
                director: "Henry Selick",
                year: 1993,
                genreId: 10,
                rating: 9,
                minAge: 3,
            },
            {
                title: "Edward Scissorhands",
                description:
                    "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.",
                director: "Tim Burton",
                year: 1990,
                genreId: 5,
                rating: 7,
                minAge: 6,
            },
        ]);
    },
};