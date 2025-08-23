import React, { useState } from "react";
import "./demo.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

interface signInResponse {
  _id?: string;
  name?: string;
  message?: string;
  error?: string;
}

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      // const res = await axios.post("http://localhost:4000/api/login", {
      //     email,
      //     password
      // });

      // navigate("/home");
      // console.log("SignIn successfull", res.data);
      // alert("Signin Succesfull");

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data: signInResponse = await response.json();
      if (response.ok) {
        console.log(data.message);
        alert("Signed in successfully");
        navigate("/home");
      } else {
        console.log("Sign in failed:", data);
        alert(data.message || "Signin failed");
      }
    } catch (err: any) {
      console.log("Error Signing In", err.message);
    }
  };
  return (
    <div className="form-header">
      <div className="form-hero">
        <h2>SIGN IN</h2>
        <form className="form-data" onSubmit={handleSubmit}>
          <input
            placeholder="Enter your email"
            type="text"
            className="form-item"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your password"
            type="password"
            className="form-item"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="form-item">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
