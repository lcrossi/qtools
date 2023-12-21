import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Error404() {
    return(
        <div>
            <h2>ERROR 404 - Page not found</h2>
            <Link to='/qtools'>
                <button>Return to Q-Tools</button>
            </Link>
        </div>
    )
}