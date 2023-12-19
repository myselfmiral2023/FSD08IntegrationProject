// models/song.js
import { sql } from "../config/db.js";

// constructor
const Song = function (song) {
    this.id = song.id;
    this.title = song.title;
    this.duration = song.duration;
    this.genre = song.genre;
    this.year = song.year;
    this.artistname = song.artistname;
    this.reviewId = song.reviewId;
    this.author = song.author;
    this.likesGrade = song.likesGrade;
    this.albumId = song.albumId;
};

Song.createSong = (newSong, result) => {
    const q = "INSERT INTO song SET ?";
    sql.query(q, newSong, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Song.updateSongById = (songId, updatedSong, result) => {
    const q = "UPDATE song SET ? WHERE id = ?";
    sql.query(q, [updatedSong, songId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Song.getAllSongs = (result) => {
    const q = "SELECT * FROM song";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Song.deleteSong = (songId, result) => {
    const q = "DELETE FROM song WHERE id = ?";
    sql.query(q, songId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Song.getSongByArtistname = (artistname, result) => {
    const q = "SELECT * FROM song WHERE artistname = ?";
    sql.query(q, artistname, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Song.getSongByAuthor = (author, result) => {
    const q = "SELECT * FROM song WHERE author = ?";
    sql.query(q, author, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Song.getSongByAlbumId = (albumId, result) => {
    const q = "SELECT * FROM song WHERE albumId = ?";
    sql.query(q, albumId, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Song.getSongByYear = (year, result) => {
    const q = "SELECT * FROM song WHERE year = ?";
    sql.query(q, year, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Song.getSongByGenre = (genre, result) => {
    const q = "SELECT * FROM song WHERE genre = ?";
    sql.query(q, genre, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

export { Song};
