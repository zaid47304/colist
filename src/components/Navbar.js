import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let history=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
     history("/login");
  }
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Colist</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {
        !localStorage.getItem('token')?` `:
        <Link className="nav-link active" aria-current="page" to="/mycontest">My Contests</Link>
      }
      </ul>
      {
        !localStorage.getItem('token')?<form className="d-flex">
        <Link className="btn btn-primary mx-2" to="/login"  role="button">Login</Link>
        <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign up</Link>
        </form>:
        <button className="btn btn-primary mx-2" onClick={handleLogout} role="button">Logout</button>
      }
    </div>
  </div>
</nav>;
};

export default Navbar;
