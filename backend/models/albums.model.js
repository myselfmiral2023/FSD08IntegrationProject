// models/album.js
import { sql } from "../config/db.js";

// constructor
const Album = function (album) {
    this.id = album.id;
    this.name = album.name;
    this.uploaderId = album.uploaderId;
    this.artistName = album.artistName;
    this.featuredArtist = album.featuredArtist;
    this.createdAt = album.createdAt;
};

Album.createAlbum = (newAlbum, result) => {
    const q = "INSERT INTO albums SET ?";
    sql.query(q, newAlbum, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Album.updateAlbumById = (albumId, updatedAlbum, result) => {
    const q = "UPDATE albums SET ? WHERE id = ?";
    sql.query(q, [updatedAlbum, albumId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Album.getAllAlbums = (result) => {
    const q = "SELECT * FROM albums";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Album.deleteAlbum = (albumId, result) => {
    const q = "DELETE FROM albums WHERE id = ?";
    sql.query(q, albumId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

export { Album };

