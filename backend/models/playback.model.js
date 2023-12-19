// models/playback.js
import { sql } from "../config/db.js";

// constructor
const Playback = function (playback) {
    this.id = playback.id;
    this.userId = playback.userId;
    this.songId = playback.songId;
    this.timeplayed = playback.timeplayed;
};

Playback.createPlayback = (newPlayback, result) => {
    const q = "INSERT INTO playback SET ?";
    sql.query(q, newPlayback, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Playback.updatePlaybackById = (playbackId, updatedPlayback, result) => {
    const q = "UPDATE playback SET ? WHERE id = ?";
    sql.query(q, [updatedPlayback, playbackId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Playback.getAllPlaybacks = (result) => {
    const q = "SELECT * FROM playback";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Playback.deletePlayback = (playbackId, result) => {
    const q = "DELETE FROM playback WHERE id = ?";
    sql.query(q, playbackId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

export {Playback};
