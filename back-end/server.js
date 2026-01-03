import express from "express";
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("root called");
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`server running on port-=>> ${port}`);
});
