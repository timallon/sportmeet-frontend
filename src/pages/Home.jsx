import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/signup">SIGN UP</Link>
      <Link to="/login">LOGIN</Link>
    </div>
  );
}

export default Home;
