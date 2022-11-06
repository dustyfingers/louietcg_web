import React from 'react';

import 'styles/globals.css';

interface IRootLayout {
    children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayout> = ({ children }: IRootLayout) => {
    return (
        <html>
            <head>
                <title>LouieTcg</title>
            </head>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
