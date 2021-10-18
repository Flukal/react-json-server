import React from "react"
import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <nav className="navigation-sub">
      <Link to="/post-form" className="item">Post-Form </Link>
      <Link to="/post-list" className="item">Post-List </Link>
    </nav>
  )
}
 
export default Navbar;