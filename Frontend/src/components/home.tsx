import React from "react";
import "./demo.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = async (): Promise<void> => {
    // e.preventDefault();
    try {
      //   const res = await axios.post(
      //     "http://localhost:4000/api/logout",
      //     {},
      //     {
      //       withCredentials: true,
      //     }
      //   );
      //   console.log(res.data.message);
      //   navigate("/");
      const response = await fetch("http://localhost:4000/api/logout", {
        method: "POST",
        credentials: "include", // important to send cookies
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        alert("Logged out successfully");
        navigate("/");
      } else {
        console.log("Logout failed:", data);
        alert(data.message || "Logout failed");
      }
    } catch (err: any) {
      console.log("Logout Failed", err.message);
    }
  };
  return (
    <div className="form-header">
      <div className="form-hero">
        <button className="form-item" onClick={handleSubmit}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
