import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {BiBowlRice} from 'react-icons/bi'
import {TbPlusMinus} from 'react-icons/tb'
import {FaBook} from 'react-icons/fa'   
import {GiHamburgerMenu} from 'react-icons/gi'   

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <div className={styles.menu__title__bar}>Menu Bar</div> 
            </div>
            <Link to='/' className={styles.menu}>
                <BiBowlRice className={styles.icon}/>
                <div className={styles.menu__title}>Fridge</div>
            </Link>
            <Link to='/addDelete' className={styles.menu}>
                <TbPlusMinus className={styles.icon}/>
                <div className={styles.menu__title}>Add/Delete</div>
            </Link>
            <Link to='/showRecipe' className={styles.menu}>
                <FaBook className={styles.icon}/>
                <div className={styles.menu__title}>Recipe</div>
            </Link>
        </nav>
    );
}

