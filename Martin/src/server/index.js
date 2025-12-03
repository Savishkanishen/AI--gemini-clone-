import express from "express";
import cors from "cors";
import runChat from "./gemini.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const reply = await runChat(prompt);
  res.json({ reply });
});

app.listen(5000, () => console.log("Server running on port 5000"));
