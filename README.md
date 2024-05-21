# Voting Application

This is a simple voting application built using Node.js, Express, and MongoDB. The application allows users to create polls, vote on them, and view the results in real-time.

## Features

- **Create Polls:** Users can create new polls with multiple choices.
- **Vote on Polls:** Users can vote on their preferred choice in a poll.
- **View Results:** Users can view the results of the polls in real-time.
- **User Authentication:** Secure login and registration system to manage users.
- **Real-time Updates:** Poll results update in real-time using WebSockets.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing polls and user data.
- **Mongoose:** ODM for MongoDB and Node.js.

## Prerequisites

- **Node.js:** v14.x or later
- **MongoDB:** v4.x or later
- **npm:** v6.x or later

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/voting-app.git
   cd voting-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/voting-app
   SESSION_SECRET=your_secret_key
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

   The application will be running on `http://localhost:3000`.

## Usage

1. **Register an account:**
   - Navigate to `http://localhost:3000/register`.
   - Fill in the registration form to create a new user account.

2. **Log in:**
   - Navigate to `http://localhost:3000/login`.
   - Enter your credentials to log in.

3. **Create a new poll:**
   - Once logged in, navigate to `http://localhost:3000/polls/new`.
   - Fill in the poll details and submit to create a new poll.

4. **Vote on a poll:**
   - Navigate to a poll page.
   - Select your preferred choice and submit your vote.

5. **View poll results:**
   - Results will be displayed on the poll page and updated in real-time.



## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries or issues, please contact [rahulkumar69953175@gmail.com].

---

Happy coding!
