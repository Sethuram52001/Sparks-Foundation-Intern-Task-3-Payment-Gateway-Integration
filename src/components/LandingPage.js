import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>LandingPage</h1>
            <Link to="/donate">Donate</Link>
        </div>
     );
}
 
export default LandingPage;