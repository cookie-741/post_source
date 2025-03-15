# Post Search Application

## Overview
This project is a React-based front-end application designed to fetch and display a list of posts from an external API. It provides a search functionality where users can filter posts by their title and body. The application also features a clean and user-friendly UI, using Tailwind CSS for styling and Lucide icons for visual elements.

## Features
-Search Functionality: Allows users to search through posts by title or body.
-Preview Search: Displays a list of search suggestions while typing, categorized by title and body.
-Error Handling: Gracefully handles loading states and errors from the API request.
-User-Friendly UI: The interface is clean, responsive, and intuitive, with Lucide icons integrated.
-Responsive Design: Adapts to various screen sizes, ensuring usability on desktop, tablet, and mobile devices.

## Technologies Used
-React: JavaScript library for building user interfaces.
-Tailwind CSS: Utility-first CSS framework for designing responsive layouts.
-Lucide Icons: A collection of simple, customizable, and accessible icons.
-Axios: For making API calls.
-React Hooks: Used for managing state and side effects in functional components.
Setup Instructions

### 1. Clone the Repository
git clone https://github.com/cookie-741/post_source.git
cd post-search-app

### 2. Install Dependencies
To install all the required dependencies, run:
npm install

### 3. Start the Development Server
Run the following command to start the app in development mode:
npm run dev
This will open the app in your browser at http://localhost:3000.

## Project Structure

post-search-app/
│
├── public/
│   └── 
│
├── src/
│   ├── components/
│   │   ├── PostCard.jsx     # Component for rendering individual posts
│   │   ├── PostList.jsx     # Component for rendering the list of posts
│   │   └── SearchBar.jsx    # Search input with preview functionality
├── pages/
│   │   ├── PostsOverviewPage.jsx     # Page of overview posts
│   │
│   ├── services/
│   │   └── api.js           # API call function to fetch posts
│   │
│   ├── App.jsx              # Main App component where the structure is defined
│   └── main.jsx             # Entry point of the app
│
├── tailwind.config.js       # Tailwind CSS configuration file
├── package.json             # NPM package file
└── README.md                # This file


## Detailed Explanation of Components

### 1. PostList.jsx
This component is responsible for displaying the list of posts. It includes the logic for:

Fetching the posts from the external API using the getPosts function.
Displaying the posts, including their title and body.
Handling the search functionality by filtering posts based on the search term.
Displaying a loading indicator and error message when necessary.

### 2. PostCard.jsx
This component represents an individual post. It is used in the PostList.jsx to render the details of each post such as the title and body.

### 3. SearchBox.jsx
The search box component:
Takes user input and dynamically filters the list of posts by both title and body.
Shows a preview of matching results (both title and body) as the user types.
Allows the user to click on a preview, which will populate the search box with the selected title.

### 4. api.js
The getPosts function fetches the first 10 posts from the external API (JSONPlaceholder).
