// models/advertisement.js
import { sql } from "../config/db.js";

// constructor
const Advertisement = function (advertisement) {
    this.id = advertisement.id;
    this.userId = advertisement.userId;
    this.mp3 = advertisement.mp3;
    this.timeListenTo = advertisement.timeListenTo;
};

Advertisement.createAdvertisement = (newAdvertisement, result) => {
    const q = "INSERT INTO advertisement SET ?";
    sql.query(q, newAdvertisement, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Advertisement.updateAdvertisementById = (advertisementId, updatedAdvertisement, result) => {
    const q = "UPDATE advertisement SET ? WHERE id = ?";
    sql.query(q, [updatedAdvertisement, advertisementId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Advertisement.getAllAdvertisements = (result) => {
    const q = "SELECT * FROM advertisement";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Advertisement.deleteAdvertisement = (advertisementId, result) => {
    const q = "DELETE FROM advertisement WHERE id = ?";
    sql.query(q, advertisementId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

export { Advertisement };
