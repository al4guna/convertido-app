import React from 'react';

type Props = {
    children: React.ReactNode
}

const Main = (props: Props): JSX.Element => {
    const { children } = props;

    return(
        <main>
            <header>Header</header>
            <div>{children}</div>
            <footer>Footer</footer>
        </main>
    )
}

export default Main;
