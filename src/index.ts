import express, { Request, Response } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import post_router from "./Routes/Post";

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.use(post_router);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
