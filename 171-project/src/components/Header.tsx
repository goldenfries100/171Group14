import React from 'react';

function Header() {
    const headingStyle: React.CSSProperties = {
        padding: '10px',
        fontFamily: 'Display',
        textAlign: 'center',
        color: 'blue'
    };
    
    return <h1 style={headingStyle}>Mutli-Image Classification Analysis</h1>;
};

export default Header;
