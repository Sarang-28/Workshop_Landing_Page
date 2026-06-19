#  AI & Robotics Summer Workshop Landing Page

A responsive full-stack workshop registration platform built using **React.js**, **Vite**, **Express.js**, and **MongoDB**.

This project was developed as part of a workshop landing page assignment for an AI & Robotics Summer Workshop. The platform allows users to explore workshop details, learning outcomes, FAQs, and register through an enquiry form connected to a backend API.

##  Live Demo

**Frontend (Vercel):**

https://workshop-landing-page-sigma.vercel.app

**Backend API (Render):**

https://workshop-landing-page1.onrender.com



## Workshop Information

| Detail     | Value                         |
| ---------- | ----------------------------- |
| Workshop   | AI & Robotics Summer Workshop |
| Age Group  | 8–14 Years                    |
| Duration   | 4 Weeks                       |
| Mode       | Online                        |
| Fee        | ₹2,999                        |
| Start Date | 15 July 2026                  |

---

##  Features

### Frontend

* Responsive and mobile-friendly design
* Modern hero section with CTA
* Workshop details section
* Learning outcomes section
* Interactive FAQ accordion
* Registration form
* Client-side form validation
* Loading states and user feedback
* Smooth scrolling navigation

### Backend

* REST API using Express.js
* Registration endpoint (`POST /api/enquiry`)
* Request validation
* CORS enabled
* MongoDB integration (optional/implemented)

---

##  Tech Stack

### Frontend

* React.js
* Vite
* CSS3
* React Hooks

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

##  Project Structure

```text
Workshop_Landing_Page
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
├── server
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── screenshots
│   ├── home.png
│   ├── details.png
│   ├── faq.png
│   └── register.png
│
├── .gitignore
└── README.md
```

---

##  Installation & Setup



### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd server

npm install

node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

##  API Endpoint

### Register Enquiry

```http
POST /api/enquiry
```

### Request Body

```json
{
  "name": "Sarang",
  "email": "Saru@example.com",
  "phone": "9876543210"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Registration successful"
}
```

### Error Response

```json
{
  "success": false,
  "message": "All fields are required"
}
```

---

##  Screenshots

### Hero Section

![Hero Section](screenshots/home.png)

### Workshop Details

![Workshop Details](screenshots/details.png)

### FAQ Section

![FAQ Section](screenshots/faq.png)

### Registration Form

![Registration Form](screenshots/register.png)

---

## Future Improvements

* Email notifications after registration
* Admin dashboard
* Workshop scheduling system
* Payment gateway integration
* Certificate generation
* Authentication and authorizati
