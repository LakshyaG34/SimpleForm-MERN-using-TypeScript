import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./demo.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/signup", {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log("signup successful", res.data);
      // alert("User added successfuly");
      navigate("/signin");
    } catch (err: any) {
      console.log("signup failed", err.message);
    }
  };
  return (
    <div className="form-header">
      <div className="form-hero">
        <form className="form-data" onSubmit={handleSubmit}>
          <input
            placeholder="Enter your Name"
            className="form-item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter your email"
            className="form-item"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your Password"
            className="form-item"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            className="form-item"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="form-item">
            SUBMIT
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
