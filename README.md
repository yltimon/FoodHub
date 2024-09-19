# Recipe Generator & Meal Planner Chatbot

## Overview

The **Recipe Innovator & Meal Planner Chatbot** is an AI-powered tool designed to assist users in meal planning, recipe creation, and grocery shopping. By leveraging Google Generative AI, the chatbot can generate custom recipes based on ingredients you provide, deliver nutritional information, and automatically compile a shopping list based on the generated recipe. This solution is ideal for anyone looking to simplify their cooking process, optimize meal prep, or find inspiration for using up specific ingredients.

## Why Use This Tool?
Meal planning can be a time-consuming and challenging task, especially for those with dietary restrictions or limited ingredients. People often struggle to find new, exciting recipes or fail to maximize the ingredients they have at home.

The Recipe Innovator & Meal Planner Chatbot is ideal for:

* **Home Cooks** looking to try new, AI-generated recipes with their current ingredients.
* **Dietary Enthusiasts** needing meal plans tailored to specific diets (e.g., keto, vegan, gluten-free).
* **Busy Individuals** who want to simplify meal planning and preparation.
* **Food Bloggers** interested in generating new and unique recipe ideas.

No more wondering what to cook with random ingredients. The app provides quick suggestions tailored to what you have.


### How it Works

This application leverages a powerful large-language model to interpret user inputs and generate creative and relevant recipes. Here’s how it functions:

1. **Ingredient Input**: Users input the ingredients they have available, and the tool generates recipe options that incorporate these ingredients.
2. **Meal Plan Generator**: The app can generate weekly or a desired timeframe meal plans based on user preferences (e.g., vegetarian, high-protein) and nutritional needs.
3. **Shopping List Creation**: The tool provides users with a grocery list for missing ingredients from the generated recipes.
4. **Nutritional Advice**: Nutritional information for each recipe is provided to help users make informed decisions about their meals.
5. **Chat Interface**: The chatbot-like interface allows users to interact naturally, asking for recipes, cooking tips, or nutritional advice directly.


---

## Video Demo

Check out the video demo to see the Chatbot in action:

[Watch Demo](https://youtu.be/iNA1rglV2Pw)


## Installation and Usage Guide

### Prerequisites

* **Node.js** (v14+)
* **npm** (package managers)
* **Google Gemini API** for the Google's Gemini Pro aAI model integration
* **React** (frontend framework)
* **Tailwind CSS** (for styling)

### Steps to Build and Run the Application

1. **Clone the Repository**:

```
git clone https://github.com/yltimon/FoodHub
cd FoodHub
```

2. **Start the Backend Server** in the server directory:

```
cd server
npm install
```

Then:

```
node server.js
```

3. **Start the Frontend** in the client directory:

```
cd client
npm install
```

Then:

```
npm start
```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

From here,navigate to CHATBOT on the navigation bar. You can interact with the chatbot by inputting ingredients or asking for a recipe, and the AI will generate tailored suggestions.


### Note:

You may have noticed the availability of the `.env` file in the server directory. This is because the application is using a fine-tuned **Gemini 1.5 Pro** model with exclusive access to a single API. Therefore, the use of my API key is required. 🤫
