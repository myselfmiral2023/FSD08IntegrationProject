// models/like.js
import { sql } from "../config/db.js";

// constructor
const Like = function (like) {
    this.my_row_id = like.my_row_id;
    this.userid = like.userid;
    this.songid = like.songid;
    this.likedAtDatetime = like.likedAtDatetime;
};

Like.createLike = (newLike, result) => {
    const q = "INSERT INTO `like` SET ?";
    sql.query(q, newLike, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Like.updateLikeById = (likeId, updatedLike, result) => {
    const q = "UPDATE `like` SET ? WHERE my_row_id = ?";
    sql.query(q, [updatedLike, likeId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Like.getAllLikes = (result) => {
    const q = "SELECT * FROM `like`";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Like.deleteLike = (likeId, result) => {
    const q = "DELETE FROM `like` WHERE my_row_id = ?";
    sql.query(q, likeId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

export {Like};
