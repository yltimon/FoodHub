const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Import Google Generative AI library
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
require('dotenv').config();
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

// API key for accessing Google Gemini API
const apiKey = process.env.API_KEY;
console.log('API Key:', process.env.API_KEY); // Log to verify the key is being loaded


// My-recipe-innovator fine-tuned model ID
const MODEL_ID = 'tunedModels/my-recipe-innovator-l3h8vmeys64o'; // Update to your model ID

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(apiKey);

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define the POST route for generating content from the Gemini AI
app.post('/api/generate', async (req, res) => {
  if (req.method === 'POST') {
    const userMessage = req.body.message; // Get the user message from the request body

    console.log(req.body);

    try {
      // Get the generative model using the fine-tuned model ID
      const model = genAI.getGenerativeModel({ model: MODEL_ID });
      const result = await model.generateContent(userMessage);

      // Log the full result for debugging
      console.log('Full API result:', JSON.stringify(result, null, 2));

      // Ensure that response and candidates array exist and have at least one item
      if (result.response && result.response.candidates && result.response.candidates.length > 0) {
        const responseText = result.response.candidates[0].content.parts[0].text; // Extract the text from the API response
        console.log('Extracted response text:', responseText); // Log the extracted text

        res.status(200).json({ reply: responseText }); // Send the extracted text as the response
      } else {
        // Handle case where candidates are missing or empty
        console.error('No candidates found in the API response.');
        res.status(500).json({ error: 'No valid response from the model' });
      }
    } catch (error) {
      console.error('Error processing the AI response:', error);
      res.status(500).json({ error: 'Failed to process the AI response' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
