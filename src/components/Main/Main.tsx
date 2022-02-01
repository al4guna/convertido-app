import React from 'react';
import {
    BrowserRouter,
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { MainCSS } from './styled';

type Props = {
    children: React.ReactNode
}

const Main = (props: Props): JSX.Element => {
    const { children } = props;

    return(
        <MainCSS>
            <BrowserRouter>
                <Header />
                <div>{children}</div>
                <Footer />
            </BrowserRouter>
        </MainCSS>
    )
}

export default Main;
