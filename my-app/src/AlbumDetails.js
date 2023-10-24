import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumDetails() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((response) => response.json())
      .then((data) => setAlbum(data))
      .catch((error) => {
        console.error("Помилка при отриманні інформації про альбом:", error);
      });

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fotos from Album "{album.title}"</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumDetails;
