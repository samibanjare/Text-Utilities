import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
    // const navigate = useNavigate();
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about" >{props.aboutTxt}</Link>
                {/* <button className="nav-link" href="/" onClick={() => navigate("/about")} >{props.aboutTxt}</button> */}
                </li>
                {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li> */}
                
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={()=>{props.paletteMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-success rounded mx-2" onClick={()=>{props.paletteMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-danger rounded mx-2" onClick={()=>{props.paletteMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={()=>{props.paletteMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2` }>
                <input className="form-check-input" onChange={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?"Switch to Light":"Switch to Dark"}</label>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTxt: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'set title here',
    aboutTxt: 'about'
};