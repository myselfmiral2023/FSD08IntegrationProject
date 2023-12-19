// models/playlistsong.js
import { sql } from "../config/db.js";

// constructor
const Playlistsong = function (playlistsong) {
    this.my_row_id = playlistsong.my_row_id;
    this.songId = playlistsong.songId;
    this.playlistId = playlistsong.playlistId;
};

Playlistsong.createPlaylistsong = (newPlaylistSong, result) => {
    const q = "INSERT INTO playlist_song SET ?";
    sql.query(q, newPlaylistSong, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Playlistsong.updatePlaylistsongById = (playlistsongId, updatedPlaylistSong, result) => {
    const q = "UPDATE playlist_song SET ? WHERE my_row_id = ?";
    sql.query(q, [updatedPlaylistSong, playlistsongId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Playlistsong.getAllPlaylistsongs = (result) => {
    const q = "SELECT * FROM playlist_song";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Playlistsong.deletePlaylistsong = (playlistsongId, result) => {
    const q = "DELETE FROM playlist_song WHERE my_row_id = ?";
    sql.query(q, playlistsongId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

export {Playlistsong};
