import React, { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

function AlbumList() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => setUserName(userData.name))
      .catch((error) => {
        console.error("Помилка при отриманні імені користувача:", error);
      });

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Альбоми користувача {userName}</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/users/${userId}/albums/${album.id}`}>
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default AlbumList;
