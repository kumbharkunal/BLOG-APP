# 📝 Blog App

A basic blog application built using **React**, **React Router**, **Supabase**, and **Tailwind CSS**, fulfilling all the core and optional features. Users can sign up or log in, view all blog posts, and create new posts when logged in.

---

## 🚀 Live Demo

🔗 [View the Live App](https://kunalsblog.netlify.app)

## 📂 GitHub Repository

🔗 [View on GitHub](https://github.com/kumbharkunal/BLOG-APP)

---

## 🧩 Features

- 🏠 **Home Page**  
  View a list of all blog posts. A "Create New Post" button appears when the user is logged in.

- 🔐 **Login Page**  
  Sign up or log in using **Supabase Auth**.

- ✍️ **New Post Page**  
  Authenticated users can create new blog posts (title + content).

- ✍️ **Post Page**  
  Detailed post

---

## 🌟 Bonus Features

✅ Show author’s email under each post  
✅ Logout button  
✅ Loading indicators for async operations  
✅ Form validation (title and content are required)  
✅ Fully responsive UI (Tailwind CSS)

---

## 🛠️ Tech Stack

- React  
- React Router  
- Supabase (Auth + Database)  
- Tailwind CSS  

---

## 📷 Screenshots

### Home Page
![Home Page](./screenshots/Homepage.png)

### Login Page
![Login Page](./screenshots/Signinpage.png)

### Create Post Page
![New Post Page](./screenshots/Newpostpage.png)

### Detailed Post Page
![New Post Page](./screenshots/Postpage.png)


---

## 🧾 Supabase Setup

- **Posts Table**:
  - `id`: UUID
  - `title`: text
  - `content`: text
  - `created_at`: timestamp
  - `author_email`: text 

- **Authentication**: Supabase Auth

---

## 📌 Deployment

The app is deployed and accessible at the live link above. Hosted using **Netlify**.

---


