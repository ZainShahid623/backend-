import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.logotitle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active btn btn-danger text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active btn btn-danger text-white" aria-current="page" to="/api">Api</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link active btn btn-danger text-white" aria-current="page" to="/usestatePractice">Ustate</Link>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link className="btn btn-outline-success" to="/search" type="submit">Search</Link>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar

