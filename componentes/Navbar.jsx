import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <h2>Carlos Andres Garzon Guerrero</h2>
            </div>
            <div className="nav-right">
                <a href="https://twitter.com/carlos020rx" target="_blank" rel="noopener noreferrer">@carlos020rx</a>
                {/* Puedes añadir más enlaces a redes sociales si lo necesitas */}
            </div>
        </nav>
    )
}
