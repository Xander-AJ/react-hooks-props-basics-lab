import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Import user data

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass name and city as props to Home component */}
      <Home name={user.name} city={user.city} />
      {/* Pass bio, github, and linkedin as props to About component */}
      <About
        bio={user.bio}
        github={user.github}
        linkedin={user.linkedin}
      />
    </div>
  );
}

export default App;