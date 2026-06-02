# Lost & Found System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to help users report, manage, and recover lost or found items. The system provides secure user authentication, item reporting, and item management through a responsive dashboard interface.

---

# Features

## Authentication
- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

## Item Management
- Report lost items
- Report found items
- View all reported items
- Search and filter items
- Delete reported items

## Dashboard
- Sidebar navigation
- Report Item page
- View Items page
- Logout functionality

## UI Features
- Responsive design
- Reusable React components
- User-friendly interface

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS / Bootstrap / TailwindCSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication & Security
- JWT (JSON Web Tokens)
- bcryptjs

---

# Project Structure

```bash
LostAndFound/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.js
│
├── server/                  # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── package.json
└── README.md
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/greglie498/LostAndFound.git
cd LostAndFound
```

---

# Backend Setup

## Navigate to server folder

```bash
cd server
```

## Install dependencies

```bash
npm install
```

## Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/lostandfound
JWT_SECRET=mysecretkey
```

## Start backend server

```bash
npm start
```

OR

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Open another terminal

```bash
cd client
```

## Install frontend dependencies

```bash
npm install
```

## Start React application

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

## Item Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| POST | `/api/items` | Report new item |
| GET | `/api/items/:id` | Get item by ID |
| DELETE | `/api/items/:id` | Delete item |


# Future Improvements

- Image upload support
- Email notifications
- Admin dashboard
- Advanced filtering
- Real-time chat support
- Google Maps integration
- Mobile optimization

---

# Learning Outcomes

This project demonstrates:
- MERN stack development
- REST API creation
- MongoDB database integration
- Authentication & authorization
- CRUD operations
- React component architecture
- State management
- Secure backend development

---

# Author

**Elie Greg Banga-Bothy**

GitHub:  
https://github.com/greglie498

---

# License

This project is open-source and available for educational purposes.
