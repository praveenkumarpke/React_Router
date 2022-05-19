import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Detailspage from './Detailspage.jsx';
import Error from './Error.jsx';
import Homepage from './Homepage';

 const Router = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Homepage</Link>
                    </li>
                    <li>
                        <Link to='detailspage'>Detailspage</Link>
                    </li>
                    <li>
                        <Link to='*'>Error</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Router