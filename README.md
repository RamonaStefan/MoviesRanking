MOVIES RANKING APPLICATION

The Movie Ranking application was designed as a database of information about movies and TV series where users can rate them on a scale from 1 to 10. 
Thus, the main features are:
- give a ranking score to a movie they have watched
- search for movies according to certain criteria (writer, directory, genre, star,..) and display in rating descending order
- view the list of watched movies per user from recent to oldest
- create a new user

The app is build as an easy-to-integrate API with the following endpoints:
- Add movie review : POST localhost:8000/api/v1/movies/reviews 
	Example BODY: 	{
						"username": "ramona",
						"name": "Titanic",
						"score": 8
					}
- Add review: POST localhost:8000/api/v1/movies
	Example BODY:	{
						"name": "Spider-Man: No Way Home",
						"genre": "Adventure",
						"releasedate": "December 17, 2021",
						"rating": "PG-13",
						"director": "Jon Watts",
						"writer": "Chris McKenna",
						"star": "Tom Holland",
						"country": "United States",
						"budget": 200000000,
						"company": "Columbia Pictures",
						"runtime": 158
					}
- Add user: POST localhost:8000/api/v1/movies/user
	Example BODY:	{
						"username": "ramona",
						"password": "OneStrongPassword"
					}
- Get movies: GETlocalhost:8000/api/v1/movies
- Get movie reviews: GET localhost:8000/api/v1/movies/reviews 
- Get movie *movie_name* by name: GET localhost:8000/api/v1/movies/name/movie_name
- Get movies written by writer *writer_name*: GET localhost:8000/api/v1/movies/writer/writer_name
- Get movies by genre *movie_genre*: GET localhost:8000/api/v1/movies/genre/movie_genre
- Get movies produced by company *company_name*: GET localhost:8000/api/v1/movies/company/company_name
- Get movie directed by director *director_name*: GET localhost:8000/api/v1/movies/director/director_name 
- Get movie with main star *actor_name*: GET localhost:8000/api/v1/movies/star/actor_name
- Get watched movies of user *user_name*: GET localhost:8000/api/v1/movies/watched/user/user_name


COMPONENTS:
- API:
	- Is the component that allows the user to interact with the app through its endpoints
	- Can be accesed on port 8000: localhost:8000
- Procesator: 
	- Pre-process all write request to database by :
		- adding more information (date & time)
		- verify the correctness of data (if movie exists, if scoare is between 1-10)
		- encode some sensitive information (passwords)
		- update some data (re-calculate average score for a movie when a review is added)
- Database: 
	- Store inforation about users, movies and rankings in 3 different tables 
- Adminer: 
	- Offer an user interface for database management 
	- Can be accesed on port 8080: localhost:8080
- Message Queue: 
	- Is a message brocker that receives all POST requests from the API and sends them to Procesator (asynchronously)
- Visualizer: 
	- Offer an user interface for cluster management
	- Can be accesed on port 9000: localhost:9000