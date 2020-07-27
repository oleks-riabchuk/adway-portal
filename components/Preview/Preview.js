import React from 'react';

const Preview = ({ title, subtitle, children }) => {
    return (
        <section className="preview">
            {children}
        </section>
    )
}

export default Preview;