import React, { Children } from "react";

const Main = ({ children }) => {
    return (
        <main id="main" role="main">
            {children}
        </main>
    )
}

export default Main;