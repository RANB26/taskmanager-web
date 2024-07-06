import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(){

    const UsuSession = JSON.parse(localStorage.getItem("session"))
    
    const cerrarSession = () => {
        //localStorage.clear();
        localStorage.removeItem("session");
    };

    return(
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to="/tareas">TaskManager</Link></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className="nav-link scrollto" to="/tareas">Tareas</Link></li>
                        <li><Link className="scrollto">{UsuSession.nombre}</Link></li>
                        <li><Link className="getstarted scrollto" to="/" onClick={cerrarSession} >Cerrar sesión</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}