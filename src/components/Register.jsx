// import "./Register.css";
// // import { useRef } from "react";
// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import axios from "axios";
// export default function Register() {
//   const [user, setUser] = useState({});
//   const [error, setError] = useState();
//   const Navigate = useNavigate()
//   const API_URL = import.meta.env.VITE_API_URL
//   const handleSubmit = async () => {
//     try {
//       const url = `${API_URL}/api/users/register`;
//       const result = await axios.post(url, user);
//       setError("Data saved successfully");
//       Navigate("/login")
//     } catch (err) {
//       console.log(err);
//       setError("Something went wrong");
//     }
//   };
//   return (
//     <div className="App-Register-Row">
//       <div style={{ backgroundColor: "white" }}>
//         <h2>Registration Form</h2>
//         {error}
//         <p>
//           <input
//             type="text"
//             onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//             placeholder="Enter First Name"
//           />
//         </p>
//         <p>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             onChange={(e) => setUser({ ...user, lastName: e.target.value })}
//           />
//         </p>
//         <p>
//           <input
//             type="text"
//             placeholder="Enter Email Address"
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </p>
//         <p>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//         </p>
//         <p>
//           <button onClick={handleSubmit}>Submit</button>
//         </p>
//         <hr />
//       <Link to="/login">Already a member? Login Here...</Link>
//       </div>
//     </div>
//   );
// }

// export default function Register() {
//   const firstName = useRef();
//   const lastName = useRef();
//   const email = useRef();
//   const password = useRef();
//   const handleSubmit = () => {
//     const user = {
//       firstName: firstName.current.value,
//       lastName: lastName.current.value,
//       email: email.current.value,
//       password: password.current.value,
//     };
//     console.log(user);
//   };
//   return (
//     <div className="App-Register-Row">
//       <div style={{ backgroundColor: "white" }}>
//         <h2>Registration Form</h2>
//         <p>
//           <input type="text" placeholder="Enter First Name" ref={firstName} />
//         </p>
//         <p>
//           <input type="text" placeholder="Enter Last Name" ref={lastName} />
//         </p>
//         <p>
//           <input type="text" placeholder="Enter Email Address" ref={email} />
//         </p>
//         <p>
//           <input type="password" placeholder="Enter Password" ref={password} />
//         </p>
//         <p>
//           <button onClick={handleSubmit}>Submit</button>
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import "./Login.css"; // Reuse same CSS as Login

export default function Register() {
  const { user, setUser } = useContext(AppContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/register`;
      const result = await axios.post(url, user);
      setUser(result.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Signup</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleSubmit}>Create Account</button>
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}
