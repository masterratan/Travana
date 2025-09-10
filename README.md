# 🌍 Travana

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)  
[![Express.js](https://img.shields.io/badge/Express.js-Backend-blue?logo=express)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)](https://www.mongodb.com/)  
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-blue?logo=render)](https://project-travana.onrender.com/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange)](#-contributing)  

**Travana** is a full-stack web application for exploring, creating, and managing travel listings.  
It features secure authentication, categories with icons, flash messages, Mapbox integration, and a modern responsive UI.

---

## 🔗 Live Demo
👉 [Travana on Render](https://project-travana.onrender.com/)  

---

## 🚀 Features
- 🔑 **User Authentication** (Signup/Login/Logout with sessions)  
- 📝 **CRUD Listings** (Create, Read, Update, Delete)  
- 🗂️ **Categories with Icons** for better organization  
- 🌍 **Mapbox Integration** to display locations  
- 💾 **MongoDB Integration** with Mongoose  
- ✨ **Flash Messages** for success & error notifications  
- 🎨 **Responsive UI** with EJS templating  

---

## 🛠️ Tech Stack
- **Frontend:** EJS, CSS, Bootstrap/Tailwind  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Templating Engine:** EJS  
- **Other Tools:** Express-Session, Connect-Flash, Method-Override, Mapbox  

---

## 📖 Usage
1. Visit the homepage to explore existing travel listings.  
2. Sign up or log in to create your own account.  
3. Add new listings with title, description, price, and category.  
4. Locations are displayed on an interactive **Mapbox map**.  
5. Browse listings by category or search for specific destinations.  
6. Edit or delete your listings anytime from your dashboard.  

---

## 🔧 Environment Variables
Create a `.env` file in the root of the project with the following keys:  

MONGO_URI=your_mongodb_connection_string  
SECRET=your_session_secret  
MAPBOX_TOKEN=your_mapbox_access_token  
NODE_ENV=development  

⚠️ **Do not share your `.env` file** publicly.  
For deployment on **Render**, add these keys in **Dashboard → Environment → Environment Variables**.  

---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   git clone https://github.com/<your-username>/travana.git  
   cd travana  

2. **Install dependencies**  
   npm install  

3. **Setup environment variables** (see above).  

4. **Run the app**  
   npm start  

The app will be available at **http://localhost:3000**

---

## 📂 Project Structure
travana/  
│── models/          # Mongoose models (User, Listing, Category, etc.)  
│── routes/          # Express routes  
│── views/           # EJS templates  
│── public/          # Static files (CSS, JS, images)  
│── utils/           # Custom error handling, helpers  
│── app.js           # Main application file  
│── package.json     # Dependencies & scripts  

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to fork this repo and submit a pull request.  

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).  

---

## 🌟 Acknowledgements
- Inspired by travel & adventure platforms.  
- Built as a learning project for **Full-Stack Web Development**.  
