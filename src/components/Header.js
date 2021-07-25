import React from 'react'
import "./CSS/Header.css"

function Header() {
    return (
        <div>
            <div className="navbar">
                <div className="top-navbar">
                    <div>
                        <h3 style={{ marginLeft: 100, color: "white", fontSize: 30 }}>DEMO Streaming</h3>
                    </div>
                    <div className="right-header">
                        <h4>Log In</h4>
                        <h4 className="header-btn">Start your free trial</h4>
                    </div>
                </div>
                <div className="bottom-navbar">
                    <h3>Popular titles</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Header
