# 📸 Instagram Clone (MERN Stack)

A full-stack social media application inspired by Instagram, built using the MERN stack.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 📝 Create Posts
- ❤️ Like / Unlike Posts
- 🖼️ Image Upload (Cloudinary)
- 📰 Feed (View all posts)
- 👤 User-based interactions

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT (JSON Web Token)  
- **Image Upload:** Cloudinary  

---

## 📁 Project Structure
instagram-clone/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── package.json
│
└── README.md


---

## ⚙️ Setup Instructions

### 🔧 1. Clone the Repository


git clone https://github.com/YOUR_USERNAME/instagram-clone.git
cd instagram-clone

🔧 2. Setup Backend
cd backend
npm install

👉 Create a .env file inside backend/
MONGO_URI=your_mongodb_connection_string

🔧 3. Run Backend
npx nodemon server.js
👉 Server runs at:
http://localhost:5000

🔧 4. Setup Frontend
cd ../frontendnpm install

🔧 5. Run Frontend
npm run dev
👉 App runs at:
http://localhost:5173

☁️ Cloudinary Setup (Image Upload)


Create an account on Cloudinary


Go to Settings → Upload


Create an Upload Preset


Set Signing Mode → Unsigned




Copy:


Cloud Name


Upload Preset Name





👉 Update in CreatePost.jsx
formData.append("upload_preset", "YOUR_PRESET_NAME");https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload

🔐 Authentication Flow


User logs in → receives JWT token


Token stored in localStorage


Used for:


Creating posts


Liking posts





🧪 API Endpoints
ActionEndpointRegister User/api/auth/registerLogin/api/auth/loginCreate Post/api/postsLike Post/api/posts/:id/like

❗ Important Notes


.env is ignored using .gitignore


Never expose:


MongoDB URI


API keys


JWT secrets





🚀 Future Improvements


👤 User Profile Page


💬 Comments System


🔁 Follow / Unfollow


🎨 UI with Tailwind CSS


🔐 Full route protection



👨‍💻 Author
Animesh Kerketta

⭐ Support
If you like this project, give it a ⭐ on GitHub!
---# 🔥 What I improved- Clean headings  - Proper markdown formatting  - Code blocks fixed  - Table for APIs  - Professional structure  ---If you want next level:👉 I can add **screenshots + badges + deployment links** (that’s what makes it look recruiter-level)
