const express = require("express");
const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const { OpenAI } = require("openai");

// Load environment variables
// dotenv.config();

// Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// Initialize Express app
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the serverless function!");
  });

// Middleware
app.use(bodyParser.json());


// app.post("/generate", async (req, res) => {
//   const { prompt, max_tokens } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ error: "Prompt is required" });
//   }

//   try {
    
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//       max_tokens: max_tokens || 100,
//     });

//     // Extract response text
//     const responseText = response.choices[0].message.content;
//     res.json({ response: responseText });
//   } catch (error) {
//     console.error("Error calling OpenAI API:", error.message);
//     res.status(500).json({ error: "An error occurred while generating text" });
//   }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
