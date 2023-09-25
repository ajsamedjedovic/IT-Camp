import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import BlogPost from "../components/5/BlogPost.jsx";
// import "./App.css";
import Avatar from "./Avatar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  //   <BlogPost />
  // </React.StrictMode>
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <Avatar />
    <Avatar />
    <Avatar />
    <Avatar />
    <Avatar />
    <Avatar />
  </div>
);
