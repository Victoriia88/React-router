import React, { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error(
          "Помилка при отриманні інформації про користувача:",
          error
        );
      });
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const showAlbums = () => {
    navigate(`/users/${userId}/albums`);
  };

  return (
    <div>
      <h1>Деталі користувача {userData.name}</h1>
      <p>Ім'я: {userData.name}</p>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>
        Address: {userData.address.street}, {userData.address.suite},{" "}
        {userData.address.city}, {userData.address.zipcode}
      </p>
      <button onClick={showAlbums}>Показати альбоми</button>
      <Outlet />
    </div>
  );
}

export default UserDetails;
