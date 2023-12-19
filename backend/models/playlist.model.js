// models/playlist.js
import { sql } from "../config/db.js";

// constructor
const Playlist = function (playlist) {
    this.id = playlist.id;
    this.title = playlist.title;
    this.userId = playlist.userId;
    this.isPrivate = playlist.isPrivate;
};

Playlist.createPlaylist = (newPlaylist, result) => {
    const q = "INSERT INTO playlist SET ?";
    sql.query(q, newPlaylist, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Playlist.updatePlaylistById = (playlistId, updatedPlaylist, result) => {
    const q = "UPDATE playlist SET ? WHERE id = ?";
    sql.query(q, [updatedPlaylist, playlistId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Playlist.getAllPlaylists = (result) => {
    const q = "SELECT * FROM playlist";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Playlist.deletePlaylist = (playlistId, result) => {
    const q = "DELETE FROM playlist WHERE id = ?";
    sql.query(q, playlistId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

export {Playlist};
