//import dotenv from 'dotenv';
//dotenv.config({ path: '../.env'})
// console.log(process.env.PORT)
// console.log("INDEX env variable test:" + process.env.JWT_KEY)
import bodyParser from 'body-parser'
import cors from 'cors'
import express from "express";
import userRoutes from "./routes/user.js";
import advertisementRoutes from "./routes/advertisement.js";
import albumsRoutes from "./routes/albums.js";
import likeRoutes from "./routes/like.js";
import playbackRoutes from "./routes/playback.js";
import playlistRoutes from "./routes/playlist.js";
import playlistsongRoutes from "./routes/playlistsong.js";
import reviewRoutes from "./routes/review.js";
import songRoutes from "./routes/song.js";

import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(cors({  // important for front end, as you enter new api call methods, add them to the methods 
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST","PUT", "DELETE"], // ad here
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/user", userRoutes);
app.use("/api/advertisement", advertisementRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/like", likeRoutes);
app.use("/api/playback", playbackRoutes);
app.use("/api/playlist", playlistRoutes);
app.use("/api/playlistsong", playlistsongRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/song", songRoutes);


app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
