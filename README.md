# <font color="purple">ApiRest-Rent-movies-and-series</font>

## <font color="purple">Introduction</font>

---

Back-end for an app to rent movies and series with a suscription.
The Data Base consists in 5 tables: user(with all the data of users), userorder(info of the userorders), serie(all the data relating to series), movie(all the data relating to movies) and genre(with all the genres used by movie and serie tables).
We have as well different kind of endpoints in the api, for every table and most of them require a token, that we generate in the login. Some of the endpoints can only be executed by the admin, that at the moment, is only one.

## <font color="purple">Tecnologies</font>

---

-   **JavaScript**
-   **Node**
-   **Express**
-   **MySQL**
-   **Sequelize**

## <font color="purple">Entity-Relationship Model </font>

---

<center><img src="/img readme/Screenshot_4.png" width="500" height="300"></center>

## <font color="purple">Endpoints</font>

---

### Movies

**GET /movie/**

To get all the movies.

**GET /movie/:id**

To get all the movies by id.

**GET /movie/title**

To get all the movies by title.

**GET /movie/year/:year**

To get all the movies by year.

**GET /movie/director**

To get all the movies by director.

**GET /movie/minage/:minage**

To get all the movies by minimum age to see it.

**GET /movie/genre/:genreid**

To get all the movies by genreId.

**GET /movie/topRated**

List of 5 top rated movies.

### Series

**GET /serie/**
To get all the series.

**GET /serie/:id**
To get all the series by id.

**GET /serie/title**
To get all the series by title.

**GET /serie/year/:year**
To get all the series by year.

**GET /serie/director**
To get all the series by director.

**GET /serie/minage/:minage**
To get all the series by minimum age to see it.

**GET /serie/genre/:genreid**
To get all the series by genreId.

**GET /serie/topRated**
List of 5 top rated series.

**GET /series/cinemapasses**
To get all the series with cinema passes.

**GET /series/theaterpasses**
To get all the series with theater passes.

**GET /series/nextweekepisode**
To get all the series with episodes next week.

### Genre

**GET /genre/**
To get all the genres.

**GET /genre/:id**
To get all the genres by id.

### User

**GET /user/**
To get all the users.

**GET /user/allsubscribed**
To get all the users subscribed.

**GET /user/alladmin**
To get all the admin users.

**GET /user/:id**
To get one user by id.

**GET /user/:email**
To get one user by email.

**POST /user/**
To post one user(REGISTER).

**POST /user/login**
To allow the user to LOGIN.

**PUT /user/:id**
To modify data of user.

**DELETE /user/**
To delete one user.

### Userorders

**GET /userorders/**
To get all the userorders.

**GET /userorders/listuser/:userid**
Get a list of users by id.

**POST /userorders/movie**
To post the movie that is watching the user.

**POST /userorders/serie**
To post the serie that is watching the user.

**PUT /userorders/:id**
To modify data of the orders of a user.

## <font color="purple">Instructions of use</font>

-   download the project.
-   In the console "npm i".
-   Go to Railway and use the comands "npx sequelize-cli db:migrate", "npx sequelize-cli db:seed:all".

Descargar el proyecto y ejecutar el comando "npm i" para descargar las dependencias. La api se conecta con una base de datos creada en railway,en caso de querer usar una base de datos local el proyecto tiene incluidas migraciones y seeders,que se ejecutan con los siguientes comandos:

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
