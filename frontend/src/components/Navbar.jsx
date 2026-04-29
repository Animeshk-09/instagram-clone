import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
      background: "#fff"
    }}>
      
      {/* Instagram Logo */}
      <h2 style={{
        fontWeight: "bold",
        color: "#000",
        fontFamily: "cursive"
      }}>
        Instagram
      </h2>

      {/* Links */}
      <div>
        <Link to="/feed" style={{ marginRight: "15px", color: "#000" }}>
          Home
        </Link>
        <Link to="/create" style={{ color: "#000" }}>
          Create
        </Link>
      </div>
    </div>
  );
}