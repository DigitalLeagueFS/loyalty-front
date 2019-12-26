import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../components/form/Button';

const LayoutWrapper = styled.div`
    border: 1px solid grey;
    padding: 15px;
    background-color: red;
`


export function Layout({children}){

    return(
        <LayoutWrapper>
            <Button text={'LogOut'}/>
            <Button text={'Primary'} primary={true}/>
            <Button text={'LogIn'} outline={true}/>
            {children}
        </LayoutWrapper>
    )
}
