import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <a className="nav-link active" aria-current="page" href="">Products</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="/">News</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="/">Where to Buy</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="/">Sales Enquiry</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="/">Locations</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
