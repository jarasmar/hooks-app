import React, { useState } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost home", id: 1 },
    { title: "Memory gospel", id: 2 },
    { title: "This wild darkness", id: 3 },
  ]);
  const addSong = (title) => {
    // ...songs keeps the current songs, and then adds the new one
    setSongs([...songs, { title: title, id: songs.length + 1 }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
