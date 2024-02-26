import React from "react";

/**
 * @since 2024.02.25
 * @author 이상민
 */
const Main = (props) => {
    return (
        <main id='main' role="main">
            {props.children}
        </main>
    );
}

export default Main;
