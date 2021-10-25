import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost home", id: 1 },
    { title: "Memory gospel", id: 2 },
    { title: "This wild darkness", id: 3 },
  ]);

  const [age, setAge] = useState(29);

  const addSong = (title) => {
    // ...songs keeps the current songs, and then adds the new one
    setSongs([...songs, { title: title, id: songs.length + 1 }]);
  };

  //   Fires in every re-render if no final array (life cycle method substitute)
  //   Fires every time data pointed in the array (songs) changes
  useEffect(() => {
    console.log("use effect", songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
