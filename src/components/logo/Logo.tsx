import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
    return(
        <div className={styles.logo}>
            <Link to='/'>Code Steez</Link>
        </div>
    )
}

export default Logo