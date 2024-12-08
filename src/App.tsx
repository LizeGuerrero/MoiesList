import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Akira",
      genre: "Sci-Fi",
      image: "https://pics.filmaffinity.com/akira-262742931-large.jpg",
    },
    {
      id: 2,
      title: "My Neighbor Totoro",
      genre: "Fantasy",
      image: "https://images.cdn1.buscalibre.com/fit-in/360x360/c8/11/c811109afec32ccd04c857c44a79154e.jpg",
    },
    {
      id: 3,
      title: "Spirited Away",
      genre: "Fantasy",
      image: "https://theartsshelf.com/wp-content/uploads/2024/10/Spirited-Away-Quad-.jpg",
    },
    {
      id: 4,
      title: "Your Name",
      genre: "Romance",
      image: "https://m.media-amazon.com/images/M/MV5BNmEyZjI0M2MtNGFkOC00YTRlLWI0MGQtYTgyODY2MGRhMjc4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 5,
      title: "Princess Mononoke",
      genre: "Fantasy",
      image: "https://images.cdn1.buscalibre.com/fit-in/360x360/ff/34/ff34def6b2cdb3ef0aeaf263bd2065b8.jpg",
    },
    {
      id: 6,
      title: "Howl's Moving Castle",
      genre: "Fantasy",
      image: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/235295/howlmovingcastle-TicketingPoster_1000x1480_jpg.jpg",
    },
    {
      id: 7,
      title: "Ghost in the Shell",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BYzllNGRjYTctY2Q2MS00M2Y3LWE5ZTktODc5ZmMwODE5OTVlXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 8,
      title: "A Silent Voice",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 9,
      title: "Weathering with You",
      genre: "Romance",
      image: "https://m.media-amazon.com/images/M/MV5BOWQ2MzY5OWMtNDVlMi00NTUyLTljY2QtYzQ4MzkxMjhhMThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 10,
      title: "The Wind Rises",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg",
    },
    {
      id: 11,
      title: "Sword Art Online: Ordinal Scale",
      genre: "Action",
      image: "https://somoskudasai.com/wp-content/uploads/2017/08/Sword-Art-Online-the-Movie-Ordinal-Scale-Visual-03.jpg",
    },
    {
      id: 12,
      title: "Perfect Blue",
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYjkyZjY1OWItNjYyNC00ZjlhLTgwOTAtMGNiYTFmYTNmZDI3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 13,
      title: "My Hero Academia: Two Heroes",
      genre: "Action",
      image: "https://play-lh.googleusercontent.com/2Lm5TS4shfDuyBgbvnpUu3X6YWWMz-2TPkXuDQF3pN7U_bjx9zJU5GjwdaJyhZMedDIYGq-9tIo9SAsklxY",
    },
    {
      id: 14,
      title: "The Secret World of Arrietty",
      genre: "Fantasy",
      image: "https://m.media-amazon.com/images/M/MV5BMTAxNjk3OTYyODReQTJeQWpwZ15BbWU3MDgyODY2OTY@._V1_.jpg",
    },
    {
      id: 15,
      title: "Ponyo",
      genre: "Fantasy",
      image: "https://m.media-amazon.com/images/M/MV5BZDkzMzQ5ZmQtOTA3MC00MjhiLTk5M2UtNzk0MjEzZmVjN2UxXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 16,
      title: "Nausicaä of the Valley of the Wind",
      genre: "Sci-Fi",
      image: "https://images.cdn3.buscalibre.com/fit-in/360x360/8f/a8/8fa8754dcaefe011f0744ae94939b188.jpg",
    },
    {
      id: 17,
      title: "Battle Royale",
      genre: "Action",
      image: "https://www.planetadelibros.com/usuaris/libros/fotos/385/original/portada_battle-royale_jose-c-vales_202309151202.jpg",
    },
    {
      id: 18,
      title: "Cowboy Bebop: The Movie",
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BM2VhZjk2MWMtZjc2OC00YzA4LWI0NzAtZGQ1YjVkOTk5YzVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 19,
      title: "The Girl Who Leapt Through Time",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BNWNjMTVhNDctZjFiNi00MzQwLTgwMDAtM2UxZTBiOTIyMjk4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 20,
      title: "Made in Abyss: Dawn of the Deep Soul",
      genre: "Adventure",
      image: "https://m.media-amazon.com/images/M/MV5BOWU1NTFlN2ItODEyMy00MWQ2LTkwZWMtZWVhN2E3ZDk0OWZkXkEyXkFqcGc@._V1_.jpg",
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar películas según el título o género
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="app-container">
      <Navbar />
      <div id="home">
      <h1 className="app-title">🎬 Movie List</h1>
      </div>
      <div id="about">
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por título o género"
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>

      {/* Lista de películas filtradas */}
      <MovieList movies={filteredMovies} />

      <div id="contact">
      <Footer />
      </div>
    </div>
  );
};

export default App;