# Posts Fetcher

A simple React application that fetches posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) API and displays them in a list with a loading state and error handling. It uses **Axios** for making API requests and **Tailwind CSS** for styling the UI. The search box allows you to filter the posts.

## Features

- Fetches data from the JSONPlaceholder API
- Displays posts with titles and bodies
- Shows a loading state while fetching data
- Handles errors in case of failed API requests
- Search box to filter posts based on titles

## Setup Instructions

Follow these steps to get the project up and running:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/posts-fetcher.git
cd posts-fetcher

2. Install dependencies
Install the required dependencies using npm:

bash
Copy
Edit
npm install
3. Create an .env file
Create a .env file at the root of the project to define the API URL:

bash
Copy
Edit
REACT_APP_API_URL=https://jsonplaceholder.typicode.com/posts
4. Run the application
After the dependencies are installed, start the development server:

bash
Copy
Edit
npm start
This will run the app at http://localhost:3000/. You can open this URL in your browser to view the application.

Project Structure
bash
Copy
Edit
posts-fetcher/
│
├── src/
│   ├── components/
│   │   ├── PostsList.jsx  # Displays posts in a list
│   │   └── SearchBox.jsx  # Search bar for filtering posts
│   ├── api/
│   │   └── api.js         # API request logic (Axios)
│   ├── App.jsx            # Main app component
│   ├── index.js           # React entry point
│   └── tailwind.config.js # Tailwind CSS configuration
│
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
Approach
Fetching Data:
The data is fetched using Axios from the provided API endpoint (https://jsonplaceholder.typicode.com/posts). The request is made in an asynchronous manner with error handling for failed requests.

Displaying Data:
After fetching the data, it is displayed in a responsive list format using Tailwind CSS for styling. Each post's title and body are shown in separate cards, making it easy for the user to read.

Loading State:
While waiting for the data to load, a loading spinner with the text "⏳ Loading posts..." is shown to let the user know that data is being fetched.

Search Functionality:
A search box allows users to filter posts based on the title. The search box updates the displayed posts dynamically as the user types.

Error Handling:
If the API request fails, an error message is shown, letting the user know that something went wrong.

Tools & Libraries Used:
React: For building the user interface.
Axios: For making HTTP requests to the API.
Tailwind CSS: For styling the UI with utility-first CSS.
Jest + React Testing Library: For writing unit tests for the components.
Run Tests
To run tests for the project, use the following command:

bash
Copy
Edit
npm test
This will execute the tests, including loading and error-handling tests.