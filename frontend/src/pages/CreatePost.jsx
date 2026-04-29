import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handlePost = async () => {
    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "instagram_upload");

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dxazyuocj/image/upload",
        formData
      );

      const imageUrl = uploadRes.data.secure_url;

      // 2. Save post to backend
      await axios.post("/api/posts", {
        userId: localStorage.getItem("userId"),
        caption,
        image: imageUrl
      });

      alert("Post Created");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />

      <input
        placeholder="Caption"
        onChange={(e) => setCaption(e.target.value)}
      />

      <br /><br />

      <button onClick={handlePost}>Post</button>
    </div>
  );
}