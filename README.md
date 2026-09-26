# 🎵 TuneVault

TuneVault is a **MERN stack music platform** where artists can upload music and users can listen to it. The project provides secure authentication, role-based access, and cloud-based media storage.

## 🚀 Features

* 🔐 JWT-based authentication
* 🔒 Password hashing with bcrypt
* 👥 Role-based access (Artist/User)
* 🎤 Artists can upload music
* 🎧 Users can listen to music
* 📡 RESTful APIs
* ☁️ Media storage using ImageKit
* 🗄️ MongoDB database
* 📤 File uploads using Multer

## 🛠️ Tech Stack

**Frontend:** React.js, Axios, CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Authentication:** JWT, bcrypt
**Storage:** ImageKit
**Tools:** Git, GitHub, Postman

## 🔄 Flow

```text
Artist → Upload Music → Express API → ImageKit
                              ↓
                           MongoDB
                              ↓
User → Browse & Listen ← Music URL
```

## ⚙️ Setup

```bash
git clone <repository-url>
cd TuneVault
npm install
npm run dev
```

Create a `.env` file with:

```env
MONGO_URI=
JWT_SECRET=
IMAGEKIT_PRIVATE_KEY=
```

## 👨‍💻 Author

**Abhay Chaudhary**
MERN | AI/ML | DevOps | Software Development
