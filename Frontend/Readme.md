# Todo Web App

A full stack todo application built with Node.js, Express, and JWT authentication.

## Features

- User Signup and Signin
- JWT based authentication
- Each user sees only their own todos
- Add todos from the frontend

## Tech Stack

**Frontend**
- HTML, CSS, JavaScript
- Axios

**Backend**
- Node.js
- Express.js
- JSON Web Tokens (JWT)

## Project Structure

```
Todo/
├── index.js          # Backend server
├── package.json
└── Frontend/
    ├── index.html    # Main todo page
    ├── signup.html   # Signup page
    ├── signin.html   # Signin page
    ├── main.js       # Frontend logic
    ├── style.css     # Todo page styles
    └── auth.css      # Auth pages styles
```

## How to Run Locally

1. Clone the repository
```
git clone https://github.com/visheshsharma0100/my-todo-app.git
```

2. Install dependencies
```
npm install
```

3. Start the server
```
node index.js
```

4. Open browser and go to
```
http://localhost:3000
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | /signup | Create new account |
| POST | /signin | Login and get token |
| POST | /notes | Add a new todo |
| GET | /notes | Get all todos of logged in user |