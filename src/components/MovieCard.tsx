import React from "react"; // Importa React
import Swal from "sweetalert2"; // Importa SweetAlert2
import { Movie } from "../types/Movie"; // Importa la interfaz Movie

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Usamos directamente la URL de la imagen desde movie.image
  const imageSrc = movie.image;

  const showDetails = () => {
    // Muestra el modal con la imagen inicial de tamaño pequeño
    Swal.fire({
      title: movie.title,
      text: `Genre: ${movie.genre}`,
      imageUrl: imageSrc, // Usamos la imagen en SweetAlert2
      imageWidth: 300,
      imageAlt: `${movie.title} Poster`,
      confirmButtonText: "Cool!",
      didOpen: () => {
        // Añadimos el evento de clic a la imagen que ya está dentro del modal
        const imageElement = document.querySelector('.swal2-image') as HTMLImageElement;
        
        imageElement?.addEventListener('click', () => {
          // Al hacer clic, cambiamos el tamaño de la imagen a 600px
          if (imageElement.style.width === '600px') {
            imageElement.style.width = '300px'; // Si ya está grande, la reducimos
          } else {
            imageElement.style.width = '600px'; // Si está pequeña, la hacemos grande
          }
        });
      },
    });
  };

  return (
    <div className="movie-card" onClick={showDetails}>
      <img src={imageSrc} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
