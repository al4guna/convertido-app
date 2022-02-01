import React, { useMemo } from 'react';
import { IHeaderDesktop } from "./typings";
import {HeaderDesktopCSS, ListCSS, LinkCSS} from './styled';

const HeaderDesktop = (props: IHeaderDesktop) => {
    const { categories } = props;

    const items = useMemo(() => {
        return(
            categories.map((cat) => {
                return (
                    <li key={cat.id}>
                        <LinkCSS to={`/?urlKey=${cat.urlKey}`}>
                            {cat.name}
                        </LinkCSS>
                    </li>
                )
            })
        )
    }, [categories])

    return(
        <HeaderDesktopCSS>
            <ListCSS>
                {items}
            </ListCSS>
        </HeaderDesktopCSS>
    )
}

export default HeaderDesktop;
