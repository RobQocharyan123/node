import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Node This is my first project! Which one are you deploy!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
