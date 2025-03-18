import { useState } from 'react'
import './MenuLateral.css'

function MenuLateral() {
    useState
    return (
        <section id="menu-explorator">
            <div className="content-menu">
                <div className="head-menu">
                    <input type="file" name="new-document" id="new-document" onchange="handleFile(this.files)"/>
                    <button id="new-document">+</button>
                </div>
                <div id="arquivo-container">
                </div>
            </div>
            <div id="delimitador"></div>
        </section>
    )
}

export default MenuLateral