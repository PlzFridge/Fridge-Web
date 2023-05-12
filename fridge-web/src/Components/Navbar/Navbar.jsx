import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Fridge</Link>
            <Link to='/addDelete'>Add/Delete</Link>
            <Link to='/showRecipe'>Recipe</Link>
        </nav>
    );
}

