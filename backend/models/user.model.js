// models/user.js
import { sql } from "../config/db.js";
import bcrypt from "bcryptjs";

// constructor
const User = function (user) {
    this.id = user.id;
    this.email = user.email;
    this.passwordhash = user.passwordhash;
    this.username = user.username;
    this.role = user.role;
    this.address = user.address;
    this.subscribed = user.subscribed;
    this.isActive = user.isActive;
    this.songsSinceAd = user.songsSinceAd;
};

  User.findByEmail = (email, result) => {
    const q = "SELECT * FROM user WHERE email = ?";
    sql.query(q, [email], (err, data) => {
      if (err) return result(err);
      result(null, data[0] || null);
    });
  }

  User.findById = (id, result) => {
    const q = "SELECT * FROM user WHERE id = ?";
    sql.query(q, [id], (err, data) => {
      if (err) return result(err);
      result(null, data[0]);
    });
  }

 User.createUser = (user, result) => {
  console.log("Start User Model creation-----------");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.passwordhash, salt);

    //const q = "INSERT INTO users (`email`, `password`) VALUES (?)";
    const q = "INSERT INTO user SET ?";
    //const values = [user.email, hash];
    user.passwordhash = hash;

    sql.query(q, user, (err) => {
      if (err) return result(err);
      result(null);
    });
  }

//   User.getAll = (users, result) => {
//     try {
//       const query = "SELECT * FROM users";
//       sql.query(q, (err, data) => {
//         if(err) return result(err)
//       })
//     } catch (error) {
      
//     }
//   }


export default User;
