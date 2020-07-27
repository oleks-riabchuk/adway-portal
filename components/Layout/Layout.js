import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <main className="layout">
            <Sidebar />
            {children}
        </main>
    )
}

export default Layout;