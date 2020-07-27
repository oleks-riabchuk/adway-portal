import React from 'react';

import { CalendarButton } from '../Buttons/Buttons';

const Main = ({ children }) => {
    return (
        <section className="main">
            {children}
        </section>
    )
}

export default Main;