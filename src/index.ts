import express, { Request, Response } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
