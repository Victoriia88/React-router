import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import AlbumList from "./AlbumList";
import AlbumDetails from "./AlbumDetails";
import PhotoList from "./PhotoList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users/:userId" element={<UserDetails />}>
              <Route path="albums" element={<AlbumList />} />
              <Route path="photos" element={<PhotoList />} />
            </Route>
          </Routes>
        </div>
        <div className="main-content">
          <Routes>
            <Route
              path="/users/:userId/albums/:albumId"
              element={<AlbumDetails />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
